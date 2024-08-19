import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import KeywordPanel from './KeywordsPanel';
import PromptCategoryTreeView from './PromptCategoryTreeView';
import PromptFieldPanel from './PromptFieldPanel';

import { sampleData } from '../../data/savedPrompt';
import type { SavedPrompt } from '../../types';

const findPromptById = (
  data: SavedPrompt[],
  id: string
): SavedPrompt | undefined => {
  for (const item of data) {
    if (item.id === id) {
      return item;
    }

    if (item.children) {
      const found = findPromptById(item.children, id);
      if (found) {
        return found;
      }
    }
  }

  return undefined;
};

const PromptPanel = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<null | SavedPrompt>(
    null
  );

  const handleSelectedPrompt = (itemId: string) => {
    const searchPromptResult = findPromptById(sampleData, itemId);
    setSelectedPrompt(searchPromptResult || null);
    console.log('selectedPrompt:', selectedPrompt?.prompt);
  };

  const getPromptCategories = (): { id: string; label: string }[] => {
    return sampleData.map((item) => {
      return { id: item.id, label: item.label };
    });
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {selectedPrompt?.label || 'Prompt Panel'}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          border: '1px solid #333333',
        }}
      >
        <Box sx={{ width: '50%', border: '1px solid #333333', p: 2 }}>
          <PromptCategoryTreeView
            items={sampleData}
            onClick={handleSelectedPrompt}
          />
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #333333',
            p: 2,
          }}
        >
          <Box sx={{ height: '50%', m: 2, border: '1px solid #333333', p: 2 }}>
            <PromptFieldPanel
              prompt={selectedPrompt?.prompt || ''}
              categories={getPromptCategories()}
            />
          </Box>
          <Box
            sx={{
              height: '50%',
              mx: 2,
              border: '1px solid #333333',
              px: 2,
              boxSizing: 'content-box',
            }}
          >
            <KeywordPanel columns={selectedPrompt?.keywords} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PromptPanel;
