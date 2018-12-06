import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import {
  ProgressChart,
  DoughnutChart,
  AreaChart,
  AreaSmoothedChart,
} from '../components/';

export class VictoryChart extends React.Component {
  static navigationOptions = {
    title: 'Victory Chart'.toUpperCase(),
  };

  render = () => {
    const chartBackgroundStyle = { backgroundColor: RkTheme.current.colors.control.background };
    return (
      <ScrollView style={styles.screen}>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <DoughnutChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <ProgressChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaSmoothedChart />
        </View>
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
  chartBlock: {
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
  },
}));

