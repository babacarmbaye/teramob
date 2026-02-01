import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const AccountDetails: React.FC = () => {
  const [photo, setPhoto] = useState<string>('https://i.pravatar.cc/150?img=12');
  const [username, setUsername] = useState('John Doe');
  const [phone, setPhone] = useState('+1 234 567 890');
  const [email, setEmail] = useState('john.doe@email.com');
  const [address, setAddress] = useState('123 Main Street, City');

  const handleUpdatePhoto = () => {
    // Later: open image picker (expo-image-picker)
    Alert.alert('Change photo', 'Here you can open image picker 😉');
  };

  const handleSave = () => {
    // Call your API here
    Alert.alert('Saved', 'Your profile has been updated!');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    // TODO: clear auth state + navigate to login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Photo */}
      <TouchableOpacity onPress={handleUpdatePhoto} style={styles.avatarContainer}>
        <Image source={{ uri: photo }} style={styles.avatar} />
        <Text style={styles.changePhotoText}>Changer photo</Text>
      </TouchableOpacity>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Nom utilisateur</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} />

        <Text style={styles.label}>Téléphone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Adresse</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={address}
          onChangeText={setAddress}
          multiline
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Sauvegarder les modifications</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  changePhotoText: {
    color: '#007bff',
    fontWeight: '600',
  },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountDetails;
