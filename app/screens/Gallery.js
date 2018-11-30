import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  RkGallery,
  RkText,
  RkButton,
} from 'react-native-ui-kitten';
import { UtilStyles } from '../config/UtilStyles';

export class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
  };
  static items = [
    'https://images.unsplash.com/photo-1543504941-5419816abbd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a03c8577439e99886738facd719f06&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543502421-9d79885218c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=770c5943c1ee8bd810aac6f2dd532e91&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4277e935148bb5633e99c023086b896&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543435957-1c690ff9f25b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15d44be5f1c07cd441c037c1c286f074&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543467936-ac0f5610b1df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7853055e3ecf453cdeed021b184f893&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543473111-ac6e23fcd158?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d3ecb71e17f5c89fa478b77e3e6b711a&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543393786-6f30facf16f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f22fefc3a66a524acf2e659d6b004dc&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543416869-67ba465f3ca8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e3a6580b2d8c8f75852a06ee2581336&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543352631-6b884eafab2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1067dcec106c57351450905e4216a839&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543393786-6b9844cc148d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef751854f2926d7a5bc562f0ee3eb2f&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543349689-727c21d183a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0519c5d6ff63e094b601abff09f136da&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1543380415-b5e6f27d29a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1a430340e293f5152ee344d6acf8712&auto=format&fit=crop&w=500&q=60',
    // require('../img/flowers.jpeg'),
  ];

  state = {
    customGallery: {
      previewImageIndex: undefined,
    },
  };

  // Customized gallery callbacks

  onGridItemClick = (item, index) => {
    console.log(`${this.constructor.name}: onGridItemClick: ${index}`);
  };

  onGalleryItemClick = (item, index) => {
    console.log(`${this.constructor.name}: onGalleryItemClick: ${index}`);
  };

  onGalleryItemChange = (change) => {
    this.state.customGallery.previewImageIndex = change.current;
    console.log(`${this.constructor.name}: onGalleryItemChange: ${JSON.stringify(change, null, 2)}`);
  };

  onGalleryItemScaleChange = (item, index, change) => {
    console.log(`${this.constructor.name}: onGalleryItemScaleChange: ${JSON.stringify(change, null, 2)}`);
  };

  renderGalleryHeader = (onRequestClose) => (
    <View style={customGalleryStyles.headerFooter}>
      <RkButton
        rkType='clear'
        onPress={onRequestClose}>
        Back
      </RkButton>
      <RkText
        style={customGalleryStyles.headerFooterText}
        rkType='header'>{this.state.customGallery.previewImageIndex + 1}/{GalleryScreen.items.length}
      </RkText>
    </View>
  );

  renderGalleryFooter = () => (
    <View style={customGalleryStyles.headerFooter}>
      <RkText
        rkType='header'
        style={customGalleryStyles.headerFooterText}>
        Likes
      </RkText>
      <RkText
        rkType='header'
        style={customGalleryStyles.headerFooterText}>
        Comments
      </RkText>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={UtilStyles.container}>
          <View style={styles.section}>
            <RkText style={styles.header} rkType='header'>Default implementation</RkText>
            <RkGallery items={GalleryScreen.items} />
          </View>
          <View style={styles.section}>
            <RkText style={styles.header} rkType='header'>Customized implementation</RkText>
            <RkGallery
              style={customGalleryStyles.container}
              itemStyle={customGalleryStyles.item}
              items={GalleryScreen.items}
              spanCount={4}
              renderGalleryHeader={this.renderGalleryHeader}
              renderGalleryFooter={this.renderGalleryFooter}
              onGridItemClick={this.onGridItemClick}
              onGalleryItemClick={this.onGalleryItemClick}
              onGalleryItemChange={this.onGalleryItemChange}
              onGalleryItemScaleChange={this.onGalleryItemScaleChange}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 8,
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 4,
  },
});

const customGalleryStyles = StyleSheet.create({
  container: {},
  item: {
    borderRadius: 8,
    margin: 1,
  },
  headerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  headerFooterText: {
    fontSize: 16,
    color: 'white',
  },
});
