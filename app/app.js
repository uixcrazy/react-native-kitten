import React from 'react';
import { View } from 'react-native';
import {
  AppLoading,
  Font,
} from 'expo';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator, // maybe use createStackNavigator inside others
} from 'react-navigation';
import { withRkTheme } from 'react-native-ui-kitten';
import { AppRoutes } from './config/navigation/routesBuilder';
import { SideMenu } from './components';
import { bootstrap } from './config/bootstrap';
// import track from './config/analytics';
import { data } from '../app-kittenTricks/data';

bootstrap();
data.populateData();

const KittenApp = createAppContainer(
  createStackNavigator({
    WrapScreen: {
      screen: createDrawerNavigator(
        {
          ...AppRoutes,
        },
        {
          initialRouteName: 'DashboardRoutes',
          contentComponent: (props) => {
            const FinalSideMenu = withRkTheme(SideMenu);
            return <FinalSideMenu {...props} />;
          },
        },
      ),
    },
  }, {
    headerMode: 'none',
  })

  //     /*
  //     * Use modal on iOS because the card mode comes from the right,
  //     * which conflicts with the drawer example gesture
  //     */
  //     // mode: Platform.OS === 'ios' ? 'modal' : 'card',
  //   }
  // )
);

export default class App extends React.Component {
  state = {
    isLoaded: false,
  };

  componentWillMount() {
    this.loadAssets();
  }

  onNavigationStateChange = (previous, current) => {
    const screen = {
      current: this.getCurrentRouteName(current),
      previous: this.getCurrentRouteName(previous),
    };
    // if (screen.previous !== screen.current) {
    //   track(screen.current);
    // }
  };

  getCurrentRouteName = (navigation) => {
    const route = navigation.routes[navigation.index];
    return route.routes ? this.getCurrentRouteName(route) : route.routeName;
  };

  loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require('./assets/fonts/fontawesome.ttf'),
      icomoon: require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({ isLoaded: true });
  };

  renderLoading = () => (
    <AppLoading />
  );

  renderApp = () => (
    <View style={{ flex: 1 }}>
      <KittenApp onNavigationStateChange={this.onNavigationStateChange} />
    </View>
  );

  render = () => (this.state.isLoaded ? this.renderApp() : this.renderLoading());
}

Expo.registerRootComponent(App);
