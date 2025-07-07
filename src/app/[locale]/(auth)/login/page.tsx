import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

export default function LoginPage() {
  const t = useTranslations('Auth.Login');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container size="sm">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <p className="text-muted-foreground">Sign in to your account</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>
            <Button className="w-full">Sign In</Button>
            <div className="text-center">
              <a href="/register" className="text-sm text-primary hover:underline">
                Don't have an account? Sign up
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
    title: locale === 'ar' ? 'تسجيل الدخول - منصة التعليم' : 'Login - EduPlatform',
    description: locale === 'ar' 
      ? 'سجل دخولك إلى منصة التعليم الشاملة'
      : 'Sign in to your EduPlatform account',
  };
} 