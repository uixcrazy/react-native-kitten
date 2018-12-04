import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkCard,
  RkTheme,
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UtilStyles } from '../config/UtilStyles';
import { ImageIcon } from '../components/imageIcon';

export class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Cards',
  };

  render() {
    const likeStyle = [styles.buttonIcon, { color: RkTheme.colors.accent }];
    const iconButton = [styles.buttonIcon, { color: RkTheme.current.colors.text.hint }];
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          style={[UtilStyles.container, styles.screen]}>
          <RkCard>
            <View rkCardHeader={true}>
              <View>
                <RkText rkType='header3'>Header</RkText>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <Image rkCardImg={true} source={{uri: "https://images.unsplash.com/photo-1543421642-f970c031a366"}} />
            <View rkCardContent={true}>
              <RkText rkType='cardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true} style={styles.footer}>
              <RkButton rkType='clear link'>
                <Icon name="heart" style={likeStyle} />
                <RkText rkType='accent' style={styles.footerFontSize}>18 Likes</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="comment-o" style={iconButton} />
                <RkText rkType='hint' style={styles.footerFontSize}>2 Comments</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="send-o" style={iconButton} />
                <RkText rkType='hint' style={styles.footerFontSize}>6 Shares</RkText>
              </RkButton>
            </View>
          </RkCard>
          <RkCard>
            <View rkCardHeader={true}>
              <View>
                <RkText rkType='header'>Header</RkText>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <Image rkCardImg={true} source={{uri: "https://images.unsplash.com/photo-1543467936-ac0f5610b1df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7853055e3ecf453cdeed021b184f893&auto=format&fit=crop&w=500&q=60s"}} />
            <View rkCardContent={true}>
              <RkText rkType='cardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true} style={styles.footer}>
              <RkButton rkType='clear link accent'>
                <Icon name="heart" style={likeStyle} />
                <RkText rkType='accent'>18</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="comment-o" style={iconButton} />
                <RkText rkType='hint'>2</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="send-o" style={iconButton} />
                <RkText rkType='hint'>6</RkText>
              </RkButton>
            </View>
          </RkCard>
          <RkCard>
            <View rkCardHeader={true}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{uri: "https://uinames.com/api/photos/female/17.jpg"}} style={styles.avatar} />
                <View style={{}}>
                  <RkText rkType='header5'>Elena Zhukova</RkText>
                  <RkText rkType='subtitle'>6 minutes ago</RkText>
                </View>
              </View>
              <RkButton rkType='clear'>
                <Icon style={styles.dot} name="circle" />
                <Icon style={styles.dot} name="circle" />
                <Icon style={styles.dot} name="circle" />
              </RkButton>
            </View>
            <View rkCardContent={true}>
              <RkText rkType='cardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true} style={styles.footer}>
              <RkButton rkType='clear link accent'>
                <Icon name="heart" style={likeStyle} />
                <RkText rkType='accent'>18</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="comment-o" style={iconButton} />
                <RkText rkType='hint'>2</RkText>
              </RkButton>
              <RkButton rkType='clear link'>
                <Icon name="send-o" style={iconButton} />
                <RkText rkType='hint'>6</RkText>
              </RkButton>
            </View>
          </RkCard>
          <RkCard rkType='shadowed'>
            <View>
              <Image rkCardImg={true} source={{uri: "https://unsplash.com/photos/mm8pTk1-chE"}} />
              <View rkCardImgOverlay={true} />
            </View>
            <RkButton rkType='circle accent-bg' style={styles.floating}>
              <ImageIcon name='plus' />
            </RkButton>
            <View rkCardHeader={true} style={{ paddingBottom: 2.5 }}>
              <View>
                <RkText rkType='header xxlarge'>Header</RkText>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <View rkCardContent={true}>
              <RkText rkType='compactCardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true}>
              <View style={styles.footerButtons}>
                <RkButton rkType='clear action' style={{ marginRight: 16 }}>SHARE</RkButton>
                <RkButton rkType='clear action'>EXPLORE</RkButton>
              </View>
            </View>
          </RkCard>
          <RkCard rkType='shadowed'>
            <View>
              <Image rkCardImg={true} source={{uri: "https://unsplash.com/photos/hG8TiCJ9bXA"}} />
              <View rkCardImgOverlay={true} style={styles.overlay}>
                <RkText rkType='header xxlarge' style={{ color: 'white' }}>Header</RkText>
              </View>
            </View>
            <RkButton rkType='circle accent-bg' style={styles.floating}>
              <ImageIcon name='plus' />
            </RkButton>
            <View rkCardHeader={true} style={{ paddingBottom: 2.5 }}>
              <View>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <View rkCardContent={true}>
              <RkText rkType='compactCardText'>
                Far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
              </RkText>
            </View>
            <View rkCardFooter={true}>
              <View style={styles.footerButtons}>
                <RkButton rkType='clear action' style={{ marginRight: 16 }}>SHARE</RkButton>
                <RkButton rkType='clear action'>EXPLORE</RkButton>
              </View>
            </View>
          </RkCard>
          <RkCard rkType='heroImage shadowed'>
            <View>
              <Image rkCardImg={true} source={{uri: "https://images.unsplash.com/photo-1543842025-c7fc5de13626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}/>
              <View rkCardImgOverlay={true} style={styles.overlay}>
                <View style={{ marginBottom: 20 }}>
                  <RkText rkType='header xxlarge' style={{ color: 'white' }}>Header</RkText>
                  <RkText rkType='subtitle' style={{ color: 'white' }}>Subtitle</RkText>
                </View>
                <View style={styles.footerButtons}>
                  <RkButton rkType='clear' style={{ marginRight: 16 }}>SHARE</RkButton>
                  <RkButton rkType='clear '>EXPLORE</RkButton>
                </View>
              </View>
            </View>
          </RkCard>
          <RkCard>
            <View rkCardHeader={true}>
              <View>
                <RkText rkType='header'>Header</RkText>
                <RkText rkType='subtitle'>Subtitle</RkText>
              </View>
            </View>
            <View rkCardContent={true} style={{ paddingTop: 0 }}>
              <RkText rkType='compactCardText'>
                The Big Oxmox advised her not to do so, because there were thousands of
                bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
                didn’t listen.
              </RkText>
            </View>
            <View rkCardFooter={true}>
              <View style={styles.footerButtons}>
                <RkButton rkType='clear action' style={{ marginRight: 16 }}>SHARE</RkButton>
                <RkButton rkType='clear action'>EXPLORE</RkButton>
              </View>
            </View>
          </RkCard>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f0f1f5',
    padding: 12,
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7,
  },
  footer: {
    marginHorizontal: 16,
  },
  footerFontSize: {
    fontSize: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 17,
  },
  dot: {
    fontSize: 6.5,
    color: '#0000008e',
    marginLeft: 2.5,
    marginVertical: 10,
  },
  floating: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 200,
    right: 16,
    top: 173,
  },
  footerButtons: {
    flexDirection: 'row',
  },
  overlay: {
    justifyContent: 'flex-end',
    paddingVertical: 23,
    paddingHorizontal: 16,
  },
});
