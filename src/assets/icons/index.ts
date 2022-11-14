import Logout from '@assets/icons/logout.svg';
import Search from '@assets/icons/search.svg';
import Star from '@assets/icons/star.svg';

export const icon = {
  logout: Logout,
  search: Search,
  star: Star,
};

export type IconName = keyof typeof icon;
