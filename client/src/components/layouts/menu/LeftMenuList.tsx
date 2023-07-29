import {
  Box,
  List as BoxList,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Iconify from "../../iconify/Iconify";

// ----------------------------------------------------------------------
// 좌측 메뉴 리스트 컴포넌트
// ----------------------------------------------------------------------

const StyledListItem = styled((props: ListItemButtonProps) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
})) as typeof ListItemButton;

const StyledListItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// ----------------------------------------------------------------------

interface Item {
  title: string;
  path: string;
  icon: string;
}

interface ListProps {
  data: Item[];
}

interface ItemProps {
  item: Item;
}

const ListItem: FunctionComponent<ItemProps> = ({ item }) => {
  const { title, path, icon } = item;

  return (
    <StyledListItem
      component={NavLink}
      to={path}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledListItemIcon>
        <Iconify icon={icon} />
      </StyledListItemIcon>
      <ListItemText disableTypography primary={title} />
    </StyledListItem>
  );
};

const LeftMenuList: FunctionComponent<ListProps> = ({
  data = [],
  ...other
}) => {
  return (
    <Box {...other}>
      <BoxList disablePadding sx={{ p: 1 }}>
        {data.map((items) => (
          <ListItem key={items.title} item={items} />
        ))}
      </BoxList>
    </Box>
  );
};

export default LeftMenuList;
