'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  CheckIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function TeacherAssignmentsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations('Teacher.Assignments');

  const assignments = [
    {
      id: 1,
      title: 'Calculus Homework - Chapter 3',
      course: 'Advanced Mathematics',
      student: 'Ahmed Mohamed',
      submittedAt: '2024-01-15T10:30:00Z',
      dueDate: '2024-01-16T23:59:00Z',
      status: 'pending',
      grade: null,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics 101',
      student: 'Sara Ali',
      submittedAt: '2024-01-14T15:45:00Z',
      dueDate: '2024-01-15T23:59:00Z',
      status: 'graded',
      grade: 92,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Chemistry Quiz',
      course: 'Chemistry Fundamentals',
      student: 'Omar Hassan',
      submittedAt: '2024-01-13T09:20:00Z',
      dueDate: '2024-01-14T23:59:00Z',
      status: 'overdue',
      grade: null,
      priority: 'high'
    },
    {
      id: 4,
      title: 'History Essay',
      course: 'World History',
      student: 'Fatima Zahra',
      submittedAt: '2024-01-12T14:15:00Z',
      dueDate: '2024-01-13T23:59:00Z',
      status: 'graded',
      grade: 88,
      priority: 'low'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <ClockIcon className="h-4 w-4 text-yellow-500" />;
      case 'graded':
        return <CheckIcon className="h-4 w-4 text-green-500" />;
      case 'overdue':
        return <ExclamationTriangleIcon className="h-4 w-4 text-red-500" />;
      default:
        return <ClockIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
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
        <Button className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          {t('CreateAssignment')}
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Total Submissions</p>
          <p className="text-2xl font-bold">{assignments.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Pending Review</p>
          <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'pending').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Graded</p>
          <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'graded').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Overdue</p>
          <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'overdue').length}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Assignments List */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">All Submissions</h2>
        </div>
        <div className="divide-y">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <p className="text-muted-foreground">{assignment.course} • {assignment.student}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                        {assignment.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-muted-foreground">
                    <span>Submitted: {new Date(assignment.submittedAt).toLocaleDateString(locale)}</span>
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString(locale)}</span>
                    {assignment.grade && (
                      <span className="font-medium text-green-600">Grade: {assignment.grade}%</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <EyeIcon className="h-4 w-4" />
                  </Button>
                  {assignment.status === 'pending' && (
                    <Button variant="outline" size="sm" className="text-green-600">
                      <CheckIcon className="h-4 w-4" />
                    </Button>
                  )}
                  {assignment.status === 'graded' && (
                    <Button variant="outline" size="sm">
                      Edit Grade
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 