import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// ----------------------------------------------------------------------
// 좌측 메뉴 리스트 설정
// ----------------------------------------------------------------------

const listConfig = [
  {
    title: "Most Popular",
    path: "/menu/popular",
    Icon: ThumbUpIcon,
  },
  {
    title: "My Like",
    path: "/menu/like",
    Icon: FavoriteIcon,
  },
];

export default listConfig;
