import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [ // show on SideMenu
  {
    id: 'ButtonRoutes',
    title: 'Button',
    screen: Screens.ButtonScreen,
  },
  {
    id: 'CardRoutes',
    title: 'Card',
    screen: Screens.CardScreen,
  },
  {
    id: 'ImageRoutes',
    title: 'Image',
    screen: Screens.ImageScreen,
  },
  {
    id: 'GalleryRoutes',
    title: 'Gallery',
    screen: Screens.GalleryScreen,
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift(
  {
    id: 'DashboardRoutes',
    title: '-----Dashboard-----',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardScreen,
  },
);

export const MenuRoutes = menuRoutes; // for All App
