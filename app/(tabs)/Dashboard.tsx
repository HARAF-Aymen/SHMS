import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import PieChart from 'react-native-pie-chart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard() {
  const theme = useTheme();
  const widthAndHeight = 250;
  const series = [50, 30, 20];
  const sliceColor = ['#600080', '#9900cc', '#c61aff'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button icon="flash" mode="contained" style={styles.buttonLeft}>
          Energy use
        </Button>
        <Button icon="currency-usd" mode="outlined" style={styles.buttonRight}>
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
        <Button mode="contained" style={styles.tabButton}>
          Monthly
        </Button>
        <Button mode="outlined" style={styles.tabButton}>
          Weekly
        </Button>
        <Button mode="outlined" style={styles.tabButton}>
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
  buttonLeft: {
    flex: 1,
    marginRight: 8,
  },
  buttonRight: {
    flex: 1,
    marginLeft: 8,
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
