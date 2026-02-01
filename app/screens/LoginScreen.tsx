import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Please enter phone and password');
      return;
    }

    // TODO: call your API here
    login();
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Implement Facebook OAuth here');
    login();
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot password', 'Redirect to forgot password screen');
  };

  const handleRegister = () => {
    Alert.alert('Register', 'Redirect to register screen');
  };

  return (
    <LinearGradient colors={['#1e3c72', '#6a11cb']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="car-sport" size={64} color="white" />
        <Text style={styles.appName}>Teranga Mobility</Text>
        <Text style={styles.subtitle}>Cours de perfectionnement conduite</Text>
      </View>

      {/* Form */}
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Téléphone"
          placeholderTextColor="#999"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleForgotPassword} style={styles.linkContainer}>
          <Text style={styles.linkText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.linkContainer}>
          <Text style={styles.linkText}>Vous n'avez pas de compte ? S'inscrire</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.or}>OU</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text style={styles.facebookText}> Continuer avec Facebook</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1e3c72',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkContainer: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  linkText: {
    color: '#1e3c72',
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  or: {
    marginHorizontal: 10,
    color: '#666',
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#1877F2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoginScreen;
