'use client';

import { useEffect, useState } from 'react';
import Loading from './Loading';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnly({ 
  children, 
  fallback = <Loading /> 
}: ClientOnlyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return <>{children}</>;
} 