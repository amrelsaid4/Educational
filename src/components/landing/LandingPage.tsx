'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  ChartBarIcon, 
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  CheckIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export function LandingPage() {
  const t = useTranslations('Landing');
  const router = useRouter();

  const features = [
    {
      icon: BookOpenIcon,
      title: t('Features.CourseManagement.Title'),
      description: t('Features.CourseManagement.Description'),
    },
    {
      icon: AcademicCapIcon,
      title: t('Features.OnlineExams.Title'),
      description: t('Features.OnlineExams.Description'),
    },
    {
      icon: ChartBarIcon,
      title: t('Features.Assignment.Title'),
      description: t('Features.Assignment.Description'),
    },
    {
      icon: ChartBarIcon,
      title: t('Features.Analytics.Title'),
      description: t('Features.Analytics.Description'),
    },
    {
      icon: UsersIcon,
      title: t('Features.Community.Title'),
      description: t('Features.Community.Description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('Features.MultiLanguage.Title'),
      description: t('Features.MultiLanguage.Description'),
    },
  ];

  const pricingPlans = [
    {
      name: t('Pricing.Free.Title'),
      price: t('Pricing.Free.Price'),
      period: t('Pricing.Free.Period'),
      features: [
        '5 Courses',
        '50 Students', 
        'Basic Support',
        'Course Analytics'
      ],
      popular: false,
    },
    {
      name: t('Pricing.Basic.Title'),
      price: t('Pricing.Basic.Price'),
      period: t('Pricing.Basic.Period'),
      features: [
        'Unlimited Courses',
        '500 Students',
        'Email Support',
        'Advanced Analytics',
        'Payment Processing'
      ],
      popular: true,
    },
    {
      name: t('Pricing.Premium.Title'),
      price: t('Pricing.Premium.Price'),
      period: t('Pricing.Premium.Period'),
      features: [
        'Unlimited Everything',
        'Priority Support',
        'White-label',
        'API Access',
        'Custom Integrations'
      ],
      popular: false,
    },
  ];

  const faqQuestions = [
    {
      question: t('FAQ.Questions.Setup.Question'),
      answer: t('FAQ.Questions.Setup.Answer'),
    },
    {
      question: t('FAQ.Questions.Support.Question'),
      answer: t('FAQ.Questions.Support.Answer'),
    },
    {
      question: t('FAQ.Questions.Migration.Question'),
      answer: t('FAQ.Questions.Migration.Answer'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gradient">EduPlatform</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => router.push('/features')}>
                Features
              </Button>
              <Button variant="ghost" onClick={() => router.push('/pricing')}>
                Pricing
              </Button>
              <Button variant="ghost" onClick={() => router.push('/about')}>
                About
              </Button>
              <Button variant="ghost" onClick={() => router.push('/contact')}>
                Contact
              </Button>
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <Button variant="outline" onClick={() => router.push('/login')}>
                Login
              </Button>
              <Button onClick={() => router.push('/register')}>
                {t('Hero.GetStarted')}
              </Button>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t('Hero.Title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              {t('Hero.Subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => router.push('/register')}>
                {t('Hero.GetStarted')}
              </Button>
              <Button size="lg" variant="outline">
                <PlayIcon className="mr-2 h-5 w-5" />
                {t('Hero.WatchDemo')}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {t('Hero.TrustedBy')}
            </p>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('Features.Title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('Features.Subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-muted/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('Pricing.Title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('Pricing.Subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => router.push('/register')}
                >
                  {t('Hero.GetStarted')}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('FAQ.Title')}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqQuestions.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <Container>
          <div className="py-12 grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EduPlatform</h3>
              <p className="text-muted-foreground">
                Empowering education through technology
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/features" className="hover:text-foreground">Features</a></li>
                <li><a href="/pricing" className="hover:text-foreground">Pricing</a></li>
                <li><a href="/demo" className="hover:text-foreground">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground">About</a></li>
                <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
                <li><a href="/careers" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground">Terms</a></li>
                <li><a href="/dmca" className="hover:text-foreground">DMCA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t py-6 text-center text-muted-foreground">
            <p>&copy; 2024 EduPlatform. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
} 