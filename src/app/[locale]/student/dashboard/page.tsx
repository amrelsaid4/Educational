import { StatsCard } from '@/components/shared/StatsCard';
import {
  BookOpenIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  PresentationChartLineIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/routing';
import messages from '../../../../messages/en.json';

type Props = {
  params: { locale: (typeof locales)[number] };
};

type StatKey = 'EnrolledCourses' | 'CompletedAssignments' | 'AverageGrade' | 'LearningHours';

// Simulate a database or API call to fetch student data
async function getStudentData(locale: string) {
  // In a real app, this would fetch from a database or an API
  // e.g., const user = await db.user.findUnique(...)
  // e.g., const data = await fetch('/api/student/dashboard-data')
  // For now, we return mock data.
  // We add a delay to simulate network latency.
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    stats: [
      { key: 'EnrolledCourses' as StatKey, value: '8', icon: BookOpenIcon },
      { key: 'CompletedAssignments' as StatKey, value: '24/28', icon: ClipboardDocumentCheckIcon },
      { key: 'AverageGrade' as StatKey, value: '87%', icon: TrophyIcon },
      { key: 'LearningHours' as StatKey, value: '42h', icon: ClockIcon },
    ],
    recentActivities: [
      {
        icon: ClipboardDocumentCheckIcon,
        title: "Submitted 'Calculus Homework'",
        time: locale === 'ar' ? 'قبل ساعتين' : '2 hours ago',
      },
      {
        icon: BookOpenIcon,
        title: "Completed 'Intro to Physics - Ch. 3'",
        time: locale === 'ar' ? 'قبل يوم واحد' : '1 day ago',
      },
      {
        icon: PresentationChartLineIcon,
        title: "Grade received for 'History Essay' - 92%",
        time: locale === 'ar' ? 'قبل 3 أيام' : '3 days ago',
      },
    ],
    upcomingExams: [
      {
          subject: 'Final Chemistry Exam',
          date: 'May 25, 2024'
      },
      {
          subject: 'Algebra Mid-term',
          date: 'June 02, 2024'
      }
    ],
  };
}

export default async function StudentDashboardPage({ params: { locale } }: Props) {
  const t = await getTranslations('Student.Dashboard');
  const data = await getStudentData(locale);

  const stats = data.stats.map(stat => ({
    ...stat,
    title: t(`QuickStats.${stat.key}`)
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('WelcomeBack')}, Ahmed!</h1>
        <p className="text-muted-foreground">
          {t('PageDescription')}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            Icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-card p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">{t('RecentActivity')}</h2>
          <div className="space-y-4">
            {data.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                        <activity.icon className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">{t('UpcomingDeadlines')}</h2>
           <div className="space-y-4">
            {data.upcomingExams.map((exam, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                    <p className="font-semibold">{exam.subject}</p>
                    <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Student.Dashboard' });
  
  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
} 