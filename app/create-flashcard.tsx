import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform 
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function CreateFlashcardScreen() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSave = () => {
    // TODO: Implement flashcard saving logic (e.g., save to local storage or backend)
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Flashcard</Text>
        {/* Just a placeholder to keep the title centered */}
        <View style={{ width: 24 }} />
      </View>

      {/* Flashcard Form */}
      <View style={styles.form}>
        {/* FRONT Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Front</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Type the front side..."
            placeholderTextColor="#999"
            value={front}
            onChangeText={setFront}
            multiline
          />
        </View>

        {/* BACK Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Back</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Type the back side..."
            placeholderTextColor="#999"
            value={back}
            onChangeText={setBack}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container with a subtle background color
  container: {
    flex: 1,
    backgroundColor: '#0d1117', 
  },
  // Header with modern style and white text/icon
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#161b22',
    borderBottomWidth: 1,
    borderBottomColor: '#2f363d',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  // Form container
  form: {
    flex: 1,
    padding: 20,
  },
  // Each flashcard "side" as a card
  card: {
    backgroundColor: '#21262d',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    // Shadows (iOS + Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  // Label above each input
  cardLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#c9d1d9',
    marginBottom: 8,
  },
  // TextInput styled to feel like text in a card
  cardInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#f0f6fc',
    // Make multiline look better
    minHeight: 80,
    textAlignVertical: 'top',
  },
  // "Save" button
  saveButton: {
    backgroundColor: '#238636',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  saveButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});
