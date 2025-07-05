import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CalendarIcon, ClockIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function StudentCalendarPage() {
  const events = [
    { id: 1, title: 'امتحان الفيزياء', date: '2024-12-15', time: '10:00', type: 'exam' },
    { id: 2, title: 'واجب الرياضيات', date: '2024-12-16', time: '23:59', type: 'assignment' },
    { id: 3, title: 'محاضرة الكيمياء', date: '2024-12-17', time: '14:00', type: 'lesson' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">التقويم</h1>
        <p className="text-muted-foreground">جدولة المواعيد والمهام الأكاديمية</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>التقويم الشهري</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">عرض التقويم سيتم إضافته لاحقاً</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>الأحداث القادمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {events.map((event) => (
                <div key={event.id} className="p-3 border rounded-lg">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {event.date} في {event.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 