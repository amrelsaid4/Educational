import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  DocumentTextIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PaperClipIcon
} from '@heroicons/react/24/outline';

export default function StudentAssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: 'مشروع الرياضيات - حل المعادلات',
      course: 'الرياضيات المتقدمة',
      dueDate: '2024-12-15',
      status: 'pending',
      priority: 'high',
      description: 'حل مجموعة من المعادلات التفاضلية المعقدة مع شرح الخطوات',
      maxGrade: 100,
      submittedAt: null,
      grade: null,
      attachments: 2
    },
    {
      id: 2,
      title: 'تقرير الفيزياء النووية',
      course: 'الفيزياء النووية',
      dueDate: '2024-12-12',
      status: 'submitted',
      priority: 'medium',
      description: 'كتابة تقرير مفصل عن استخدامات الطاقة النووية في الطب',
      maxGrade: 80,
      submittedAt: '2024-12-10',
      grade: 75,
      attachments: 1
    },
    {
      id: 3,
      title: 'مشروع البرمجة - تطبيق ويب',
      course: 'البرمجة بـ Python',
      dueDate: '2024-12-08',
      status: 'overdue',
      priority: 'high',
      description: 'إنشاء تطبيق ويب باستخدام Flask مع قاعدة بيانات',
      maxGrade: 120,
      submittedAt: null,
      grade: null,
      attachments: 0
    },
    {
      id: 4,
      title: 'واجب الكيمياء العضوية',
      course: 'الكيمياء العضوية',
      dueDate: '2024-12-20',
      status: 'draft',
      priority: 'low',
      description: 'تحليل التفاعلات الكيميائية للمركبات العضوية',
      maxGrade: 60,
      submittedAt: null,
      grade: null,
      attachments: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'text-green-600 bg-green-50';
      case 'overdue': return 'text-red-600 bg-red-50';
      case 'pending': return 'text-orange-600 bg-orange-50';
      case 'draft': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'submitted': return 'مُسلم';
      case 'overdue': return 'متأخر';
      case 'pending': return 'قيد الانتظار';
      case 'draft': return 'مسودة';
      default: return 'غير محدد';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-orange-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">الواجبات</h1>
          <p className="text-muted-foreground">تتبع وإدارة واجباتك الدراسية</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2</div>
            <div className="text-sm text-muted-foreground">قيد الانتظار</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-muted-foreground">مُسلم</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-muted-foreground">متأخر</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">87%</div>
            <div className="text-sm text-muted-foreground">متوسط الدرجات</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b">
        <Button variant="ghost" className="border-b-2 border-primary">
          الكل (4)
        </Button>
        <Button variant="ghost">
          قيد الانتظار (2)
        </Button>
        <Button variant="ghost">
          مُسلم (1)
        </Button>
        <Button variant="ghost">
          متأخر (1)
        </Button>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className={`border-l-4 ${getPriorityColor(assignment.priority)}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{assignment.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                      {getStatusText(assignment.status)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{assignment.course}</p>
                  <p className="text-sm">{assignment.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {/* Due Date */}
                <div className="flex items-center text-sm">
                  <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>تاريخ التسليم: {assignment.dueDate}</span>
                </div>

                {/* Max Grade */}
                <div className="flex items-center text-sm">
                  <DocumentTextIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>الدرجة الكاملة: {assignment.maxGrade}</span>
                </div>

                {/* Grade (if submitted) */}
                {assignment.grade !== null && (
                  <div className="flex items-center text-sm">
                    <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                    <span>الدرجة: {assignment.grade}/{assignment.maxGrade}</span>
                  </div>
                )}

                {/* Attachments */}
                {assignment.attachments > 0 && (
                  <div className="flex items-center text-sm">
                    <PaperClipIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{assignment.attachments} مرفقات</span>
                  </div>
                )}
              </div>

              {/* Submitted Info */}
              {assignment.submittedAt && (
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center text-sm text-green-700">
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    <span>تم التسليم في: {assignment.submittedAt}</span>
                  </div>
                </div>
              )}

              {/* Overdue Warning */}
              {assignment.status === 'overdue' && (
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center text-sm text-red-700">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                    <span>هذا الواجب متأخر! يرجى التسليم في أقرب وقت ممكن</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                {assignment.status === 'pending' || assignment.status === 'draft' ? (
                  <>
                    <Button size="sm">
                      <DocumentTextIcon className="h-4 w-4 mr-2" />
                      العمل على الواجب
                    </Button>
                    <Button variant="outline" size="sm">
                      عرض التفاصيل
                    </Button>
                  </>
                ) : assignment.status === 'submitted' ? (
                  <>
                    <Button variant="outline" size="sm">
                      عرض التسليم
                    </Button>
                    <Button variant="outline" size="sm">
                      تحميل الملفات
                    </Button>
                  </>
                ) : (
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                    تسليم متأخر
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: locale === 'ar' ? 'الواجبات - منصة التعليم' : 'Assignments - EduPlatform',
    description: locale === 'ar' 
      ? 'متابعة وتسليم الواجبات الدراسية'
      : 'Track and submit your course assignments',
  };
} 