'use client';

import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import { httpReq } from '@/lib/http-req';
import { Cohort, CohortTable } from '@/components/dashboard/cohorts/cohort-table';
import PageHeader from '@/components/dashboard/layout/page-head';

import { paths } from '../../../paths';

const Page = () => {
  const [data, setData] = useState<Cohort[]>([]);
  useEffect(() => {
    httpReq.getData('cohorts').then((res) => setData(res));
  }, []);
  return (
    <Stack spacing={3}>
      <PageHeader title="Cohorts" addEndpoint={paths.dashboard.cohorts.add} />
      <CohortTable count={data.length} rows={data} />
    </Stack>
  );
};

export default Page;
