// User Roles
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student'
}

// User Permissions
export enum Permission {
  // Admin permissions
  MANAGE_USERS = 'manage_users',
  MANAGE_CONTENT = 'manage_content',
  MANAGE_PAYMENTS = 'manage_payments',
  SYSTEM_SETTINGS = 'system_settings',
  VIEW_ANALYTICS = 'view_analytics',
  
  // Teacher permissions
  CREATE_COURSES = 'create_courses',
  MANAGE_STUDENTS = 'manage_students',
  CREATE_EXAMS = 'create_exams',
  GRADE_ASSIGNMENTS = 'grade_assignments',
  VIEW_STUDENT_PROGRESS = 'view_student_progress',
  
  // Student permissions
  VIEW_COURSES = 'view_courses',
  SUBMIT_ASSIGNMENTS = 'submit_assignments',
  TAKE_EXAMS = 'take_exams',
  ACCESS_COMMUNITY = 'access_community'
}

// Permission mappings for each role
export const ROLE_PERMISSIONS = {
  [UserRole.ADMIN]: [
    Permission.MANAGE_USERS,
    Permission.MANAGE_CONTENT,
    Permission.MANAGE_PAYMENTS,
    Permission.SYSTEM_SETTINGS,
    Permission.VIEW_ANALYTICS,
    Permission.CREATE_COURSES,
    Permission.MANAGE_STUDENTS,
    Permission.CREATE_EXAMS,
    Permission.GRADE_ASSIGNMENTS,
    Permission.VIEW_STUDENT_PROGRESS,
    Permission.VIEW_COURSES,
    Permission.SUBMIT_ASSIGNMENTS,
    Permission.TAKE_EXAMS,
    Permission.ACCESS_COMMUNITY
  ],
  [UserRole.TEACHER]: [
    Permission.CREATE_COURSES,
    Permission.MANAGE_STUDENTS,
    Permission.CREATE_EXAMS,
    Permission.GRADE_ASSIGNMENTS,
    Permission.VIEW_STUDENT_PROGRESS,
    Permission.VIEW_COURSES,
    Permission.ACCESS_COMMUNITY
  ],
  [UserRole.STUDENT]: [
    Permission.VIEW_COURSES,
    Permission.SUBMIT_ASSIGNMENTS,
    Permission.TAKE_EXAMS,
    Permission.ACCESS_COMMUNITY
  ]
};

// Course Structure Levels
export enum CourseLevel {
  YEAR = 'year',
  TERM = 'term',
  UNIT = 'unit',
  LESSON = 'lesson'
}

// Assignment Status
export enum AssignmentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  SUBMITTED = 'submitted',
  GRADED = 'graded',
  OVERDUE = 'overdue'
}

// Exam Status
export enum ExamStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  GRADED = 'graded'
}

// Question Types
export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWER = 'short_answer',
  ESSAY = 'essay',
  FILL_BLANK = 'fill_blank'
}

// Payment Status
export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  CANCELLED = 'cancelled'
}

// Subscription Plans
export enum SubscriptionPlan {
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium',
  ENTERPRISE = 'enterprise'
}

// Notification Types
export enum NotificationType {
  ASSIGNMENT_DUE = 'assignment_due',
  EXAM_SCHEDULED = 'exam_scheduled',
  GRADE_RELEASED = 'grade_released',
  MESSAGE_RECEIVED = 'message_received',
  COURSE_UPDATED = 'course_updated',
  PAYMENT_SUCCESS = 'payment_success',
  SYSTEM_ANNOUNCEMENT = 'system_announcement'
}

// Platform Settings
export const PLATFORM_CONFIG = {
  APP_NAME: 'EduPlatform',
  VERSION: '1.0.0',
  DEFAULT_LOCALE: 'en',
  SUPPORTED_LOCALES: ['en', 'ar'],
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  MAX_LOGIN_ATTEMPTS: 5,
  PASSWORD_MIN_LENGTH: 6,
  FILE_UPLOAD_MAX_SIZE: 50 * 1024 * 1024, // 50MB
  VIDEO_UPLOAD_MAX_SIZE: 500 * 1024 * 1024, // 500MB
  SUPPORTED_FILE_TYPES: [
    'pdf', 'doc', 'docx', 'ppt', 'pptx', 
    'xls', 'xlsx', 'txt', 'jpg', 'jpeg', 
    'png', 'gif', 'mp4', 'avi', 'mov'
  ]
};

// API Endpoints
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
    VERIFY_EMAIL: '/api/auth/verify-email'
  },
  USERS: {
    PROFILE: '/api/users/profile',
    LIST: '/api/users',
    CREATE: '/api/users',
    UPDATE: '/api/users',
    DELETE: '/api/users'
  },
  COURSES: {
    LIST: '/api/courses',
    CREATE: '/api/courses',
    UPDATE: '/api/courses',
    DELETE: '/api/courses',
    ENROLL: '/api/courses/enroll'
  },
  ASSIGNMENTS: {
    LIST: '/api/assignments',
    CREATE: '/api/assignments',
    SUBMIT: '/api/assignments/submit',
    GRADE: '/api/assignments/grade'
  },
  EXAMS: {
    LIST: '/api/exams',
    CREATE: '/api/exams',
    TAKE: '/api/exams/take',
    SUBMIT: '/api/exams/submit'
  },
  PAYMENTS: {
    CREATE: '/api/payments',
    LIST: '/api/payments',
    REFUND: '/api/payments/refund'
  },
  NOTIFICATIONS: {
    LIST: '/api/notifications',
    MARK_READ: '/api/notifications/read'
  }
};

// Dashboard Routes
export const DASHBOARD_ROUTES = {
  STUDENT: {
    HOME: '/student/dashboard',
    COURSES: '/student/courses',
    ASSIGNMENTS: '/student/assignments',
    EXAMS: '/student/exams',
    COMMUNITY: '/student/community',
    MESSAGES: '/student/messages',
    PROFILE: '/student/profile',
    SETTINGS: '/student/settings'
  },
  TEACHER: {
    HOME: '/teacher/dashboard',
    COURSES: '/teacher/courses',
    STUDENTS: '/teacher/students',
    ASSIGNMENTS: '/teacher/assignments',
    EXAMS: '/teacher/exams',
    PAYMENTS: '/teacher/payments',
    MESSAGES: '/teacher/messages',
    REPORTS: '/teacher/reports',
    SETTINGS: '/teacher/settings'
  },
  ADMIN: {
    HOME: '/admin/dashboard',
    USERS: '/admin/users',
    CONTENT: '/admin/content-review',
    PAYMENTS: '/admin/payments',
    SUPPORT: '/admin/support',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings'
  }
};

// Theme Configuration
export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: 'hsl(var(--primary))',
    SECONDARY: 'hsl(var(--secondary))',
    ACCENT: 'hsl(var(--accent))',
    BACKGROUND: 'hsl(var(--background))',
    FOREGROUND: 'hsl(var(--foreground))',
    CARD: 'hsl(var(--card))',
    BORDER: 'hsl(var(--border))',
    INPUT: 'hsl(var(--input))',
    RING: 'hsl(var(--ring))'
  },
  BREAKPOINTS: {
    XS: '400px',
    SM: '575px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
    '3XL': '1600px',
    '4XL': '1950px'
  }
}; 