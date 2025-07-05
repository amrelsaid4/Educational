import { StatsCard } from '@/components/shared/StatsCard';
import {
  UserGroupIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  StarIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t('teacher.dashboard.title'),
    description: t('teacher.dashboard.description'),
  };
}

// Mocks - in a real app, you'd fetch this data from an API
const getTeacherData = async () => {
  return Promise.resolve({
    name: 'Dr. Sara',
    stats: [
      {
        key: 'TotalStudents',
        value: '156',
        icon: UserGroupIcon,
      },
      {
        key: 'TotalCourses',
        value: '8',
        icon: BookOpenIcon,
      },
      {
        key: 'MonthlyRevenue',
        value: '$2,450',
        icon: CurrencyDollarIcon,
      },
      {
        key: 'PendingAssignments',
        value: '12',
        icon: StarIcon,
      },
    ],
    recentActivities: [
      {
        icon: CheckCircleIcon,
        title: "New student enrolled in 'Advanced Mathematics'",
        time: '2 hours ago',
        type: 'enrollment',
      },
      {
        icon: ExclamationTriangleIcon,
        title: 'Assignment submission pending review',
        time: '4 hours ago',
        type: 'assignment',
      },
      {
        icon: ChartBarIcon,
        title: "Course 'Physics 101' completed by 15 students",
        time: '1 day ago',
        type: 'completion',
      },
    ],
    topCourses: [
      {
        name: 'Advanced Mathematics',
        students: 45,
        revenue: '$1,200',
        rating: 4.9,
      },
      {
        name: 'Physics 101',
        students: 38,
        revenue: '$950',
        rating: 4.7,
      },
      {
        name: 'Chemistry Fundamentals',
        students: 32,
        revenue: '$800',
        rating: 4.8,
      },
    ],
  });
};

export default async function DashboardPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t('teacher.dashboard.title')}</h1>
      <p className="text-gray-600">{t('teacher.dashboard.welcome')}</p>
      {/* محتوى الصفحة */}
    </div>
  );
} 