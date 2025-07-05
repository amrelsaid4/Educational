import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t('teacher.settings.title'),
    description: t('teacher.settings.description'),
  };
}

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">الإعدادات</h1>
      <p className="text-gray-600">هنا يمكنك تعديل إعدادات الحساب.</p>
      {/* محتوى الصفحة */}
    </div>
  );
} 