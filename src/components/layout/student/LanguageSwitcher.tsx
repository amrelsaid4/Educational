'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const currentLocale = pathname.split('/')[1];
    const newLocale = currentLocale === 'ar' ? 'en' : 'ar';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLocale = pathname.split('/')[1];

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="h-9 w-9"
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">
        Switch to {currentLocale === 'ar' ? 'English' : 'Arabic'}
      </span>
    </Button>
  );
} 