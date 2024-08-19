import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  TextField,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
type Props = {
  prompt: string;
  categories: { id: string; label: string }[];
};

const PromptFieldPanel = (props: Props) => {
  const { prompt, categories } = props;
  const [values, setValues] = useState(prompt);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    label: string;
  }>({ id: '', label: '' });
  const [title, setTitle] = useState('');

  useEffect(() => {
    setValues(prompt);
  }, [prompt]);

  const open = Boolean(anchorEl);
  const handleClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent<{ value: string }>) => {
    const selected = categories.find(
      (category) => category.id === event.target.value
    );
    if (selected) {
      setSelectedCategory(selected);
    }
  };

  const handleSavePrompt = () => {
    console.log(`selectedCategory: ${selectedCategory}--titel:${title}`);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="プロンプト"
        multiline
        value={values}
        onChange={handleOnChange}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          gap: 2,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleClickSave}>
          保存
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              m: 1,
              p: 2,
            }}
          >
            <InputLabel id="category">カテゴリ</InputLabel>
            <Select
              id="category"
              label="カテゴリ"
              value={selectedCategory?.id ?? { value: '' }}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="title">タイトル</InputLabel>
            <TextField
              id="title"
              name="タイトル"
              onChange={handleChangeTitle}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSavePrompt}
            >
              保存
            </Button>
          </Box>
        </Popover>
        <Button variant="contained" color="secondary">
          実行
        </Button>
      </Box>
    </Box>
  );
};

export default PromptFieldPanel;
