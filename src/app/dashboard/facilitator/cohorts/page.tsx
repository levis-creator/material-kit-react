'use client';

import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

import { paths } from '@/paths';
import { httpReq } from '@/lib/http-req';
import { Cohort, CohortTable } from '@/components/dashboard/cohorts/cohort-table';
import PageHeader from '@/components/dashboard/layout/page-head';

const Page = () => {
  const [data, setData] = useState<Cohort[]>([]);
  const [deleteData, setDeleteData] = useState<boolean>(false);
  const [deleteList, setDeleteList] = useState<any[]>([]);
  useEffect(() => {
    if (data.length == 0) {
      httpReq.getData('cohorts').then((res) => setData(res));
    }
  }, []);
  //this is activating the delete function with the application
  useEffect(() => {
    if (deleteList.length == 0) {
      setDeleteData(false);
    } else {
      setDeleteData(true);
    }
  }, [deleteList]);
  const handleDeletedItems = (items: any[]) => {
    setDeleteList(items);
  };
  const handleDelete = async () => {
    await httpReq.deleteData('cohorts/multi', undefined, deleteList);
    setData([]);
    setDeleteList([]);
    setDeleteData(false);
  };
  return (
    <Stack spacing={3}>
      <PageHeader
        title="Cohorts"
        addEndpoint={paths.dashboard.facilitator.cohorts.add}
        deleteButton={deleteData}
        deleteFunction={handleDelete}
      />
      <CohortTable count={data.length} rows={data} dataSelected={handleDeletedItems} />
    </Stack>
  );
};

export default Page;
