import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { router } from 'expo-router';
import { BookmarkPlus, Camera, X, FileText } from 'lucide-react-native';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  const inputHeight = useRef(new Animated.Value(120)).current;
  const inputBorderRadius = useRef(new Animated.Value(20)).current;
  const inputPaddingHorizontal = useRef(new Animated.Value(16)).current;
  const textInputRef = useRef(null);

  const handleFocus = () => {
    setInputFocused(true);
    Animated.timing(inputHeight, {
      toValue: 200,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(inputBorderRadius, {
      toValue: 10,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(inputPaddingHorizontal, {
      toValue: 24,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (inputText.length === 0) {
      setInputFocused(false);
      Animated.timing(inputHeight, {
        toValue: 120,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(inputBorderRadius, {
        toValue: 20,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(inputPaddingHorizontal, {
        toValue: 16,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const clearInput = () => {
    setInputText('');
    handleBlur();
  };

  const handleBoxPress = () => {
    textInputRef.current?.focus();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning, Alex</Text>
          <Text style={styles.subtitle}>Ready to expand your vocabulary?</Text>
        </View>

        <View style={styles.inputContainer}>
          <TouchableWithoutFeedback onPress={handleBoxPress}>
            <Animated.View
              style={[
                styles.inputBar,
                {
                  height: inputHeight,
                  borderRadius: inputBorderRadius,
                  paddingHorizontal: inputPaddingHorizontal,
                  borderColor: isInputFocused ? '#FFC067' : 'transparent',
                  borderWidth: isInputFocused ? 2 : 0,
                  // Shadow styles (conditional)
                  ...Platform.select({
                      ios: {
                        shadowColor: isInputFocused ? '#FFC067' : 'transparent',
                        shadowOffset: { width: 0, height: isInputFocused ? 4 : 0 }, // Increase height when focused
                        shadowOpacity: isInputFocused ? 0.3 : 0,
                        shadowRadius: isInputFocused ? 6 : 0, // Increase radius when focused
                      },
                      android: {
                        elevation: isInputFocused ? 5 : 0, // Increase elevation when focused
                      },
                    }),
                },
              ]}
            >
              <TextInput
                ref={textInputRef}
                style={styles.textInput}
                placeholder="Enter text"
                placeholderTextColor="#BDBDBD"
                value={inputText}
                onChangeText={setInputText}
                multiline={true}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <View style={styles.buttonContainer}>
                {inputText.length > 0 && (
                  <TouchableOpacity
                    onPress={clearInput}
                    style={styles.clearButton}
                  >
                    <X size={14} color="#757575" />
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity
                style={styles.cameraContainer}
                onPress={() => {
                  textInputRef.current?.blur();
                }}
              >
                <Camera size={28} color="#BDBDBD" />
              </TouchableOpacity>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>

        {/* ... (rest of your component remains unchanged) */}
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.wordOfDay}>
            <Text style={styles.sectionTitle}>Word of the Day</Text>
            <TouchableOpacity onPress={() => router.push('/(word)/ephemeral')}>
              <View style={styles.wordCard}>
                <View style={styles.wordHeader}>
                  <View>
                    <Text style={styles.word}>Ephemeral</Text>
                    <Text style={styles.phonetic}>/əˈfem(ə)rəl/</Text>
                  </View>
                  <View style={styles.wordActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <FileText size={20} color="#FFC067" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <BookmarkPlus size={20} color="#FFC067" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.partOfSpeech}>adjective</Text>
                <Text style={styles.definition}>
                  Lasting for a very short time; temporary or transient.
                </Text>
                <Text style={styles.example}>
                  "The ephemeral nature of fashion trends makes it hard to keep up."
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.recentSearches}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              {['serendipity', 'eloquent', 'paradigm', 'ubiquitous'].map(
                (word) => (
                  <TouchableOpacity key={word} style={styles.recentWord}>
                    <Text style={styles.recentWordText}>{word}</Text>
                  </TouchableOpacity>
                )
              )}
            </ScrollView>
          </View>

          <View style={styles.progress}>
            <Text style={styles.sectionTitle}>Your Progress</Text>
            <View style={styles.progressCard}>
              <View style={styles.progressItem}>
                <Text style={styles.progressNumber}>124</Text>
                <Text style={styles.progressLabel}>Words Learned</Text>
              </View>
              <View style={styles.progressDivider} />
              <View style={styles.progressItem}>
                <Text style={styles.progressNumber}>15</Text>
                <Text style={styles.progressLabel}>Day Streak</Text>
              </View>
            </View>
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
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontFamily: 'Playfair-Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#333',
    textAlignVertical: 'top',
  },
  buttonContainer: {
    position: 'absolute',
    top: 25,
    right: 27,
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 10,
    right: 16,
  },
  cameraButton: {
    padding: 8,
  },
  clearButton: {
    padding: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 14,
  },
  content: {
    flex: 1,
  },
  wordOfDay: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
  },
  wordCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  wordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  word: {
    fontFamily: 'Playfair-Bold',
    fontSize: 24,
    color: '#333',
  },
  phonetic: {
    fontFamily: 'Inter-Regular',
    color: '#757575',
    marginTop: 4,
  },
  wordActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  partOfSpeech: {
    fontFamily: 'Inter-Medium',
    color: '#FFC067',
    marginBottom: 8,
  },
  definition: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  example: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
    fontStyle: 'italic',
  },
  recentSearches: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recentWord: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  recentWordText: {
    fontFamily: 'Inter-Medium',
    color: '#FFC067',
  },
  progress: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  progressCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressItem: {
    flex: 1,
    alignItems: 'center',
  },
  progressNumber: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#FFC067',
    marginBottom: 4,
  },
  progressLabel: {
    fontFamily: 'Inter-Regular',
    color: '#757575',
  },
  progressDivider: {
    width: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 20,
  },
});