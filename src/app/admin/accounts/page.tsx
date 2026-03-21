import { Metadata } from 'next';
import AccountsPage from './AccountsPage';

export const metadata: Metadata = {
  title: '账号管理 - 比升演示管理后台',
};

export default function Accounts() {
  return <AccountsPage />;
}
