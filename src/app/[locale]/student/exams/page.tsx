import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  AcademicCapIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  PlayIcon,
  TrophyIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function StudentExamsPage() {
  const upcomingExams = [
    {
      id: 1,
      title: 'امتحان الفيزياء النصفي',
      course: 'الفيزياء النووية',
      date: '2024-12-15',
      time: '10:00 ص',
      duration: 120,
      type: 'امتحان نصفي',
      questions: 50,
      maxGrade: 100,
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'اختبار سريع - الكيمياء',
      course: 'الكيمياء العضوية',
      date: '2024-12-18',
      time: '2:00 م',
      duration: 30,
      type: 'اختبار سريع',
      questions: 15,
      maxGrade: 30,
      status: 'scheduled'
    },
    {
      id: 3,
      title: 'امتحان البرمجة العملي',
      course: 'البرمجة بـ Python',
      date: '2024-12-20',
      time: '9:00 ص',
      duration: 180,
      type: 'امتحان عملي',
      questions: 5,
      maxGrade: 150,
      status: 'scheduled'
    }
  ];

  const completedExams = [
    {
      id: 4,
      title: 'امتحان الرياضيات الشهري',
      course: 'الرياضيات المتقدمة',
      date: '2024-11-28',
      duration: 90,
      type: 'امتحان شهري',
      grade: 85,
      maxGrade: 100,
      percentage: 85,
      rank: 12,
      totalStudents: 145,
      status: 'completed'
    },
    {
      id: 5,
      title: 'اختبار الكيمياء التفاعلية',
      course: 'الكيمياء العضوية',
      date: '2024-11-25',
      duration: 60,
      type: 'اختبار',
      grade: 27,
      maxGrade: 30,
      percentage: 90,
      rank: 5,
      totalStudents: 234,
      status: 'completed'
    }
  ];

  const practiceExams = [
    {
      id: 6,
      title: 'اختبار تجريبي - الفيزياء',
      course: 'الفيزياء النووية',
      questions: 25,
      duration: 60,
      attempts: 2,
      bestScore: 80
    },
    {
      id: 7,
      title: 'مراجعة الرياضيات',
      course: 'الرياضيات المتقدمة',
      questions: 30,
      duration: 45,
      attempts: 1,
      bestScore: 92
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'text-blue-600 bg-blue-50';
      case 'completed': return 'text-green-600 bg-green-50';
      case 'in_progress': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">الامتحانات</h1>
          <p className="text-muted-foreground">جدولة الامتحانات والنتائج</p>
        </div>
        <Button>
          <AcademicCapIcon className="h-4 w-4 mr-2" />
          الاختبارات التجريبية
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-muted-foreground">امتحانات قادمة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-sm text-muted-foreground">امتحانات مكتملة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">87.5%</div>
            <div className="text-sm text-muted-foreground">متوسط الدرجات</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-sm text-muted-foreground">المرتبة العامة</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              الامتحانات القادمة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingExams.map((exam) => (
              <div key={exam.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground">{exam.course}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(exam.status)}`}>
                    {exam.type}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    {exam.date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    {exam.time}
                  </div>
                  <div>المدة: {exam.duration} دقيقة</div>
                  <div>الأسئلة: {exam.questions}</div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <PlayIcon className="h-4 w-4 mr-2" />
                    بدء الامتحان
                  </Button>
                  <Button variant="outline" size="sm">
                    تفاصيل
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrophyIcon className="h-5 w-5 mr-2" />
              النتائج الأخيرة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {completedExams.map((exam) => (
              <div key={exam.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground">{exam.course}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getGradeColor(exam.percentage)}`}>
                      {exam.grade}/{exam.maxGrade}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exam.percentage}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>التاريخ: {exam.date}</div>
                  <div>المدة: {exam.duration} دقيقة</div>
                  <div>الترتيب: {exam.rank} من {exam.totalStudents}</div>
                  <div>{exam.type}</div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    عرض التفاصيل
                  </Button>
                  <Button variant="outline" size="sm">
                    مراجعة الإجابات
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Practice Exams */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <PlayIcon className="h-5 w-5 mr-2" />
              الاختبارات التجريبية
            </div>
            <Button variant="outline" size="sm">
              عرض الكل
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceExams.map((exam) => (
              <div key={exam.id} className="border rounded-lg p-4 space-y-3">
                <div>
                  <h3 className="font-semibold">{exam.title}</h3>
                  <p className="text-sm text-muted-foreground">{exam.course}</p>
                </div>
                
                <div className="text-sm space-y-1">
                  <div>الأسئلة: {exam.questions}</div>
                  <div>المدة: {exam.duration} دقيقة</div>
                  <div>المحاولات: {exam.attempts}</div>
                  <div className="text-primary font-medium">
                    أفضل نتيجة: {exam.bestScore}%
                  </div>
                </div>

                <Button size="sm" className="w-full" variant="outline">
                  <PlayIcon className="h-4 w-4 mr-2" />
                  بدء الاختبار
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: locale === 'ar' ? 'الامتحانات - منصة التعليم' : 'Exams - EduPlatform',
    description: locale === 'ar' 
      ? 'جدولة الامتحانات ومتابعة النتائج'
      : 'Exam scheduling and results tracking',
  };
} 