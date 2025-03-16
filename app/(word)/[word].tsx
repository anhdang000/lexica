import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ArrowLeft, Volume2 } from 'lucide-react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Audio } from 'expo-av';

// Define interfaces for the API response structure
interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordData {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
}

export default function WordDetailScreen() {
  // Extract the word parameter from the route
  const { word } = useLocalSearchParams();

  // State management
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  // Fetch word data from the Dictionary API
  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
          throw new Error('Word not found');
        }
        const data: WordData[] = await response.json();
        setWordData(data[0]); // Take the first entry
      } catch (err) {
        setError('Failed to fetch word data');
      } finally {
        setLoading(false);
      }
    };

    fetchWordData();
  }, [word]);

  // Function to play the audio pronunciation
  const playSound = async (audioUrl: string) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
      await sound.playAsync();
    } catch (err) {
      console.error('Failed to play sound', err);
    }
  };

  // Cleanup sound object
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  // Loading state
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Error state or no data
  if (error || !wordData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error || 'Word not found'}</Text>
      </View>
    );
  }

  // Find the first available audio URL
  const audioUrl = wordData.phonetics.find((p) => p.audio)?.audio;

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.wordContainer}>
          <Text style={styles.word}>{wordData.word}</Text>
          {wordData.phonetic && (
            <Text style={styles.phonetic}>{wordData.phonetic}</Text>
          )}
        </View>

        {audioUrl && (
          <TouchableOpacity onPress={() => playSound(audioUrl)} style={styles.speakerButton}>
            <Volume2 size={24} color="#f8c290" />
          </TouchableOpacity>
        )}
      </View>



      {/* Image Section (Placeholder) */}
      <Image
        source={{ uri: 'https://via.placeholder.com/400x200' }}
        style={styles.image}
        accessibilityLabel="Placeholder image for word"
      />

      {/* Origin Section */}
      {wordData.origin && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Origin</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.originText}>{wordData.origin}</Text>
          </View>
        </View>
      )}

      {/* Meanings Section */}
      {wordData.meanings.map((meaning, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{meaning.partOfSpeech}</Text>
          <View style={styles.sectionContent}>
            {meaning.definitions.map((def, defIndex) => (
              <View key={defIndex} style={styles.definition}>
                <Text style={styles.definitionText}>
                  {def.definition}
                </Text>
                {def.example && (
                    <Text style={styles.example}>
                    “{def.example}”
                    </Text>
                )}
                {def.synonyms.length > 0 && (
                  <Text style={styles.synonyms}>
                    <Text style={styles.listLabel}>Synonyms: </Text>{def.synonyms.join(', ')}
                  </Text>
                )}
                {def.antonyms.length > 0 && (
                  <Text style={styles.antonyms}>
                  <Text style={styles.listLabel}>Antonyms: </Text>{def.antonyms.join(', ')}
                  </Text>
                )}
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#757575',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#E24A4A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'space-between', // Align items across the container
  },
  wordContainer:{
    flex: 1,
    marginLeft: 15,

  },
  word: {
    fontFamily: 'Playfair-Bold', // Use a serif font for the main word
    fontSize: 32,  // Slightly larger
    color: '#333',
    marginBottom: 4, // Space between word and phonetic
  },
  phonetic: {
    fontFamily: 'Inter-Regular', // Sans-serif for phonetic
    fontSize: 18,
    color: '#757575',
  },
  speakerButton: {
    // padding: 8, // Give some padding to the button
     // No background, just the icon
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20, // Add margin below the image
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold', // Bold sans-serif for section titles
    fontSize: 20,
    color: '#f8c290', // part of speech color
    marginBottom: 8,
    textTransform: 'capitalize', // Capitalize section titles
  },
  sectionContent: {
    marginLeft: 10, // Indent content slightly
  },
  originText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // More line spacing for readability
  },
    definition: {
        marginBottom: 16,
    },
    definitionText: {
        fontFamily: 'Inter-Regular',
        fontSize: 17, // slightly bigger
        color: '#333',
        lineHeight: 24,
    },
  example: {
    fontFamily: 'Inter-Italic', // Use the italic version of Inter
    fontSize: 16,
    color: '#757575',
    marginTop: 4,
    marginBottom: 8, // Add a little extra space after the example
  },
  synonyms: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#4A90E2', // Keep color
    marginTop: 4,
  },
  antonyms: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#E24A4A', // Keep color
    marginTop: 4,
  },
  listLabel: { //For Synonyms and Antonyms before List
    fontWeight: 'bold',
    color: '#333'
  }
});