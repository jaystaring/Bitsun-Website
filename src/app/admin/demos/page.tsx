import { Metadata } from 'next';
import DemosPage from './DemosPage';

export const metadata: Metadata = {
  title: '预约演示记录 - 比升演示管理后台',
};

export default function Demos() {
  return <DemosPage />;
}
