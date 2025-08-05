import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [studentID, setStudentID] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (studentID.trim() === '') {
      Alert.alert('Missing Info', 'Please enter your student email or ID.');
      return;
    }

    const timestamp = new Date().toLocaleString();
    Alert.alert('Check-In Successful', `You are checked in at ${timestamp}`);

    // Navigate to check-in photo upload screen
    router.push('/checkin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 ClubCred</Text>
      <Text style={styles.subtitle}>Verify your club attendance securely.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your student email or ID"
        placeholderTextColor="#888"
        value={studentID}
        onChangeText={setStudentID}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6', // Creamy tone
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontFamily: 'PlayfairDisplay_700Bold',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#555',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4A90E2', // Soft blue
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
});
