'use client';

import { useEffect } from 'react';

interface DocumentWrapperProps {
  children: React.ReactNode;
  locale: string;
  isRTL: boolean;
}

export function DocumentWrapper({ children, locale, isRTL }: DocumentWrapperProps) {
  useEffect(() => {
    // Update document attributes when component mounts or locale changes
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update body className for font
    const bodyClasses = `${isRTL ? 'font-cairo' : 'font-roboto'} antialiased`;
    document.body.className = bodyClasses;
    
    // Cleanup function (optional, in case component unmounts)
    return () => {
      // Reset to default if needed
    };
  }, [locale, isRTL]);

  return <>{children}</>;
} 