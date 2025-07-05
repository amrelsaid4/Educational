import { getTranslator } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { PlusIcon, MagnifyingGlassIcon, FunnelIcon, ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, 'Teacher.Students');
  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
}

// Mock data fetching function
const getStudents = async () => {
  return Promise.resolve([
    {
      id: 1,
      name: 'Ahmed Mohamed',
      email: 'ahmed.mohamed@example.com',
      avatar: '/avatars/01.png',
      courses: 5,
      averageGrade: 88,
      lastLogin: '2024-05-20T10:00:00Z',
    },
    {
      id: 2,
      name: 'Sara Ali',
      email: 'sara.ali@example.com',
      avatar: '/avatars/02.png',
      courses: 4,
      averageGrade: 92,
      lastLogin: '2024-05-21T11:30:00Z',
    },
    {
      id: 3,
      name: 'Omar Hassan',
      email: 'omar.hassan@example.com',
      avatar: '/avatars/03.png',
      courses: 6,
      averageGrade: 85,
      lastLogin: '2024-05-19T09:45:00Z',
    },
  ]);
};

export default async function TeacherStudentsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslator(locale, 'Teacher.Students');
  const students = await getStudents();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('Title')}</h1>
          <p className="text-muted-foreground">{t('Subtitle')}</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
                <ArrowDownOnSquareIcon className="h-4 w-4" />
                {t('Export')}
            </Button>
            <Button className="flex items-center gap-2">
                <PlusIcon className="h-4 w-4" />
                {t('AddStudent')}
            </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t('SearchPlaceholder')}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          {t('Filter')}
        </Button>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t('Table.Student')}</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t('Table.Courses')}</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t('Table.AverageGrade')}</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{t('Table.LastLogin')}</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">{t('Table.Actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={student.avatar}
                          alt={student.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{student.courses}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{student.averageGrade}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(student.lastLogin).toLocaleDateString(locale)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="outline" size="sm">{t('ViewProfile')}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 