import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UserIcon, PencilIcon, CameraIcon } from '@heroicons/react/24/outline';

export default function StudentProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">الملف الشخصي</h1>
        <p className="text-muted-foreground">معلوماتك الشخصية والأكاديمية</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>المعلومات الأساسية</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center mb-4">
                <UserIcon className="h-12 w-12 text-primary-foreground" />
              </div>
              <Button size="sm" variant="outline"><CameraIcon className="h-4 w-4 mr-2" />تغيير الصورة</Button>
            </div>
            
            <div className="space-y-3">
              <div><label className="text-sm font-medium">الاسم الكامل</label><p className="text-sm text-muted-foreground">أحمد محمد علي</p></div>
              <div><label className="text-sm font-medium">البريد الإلكتروني</label><p className="text-sm text-muted-foreground">ahmed@example.com</p></div>
              <div><label className="text-sm font-medium">رقم الطالب</label><p className="text-sm text-muted-foreground">ST-2024-001</p></div>
              <div><label className="text-sm font-medium">تاريخ الانضمام</label><p className="text-sm text-muted-foreground">سبتمبر 2024</p></div>
            </div>
            
            <Button className="w-full"><PencilIcon className="h-4 w-4 mr-2" />تعديل المعلومات</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>الإحصائيات الأكاديمية</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg"><div className="text-2xl font-bold text-primary">8</div><div className="text-sm">الكورسات</div></div>
              <div className="text-center p-3 bg-muted rounded-lg"><div className="text-2xl font-bold text-green-600">87%</div><div className="text-sm">المعدل</div></div>
              <div className="text-center p-3 bg-muted rounded-lg"><div className="text-2xl font-bold text-orange-600">156</div><div className="text-sm">ساعات التعلم</div></div>
              <div className="text-center p-3 bg-muted rounded-lg"><div className="text-2xl font-bold text-purple-600">24</div><div className="text-sm">الشهادات</div></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>الإنجازات</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg"><div className="font-medium">طالب متفوق</div><div className="text-sm text-muted-foreground">حصل على معدل 90% أو أكثر</div></div>
            <div className="p-3 border rounded-lg"><div className="font-medium">مشارك نشط</div><div className="text-sm text-muted-foreground">شارك في 50+ نقاش</div></div>
            <div className="p-3 border rounded-lg"><div className="font-medium">منجز المهام</div><div className="text-sm text-muted-foreground">أكمل جميع الواجبات في الوقت</div></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 