import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t('teacher.messages.title'),
    description: t('teacher.messages.description'),
  };
}

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">الرسائل</h1>
      <p className="text-gray-600">هنا يمكنك إدارة الرسائل مع الطلاب والمعلمين.</p>
      {/* محتوى الصفحة */}
    </div>
  );
} 