import { getTranslator } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { PlusIcon, BookOpenIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, 'Teacher.Courses');

  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
}

// Mock data fetching function
const getCourses = async () => {
  return Promise.resolve([
    {
      id: 1,
      title: 'Advanced Mathematics',
      description: 'Comprehensive course on advanced calculus and algebra.',
      students: 45,
      rating: 4.9,
      status: 'published',
    },
    {
      id: 2,
      title: 'Physics 101',
      description: 'Introductory course to classical mechanics and thermodynamics.',
      students: 38,
      rating: 4.7,
      status: 'published',
    },
    {
      id: 3,
      title: 'Chemistry Fundamentals',
      description: 'Exploring the basic principles of chemistry.',
      students: 32,
      rating: 4.8,
      status: 'draft',
    },
    {
        id: 4,
        title: 'History of Ancient Civilizations',
        description: 'A journey through the great civilizations of the past.',
        students: 52,
        rating: 4.6,
        status: 'published',
      },
  ]);
};

export default async function TeacherCoursesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, 'Teacher.Courses');
  const courses = await getCourses();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('Title')}</h1>
          <p className="text-muted-foreground">{t('Subtitle')}</p>
        </div>
        <Button className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          {t('CreateCourse')}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-card p-6 rounded-lg border flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <BookOpenIcon className="h-8 w-8 text-primary" />
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {course.status === 'published' ? t('Published') : t('Draft')}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>{course.students} {t('Students')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full">{t('Edit')}</Button>
                <Button variant="default" className="w-full">{t('View')}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 