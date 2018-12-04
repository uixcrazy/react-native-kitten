/**
 * RkModalImg ⇢ not good
 */
import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import {
  RkButton,
  RkModalImg,
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UtilStyles } from '../config/UtilStyles';

export class ImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Images',
  };

  static items = [
    require('../assets/images/gallery/flowers.jpeg'),
    require('../assets/images/gallery/animal.jpeg'),
    require('../assets/images/gallery/bird.jpeg'),
    require('../assets/images/gallery/clock.jpg'),
    require('../assets/images/gallery/fireworks.jpeg'),
    require('../assets/images/gallery/night.jpeg'),
    require('../assets/images/gallery/river.jpeg'),
    require('../assets/images/gallery/sea.jpg'),
    require('../assets/images/gallery/sun.jpg'),
    require('../assets/images/gallery/wood.jpeg'),
    require('../assets/images/gallery/flowers.jpeg'),
    require('../assets/images/gallery/tree.jpeg'),
  ];

  imageSize = (Dimensions.get('window').width - 16) / 3;

  extractGalleryItemKey = (item, index) => index.toString();

  onFooterLikeButtonPress = () => {
    Alert.alert('I Like it!');
  };

  renderCustomHeader = (options) => (
    <View style={styles.customHeader}>
      <RkButton
        rkType='clear link'
        onPress={options.closeImage}>Close
      </RkButton>
      <RkButton rkType='clear link'>
        <Icon style={styles.dot} name="circle" />
        <Icon style={styles.dot} name="circle" />
        <Icon style={styles.dot} name="circle" />
      </RkButton>
    </View>
  );

  renderCustomFooter = () => (
    <View style={styles.customFooter}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <RkButton
          rkType='clear small'
          onPress={this.onFooterLikeButtonPress}>
          <Icon style={styles.buttonIcon} name="heart" />
          <RkText rkType='inverse'>18</RkText>
        </RkButton>
      </View>
      <View style={{ flex: 1 }}>
        <RkButton rkType='clear small'>
          <Icon style={styles.buttonIcon} name="comment-o" />
          <RkText rkType='inverse'>2</RkText>
        </RkButton>
      </View>
      <View style={{ flex: 1 }}>
        <RkButton rkType='clear small'>
          <Icon style={styles.buttonIcon} name="send-o" />
          <RkText rkType='inverse'>7</RkText>
        </RkButton>
      </View>
    </View>
  );

  renderGalleryItemView = ({ item }) => (
    <RkModalImg
      style={{ width: this.imageSize, height: this.imageSize }}
      source={item}
    />
  );

  renderGallery = () => (
    <FlatList
      data={this.items}
      numColumns={3}
      renderItem={this.renderGalleryItemView}
      keyExtractor={this.extractGalleryItemKey}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={UtilStyles.container}>
          <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
            <RkText rkType='header' style={styles.header}>Basic example</RkText>
            <View style={[UtilStyles.rowContainer, { paddingLeft: 2 }]}>
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                source={{uri: "https://images.unsplash.com/photo-1543840302-34f367d7024f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                source={{uri: "https://images.unsplash.com/photo-1543825440-1ec8c14f5a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                source={{uri: "https://images.unsplash.com/photo-1543765457-b0842e5586b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
            </View>
          </View>
          <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
            <RkText rkType='header' style={styles.header}>Custom header and footer</RkText>
            <View style={[UtilStyles.rowContainer, { paddingLeft: 2 }]}>
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                renderFooter={this.renderCustomFooter}
                headerContentStyle={{ backgroundColor: 'red' }}
                source={{uri: "https://images.unsplash.com/photo-1543829012-fd36bb643fce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                renderFooter={this.renderCustomFooter}
                source={{uri: "https://images.unsplash.com/photo-1543810243-5dfc130b94ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
              <RkModalImg
                style={{ width: this.imageSize, height: this.imageSize }}
                renderHeader={this.renderCustomHeader}
                renderFooter={this.renderCustomFooter}
                source={{uri: "https://images.unsplash.com/photo-1543812801-6e4913552e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
              />
            </View>
          </View>
          <View style={[UtilStyles.section, UtilStyles.bordered, styles.imagesContainer]}>
            <RkText rkType='header' style={styles.header}>Gallery Example</RkText>
            <View style={[UtilStyles.rowContainer, { paddingLeft: 2 }]}>
              {this.renderGallery()}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imagesContainer: {
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  customHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  customFooter: {
    color: '#555',
    opacity: .2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dot: {
    fontSize: 6.5,
    marginLeft: 4,
    marginVertical: 6,
    color: theme.colors.text.inverse,
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7,
    color: theme.colors.text.inverse,
  },
}));
