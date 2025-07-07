'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import {
  PlusIcon,
  PencilIcon,
  EyeIcon,
  TrashIcon,
  PlayIcon,
  PauseIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export function CreateCourseButton() {
  const t = useTranslations('Teacher.Courses');
  return (
    <Button className="flex items-center gap-2">
      <PlusIcon className="h-4 w-4" />
      {t('CreateCourse')}
    </Button>
  );
}

interface CourseActionsProps {
  status: 'published' | 'draft';
}

export function CourseActions({ status }: CourseActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm">
        <EyeIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm">
        <PencilIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm">
        {status === 'published' ? (
          <PauseIcon className="h-4 w-4" />
        ) : (
          <PlayIcon className="h-4 w-4" />
        )}
      </Button>
      <Button variant="outline" size="sm" className="text-destructive hover:text-destructive/90">
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function CourseFilters() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full bg-background pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
                <FunnelIcon className="h-4 w-4" />
                Filter
            </Button>
        </div>
    );
} 