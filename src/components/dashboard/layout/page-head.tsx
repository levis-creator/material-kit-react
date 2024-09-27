'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { StackSimple } from '@phosphor-icons/react';
import { Trash } from '@phosphor-icons/react/dist/ssr';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

interface PageHeaderProps {
  title: string;
  addEndpoint?: string;
  deleteButton?: boolean;
  deleteFunction?: () => void;
}
const PageHeader: FC<PageHeaderProps> = ({
  title = 'Title',
  addEndpoint = '',
  deleteButton = false,
  deleteFunction,
}) => {
  const router = useRouter();
  return (
    <Stack direction="row" spacing={3}>
      <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
        <Typography variant="h4">{title}</Typography>
        <Stack direction={'row'}>
          <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
            Import
          </Button>
          <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
            Export
          </Button>
        </Stack>
        <IconButton />
      </Stack>
      <Stack>
        <Button
          onClick={() => router.push(`${addEndpoint}`)}
          startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
          variant="contained"
        >
          Add
        </Button>
        {deleteButton && (
          <Button onClick={deleteFunction} color="error" startIcon={<Trash fontSize="var(--icon-fontSize-md)" />}>
            Delete
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default PageHeader;
