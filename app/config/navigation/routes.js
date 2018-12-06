import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [ // show on SideMenu
  {
    id: 'DashboardRoutes',
    title: '-----Dashboard-----',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardScreen,
  },
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
  {
    id: 'VictoryChartRoutes',
    title: 'Victory Chart',
    screen: Screens.VictoryChart,
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
// menuRoutes.unshift(
//   {...}
// );

export const MenuRoutes = menuRoutes; // for All App
