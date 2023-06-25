import React from 'react';
import NewChildNode from './components/newChildNode';

export interface AboutNodes {
  id?: string;
  type?: string;
  position?: {
    x: number;
    y: number;
  };
  data?: { label: React.JSX.Element };
  style?: {
    visibility?: CheckVisibilityOptions | string;
    minWidth?: number | string;
    minHeight?: number | string;
    backgroundColor?: string;
  };
  currentNumber?: string;
}

export const initialNodes: AboutNodes[] = [
  {
    id: '1',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: <NewChildNode /> },
    style: {
      minWidth: '200px',
      minHeight: '140px',
      backgroundColor: '#D1E7DD',
    },
  },
];
