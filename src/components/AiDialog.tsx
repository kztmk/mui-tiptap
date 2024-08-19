import { Dialog, DialogContent } from '@mui/material';
import { Editor } from '@tiptap/react';
import { useState } from 'react';
import { ILabels } from '../types';

import PromptPanel from './promptPanel';

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
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          minWidth: '450px',
          height: '600px',
        },
      }}
    >
      <DialogContent
        sx={{
          height: '600px',
          padding: 0, // Allotmentの表示を改善するためにpaddingをゼロに
        }}
      >
        <PromptPanel />
      </DialogContent>
    </Dialog>
  );
};

export default AiDialog;
