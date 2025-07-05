'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function TeacherExamsPage() {
  const t = useTranslations('Teacher.Exams');

  const exams = [
    {
      id: 1,
      title: 'Final Mathematics Exam',
      course: 'Advanced Mathematics',
      duration: 120,
      questions: 25,
      status: 'scheduled',
      scheduledDate: '2024-01-20T10:00:00Z',
      submissions: 45,
      averageScore: 78
    },
    {
      id: 2,
      title: 'Physics Midterm',
      course: 'Physics 101',
      duration: 90,
      questions: 20,
      status: 'active',
      scheduledDate: '2024-01-18T14:00:00Z',
      submissions: 38,
      averageScore: 82
    },
    {
      id: 3,
      title: 'Chemistry Quiz',
      course: 'Chemistry Fundamentals',
      duration: 60,
      questions: 15,
      status: 'draft',
      scheduledDate: null,
      submissions: 0,
      averageScore: 0
    },
    {
      id: 4,
      title: 'History Final',
      course: 'World History',
      duration: 150,
      questions: 30,
      status: 'completed',
      scheduledDate: '2024-01-10T09:00:00Z',
      submissions: 42,
      averageScore: 85
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <ClockIcon className="h-4 w-4 text-blue-500" />;
      case 'active':
        return <CheckIcon className="h-4 w-4 text-green-500" />;
      case 'draft':
        return <PencilIcon className="h-4 w-4 text-gray-500" />;
      case 'completed':
        return <CheckIcon className="h-4 w-4 text-green-500" />;
      default:
        return <ClockIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('Title')}</h1>
          <p className="text-muted-foreground">
            {t('PageDescription')}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            Question Bank
          </Button>
          <Button className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            {t('CreateExam')}
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Total Exams</p>
          <p className="text-2xl font-bold">{exams.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-bold">{exams.filter(e => e.status === 'active').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Scheduled</p>
          <p className="text-2xl font-bold">{exams.filter(e => e.status === 'scheduled').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Total Questions</p>
          <p className="text-2xl font-bold">{exams.reduce((sum, e) => sum + e.questions, 0)}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search exams..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Exams List */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">All Exams</h2>
        </div>
        <div className="divide-y">
          {exams.map((exam) => (
            <div key={exam.id} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exam.title}</h3>
                      <p className="text-muted-foreground">{exam.course}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                      {exam.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-muted-foreground">
                    <span>{exam.questions} questions</span>
                    <span>{exam.duration} minutes</span>
                    {exam.scheduledDate && (
                      <span>Scheduled: {new Date(exam.scheduledDate).toLocaleDateString()}</span>
                    )}
                    {exam.submissions > 0 && (
                      <span>{exam.submissions} submissions</span>
                    )}
                    {exam.averageScore > 0 && (
                      <span className="font-medium text-green-600">Avg: {exam.averageScore}%</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <EyeIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  {exam.status === 'draft' && (
                    <Button variant="outline" size="sm" className="text-green-600">
                      Schedule
                    </Button>
                  )}
                  {exam.status === 'scheduled' && (
                    <Button variant="outline" size="sm" className="text-blue-600">
                      Activate
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 