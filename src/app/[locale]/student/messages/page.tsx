import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  UserIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function StudentMessagesPage() {
  const conversations = [
    {
      id: 1, name: 'د. أحمد محمود', role: 'معلم الرياضيات', 
      lastMessage: 'شكراً لك على إنجاز الواجب في الوقت المحدد', 
      time: '10:30 ص', unread: 0, avatar: null
    },
    {
      id: 2, name: 'إدارة المنصة', role: 'الدعم الفني',
      lastMessage: 'مرحباً، كيف يمكننا مساعدتك؟',
      time: 'أمس', unread: 2, avatar: null
    },
    {
      id: 3, name: 'د. سارة علي', role: 'معلمة الفيزياء',
      lastMessage: 'الامتحان القادم سيكون يوم الأحد الساعة 10 صباحاً',
      time: 'الثلاثاء', unread: 0, avatar: null
    }
  ];

  const currentMessages = [
    { id: 1, sender: 'teacher', content: 'مرحباً أحمد، كيف حالك؟', time: '9:30 ص' },
    { id: 2, sender: 'student', content: 'أهلاً دكتور، الحمدلله بخير. أردت أن أسأل عن الواجب الجديد', time: '9:32 ص' },
    { id: 3, sender: 'teacher', content: 'بالطبع، الواجب عن المعادلات التفاضلية. هل لديك أي استفسارات؟', time: '9:35 ص' },
    { id: 4, sender: 'student', content: 'نعم، أواجه صعوبة في السؤال الثالث', time: '9:40 ص' }
  ];

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">الرسائل</h1>
          <p className="text-muted-foreground">تواصل مع معلميك وزملائك</p>
        </div>
        <Button>
          <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
          رسالة جديدة
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>المحادثات</CardTitle>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="البحث في الرسائل..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div key={conversation.id} className="p-4 hover:bg-muted cursor-pointer border-b last:border-b-0">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm truncate">{conversation.name}</h4>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">د. أحمد محمود</h3>
                <p className="text-sm text-muted-foreground">معلم الرياضيات</p>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {currentMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'student' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'student' 
                        ? 'text-primary-foreground/70' 
                        : 'text-muted-foreground'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">
                <PaperAirplaneIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 