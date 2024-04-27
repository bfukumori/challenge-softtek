import { Header } from '@/components/header';

import AdminDashboard from './@admin/page';
import UserDashboard from './@user/page';

export default function Layout() {
  const role = 'admin';
  return (
    <>
      <Header />
      {role === 'admin' ? <UserDashboard /> : <AdminDashboard />}
    </>
  );
}
