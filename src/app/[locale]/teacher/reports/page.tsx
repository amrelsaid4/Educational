import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t('teacher.reports.title'),
    description: t('teacher.reports.description'),
  };
}

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">التقارير</h1>
      <p className="text-gray-600">هنا يمكنك عرض التقارير والإحصائيات.</p>
      {/* محتوى الصفحة */}
    </div>
  );
} 