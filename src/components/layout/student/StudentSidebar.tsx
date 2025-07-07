'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { 
  HomeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  UserIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export function StudentSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const navItems = [
    { 
      key: 'dashboard', 
      icon: HomeIcon, 
      href: '/student/dashboard' 
    },
    { 
      key: 'courses', 
      icon: BookOpenIcon, 
      href: '/student/courses' 
    },
    { 
      key: 'assignments', 
      icon: DocumentTextIcon, 
      href: '/student/assignments' 
    },
    { 
      key: 'exams', 
      icon: AcademicCapIcon, 
      href: '/student/exams' 
    },
    { 
      key: 'calendar', 
      icon: CalendarIcon, 
      href: '/student/calendar' 
    },
    { 
      key: 'community', 
      icon: UserGroupIcon, 
      href: '/student/community' 
    },
    { 
      key: 'messages', 
      icon: ChatBubbleLeftRightIcon, 
      href: '/student/messages' 
    },
    { 
      key: 'profile', 
      icon: UserIcon, 
      href: '/student/profile' 
    },
    { 
      key: 'settings', 
      icon: Cog6ToothIcon, 
      href: '/student/settings' 
    }
  ];

  const handleNavigation = (href: string) => {
    // Extract current locale from pathname
    const locale = pathname.split('/')[1]; // ar or en
    const fullPath = `/${locale}${href}`;
    
    // Use router.push for faster client-side navigation
    router.push(fullPath);
  };

  const isActive = (href: string) => {
    const currentPath = pathname.split('/').slice(2).join('/'); // Remove locale
    const targetPath = href.substring(1); // Remove leading slash
    return currentPath === targetPath;
  };

  return (
    <div className={`bg-card border-r transition-all duration-300 h-screen flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between h-16">
        {!isCollapsed && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <AcademicCapIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">EduPlatform</span>
          </div>
        )}
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-muted hidden lg:block"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          
          return (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.href)}
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-lg transition-colors ${
                active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium">
                  {t(`Student.Navigation.${item.key}`)}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Info */}
      <div className={`p-4 border-t ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <UserIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">أحمد محمد</p>
            <p className="text-xs text-muted-foreground truncate">طالب</p>
          </div>
        </div>
      </div>
    </div>
  );
} 