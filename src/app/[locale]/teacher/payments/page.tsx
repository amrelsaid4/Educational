import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t('teacher.payments.title'),
    description: t('teacher.payments.description'),
  };
}

export default function PaymentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">المدفوعات</h1>
      <p className="text-gray-600">هنا يمكنك عرض سجل المدفوعات والإيرادات.</p>
      {/* محتوى الصفحة */}
    </div>
  );
} 