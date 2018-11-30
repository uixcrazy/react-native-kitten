import React from 'react';
import {
  View,
  Text,
  Platform,
  Button,
  StyleSheet,
} from 'react-native';
import {
  Asset,
  AppLoading,
  Constants,
  Font,
} from 'expo';
import {
  createAppContainer,
  SafeAreaView,
  createStackNavigator,
} from 'react-navigation';
import { Assets as StackAssets } from 'react-navigation-stack';

import Drawer from './Drawer';
import ModalStack from './ModalStack'; // 'Stack with Dynamic Header',

// import { withRkTheme } from 'react-native-ui-kitten';
// import { AppRoutes } from './config/navigation/routesBuilder';
// import * as Screens from './screens';
// import { bootstrap } from './config/bootstrap';
// import { data } from '../app-kittenTricks/data';

const ExampleInfo = {
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
  },
  ModalStack: {
    name:
      Platform.OS === 'ios'
        ? 'Modal Stack Example'
        : 'Stack with Dynamic Header',
    description:
      Platform.OS === 'ios'
        ? 'Stack navigation with modals'
        : 'Dynamically showing and hiding the header',
  },
};

const ExampleRoutes = {
  Drawer: Drawer,
  ModalStack: ModalStack,
};


class MainScreen extends React.Component {
  componentDidMount() {
    Asset.loadAsync(StackAssets);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
        {Object.keys(ExampleRoutes).map((routeName) => (
          <Button
            key={routeName}
            underlayColor="#ccc"
            activeOpacity={0.3}
            title={ExampleInfo[routeName].name}
            onPress={() => {
              let route = ExampleRoutes[routeName];
              if (route.screen || route.path || route.params) {
                const { path, params, screen } = route;
                const { router } = screen;
                const action =
                  path &&
                  router.getActionForPathAndParams(path, params);
                navigation.navigate(routeName, {}, action);
              } else {
                navigation.navigate(routeName);
              }
            }}
          />
        ))}
      </View>
    );
  }
}

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      ...ExampleRoutes,
      Index: {
        screen: MainScreen,
      },
    },
    {
      initialRouteName: 'Index',
      headerMode: 'none',

      /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppNavigator /* persistenceKey="if-you-want-it" */ />;
  }
}


const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: -100,
    height: 300,
    left: 0,
    right: 0,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    marginVertical: 8,
    marginRight: 5,
  },
});