'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <GlobeAltIcon className="h-4 w-4" />
      <span className="text-sm font-medium">
        {currentLocale === 'en' ? 'عربي' : 'English'}
      </span>
    </Button>
  );
} 