import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Mic, Repeat, ChevronLeft, ChevronRight } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

const { width: screenWidth } = Dimensions.get('window');

export default function CreateFlashcardScreen() {
  const [vietnameseText, setVietnameseText] = useState('');
  const [englishText, setEnglishText] = useState('');
  const [flashcards, setFlashcards] = useState<{ vietnamese: string; english: string }[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current; // Animation value
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  const handleNextCard = () => {
    if (isAnimating) return; // Prevent multiple animations
    setIsAnimating(true);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Animate card transition
    Animated.timing(slideAnim, {
      toValue: -screenWidth, // Slide current card out to the left
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      // Save current card
      const newFlashcards = [...flashcards];
      newFlashcards[currentCardIndex] = {
        vietnamese: vietnameseText,
        english: englishText,
      };
      setFlashcards(newFlashcards);

      // Check if we're at the end
      if (currentCardIndex === flashcards.length - 1) {
        // Add a new blank card
        setFlashcards([...newFlashcards, { vietnamese: '', english: '' }]);
      }

      setCurrentCardIndex(currentCardIndex + 1);
      setVietnameseText(newFlashcards[currentCardIndex + 1]?.vietnamese || '');
      setEnglishText(newFlashcards[currentCardIndex + 1]?.english || '');

      // Reset animation value and slide in next card
      slideAnim.setValue(screenWidth); // Prepare next card off-screen to the right
      Animated.timing(slideAnim, {
        toValue: 0, // Slide next card in from the right
        duration: 250,
        useNativeDriver: true,
      }).start(() => setIsAnimating(false));
    });
  };

  const handlePreviousCard = () => {
    if (isAnimating || currentCardIndex === 0) return; // Prevent multiple animations or going back from the first card.
    setIsAnimating(true);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    Animated.timing(slideAnim, {
      toValue: screenWidth, // Slide current card out to the right
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      //save current
      const newFlashcards = [...flashcards];
      newFlashcards[currentCardIndex] = {
        vietnamese: vietnameseText,
        english: englishText,
      };
      setFlashcards(newFlashcards);

      setCurrentCardIndex(currentCardIndex - 1);
      setVietnameseText(flashcards[currentCardIndex - 1].vietnamese);
      setEnglishText(flashcards[currentCardIndex - 1].english);

      // Reset animation and prepare the previous card.
      slideAnim.setValue(-screenWidth);  // Reset position, card is now offscreen to the left
      Animated.timing(slideAnim, {
        toValue: 0,  // Slide in from the left
        duration: 250,
        useNativeDriver: true,
      }).start(() => setIsAnimating(false));
    });
  };

  //For first load
  useEffect(() => {
    if (flashcards.length === 0) {
      setFlashcards([{ vietnamese: '', english: '' }]);
    }
  }, []);

  useEffect(() => {
    if (flashcards.length > 0) {
      setVietnameseText(flashcards[currentCardIndex]?.vietnamese || '');
      setEnglishText(flashcards[currentCardIndex]?.english || '');
    }
  }, [currentCardIndex, flashcards]);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>New Flashcard</Text>
          {/* Placeholder to keep title centered */}
          <View style={{ width: 24 }} />
        </View>
        <ScrollView
          style={styles.form}
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps='handled'
        >
          <Animated.View style={{ transform: [{ translateX: slideAnim }], width: screenWidth, paddingHorizontal: 20, paddingVertical: 20 }}>
            <View style={styles.card}>
              <View style={styles.languageHeader}>
                <Text style={styles.languageText}>Tiếng Việt</Text>
                <TouchableOpacity>
                  <Repeat size={16} color="#757575" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.cardInput}
                placeholder="Nhập văn bản"
                placeholderTextColor="#A0A0A0"
                value={vietnameseText}
                onChangeText={setVietnameseText}
                multiline
              />
              <TouchableOpacity style={styles.micButton}>
                <Mic size={20} color="#757575" />
              </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View style={styles.card}>
              <View style={styles.languageHeader}>
                <Text style={styles.languageText}>Tiếng Anh (Hoa Kỳ)</Text>
                <TouchableOpacity>
                  <Repeat size={16} color="#757575" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.cardInput}
                placeholder="Enter text"
                placeholderTextColor="#A0A0A0"
                value={englishText}
                onChangeText={setEnglishText}
                multiline
                // Add paddingTop to TextInput
                paddingTop={10}
              />
              <TouchableOpacity style={styles.micButton}>
                <Mic size={20} color="#757575" />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={[styles.navButton, currentCardIndex === 0 && styles.disabledButton]}
              onPress={handlePreviousCard}
              disabled={currentCardIndex === 0}
            >
              <ChevronLeft size={24} color={currentCardIndex === 0 ? "#A0A0A0" : "#FFF"} />
            </TouchableOpacity>
            <Text style={styles.cardCounter}>{currentCardIndex + 1} / {flashcards.length}</Text>
            <TouchableOpacity
              style={styles.navButton}
              onPress={handleNextCard}
            >
              <ChevronRight size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  form: {
    flex: 1,
    // padding: 20, // Removed padding here
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 3,
  },
  languageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  languageText: {
    fontFamily: 'Inter-Medium',
    color: '#757575',
    fontSize: 14,
  },
  cardInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#333',
    minHeight: 80,
    textAlignVertical: 'top'
  },
  micButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 50, // Add padding here
  },
  navButton: {
    backgroundColor: '#FFC067',
    borderRadius: 30,
    padding: 12,
  },
  disabledButton: {
    backgroundColor: '#F5F5F5',
  },
  cardCounter: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#333',
  },
});