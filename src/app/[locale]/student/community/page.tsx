import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ChatBubbleBottomCenterTextIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function StudentCommunityPage() {
  const discussions = [
    { id: 1, title: 'سؤال في الرياضيات المتقدمة', author: 'أحمد علي', replies: 5, likes: 12, course: 'الرياضيات' },
    { id: 2, title: 'مساعدة في مشروع البرمجة', author: 'سارة محمد', replies: 8, likes: 15, course: 'البرمجة' },
    { id: 3, title: 'شرح مفهوم الفيزياء النووية', author: 'محمد حسن', replies: 3, likes: 7, course: 'الفيزياء' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">المجتمع</h1>
          <p className="text-muted-foreground">تفاعل مع زملائك واطرح أسئلتك</p>
        </div>
        <Button>
          <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-2" />
          طرح سؤال جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-primary">156</div><div className="text-sm text-muted-foreground">الأسئلة</div></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-green-600">423</div><div className="text-sm text-muted-foreground">الإجابات</div></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-orange-600">89</div><div className="text-sm text-muted-foreground">الأعضاء النشطين</div></CardContent></Card>
        <Card><CardContent className="p-4 text-center"><div className="text-2xl font-bold text-purple-600">24</div><div className="text-sm text-muted-foreground">أسئلتي</div></CardContent></Card>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center"><UserIcon className="h-4 w-4 mr-1" />{discussion.author}</div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{discussion.course}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center"><ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-1" />{discussion.replies} إجابات</div>
                <div className="flex items-center"><HeartIcon className="h-4 w-4 mr-1" />{discussion.likes} إعجاب</div>
                <Button size="sm" variant="outline">عرض التفاصيل</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 