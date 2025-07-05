import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/routing';
import { PageHeader } from '@/_Components/Shared/PageHeader';
// Assuming a DataTable component exists and has this path
// import { DataTable, ColumnDef } from '@/_Components/Shared/DataTable'; 
import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';

type Props = {
  params: { locale: (typeof locales)[number] };
};

// Mock User Type
type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Teacher' | 'Student';
  status: 'Active' | 'Suspended';
  createdAt: string;
};

// Mock Data Fetch
async function getUsers(): Promise<User[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', createdAt: '2023-10-01' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Teacher', status: 'Active', createdAt: '2023-09-15' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'Student', status: 'Suspended', createdAt: '2023-08-20' },
    // Add more mock users
  ];
}

/*
// Mock Columns for DataTable - will uncomment when DataTable is available
const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'createdAt', header: 'Created At' },
];
*/

export default async function AdminUsersPage({ params: { locale } }: Props) {
  const t = await getTranslations('Admin.Users');
  const users = await getUsers();

  return (
    <div className="space-y-4">
      <PageHeader title={t('PageTitle')} subtitle={t('PageDescription')}>
        <Button>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          {t('AddUser')}
        </Button>
      </PageHeader>
      
      {/* 
        Placeholder for DataTable. I will integrate it once I can confirm its existence and API.
        For now, I'll just show a placeholder message.
      */}
      <div className="border rounded-lg p-4 h-96 flex items-center justify-center bg-card">
          <p className="text-muted-foreground">{t('DataTablePlaceholder')}</p>
      </div>

      {/* 
      <DataTable columns={columns} data={users} /> 
      */}
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Admin.Users' });
  return {
    title: t('Meta.title'),
    description: t('Meta.description'),
  };
} 