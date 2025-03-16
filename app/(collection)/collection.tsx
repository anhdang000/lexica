import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Volume2, BookmarkPlus } from 'lucide-react-native';
import { router } from 'expo-router';

// Dummy data for words in a collection, replace this with your actual data
const words = [
    { word: 'Ephemeral', phonetic: '/əˈfem(ə)rəl/', partOfSpeech: 'adjective', definition: 'Lasting for a very short time.', example: 'The ephemeral nature of fashion trends...', reviewCount: 3 },
    { word: 'Serendipity', phonetic: '/ˌserənˈdɪpəti/', partOfSpeech: 'noun', definition: 'The occurrence of events by chance in a happy way.', example: 'A fortunate stroke of serendipity.', reviewCount: 0 },
    { word: 'Ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', partOfSpeech: 'adjective', definition: 'Present, appearing, or found everywhere.', example: 'His ubiquitous influence was felt...', reviewCount: 5 },
    { word: 'Ephemeral', phonetic: '/əˈfem(ə)rəl/', partOfSpeech: 'adjective', definition: 'Lasting for a very short time.', example: 'The ephemeral nature of fashion trends...', reviewCount: 0 },
    { word: 'Serendipity', phonetic: '/ˌserənˈdɪpəti/', partOfSpeech: 'noun', definition: 'The occurrence of events by chance in a happy way.', example: 'A fortunate stroke of serendipity.', reviewCount: 2 },
    { word: 'Ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', partOfSpeech: 'adjective', definition: 'Present, appearing, or found everywhere.', example: 'His ubiquitous influence was felt...', reviewCount: 1 },
];
  

export default function CollectionScreen() {
    const { topicId } = useLocalSearchParams();

    // TODO: You will need to replace this with actual data loading logic based on the topicId

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>{topicId}</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content}>
            {words.map((item, index) => (
                <TouchableOpacity 
                    key={index} 
                    onPress={() => router.push('/(word)/' + item.word)}
                >
                    <View 
                    style={[
                        styles.wordCard, 
                        item.reviewCount > 0 && styles.reviewedWordCard
                    ]}
                    >
                    <View style={styles.wordHeader}>
                        <View>
                        <Text style={styles.word}>{item.word}</Text>
                        <Text style={styles.phonetic}>{item.phonetic}</Text>
                        </View>
                        <View style={styles.wordActions}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Volume2 size={20} color="#FFC067" />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.partOfSpeech}>{item.partOfSpeech}</Text>
                    <Text style={styles.definition}>{item.definition}</Text>
                    <Text style={styles.example}>{item.example}</Text>
                    <View style={styles.reviewContainer}>
                        <Text style={styles.reviewCount}>
                        Times reviewed: {item.reviewCount}
                        </Text>
                    </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        justifyContent: 'space-between',
    },
    backButton: {
        paddingRight: 20
    },
    title: {
        fontFamily: 'Playfair-Bold',
        fontSize: 24,
        color: '#333',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    wordCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Android elevation
        elevation: 3,
    },
    reviewedWordCard: {
        backgroundColor: '#F0F7FF', // Light blue background for reviewed cards
        borderLeftWidth: 4,
        borderLeftColor: '#4A90E2', // Blue accent border
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
    reviewContainer: {
        marginTop: 12,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    reviewCount: {
        fontFamily: 'Inter-Medium',
        fontSize: 14,
        color: '#4A90E2',
    },
});