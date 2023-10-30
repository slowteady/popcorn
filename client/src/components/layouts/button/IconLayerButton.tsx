import { IconButton, Popover, PopoverOrigin, SxProps, alpha } from '@mui/material';
import { ComponentPropsWithoutRef, MouseEvent, ReactNode, useState } from 'react';
import Icon from '../../common/icon/Icon';

type OtherProps = ComponentPropsWithoutRef<typeof IconButton>;

interface IconLayerButtonProps extends OtherProps {
  icon: string;
  width?: number;
  layerSx?: SxProps;
  children?: ReactNode;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

const IconLayerButton = ({
  icon,
  width,
  layerSx,
  anchorOrigin,
  transformOrigin,
  children,
  ...other
}: IconLayerButtonProps) => {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState<HTMLButtonElement | null>();

  const onLayer = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setElement(e.currentTarget);
  };

  const closeLayer = () => {
    setOpen(false);
    setElement(null);
  };

  return (
    <>
      <IconButton
        onClick={onLayer}
        sx={{
          p: 0,
          '&:hover': {
            bgcolor: '#698169'
          },
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.6)
            }
          })
        }}
        {...other}
      >
        <Icon icon={icon} width={width} />
      </IconButton>
      <Popover
        open={element ? true : false}
        anchorEl={element}
        onClose={closeLayer}
        anchorOrigin={{ ...defaultAnchorOrigin, ...anchorOrigin }}
        transformOrigin={{ ...defaultTransformOrigin, ...transformOrigin }}
        sx={{ ...layerSx }}
      >
        {children}
      </Popover>
    </>
  );
};

const defaultAnchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'right'
};

const defaultTransformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'right'
};

export default IconLayerButton;
