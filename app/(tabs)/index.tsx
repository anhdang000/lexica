import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Search, ChevronDown, Volume2, BookmarkPlus, Camera } from 'lucide-react-native';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning, Alex</Text>
        <Text style={styles.subtitle}>Ready to expand your vocabulary?</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Look up a word..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wordOfDay}>
        <Text style={styles.sectionTitle}>Word of the Day</Text>
        <View style={styles.wordCard}>
          <View style={styles.wordHeader}>
            <View>
              <Text style={styles.word}>Ephemeral</Text>
              <Text style={styles.phonetic}>/əˈfem(ə)rəl/</Text>
            </View>
            <View style={styles.wordActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Volume2 size={20} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <BookmarkPlus size={20} color="#007AFF" />
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
      </View>

      <View style={styles.recentSearches}>
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['serendipity', 'eloquent', 'paradigm', 'ubiquitous'].map((word) => (
            <TouchableOpacity key={word} style={styles.recentWord}>
              <Text style={styles.recentWordText}>{word}</Text>
            </TouchableOpacity>
          ))}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontFamily: 'Playfair-Bold',
    fontSize: 24,
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    padding: 20,
    paddingTop: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1a1a1a',
    height: '100%',
  },
  cameraButton: {
    padding: 8,
    marginLeft: 8,
  },
  wordOfDay: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1a1a1a',
    marginBottom: 12,
  },
  wordCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
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
    color: '#1a1a1a',
  },
  phonetic: {
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginTop: 4,
  },
  wordActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  partOfSpeech: {
    fontFamily: 'Inter-Medium',
    color: '#007AFF',
    marginBottom: 8,
  },
  definition: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 12,
  },
  example: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  recentSearches: {
    padding: 20,
  },
  recentWord: {
    backgroundColor: '#e8f2ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  recentWordText: {
    fontFamily: 'Inter-Medium',
    color: '#007AFF',
  },
  progress: {
    padding: 20,
  },
  progressCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
  },
  progressItem: {
    flex: 1,
    alignItems: 'center',
  },
  progressNumber: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#007AFF',
    marginBottom: 4,
  },
  progressLabel: {
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  progressDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
});