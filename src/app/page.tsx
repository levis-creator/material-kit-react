'use client';

import { useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { Role } from '@/types/user';
import { useUser } from '@/hooks/use-user';

export default function Page(): never {
  const { user } = useUser();
  const [path, setpath] = useState<string>('');
  useEffect(() => {
    if (user?.role?.filter((role) => role[0] == Role.ADMIN)) {
      setpath('/dashboard/admin');
    } else if (user?.role?.filter((role) => role[0] == Role.FACILITATOR)) {
      setpath('/dashboard/facilitator');
    }
  }, []);

  console.log(path);

  redirect('/dashboard/admin');
}
