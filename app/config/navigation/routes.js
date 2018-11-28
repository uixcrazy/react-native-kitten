import _ from 'lodash';
import { FontIcons } from '../../../app-kittenTricks/assets/icons';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'DashboardRoutes',
    title: 'Dashboard',
    icon: FontIcons.dashboard,
    screen: Screens.Dashboard,
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
// menuRoutes.unshift({
//   id: 'GridV2',
//   title: 'Start',
//   screen: Screens.GridV2,
//   children: [],
// });

export const MenuRoutes = menuRoutes;
