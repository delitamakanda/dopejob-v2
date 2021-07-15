// assets
import { IconDashboard, IconDeviceAnalytics, IconMessage } from '@tabler/icons';

// constant
const icons = {
    IconDashboard: IconDashboard,
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
            icon: icons['IconDashboard'],
            breadcrumbs: false
        },
        {
            id: 'message',
            title: 'My messages',
            type: 'item',
            url: '/user/messages',
            icon: icons['IconDashboard'],
            breadcrumbs: false
        }
    ]
};
