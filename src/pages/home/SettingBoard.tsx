import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { BOARD_COLS, BOARD_ROWS } from 'config/constants';

type SettingBoardProps = {
  cellPxSize: number;
  cellId?: string;
};

export default function SettingBoard({
  cellPxSize,
  cellId = '',
  children,
}: PropsWithChildren<SettingBoardProps>) {
  const boardContainerStyle = {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: `repeat(${BOARD_COLS}, ${cellPxSize}px)`,
    gridTemplateRows: `repeat(${BOARD_ROWS}, ${cellPxSize}px)`,
    gap: '1px',
    padding: '5px',
    backgroundColor: '#f0f0f0',
  };

  const cellStyle = {
    width: `${cellPxSize}px`,
    height: `${cellPxSize}px`,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const cellIndexes = Array.from(
    { length: BOARD_ROWS * BOARD_COLS },
    (_, i) => i,
  );

  return (
    <Box sx={boardContainerStyle}>
      {cellIndexes.map((index) => (
        <Box //
          key={index}
          id={cellId}
          data-index={index}
          sx={cellStyle}
        />
      ))}
      {children}
    </Box>
  );
}
