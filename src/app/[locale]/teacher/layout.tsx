import TeacherLayout from '@/components/layout/teacher/TeacherLayout';

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TeacherLayout>{children}</TeacherLayout>;
} 