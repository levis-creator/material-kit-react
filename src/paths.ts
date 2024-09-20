export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    admin: {
      overview: '/dashboard/admin',
      account: '/dashboard/admin/account',
      customers: '/dashboarda/admin/customers',
      cohorts: { root: '/dashboard/admin/cohorts', add: '/dashboard/cohorts/add' },
      integrations: '/dashboard/admin/integrations',
    },
    facilitator: {
      overview: '/dashboard/facilitator',
      account: '/dashboard/admin/account',
      customers: '/dashboard/admin/customers',
      cohorts: { root: '/dashboard/facilitator/cohorts', add: '/dashboard/facilitator/cohorts/add' },
      integrations: '/dashboard/admin/integrations',
    },
    account: '/dashboard/account',
    settings: '/dashboard/settings',
    cohorts: { root: '/dashboard/cohorts', add: '/dashboard/cohorts/add' },
  },
  errors: { notFound: '/errors/not-found' },
} as const;
