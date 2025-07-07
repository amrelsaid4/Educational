import { useTranslations } from 'next-intl';
import { LandingPage } from '@/components/landing/LandingPage';

export default function HomePage() {
  return <LandingPage />;
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  // You can use the locale to fetch locale-specific metadata
  return {
    title: locale === 'ar' ? 'منصة تعليمية شاملة - EduPlatform' : 'EduPlatform - Comprehensive Educational Platform',
    description: locale === 'ar' 
      ? 'منصة تعليمية شاملة للمعلمين والطلاب والمديرين مع إدارة الدورات والامتحانات والواجبات'
      : 'Comprehensive educational platform for teachers, students, and administrators with course management, exams, and assignments',
  };
} 