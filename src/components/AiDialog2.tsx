import { Box, Button, Dialog, DialogContent } from '@mui/material';
import { Editor } from '@tiptap/react';
import { Allotment } from 'allotment';
import { useState } from 'react';
import { ILabels } from '../types';

import { sampleData } from '../data/savedPrompt';
import PromptCategoryTreeView from './promptPanel/PromptCategoryTreeView';

type Props = {
  editor: Editor;
  open: boolean;
  onClose: () => void;
  labels?: ILabels['AI'];
};

const AiDialog = ({ editor, open, onClose, labels }: Props) => {
  const [visible, setVisible] = useState(true);

  const handleToggleVisible = () => {
    setVisible((prev) => !prev);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title={labels?.title || 'AI panel'}
      disablePortal
    >
      <DialogContent
        sx={{
          minWidth: '450px',
          height: '600px',
          minHeight: '350px',
          resize: 'both',
          overflow: 'auto',
        }}
      >
        <Box
          sx={{
            minWidth: '450px',
            height: '600px',
            minHeight: '350px',
            resize: 'both',
          }}
        >
          <Allotment snap vertical minSize={150} maxSize={600}>
            <Box
              sx={{
                backgroundColor: 'blue',
                mixHeight: '10px',
                maxHeight: '800px',
                boxSizing: 'border-box',
                border: '1px solid black',
                m: 0,
              }}
            >
              <div>prompt</div>
              <Button onClick={handleToggleVisible}>toggle</Button>
            </Box>

            <Box
              sx={{
                backgroundColor: 'red',
                overflow: 'auto',
                boxSizing: 'border-box',
                maxHeight: '1000px',
                minSize: '150px',
              }}
            >
              <PromptCategoryTreeView items={sampleData} />
            </Box>
          </Allotment>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AiDialog;
