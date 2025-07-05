import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

export default function RegisterPage() {
  const t = useTranslations('Register');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container size="sm">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('Title')}</CardTitle>
            <p className="text-muted-foreground">{t('subtitle')}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('Form.UserName')}</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('Form.UserName')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('Form.EmailAddress')}</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('Form.EmailAddress')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('Form.Password')}</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('Form.Password')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('Form.ConfirmPassword')}</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('Form.ConfirmPassword')}
              />
            </div>
            <Button className="w-full">{t('Form.SignUp')}</Button>
            <div className="text-center">
              <a href="/login" className="text-sm text-primary hover:underline">
                {t('Form.AlreadyHaveAccount')} {t('Form.Login')}
              </a>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'ar' ? 'إنشاء حساب - منصة التعليم' : 'Register - EduPlatform',
    description: locale === 'ar' 
      ? 'أنشئ حسابك الجديد في منصة التعليم الشاملة'
      : 'Create your new EduPlatform account',
  };
} 