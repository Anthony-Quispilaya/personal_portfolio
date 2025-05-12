import React from 'react';

export default function AIChatbotPlayground() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8">AI Chatbot Playground</h1>
      <div className="p-6 rounded-xl border border-white/20 bg-white/5">
        <p className="text-gray-300 mb-4">
          This is where your AI chatbot project will be embedded.
          You can either:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Embed your existing chatbot interface</li>
          <li>Create a simplified demo version</li>
          <li>Link to a live demo of your chatbot</li>
        </ul>
      </div>
    </div>
  );
} 