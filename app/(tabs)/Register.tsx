// app/(tabs)/Register.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <HeaderBackButton
          tintColor={theme.colors.primary}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Icon name="account-plus" size={100} color={theme.colors.primary} style={styles.icon} />
      <Text variant="headlineMedium" style={styles.title}>Register</Text>
      <TextInput
        label="Full Name"
        keyboardType="default"
        style={styles.input}
        left={<TextInput.Icon name="account" />}
      />
      <TextInput
        label="Username"
        keyboardType="default"
        style={styles.input}
        left={<TextInput.Icon name="account-circle" />}
      />
      <TextInput
        label="Email"
        keyboardType="email-address"
        style={styles.input}
        left={<TextInput.Icon name="email" />}
      />
      <TextInput
        label="Password"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon name="lock" />}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon name="lock-check" />}
      />
      <Button mode="contained" onPress={() => { /* Handle register */ }} style={styles.button}>
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
