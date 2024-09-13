'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

interface PageHeaderProps {
  title: string;
  addEndpoint?: string;
}
const PageHeader: FC<PageHeaderProps> = ({ title = 'Title', addEndpoint = '' }) => {
  const router = useRouter();
  return (
    <Stack direction="row" spacing={3}>
      <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
        <Typography variant="h4">{title}</Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
            Import
          </Button>
          <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
            Export
          </Button>
        </Stack>
      </Stack>
      <div>
        <Button
          onClick={() => router.push(`${addEndpoint}`)}
          startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
          variant="contained"
        >
          Add
        </Button>
      </div>
    </Stack>
  );
};

export default PageHeader;
