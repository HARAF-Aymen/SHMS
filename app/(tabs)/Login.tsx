// app/(tabs)/Login.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
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
      <Icon name="login" size={100} color={theme.colors.primary} style={styles.icon} />
      <Text variant="headlineMedium" style={styles.title}>Login</Text>
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
      <Button mode="contained" onPress={() => { /* Handle login */ }} style={styles.button}>
        Login
      </Button>
      <Button mode="text" onPress={() => { /* Handle forgot password */ }} style={styles.forgotPassword}>
        Forgot Password?
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
    top: 40, // Adjusted position slightly lower
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
  forgotPassword: {
    marginTop: 16,
    alignSelf: 'center',
  },
});
