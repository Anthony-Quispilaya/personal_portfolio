"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { FaPaperPlane, FaPlus, FaTrash } from 'react-icons/fa';
import Script from 'next/script';

// Add type declaration for dotlottie-player
interface DotLottiePlayer extends HTMLElement {
  src: string;
  style: CSSStyleDeclaration;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
}

// Custom component for dotlottie player
const DotLottiePlayer = ({ src, style }: { src: string; style?: React.CSSProperties }) => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <dotlottie-player
          src="${src}"
          background="transparent"
          speed="1"
          style="${style ? Object.entries(style).map(([key, value]) => `${key}: ${value}`).join(';') : ''}"
          loop
          autoplay
        ></dotlottie-player>
      `
    }} />
  );
};

// Memoized Robot Component
const RobotCharacter = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => {
  const dimensions = {
    small: { container: 'h-32', robot: 'w-32 h-32' },
    medium: { container: 'h-48', robot: 'w-48 h-48' },
    large: { container: 'h-64', robot: 'w-64 h-64' }
  };

  const { container, robot } = dimensions[size];

  return useMemo(() => (
    <div className={`${container} flex items-center justify-center border-b border-white/20 bg-black/50`}>
      <div className={robot}>
        <DotLottiePlayer 
          src="https://lottie.host/3b6fd5f3-8ea4-4ae9-baef-5351e2574261/lx6q5Sxc1z.lottie"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  ), [container, robot]);
};

export default function AIChatbot() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const getCurrentConversation = () => {
    return conversations.find(conv => conv.id === currentConversationId);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [getCurrentConversation()?.messages]);

  // Load conversations from localStorage on component mount
  useEffect(() => {
    const savedConversations = localStorage.getItem('chatbot-conversations');
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations));
    }
  }, []);

  // Save conversations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatbot-conversations', JSON.stringify(conversations));
  }, [conversations]);

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [],
      createdAt: Date.now(),
    };
    setConversations(prev => [...prev, newConversation]);
    setCurrentConversationId(newConversation.id);
  };

  const deleteConversation = (id: string) => {
    setConversations(prev => prev.filter(conv => conv.id !== id));
    if (currentConversationId === id) {
      setCurrentConversationId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !currentConversationId) return;

    const userMessage: Message = { role: 'user', content: input };
    setInput('');
    setIsLoading(true);

    // Update conversation with user message
    setConversations(prev => prev.map(conv => {
      if (conv.id === currentConversationId) {
        // Update title if this is the first message
        const title = conv.messages.length === 0 ? input.slice(0, 30) + '...' : conv.title;
        return {
          ...conv,
          title,
          messages: [...conv.messages, userMessage]
        };
      }
      return conv;
    }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: [...getCurrentConversation()?.messages || [], userMessage] 
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.message };

      // Update conversation with assistant message
      setConversations(prev => prev.map(conv => {
        if (conv.id === currentConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, assistantMessage]
          };
        }
        return conv;
      }));
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      };
      setConversations(prev => prev.map(conv => {
        if (conv.id === currentConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, errorMessage]
          };
        }
        return conv;
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-black">
      {/* Load dotlottie player script */}
      <Script 
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
        type="module"
      />

      {/* Sidebar */}
      <div className="w-64 border-r border-white/20 bg-black p-4 flex flex-col">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white mb-2">Nova</h1>
          <p className="text-white/60 text-sm">Your favorite dad-joke loving AI 🤓</p>
        </div>
        <button
          onClick={createNewConversation}
          className="flex items-center gap-2 px-4 py-2 bg-[#ff2828] text-white rounded-lg hover:bg-[#ff4040] transition-all duration-300 border border-white/20 hover:scale-105 hover:shadow-md hover:shadow-[#ff2828]/20 mb-4"
        >
          <FaPlus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
        
        <div className="flex-1 overflow-y-auto space-y-2">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                currentConversationId === conv.id
                  ? 'bg-white/10 border border-white/20'
                  : 'hover:bg-white/5'
              }`}
              onClick={() => setCurrentConversationId(conv.id)}
            >
              <span className="text-white truncate flex-1">{conv.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteConversation(conv.id);
                }}
                className="p-1 hover:text-[#ff2828] transition-colors"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentConversationId ? (
          <>
            {/* Robot Character - Fixed at top */}
            <div className="relative">
              <RobotCharacter size="small" />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
                Ready to drop some dad jokes! 😎
              </div>
            </div>

            {/* Chat Container */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {getCurrentConversation()?.messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  } animate-fade-in`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-[#ff2828] text-white border border-white/20'
                        : 'bg-white/5 text-white border border-white/20'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-white/5 text-white rounded-lg p-4 border border-white/20">
                    Thinking of a good dad joke... 🤔
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/20 bg-black">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything... I promise to make it punny! 😅"
                  className="flex-1 p-2 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none focus:border-[#ff2828] placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-[#ff2828] text-white rounded-lg hover:bg-[#ff4040] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:scale-105 hover:shadow-md hover:shadow-[#ff2828]/20"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-white/60">
            {/* Robot Character - Centered when no conversation */}
            <RobotCharacter size="medium" />
            <div className="text-center text-gray-300 text-lg">
              Hi! I&apos;m Nova, and I&apos;m not saying I&apos;m Batman... 😎
            </div>
            <p className="mt-4">Start a new conversation and prepare for some dad jokes! 🤓</p>
          </div>
        )}
      </div>
    </div>
  );
} 