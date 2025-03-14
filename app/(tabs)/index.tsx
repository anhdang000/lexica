import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Search, Volume2, BookmarkPlus, Camera } from 'lucide-react-native';

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
          <Search size={20} color="#BDBDBD" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Look up a word..."
            placeholderTextColor="#BDBDBD"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
                  <Volume2 size={20} color="#FFC067" />
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
      </ScrollView>
    </View>
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
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
    color: '#333',
    height: '100%',
  },
  cameraButton: {
    padding: 8,
    marginLeft: 8,
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
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
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
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android elevation
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
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
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