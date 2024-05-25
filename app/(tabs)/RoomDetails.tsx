    import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const devices = [
    {
        name: 'Master AC',
        consumption: '24 KWh',
        runtime: '10 Hr',
        icon: 'air-conditioner',
    },
    {
        name: 'TV',
        consumption: '20 KWh',
        runtime: '16 Hr',
        icon: 'television',
    },
    {
        name: 'Main lamp',
        consumption: '16 KWh',
        runtime: '24 Hr',
        icon: 'lamp',
    },
    {
        name: 'Washing Machine',
        consumption: '15 KWh',
        runtime: '3 Hr',
        icon: 'washing-machine',
    },
    {
        name: 'Refrigerator',
        consumption: '40 KWh',
        runtime: '24 Hr',
        icon: 'fridge',
    },
    {
        name: 'Microwave',
        consumption: '10 KWh',
        runtime: '2 Hr',
        icon: 'microwave',
    },
    {
        name: 'Dishwasher',
        consumption: '12 KWh',
        runtime: '4 Hr',
        icon: 'dishwasher',
    },
    {
        name: 'Heater',
        consumption: '30 KWh',
        runtime: '6 Hr',
        icon: 'toaster-oven',
    },
    {
        name: 'Laptop',
        consumption: '5 KWh',
        runtime: '8 Hr',
        icon: 'laptop',
    },
    {
        name: 'Coffee Maker',
        consumption: '2 KWh',
        runtime: '1 Hr',
        icon: 'coffee-maker',
    },
    {
        name: 'Fan',
        consumption: '8 KWh',
        runtime: '20 Hr',
        icon: 'fan',
    },
];


    export default function RoomDetails() {
    const theme = useTheme();
    const route = useRoute();
    const { room } = route.params;

    const [switchStates, setSwitchStates] = useState(devices.map(() => false));

    const handleSwitchChange = (index, value) => {
        const newStates = [...switchStates];
        newStates[index] = value;
        setSwitchStates(newStates);
    };

    return (
        <ScrollView style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>{room.name}</Text>
        {devices.map((device, index) => (
            <Card key={index} style={styles.card}>
            <Card.Title
                title={device.name}
                left={(props) => <Icon {...props} name={device.icon} size={40} color={theme.colors.primary} />}
                right={() => (
                <Switch
                    value={switchStates[index]}
                    onValueChange={(value) => handleSwitchChange(index, value)}
                />
                )}
            />
            <Card.Content>
                <View style={styles.deviceInfo}>
                <Text>Monthly consumption</Text>
                <Text>{device.consumption}</Text>
                </View>
                <View style={styles.deviceInfo}>
                <Text>Run time</Text>
                <Text>{device.runtime}</Text>
                </View>
            </Card.Content>
            </Card>
        ))}
        <Button mode="contained" style={styles.addButton}>
            ADD / REMOVE DEVICE
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
    deviceInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    addButton: {
        marginTop: 16,
        alignSelf: 'center',
    },
    });
