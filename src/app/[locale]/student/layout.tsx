'use client';

import { useState } from 'react';
import { StudentSidebar } from '@/components/layout/student/StudentSidebar';
import { StudentHeader } from '@/components/layout/student/StudentHeader';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="relative">
        <StudentSidebar isCollapsed={isSidebarCollapsed} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <StudentHeader 
          isCollapsed={isSidebarCollapsed} 
          onToggleSidebar={toggleSidebar}
        />
        
        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 