import AdminDashboard from './@admin/page';
import UserDashboard from './@user/page';

export default function Layout() {
  const role = 'user';
  return <>{role === 'user' ? <UserDashboard /> : <AdminDashboard />}</>;
}
