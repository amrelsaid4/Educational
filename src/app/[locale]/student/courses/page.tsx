import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  BookOpenIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  PlayIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function StudentCoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'الرياضيات المتقدمة',
      instructor: 'د. أحمد محمود',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      duration: '48 ساعة',
      students: 145,
      thumbnail: '/api/placeholder/300/200',
      category: 'رياضيات',
      level: 'متقدم',
      nextLesson: 'المعادلات التفاضلية'
    },
    {
      id: 2,
      title: 'الفيزياء النووية',
      instructor: 'د. سارة علي',
      progress: 60,
      totalLessons: 32,
      completedLessons: 19,
      duration: '64 ساعة',
      students: 89,
      thumbnail: '/api/placeholder/300/200',
      category: 'فيزياء',
      level: 'متقدم',
      nextLesson: 'الانشطار النووي'
    },
    {
      id: 3,
      title: 'الكيمياء العضوية',
      instructor: 'د. محمد حسن',
      progress: 40,
      totalLessons: 28,
      completedLessons: 11,
      duration: '56 ساعة',
      students: 234,
      thumbnail: '/api/placeholder/300/200',
      category: 'كيمياء',
      level: 'متوسط',
      nextLesson: 'المركبات الهيدروكربونية'
    },
    {
      id: 4,
      title: 'البرمجة بـ Python',
      instructor: 'م. ليلى أحمد',
      progress: 85,
      totalLessons: 20,
      completedLessons: 17,
      duration: '40 ساعة',
      students: 567,
      thumbnail: '/api/placeholder/300/200',
      category: 'برمجة',
      level: 'مبتدئ',
      nextLesson: 'البرمجة الكائنية'
    }
  ];

  const categories = ['الكل', 'رياضيات', 'فيزياء', 'كيمياء', 'برمجة', 'أحياء'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">كورساتي</h1>
          <p className="text-muted-foreground">تابع تقدمك في الكورسات المسجل بها</p>
        </div>
        <Button>
          <BookOpenIcon className="h-4 w-4 mr-2" />
          تصفح الكورسات
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث في الكورسات..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'الكل' ? 'default' : 'outline'}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Button variant="outline" size="sm">
              <AdjustmentsHorizontalIcon className="h-4 w-4 mr-2" />
              فلترة
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">كورسات نشطة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">65</div>
            <div className="text-sm text-muted-foreground">دروس مكتملة</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">208</div>
            <div className="text-sm text-muted-foreground">ساعات تعلم</div>
          </CardContent>
        </Card>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {/* Course Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {course.category}
                </span>
              </div>
            </div>

            <CardContent className="p-4">
              {/* Course Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{course.completedLessons}/{course.totalLessons} دروس</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    {course.students} طالب
                  </div>
                </div>

                {/* Next Lesson */}
                <div className="text-sm">
                  <span className="text-muted-foreground">الدرس التالي: </span>
                  <span className="text-primary">{course.nextLesson}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <PlayIcon className="h-4 w-4 mr-2" />
                    متابعة التعلم
                  </Button>
                  <Button variant="outline" size="sm">
                    تفاصيل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          تحميل المزيد من الكورسات
        </Button>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: locale === 'ar' ? 'دوراتي - منصة التعليم' : 'My Courses - EduPlatform',
    description: locale === 'ar' 
      ? 'استعراض الدورات المسجل بها ومتابعة التقدم'
      : 'View enrolled courses and track progress',
  };
} 