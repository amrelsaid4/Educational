'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { 
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export function TeacherSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const navItems = [
    { 
      key: 'dashboard', 
      icon: HomeIcon, 
      href: '/teacher/dashboard' 
    },
    { 
      key: 'courses', 
      icon: BookOpenIcon, 
      href: '/teacher/courses' 
    },
    { 
      key: 'students', 
      icon: UserGroupIcon, 
      href: '/teacher/students' 
    },
    { 
      key: 'assignments', 
      icon: DocumentTextIcon, 
      href: '/teacher/assignments' 
    },
    { 
      key: 'exams', 
      icon: AcademicCapIcon, 
      href: '/teacher/exams' 
    },
    { 
      key: 'messages', 
      icon: ChatBubbleLeftRightIcon, 
      href: '/teacher/messages' 
    },
    { 
      key: 'payments', 
      icon: CurrencyDollarIcon, 
      href: '/teacher/payments' 
    },
    { 
      key: 'reports', 
      icon: ChartBarIcon, 
      href: '/teacher/reports' 
    },
    { 
      key: 'settings', 
      icon: Cog6ToothIcon, 
      href: '/teacher/settings' 
    }
  ];

  const getLocale = () => {
    return pathname.split('/')[1];
  };

  const isActive = (href: string) => {
    const currentPath = `/${pathname.split('/').slice(2).join('/')}`;
    return currentPath === href;
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
              <BookOpenIcon className="h-5 w-5 text-primary-foreground" />
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
            <Link
              key={item.key}
              href={`/${getLocale()}${item.href}`}
              prefetch={true}
              className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-lg transition-colors ${
                active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium">
                  {t(`Teacher.Navigation.${item.key}`)}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className={`p-4 border-t ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <UserGroupIcon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">د. سارة أحمد</p>
            <p className="text-xs text-muted-foreground truncate">معلمة</p>
          </div>
        </div>
      </div>
    </div>
  );
} 