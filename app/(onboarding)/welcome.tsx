import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Book, GraduationCap, Briefcase, Globe } from 'lucide-react-native';

const learningPurposes = [
  { id: 'ielts', title: 'IELTS Preparation', icon: GraduationCap },
  { id: 'toeic', title: 'TOEIC Training', icon: Book },
  { id: 'professional', title: 'Professional Growth', icon: Briefcase },
  { id: 'general', title: 'General Learning', icon: Globe },
];

export default function WelcomeScreen() {
  const handlePurposeSelection = (purposeId: string) => {
    // TODO: Properly save the user selection
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Lexica!</Text>
        <Text style={styles.subtitle}>What brings you here today?</Text>
      </View>

      <View style={styles.purposeGrid}>
        {learningPurposes.map((purpose) => {
          const Icon = purpose.icon;
          return (
            <TouchableOpacity
              key={purpose.id}
              style={styles.purposeCard}
              onPress={() => handlePurposeSelection(purpose.id)}
            >
              <View style={styles.iconContainer}>
                <Icon size={32} color="#FFC067" />
              </View>
              <Text style={styles.purposeTitle}>{purpose.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push('/(tabs)')}
      >
        <Text style={styles.skipButtonText}>Skip for now</Text>
      </TouchableOpacity>
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
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center', // Center align header content
  },
  welcomeText: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center', // Center align text
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#757575',
    textAlign: 'center', // Center align text
  },
  purposeGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center items
    gap: 16,
    paddingHorizontal: 10,
  },
  purposeCard: {
    width: '45%', // Adjusted for spacing
    backgroundColor: '#F8F8F8', // Lighter gray
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 3,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF3E0', // Light background for the icon
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  purposeTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  skipButton: {
    padding: 16,
    alignItems: 'center',
  },
  skipButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#757575',
  },
});