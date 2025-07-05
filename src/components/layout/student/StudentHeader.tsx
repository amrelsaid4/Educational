'use client';

import { useTranslations } from 'next-intl';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lucide-react';
import { LanguageSwitcher } from '@/components/layout/student/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/layout/student/ThemeSwitcher';
import { Button } from '@/components/ui/Button';

interface StudentHeaderProps {
  onMobileMenuClick: () => void;
}

export function StudentHeader({ onMobileMenuClick }: StudentHeaderProps) {
  const t = useTranslations('Student.Header');

  return (
    <header className="flex items-center justify-between p-4 bg-card border-b h-16 sticky top-0 z-40">
      {/* Left side: Search bar for desktop, Hamburger for mobile */}
      <div className="flex items-center">
        {/* Hamburger Menu for mobile */}
        <Button 
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2"
          onClick={onMobileMenuClick}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Search Bar for desktop */}
        <div className="hidden lg:flex items-center bg-muted rounded-lg px-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="bg-transparent p-2 focus:outline-none text-sm w-64"
          />
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="hidden sm:flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-primary ring-2 ring-card" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
    </header>
  );
} 