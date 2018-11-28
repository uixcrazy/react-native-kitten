import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkCard,
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'.toUpperCase(),
  };

  onPressedViewFriendList = () => {
    this.props.navigation.navigate('ContactsRoutes');
  }

  render = () => {
    return (
      <ScrollView style={styles.screen}>
        <TouchableOpacity
          delayPressIn={70}
          activeOpacity={0.8}
          onPress={this.onPressedViewFriendList}>
          <RkCard style={styles.apCard}>
            <View rkCardHeader style={styles.sMiddle}>
              <View style={styles.contentNotification}>
                <RkText rkType='header6'>Friends List</RkText>
                <RkText rkType='secondary2 hintColor'>101 friends</RkText>
                <RkText rkType='secondary2 hintColor'>Bạn có <RkText rkType='secondary2' style={styles.labelImpact}>5</RkText> lời mời kết bạn mới</RkText>
              </View>
              <Icon name="angle-right" size={35} style={styles.iconNotification} />
            </View>
          </RkCard>
        </TouchableOpacity>
      </ScrollView>
    );
  };
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.scroll,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  apCard: {
    marginBottom: 10,
  },
  sMiddle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentNotification: {
    flex: 1,
  },
  iconNotification: {
    opacity: 0.8,
    color: theme.colors.primary,
  },
  labelImpact: {
    color: '#ff6b5c',
  },
}));

