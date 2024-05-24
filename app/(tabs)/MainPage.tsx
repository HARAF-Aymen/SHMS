import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainPage() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/bg1.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Icon name="home" size={100} color={theme.colors.primary} style={styles.icon} />
        <Text variant="headlineMedium" style={styles.title}>Welcome</Text>
        <View style={styles.buttonContainer}>
          <Button
            icon="login"
            mode="contained"
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          >
            Login
          </Button>
          <Button
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
            style={styles.button}
          >
            Register
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    margin: 8,
    flex: 1,
  },
});
