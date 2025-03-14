import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Search, Filter, BookMarked } from 'lucide-react-native';
import { router } from 'expo-router';

const topics = [
  {
    id: 'business',
    title: 'Business',
    count: 45,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'academic',
    title: 'Academic',
    count: 32,
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'travel',
    title: 'Travel',
    count: 28,
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'technology',
    title: 'Technology',
    count: 56,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
  },
];

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleTopicPress = (topicId: string) => {
    router.push({ pathname: '/(collection)/collection', params: { topicId } });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Library</Text>
        <Text style={styles.subtitle}>161 words saved</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#BDBDBD" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a collection..."
            placeholderTextColor="#BDBDBD"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#FFC067" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      >
        {topics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={styles.topicCard}
            onPress={() => handleTopicPress(topic.id)}
          >
            <Image source={{ uri: topic.image }} style={styles.topicImage} />
            <View style={styles.topicInfo}>
              <View style={styles.topicHeader}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <View style={styles.wordCount}>
                  <BookMarked size={16} color="#FFC067" />
                  <Text style={styles.wordCountText}>{topic.count}</Text>
                </View>
              </View>
              <Text style={styles.lastUpdated}>Updated 2 days ago</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
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
    flexDirection: 'row',
    gap: 12,
  },
  searchBar: {
    flex: 1,
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
  filterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  topicCard: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  topicImage: {
    width: 100,
    height: '100%',
  },
  topicInfo: {
    flex: 1,
    padding: 16,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  topicTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  wordCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wordCountText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFC067',
  },
  lastUpdated: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#757575',
  },
});