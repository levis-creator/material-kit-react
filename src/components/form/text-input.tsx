import React, { FC } from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { Controller } from 'react-hook-form';

interface TextInputProps {
  control: any;
  errors: any;
  name: string;
  label: string;
  type?: string;
  focused?: boolean;
}
const TextInput: FC<TextInputProps> = ({ control, errors, name, label, type = 'text', focused }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={Boolean(errors)} focused={focused}>
          <InputLabel>{label}</InputLabel>
          <OutlinedInput {...field} label={label} type={type} />
          {errors ? <FormHelperText>{errors.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  );
};

export default TextInput;
