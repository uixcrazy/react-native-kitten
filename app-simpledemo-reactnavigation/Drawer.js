import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  SafeAreaView,
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <SampleText>{banner}</SampleText>
      <View onPress={() => navigation.openDrawer()} title="Open drawer" />
      <View
        onPress={() => navigation.navigate('Email')}
        title="Open other screen"
      />
      <View onPress={() => navigation.navigate('Index')} title="Go back" />
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  headerTitle: 'Inbox',
};

const EmailScreen = ({ navigation }) => (
  <MyNavScreen banner={'Email Screen'} navigation={navigation} />
);

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  headerTitle: 'Drafts',
};

const InboxStack = createStackNavigator(
  {
    Inbox: { screen: InboxScreen },
    Email: { screen: EmailScreen },
  },
  {
    navigationOptions: {
      drawerLabel: 'Inbox',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />
      ),
    },
  }
);

const DraftsStack = createStackNavigator(
  {
    Drafts: { screen: DraftsScreen },
    Email: { screen: EmailScreen },
  },
  {
    navigationOptions: {
      drawerLabel: 'Drafts',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
      ),
    },
  }
);

const DrawerExample = createDrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxStack,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsStack,
    },
  },

  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default DrawerExample;
