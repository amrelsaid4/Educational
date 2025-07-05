import { StatsCard } from '@/_Components/Shared/StatsCard';
import {
  UsersIcon,
  BookOpenIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/routing';

type Props = {
  params: { locale: (typeof locales)[number] };
};

// Simulate a database or API call to fetch admin data
async function getAdminData() {
  // In a real app, this would fetch from a database or an API
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    stats: [
      { key: 'TotalUsers', value: '1,250', icon: UsersIcon },
      { key: 'TotalCourses', value: '150', icon: BookOpenIcon },
      { key: 'TotalRevenue', value: '$75,000', icon: CreditCardIcon },
      { key: 'ContentPending', value: '12', icon: ShieldCheckIcon },
    ],
    // ... add more mock data as needed for charts, etc.
  };
}

export default async function AdminDashboardPage({ params: { locale } }: Props) {
  const t = await getTranslations('Admin.Dashboard');
  const data = await getAdminData();

  const stats = data.stats.map(stat => ({
    ...stat,
    title: t(`QuickStats.${stat.key}`),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t('PageTitle')}</h1>
        <p className="text-muted-foreground">{t('PageDescription')}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            Icon={stat.icon}
          />
        ))}
      </div>

      {/* Add more sections here, e.g., charts for revenue, user growth etc. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-lg font-semibold mb-4">{t('RevenueOverview')}</h2>
            {/* Placeholder for a chart */}
            <div className="h-64 bg-muted flex items-center justify-center rounded-lg">
              <p className="text-muted-foreground">{t('ChartPlaceholder')}</p>
            </div>
         </div>
         <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-lg font-semibold mb-4">{t('UserGrowth')}</h2>
             {/* Placeholder for a chart */}
            <div className="h-64 bg-muted flex items-center justify-center rounded-lg">
              <p className="text-muted-foreground">{t('ChartPlaceholder')}</p>
            </div>
         </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Admin.Dashboard' });
  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
} 