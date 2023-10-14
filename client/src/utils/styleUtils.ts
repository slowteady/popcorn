import { alpha } from '@mui/material';

interface BgBlurProps {
  color?: string;
  blur?: number;
  opacity?: number;
}

export const bgBlur = (props: BgBlurProps) => {
  const color = props.color || '#000000';
  const blur = props.blur || 6;
  const opacity = props.opacity || 0.8;

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity)
  };
};

export const whichContainerSize = (isCollection: boolean) => {
  return isCollection
    ? {
        itemSize: { xs: 8, sm: 7, md: 6, lg: 6 },
        itemSx: { p: 1 },
        cardSx: { p: 1, cursor: 'pointer' },
        cartSize: { xs: 4, sm: 5, md: 6, lg: 6 },
        gridSx: { maxHeight: '525px', overflowY: 'auto', mt: 5 },
        boxSx: { minHeight: '200px', position: 'relative' }
      }
    : {
        containerSize: { spacing: 2 },
        itemSize: { xs: 8, sm: 6, md: 3, lg: 3 },
        cardSx: { cursor: 'pointer' },
        boxSx: { minHeight: '405px', position: 'relative' }
      };
};
