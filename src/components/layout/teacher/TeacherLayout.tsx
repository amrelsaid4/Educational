'use client';

import { useState } from 'react';
import { TeacherSidebar } from '@/components/layout/teacher/TeacherSidebar';
import { TeacherHeader } from '@/components/layout/teacher/TeacherHeader';
import { Sheet, SheetContent } from '@/components/ui/Sheet';

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <TeacherSidebar />
        </div>

        {/* Mobile Sidebar in a Sheet */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetContent side="left" className="p-0 w-64">
              <TeacherSidebar />
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <TeacherHeader onMobileMenuClick={() => setIsMobileMenuOpen(true)} />
          
          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 