import React from 'react';
import { Stack } from '@mui/material';

import CohortForm from '@/components/dashboard/cohorts/cohort-form';

const Page = () => {
  return (
    <Stack spacing={3}>
      <CohortForm />
    </Stack>
  );
};

export default Page;
