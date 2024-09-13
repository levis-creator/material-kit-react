'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Button, Card, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { httpReq } from '@/lib/http-req';
import TextInput from '@/components/form/text-input';

const schema = zod.object({
  name: zod.string().min(1, { message: 'cohort name is required' }),
  location: zod.string().min(1, { message: 'Location is required' }),
  startDate: zod.string().min(1, { message: 'Start date is required' }),
});

type Values = zod.infer<typeof schema>;
const defaultValues = { name: '', location: '', startDate: '' } satisfies Values;

const CohortForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);
      const data = await httpReq.postData('cohorts', values);
      console.log(values);
      if (data?.success) {
        router.back();
        reset();
        setIsPending(false);
      } else {
        setError('root', { type: 'server', message: data?.message });
      }
    },
    [setError, router]
  );

  return (
    <Card
      sx={{
        padding: '10px',
        paddingBlock: '30px',
        paddingInline: '20px',
        width: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Stack>
        <Typography variant="h5">Add Cohort</Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextInput control={control} errors={errors.name} label="Cohort Name" name="name" />
          <TextInput control={control} errors={errors.location} label="Location" name="location" />
          <TextInput
            control={control}
            errors={errors.startDate}
            label="Start Date"
            name="startDate"
            type="Date"
            focused
          />
          {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
        </Stack>
        <Button disabled={isPending} type="submit" variant="contained">
          Add
        </Button>
      </form>
    </Card>
  );
};

export default CohortForm;
