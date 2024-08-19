import type { SavedPrompt } from '../types.d';

export const sampleData: SavedPrompt[] = [
  {
    id: '1',
    label: 'Parent 1',
    prompt: 'This is the prompt for Parent 1',
  },
  {
    id: '2',
    label: 'Parent 2',
    prompt: 'This is the prompt for Parent 2',
  },
  {
    id: '3',
    label: 'Parent 3',
    prompt: 'This is the prompt for Parent 3',
    children: [
      {
        id: '3-1',
        label: 'Child 1 of Parent 3',
        prompt: 'This is the prompt for Child 1 of Parent 3',
        keywords: ['keyword1', 'keyword2'],
      },
      {
        id: '3-2',
        label: 'Child 2 of Parent 3',
        prompt: 'This is the prompt for Child 2 of Parent 3',
        keywords: ['keyword3', 'keyword4'],
      },
      {
        id: '3-3',
        label: 'Child 3 of Parent 3',
        prompt: 'This is the prompt for Child 3 of Parent 3',
      },
    ],
  },
  {
    id: '4',
    label: 'Parent 4',
    prompt: 'This is the prompt for Parent 4',
    children: [
      {
        id: '4-1',
        label: 'Child 1 of Parent 4',
        prompt: 'This is the prompt for Child 1 of Parent 4',
        keywords: ['keyword1', 'keyword2'],
      },
      {
        id: '4-2',
        label: 'Child 2 of Parent 4',
        prompt: 'This is the prompt for Child 2 of Parent 4',
        keywords: ['keyword3', 'keyword4'],
      },
      {
        id: '4-3',
        label: 'Child 3 of Parent 4',
        prompt: 'This is the prompt for Child 3 of Parent 4',
        keywords: ['keyword5', 'keyword6'],
      },
    ],
  },
  {
    id: '5',
    label: 'Parent 5',
    prompt: 'This is the prompt for Parent 5',
    children: [
      {
        id: '5-1',
        label: 'Child 1 of Parent 5',
        prompt: 'This is the prompt for Child 1 of Parent 5',
      },
      {
        id: '5-2',
        label: 'Child 2 of Parent 5',
        prompt: 'This is the prompt for Child 2 of Parent 5',
      },
      {
        id: '5-3',
        label: 'Child 3 of Parent 5',
        prompt: 'This is the prompt for Child 3 of Parent 5',
      },
    ],
  },
];
