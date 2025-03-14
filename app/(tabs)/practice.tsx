import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react-native';

// Sample flashcard data (replace with your actual data source)
const flashcards = [
  { id: '1', front: 'Hello', back: 'Hola' },
  { id: '2', front: 'Goodbye', back: 'Adiós' },
  { id: '3', front: 'Thank you', back: 'Gracias' },
  { id: '4', front: 'Please', back: 'Por favor' },
  { id: '5', front: 'You\'re welcome', back: 'De nada' },
];

export default function PracticeScreen() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);


  const handleFlipCard = () => {
      setShowBack(!showBack);
      setShowResult(false);
  }

  const handleAnswer = (isCorrect: boolean) => {
    setShowResult(true);
    setCorrect(isCorrect)

    setTimeout(() => {
        if (currentCardIndex < flashcards.length -1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setShowBack(false);
            setShowResult(false);

        } else {
            // TODO: Show some "end of practice" UI
            setCurrentCardIndex(0)
            setShowBack(false);
            setShowResult(false);
        }
    }, 1000)

  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Practice</Text>
        <Text style={styles.subtitle}>
          {currentCardIndex + 1} / {flashcards.length}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={handleFlipCard}
        activeOpacity={1} // No visual feedback on press
      >
        <Text style={styles.cardText}>
          {showBack ? currentCard.back : currentCard.front}
        </Text>
        {
            showResult && (correct ? <CheckCircle size={48} color="green" style={styles.resultIcon} /> : <XCircle size={48} color="red" style={styles.resultIcon}/>)
        }
      </TouchableOpacity>

      {!showBack && (
        <TouchableOpacity style={styles.flipButton} onPress={handleFlipCard}>
          <Text style={styles.flipButtonText}>Flip Card</Text>
        </TouchableOpacity>
      )}
      {showBack && !showResult && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.answerButton, styles.incorrectButton]}
            onPress={() => handleAnswer(false)}
          >
            <XCircle size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.answerButton, styles.correctButton]}
            onPress={() => handleAnswer(true)}
          >
            <CheckCircle size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    paddingTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 3,
    minHeight: 250,
  },
  cardText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
  },
  resultIcon: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  flipButton: {
    backgroundColor: '#FFC067',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  flipButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#FFF',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  answerButton: {
    padding: 16,
    borderRadius: 30, // Make buttons circular
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctButton: {
    backgroundColor: '#4CAF50', // Green
  },
  incorrectButton: {
    backgroundColor: '#F44336', // Red
  },
});