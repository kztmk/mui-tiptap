import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

const DynamicTextFields = ({ columns }: { columns: string[] | undefined }) => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const handleChange =
    (column: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [column]: event.target.value,
      });
    };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1, // TextField同士の間隔を開ける
        border: '1px solid black',
        padding: 0,
        overflow: 'auto',
        height: '100%',
      }}
    >
      {columns &&
        columns.map((column) => (
          <TextField
            key={column}
            label={`TextField_${column.toUpperCase()}`}
            value={values[column] || ''}
            onChange={handleChange(column)}
            variant="outlined"
          />
        ))}
    </Box>
  );
};

export default DynamicTextFields;
