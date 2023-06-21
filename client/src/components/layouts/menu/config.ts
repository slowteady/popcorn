import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';

// ----------------------------------------------------------------------
// 좌측 메뉴 리스트 설정
// ----------------------------------------------------------------------

const listConfig = [
  {
    title: "Movies",
    path: "/menu/popular",
    Icon: MovieIcon,
  },
  {
    title: "My Like",
    path: "/menu/like",
    Icon: FavoriteIcon,
  },
];

export default listConfig;
