import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItemsFacilitator = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.facilitator.overview, icon: 'chart-pie' },
  { key: 'cohorts', title: 'Cohorts', href: paths.dashboard.facilitator.cohorts.root, icon: 'users3' },
  { key: 'integrations', title: 'Integrations', href: '#', icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
