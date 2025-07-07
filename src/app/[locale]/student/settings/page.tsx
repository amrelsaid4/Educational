import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

export default function StudentSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">الإعدادات</h1>
        <p className="text-muted-foreground">تخصيص تفضيلات حسابك</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>إعدادات الحساب</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><label className="text-sm font-medium">تغيير كلمة المرور</label><Button variant="outline" className="w-full mt-2">تغيير كلمة المرور</Button></div>
            <div><label className="text-sm font-medium">التحقق بخطوتين</label><div className="flex items-center justify-between mt-2"><span className="text-sm text-muted-foreground">غير مفعل</span><Button size="sm">تفعيل</Button></div></div>
            <div><label className="text-sm font-medium">إعدادات الخصوصية</label><Button variant="outline" className="w-full mt-2">إدارة الخصوصية</Button></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>التفضيلات</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><label className="text-sm font-medium block mb-2">اللغة</label><LanguageSwitcher /></div>
            <div><label className="text-sm font-medium block mb-2">المظهر</label><ThemeToggle /></div>
            <div><label className="text-sm font-medium">المنطقة الزمنية</label><select className="w-full mt-2 p-2 border rounded-lg"><option>GMT+3 (الرياض)</option><option>GMT+2 (القاهرة)</option></select></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>الإشعارات</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {['إشعارات الواجبات', 'تذكيرات الامتحانات', 'الإعلانات الجديدة', 'رسائل المعلمين'].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm">{item}</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>إدارة البيانات</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">تحميل بياناتي</Button>
            <Button variant="outline" className="w-full">مسح سجل النشاط</Button>
            <Button variant="destructive" className="w-full">حذف الحساب</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 