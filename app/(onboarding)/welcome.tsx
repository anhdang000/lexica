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
    router.push('/(onboarding)/topics');
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
                <Icon size={32} color="#007AFF" />
              </View>
              <Text style={styles.purposeTitle}>{purpose.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.push('/(onboarding)/topics')}
      >
        <Text style={styles.skipButtonText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  welcomeText: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#666',
  },
  purposeGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  purposeCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e8f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  purposeTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  skipButton: {
    padding: 16,
    alignItems: 'center',
  },
  skipButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#666',
  },
});