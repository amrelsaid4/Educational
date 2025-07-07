import { 
  UserRole, 
  Permission, 
  CourseLevel, 
  AssignmentStatus, 
  ExamStatus, 
  QuestionType, 
  PaymentStatus, 
  SubscriptionPlan,
  NotificationType 
} from '@/constants';

// Base Types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User Types
export interface User extends BaseEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  permissions: Permission[];
  isActive: boolean;
  isEmailVerified: boolean;
  lastLoginAt?: Date;
  profile?: UserProfile;
  subscription?: UserSubscription;
}

export interface UserProfile extends BaseEntity {
  userId: string;
  bio?: string;
  phone?: string;
  address?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
  language: string;
  timezone: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  assignmentDue: boolean;
  examScheduled: boolean;
  gradeReleased: boolean;
  courseUpdates: boolean;
  systemAnnouncements: boolean;
}

export interface UserSubscription extends BaseEntity {
  userId: string;
  plan: SubscriptionPlan;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  paymentMethod?: string;
  nextBillingDate?: Date;
}

// Authentication Types
export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  agreedToTerms: boolean;
}

// Course Types
export interface Course extends BaseEntity {
  title: string;
  description: string;
  thumbnail?: string;
  teacherId: string;
  teacher: User;
  category: string;
  level: string;
  price: number;
  currency: string;
  duration: number; // in hours
  isPublished: boolean;
  isFree: boolean;
  enrollmentCount: number;
  rating: number;
  ratingCount: number;
  structure: CourseStructure;
  tags: string[];
  requirements: string[];
  objectives: string[];
}

export interface CourseStructure extends BaseEntity {
  courseId: string;
  years: CourseYear[];
}

export interface CourseYear extends BaseEntity {
  structureId: string;
  title: string;
  description?: string;
  order: number;
  terms: CourseTerm[];
}

export interface CourseTerm extends BaseEntity {
  yearId: string;
  title: string;
  description?: string;
  order: number;
  units: CourseUnit[];
}

export interface CourseUnit extends BaseEntity {
  termId: string;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson extends BaseEntity {
  unitId: string;
  title: string;
  description?: string;
  content: string;
  videoUrl?: string;
  duration?: number; // in minutes
  order: number;
  isPublished: boolean;
  attachments: LessonAttachment[];
  notes?: string;
}

export interface LessonAttachment extends BaseEntity {
  lessonId: string;
  name: string;
  url: string;
  fileType: string;
  fileSize: number;
  description?: string;
}

export interface CourseProgress extends BaseEntity {
  courseId: string;
  studentId: string;
  completedLessons: string[];
  currentLesson?: string;
  progressPercentage: number;
  timeSpent: number; // in minutes
  lastAccessedAt: Date;
}

export interface Enrollment extends BaseEntity {
  courseId: string;
  studentId: string;
  enrolledAt: Date;
  completedAt?: Date;
  progress: number;
  isActive: boolean;
  paymentId?: string;
}

// Assignment Types
export interface Assignment extends BaseEntity {
  title: string;
  description: string;
  instructions: string;
  courseId: string;
  teacherId: string;
  dueDate: Date;
  maxPoints: number;
  status: AssignmentStatus;
  isPublished: boolean;
  allowLateSubmission: boolean;
  attachments: AssignmentAttachment[];
  submissions: AssignmentSubmission[];
}

export interface AssignmentAttachment extends BaseEntity {
  assignmentId: string;
  name: string;
  url: string;
  fileType: string;
  fileSize: number;
}

export interface AssignmentSubmission extends BaseEntity {
  assignmentId: string;
  studentId: string;
  content?: string;
  attachments: SubmissionAttachment[];
  submittedAt: Date;
  grade?: number;
  feedback?: string;
  gradedAt?: Date;
  gradedBy?: string;
  isLate: boolean;
}

export interface SubmissionAttachment extends BaseEntity {
  submissionId: string;
  name: string;
  url: string;
  fileType: string;
  fileSize: number;
}

// Exam Types
export interface Exam extends BaseEntity {
  title: string;
  description: string;
  courseId: string;
  teacherId: string;
  duration: number; // in minutes
  totalPoints: number;
  passingScore: number;
  startDate: Date;
  endDate: Date;
  status: ExamStatus;
  isPublished: boolean;
  allowRetakes: boolean;
  maxAttempts: number;
  showResults: boolean;
  randomizeQuestions: boolean;
  questions: ExamQuestion[];
  attempts: ExamAttempt[];
}

export interface ExamQuestion extends BaseEntity {
  examId: string;
  type: QuestionType;
  question: string;
  points: number;
  order: number;
  options?: QuestionOption[];
  correctAnswer?: string;
  explanation?: string;
  media?: QuestionMedia[];
}

export interface QuestionOption extends BaseEntity {
  questionId: string;
  text: string;
  isCorrect: boolean;
  order: number;
}

export interface QuestionMedia extends BaseEntity {
  questionId: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  alt?: string;
}

export interface ExamAttempt extends BaseEntity {
  examId: string;
  studentId: string;
  startedAt: Date;
  submittedAt?: Date;
  score?: number;
  percentage?: number;
  passed?: boolean;
  timeSpent: number; // in minutes
  answers: ExamAnswer[];
  isCompleted: boolean;
}

export interface ExamAnswer extends BaseEntity {
  attemptId: string;
  questionId: string;
  answer: string;
  isCorrect?: boolean;
  points?: number;
}

// Payment Types
export interface Payment extends BaseEntity {
  userId: string;
  courseId?: string;
  subscriptionId?: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: string;
  transactionId?: string;
  description: string;
  processedAt?: Date;
  refundedAt?: Date;
  refundAmount?: number;
}

export interface PaymentMethod extends BaseEntity {
  userId: string;
  type: 'card' | 'paypal' | 'bank_transfer';
  isDefault: boolean;
  lastFour?: string;
  expiryMonth?: number;
  expiryYear?: number;
  cardBrand?: string;
  billingAddress?: BillingAddress;
}

export interface BillingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Community Types
export interface Discussion extends BaseEntity {
  title: string;
  content: string;
  courseId?: string;
  authorId: string;
  author: User;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  isSticky: boolean;
  isClosed: boolean;
  replies: DiscussionReply[];
}

export interface DiscussionReply extends BaseEntity {
  discussionId: string;
  authorId: string;
  author: User;
  content: string;
  parentReplyId?: string;
  likes: number;
  isAccepted: boolean;
  replies: DiscussionReply[];
}

export interface Message extends BaseEntity {
  senderId: string;
  receiverId: string;
  subject?: string;
  content: string;
  isRead: boolean;
  readAt?: Date;
  attachments: MessageAttachment[];
  replyToId?: string;
}

export interface MessageAttachment extends BaseEntity {
  messageId: string;
  name: string;
  url: string;
  fileType: string;
  fileSize: number;
}

// Notification Types
export interface Notification extends BaseEntity {
  userId: string;
  type: NotificationType;
  title: string;
  content: string;
  isRead: boolean;
  readAt?: Date;
  actionUrl?: string;
  metadata?: Record<string, any>;
}

// Analytics Types
export interface UserAnalytics {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  usersByRole: Record<UserRole, number>;
  userGrowth: GrowthData[];
  engagementMetrics: EngagementMetrics;
}

export interface CourseAnalytics {
  totalCourses: number;
  publishedCourses: number;
  totalEnrollments: number;
  completionRate: number;
  popularCourses: PopularCourse[];
  categoryDistribution: CategoryData[];
}

export interface RevenueAnalytics {
  totalRevenue: number;
  monthlyRevenue: number;
  revenueGrowth: GrowthData[];
  revenueBySource: RevenueSource[];
  averageOrderValue: number;
  subscriptionMetrics: SubscriptionMetrics;
}

export interface GrowthData {
  date: string;
  value: number;
  change?: number;
}

export interface EngagementMetrics {
  averageSessionDuration: number;
  dailyActiveUsers: number;
  weeklyActiveUsers: number;
  monthlyActiveUsers: number;
  retentionRate: number;
}

export interface PopularCourse {
  id: string;
  title: string;
  enrollments: number;
  rating: number;
  revenue: number;
}

export interface CategoryData {
  category: string;
  count: number;
  percentage: number;
}

export interface RevenueSource {
  source: string;
  amount: number;
  percentage: number;
}

export interface SubscriptionMetrics {
  activeSubscriptions: number;
  newSubscriptions: number;
  canceledSubscriptions: number;
  churnRate: number;
  mrr: number; // Monthly Recurring Revenue
}

// System Types
export interface SystemSettings extends BaseEntity {
  siteName: string;
  siteDescription: string;
  adminEmail: string;
  defaultLanguage: string;
  timezone: string;
  allowRegistration: boolean;
  requireEmailVerification: boolean;
  maintenanceMode: boolean;
  maintenanceMessage?: string;
  features: FeatureFlags;
}

export interface FeatureFlags {
  enablePayments: boolean;
  enableCommunity: boolean;
  enableNotifications: boolean;
  enableAnalytics: boolean;
  enableMobileApp: boolean;
  enableLiveChat: boolean;
}

export interface SupportTicket extends BaseEntity {
  userId: string;
  user: User;
  subject: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  assignedTo?: string;
  assignee?: User;
  responses: TicketResponse[];
}

export interface TicketResponse extends BaseEntity {
  ticketId: string;
  authorId: string;
  author: User;
  content: string;
  isInternal: boolean;
  attachments: MessageAttachment[];
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface FilterOptions {
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

// Form Types
export interface FormState {
  isLoading: boolean;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface TableColumn<T = any> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
  width?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

// Calendar Types
export interface CalendarEvent extends BaseEntity {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  location?: string;
  attendees: string[];
  type: 'assignment' | 'exam' | 'lesson' | 'meeting' | 'other';
  courseId?: string;
  color?: string;
  recurrence?: EventRecurrence;
}

export interface EventRecurrence {
  pattern: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: Date;
  count?: number;
}

// File Upload Types
export interface FileUpload {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  url?: string;
  error?: string;
}

export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  type: string;
} 