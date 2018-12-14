import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import PropTypes from 'prop-types';
import {
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import moment from "moment";
import notes from "../data-sample/notes";

class CommentItem extends React.Component {
  static propTypes = {
    comment: PropTypes.object,
  };

  state = {
    showFullText: false,
  }

  onPressCommentItem = () => {
    this.setState((state, props) => {
      return {
        showFullText: !state.showFullText
      };
    });
  }

  render() {
    const { comment } = this.props;
    return (
      <TouchableOpacity
        style={styles.commentItem}
        onPress={() => this.onPressCommentItem()}
      >
        <View>
          {this.state.showFullText
            ? <RkText rkType="primary2">{comment.text}</RkText>
            : <RkText rkType="primary2" numberOfLines={2}>{comment.text}</RkText>
          }
          <RkText
            rkType="secondary5 hintColor"
            style={styles.timeComment}
          >
            {moment(comment.updatedAt).fromNow()}
          </RkText>
        </View>
        </TouchableOpacity>
    )
  }
}

export class CommentBox extends React.Component {

  static navigationOptions = {
    title: 'Comment Box',
  };

  render() {
    return (
      <ScrollView style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType="primary header5" style={styles.maxiTxt}>
            Comments
          </RkText>
        </View>
        <View style={styles.commentList}>
          {notes.map(comment => (<CommentItem comment={comment} key={comment.id} />))}
        </View>
      </ScrollView>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  section: {
    marginTop: 25
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 17.5,
    alignItems: "center"
  },
  heading: {
    paddingBottom: 12.5,
    flex: 1
  },
  maxiTxt: {
    flex: 1
  },
  commentList: {

  },
  commentItem: {
    flexDirection: "row",
    paddingHorizontal: 17.5,
    alignItems: "center",
    paddingVertical: 10,

    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  timeComment: {
    marginTop: 5
  },
  textComment: {},

}));
