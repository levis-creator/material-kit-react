export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    admin: {
      overview: '/dashboard/admin',
      account: '/dashboard/admin/account',
      customers: '/dashboarda/admin/customers',
      integrations: '/dashboard/admin/integrations',
      settings: '/dashboard/admin/settings',
    },
  },
  errors: { notFound: '/errors/not-found' },
} as const;
