import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, useTheme, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const rooms = [
  {
    name: 'Living room',
    consumption: '56 KWh',
    contribution: '50.45 DH',
    icon: 'sofa',
  },
  {
    name: 'Bed room',
    consumption: '48 KWh',
    contribution: '43.24 DH',
    icon: 'bed',
  },
  {
    name: 'Bath room',
    consumption: '38 KWh',
    contribution: '34.23 DH',
    icon: 'shower',
  },
];

export default function HomeRooms() {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Home rooms</Text>
      {rooms.map((room, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title
            title={room.name}
            left={(props) => <Icon {...props} name={room.icon} size={40} color={theme.colors.primary} />}
          />
          <Card.Content>
            <View style={styles.roomInfo}>
              <Text>Monthly energy consumption</Text>
              <Text>{room.consumption}</Text>
            </View>
            <View style={styles.roomInfo}>
              <Text>Monthly bill contribution</Text>
              <Text>{room.contribution}</Text>
            </View>
            <View style={styles.icons}>
              <Icon name="television" size={24} color={theme.colors.primary} />
              <Icon name="lamp" size={24} color={theme.colors.primary} />
              <Icon name="lightbulb" size={24} color={theme.colors.primary} />
              <Icon name="fan" size={24} color={theme.colors.primary} />
            </View>
          </Card.Content>
        </Card>
      ))}
      <Button mode="contained" style={styles.addButton}>
        ADD / REMOVE ROOM
      </Button>
    </ScrollView>
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
  card: {
    marginBottom: 16,
  },
  roomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  addButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
