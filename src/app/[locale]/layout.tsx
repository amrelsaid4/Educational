import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ClientProviders } from '@/lib/providers/ClientProviders';
import { DocumentWrapper } from '@/components/shared/DocumentWrapper';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params for Next.js 15
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  const isRTL = locale === 'ar';

  return (
    <div className={`${isRTL ? 'font-cairo' : 'font-roboto'} antialiased min-h-screen`}>
      <NextIntlClientProvider messages={messages}>
        <ClientProviders>
          <DocumentWrapper locale={locale} isRTL={isRTL}>
            {children}
          </DocumentWrapper>
        </ClientProviders>
      </NextIntlClientProvider>
    </div>
  );
} 