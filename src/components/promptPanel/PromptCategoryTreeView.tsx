import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Paper from '@mui/material/Paper';
import { RichTreeView } from '@mui/x-tree-view';

import type { SavedPrompt } from '../../types';

type Props = {
  items: SavedPrompt[];
  onClick: (itemId: string) => void;
};

const PromptCategoryTreeView = ({ items, onClick }: Props) => {
  return (
    <Paper sx={{ width: '80%', height: '100%' }}>
      <Box>
        <Box>
          <ButtonGroup sx={{ p: 2 }}>
            <Button>Add Category</Button>
            <Button>Edit Category</Button>
            <Button>Delete Category</Button>
          </ButtonGroup>
        </Box>
        <RichTreeView
          items={items}
          onItemClick={(event, itemId) => onClick(itemId)}
        />
      </Box>
    </Paper>
  );
};

export default PromptCategoryTreeView;
