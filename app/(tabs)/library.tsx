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
import { Search, Filter, Grid2x2 as Grid, List, BookMarked, Camera } from 'lucide-react-native';

const topics = [
  {
    id: 'business',
    title: 'Business',
    count: 45,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'academic',
    title: 'Academic',
    count: 32,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'travel',
    title: 'Travel',
    count: 28,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 'technology',
    title: 'Technology',
    count: 56,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
  },
];

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isGridView, setIsGridView] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Library</Text>
        <Text style={styles.subtitle}>161 words saved</Text>
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

        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.viewToggle}>
        <TouchableOpacity
          style={[styles.toggleButton, isGridView && styles.toggleButtonActive]}
          onPress={() => setIsGridView(true)}
        >
          <Grid size={20} color={isGridView ? '#007AFF' : '#666'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isGridView && styles.toggleButtonActive]}
          onPress={() => setIsGridView(false)}
        >
          <List size={20} color={!isGridView ? '#007AFF' : '#666'} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={[
          styles.topicsGrid,
          !isGridView && styles.topicsList,
        ]}
      >
        {topics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={[styles.topicCard, !isGridView && styles.topicCardList]}
          >
            <Image
              source={{ uri: topic.image }}
              style={[styles.topicImage, !isGridView && styles.topicImageList]}
            />
            <View style={[styles.topicInfo, !isGridView && styles.topicInfoList]}>
              <View style={styles.topicHeader}>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <View style={styles.wordCount}>
                  <BookMarked size={16} color="#007AFF" />
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
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
    flexDirection: 'row',
    gap: 12,
  },
  searchBar: {
    flex: 1,
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
  filterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewToggle: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
    gap: 8,
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  toggleButtonActive: {
    backgroundColor: '#e8f2ff',
  },
  content: {
    flex: 1,
  },
  topicsGrid: {
    padding: 20,
    gap: 16,
  },
  topicsList: {
    flexDirection: 'column',
  },
  topicCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  topicCardList: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 100,
  },
  topicImage: {
    width: '100%',
    height: 160,
  },
  topicImageList: {
    width: 100,
    height: '100%',
  },
  topicInfo: {
    padding: 16,
  },
  topicInfoList: {
    flex: 1,
    justifyContent: 'center',
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
    color: '#1a1a1a',
  },
  wordCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  wordCountText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#007AFF',
  },
  lastUpdated: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
});