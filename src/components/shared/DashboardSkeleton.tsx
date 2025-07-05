import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-muted rounded"></div>
          <div className="h-4 w-72 bg-muted rounded"></div>
        </div>
        <div className="h-10 w-36 bg-muted rounded-lg"></div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="h-28 bg-muted"></Card>
        <Card className="h-28 bg-muted"></Card>
        <Card className="h-28 bg-muted"></Card>
        <Card className="h-28 bg-muted"></Card>
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 h-96 bg-muted"></Card>
        <Card className="h-96 bg-muted"></Card>
      </div>
    </div>
  );
} 