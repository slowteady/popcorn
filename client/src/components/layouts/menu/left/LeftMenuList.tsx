import { Box, List, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText, styled } from '@mui/material';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../../common/icon/Icon';

interface MenuData {
  title: string;
  path: string;
  icon: string;
}

interface ListItemProps {
  item: MenuData;
}

interface LeftMenuListProps {
  data: MenuData[];
}

const ListItem = ({ item }: ListItemProps) => {
  const { title, path, icon } = item;
  return (
    <StyledListItem component={NavLink} to={path} sx={styledListItemSx}>
      <StyledListItemIcon>
        <Icon icon={icon} />
      </StyledListItemIcon>
      <ListItemText disableTypography primary={title} />
    </StyledListItem>
  );
};

const LeftMenuList = ({ data = [], ...other }: LeftMenuListProps) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((items) => (
          <ListItem key={items.title} item={items} />
        ))}
      </List>
    </Box>
  );
};

const StyledListItem = styled((props: ListItemButtonProps) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius
  })
) as typeof ListItemButton;

const StyledListItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const styledListItemSx = {
  '&.active': {
    color: 'text.primary',
    bgcolor: 'action.selected',
    fontWeight: 'fontWeightBold'
  }
};

export default memo(LeftMenuList);
