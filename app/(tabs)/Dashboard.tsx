
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard() {
  const theme = useTheme();
  const widthAndHeight = 250;
  const series = [50, 30, 20];
  const sliceColor = ['#600080', '#9900cc', '#c61aff'];

  const [selectedButton, setSelectedButton] = useState('');
  const [selectedTab, setSelectedTab] = useState('Monthly');

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const buttonStyle = (button) => {
    return selectedButton === button
      ? [styles.button, { backgroundColor: '#9900cc' }]
      : styles.button;
  };

  const tabButtonStyle = (tab) => {
    return selectedTab === tab
      ? [styles.tabButton, { backgroundColor: '#9900cc' }]
      : styles.tabButton;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button
          icon="flash"
          mode={selectedButton === 'Energy use' ? 'contained' : 'outlined'}
          style={buttonStyle('Energy use')}
          onPress={() => handleButtonPress('Energy use')}
        >
          Energy use
        </Button>
        <Button
          icon="currency-usd"
          mode={selectedButton === 'Expected bill' ? 'contained' : 'outlined'}
          style={buttonStyle('Expected bill')}
          onPress={() => handleButtonPress('Expected bill')}
        >
          Expected bill
        </Button>
      </View>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.45}
        coverFill="#FFF"
        style={styles.chart}
      />
      <View style={styles.tabContainer}>
        <Button
          mode={selectedTab === 'Monthly' ? 'contained' : 'outlined'}
          style={tabButtonStyle('Monthly')}
          onPress={() => handleTabPress('Monthly')}
        >
          Monthly
        </Button>
        <Button
          mode={selectedTab === 'Weekly' ? 'contained' : 'outlined'}
          style={tabButtonStyle('Weekly')}
          onPress={() => handleTabPress('Weekly')}
        >
          Weekly
        </Button>
        <Button
          mode={selectedTab === 'Daily' ? 'contained' : 'outlined'}
          style={tabButtonStyle('Daily')}
          onPress={() => handleTabPress('Daily')}
        >
          Daily
        </Button>
      </View>
      <View style={styles.predictionContainer}>
        <Text style={styles.predictionText}>Month prediction</Text>
        <View style={styles.predictionDetails}>
          <Icon name="flash" size={24} color={theme.colors.primary} />
          <Text style={styles.predictionValue}>370 KWh</Text>
          <Icon name="currency-usd" size={24} color={theme.colors.primary} />
          <Text style={styles.predictionValue}>510 DH</Text>
        </View>
        <View style={styles.predictionLabels}>
          <Text style={styles.label}>Energy use for month</Text>
          <Text style={styles.label}>Bill of the month</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  chart: {
    alignSelf: 'center',
    marginVertical: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  predictionContainer: {
    borderColor: "red",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  predictionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  predictionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  predictionValue: {
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  predictionLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});
