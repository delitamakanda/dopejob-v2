// assets
import { IconDashboard, IconDeviceAnalytics, IconMessage, IconReportMoney, IconWallet } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
    IconMessage: IconMessage,
    IconReportMoney: IconReportMoney,
    IconWallet: IconWallet,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'item',
            url: '/dashboard/jobs',
            icon: icons['IconReportMoney'],
            breadcrumbs: false
        },
        {
            id: 'message',
            title: 'My messages',
            type: 'item',
            url: '/user/messages',
            icon: icons['IconMessage'],
            breadcrumbs: false
        },
        {
            id: 'offers',
            title: 'My offers',
            type: 'item',
            url: '/user/offers',
            icon: icons['IconWallet'],
            breadcrumbs: false
        }
    ]
};
