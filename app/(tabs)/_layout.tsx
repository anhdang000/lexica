import React, { useState, useRef } from 'react';
import { Tabs } from 'expo-router';
import {
  Search,
  Library,
  Plus,
  User,
  BookOpen,
  Layers,
  Folder,
} from 'lucide-react-native';
import { router } from 'expo-router'; // Added import for navigation
import * as Haptics from 'expo-haptics';
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function TabLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;

  // Function to trigger haptic feedback for tab presses
  const handleTabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  // Function to open the modal with animation
  const handleAddPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Function to close the modal with animation and optional callback
  const closeModal = (callback?: () => void) => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      callback?.();
    });
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            height: 80,
            paddingBottom: 20,
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#666',
          tabBarLabelStyle: {
            fontFamily: 'Inter-Medium',
            fontSize: 12,
          },
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        {/* Library Tab */}
        <Tabs.Screen
          name="library"
          options={{
            title: 'Library',
            tabBarIcon: ({ color, size }) => <Library size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        {/* Add Tab */}
        <Tabs.Screen
          name="add"
          options={{
            title: '',
            tabBarIcon: () => (
              <View style={styles.addButton}>
                <Plus size={24} color="#fff" />
              </View>
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handleAddPress();
            },
          }}
        />
        {/* Practice Tab */}
        <Tabs.Screen
          name="practice"
          options={{
            title: 'Practice',
            tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
      </Tabs>

      {/* Modal for 'Add' button */}
      <Modal visible={isModalVisible} transparent={true} animationType="none">
        {/* Static Dimmed Background */}
        <Pressable style={styles.modalOverlay} onPress={closeModal} />

        {/* Animated Sliding Menu */}
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}
        >
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => closeModal(() => router.push('/create-flashcard'))}
          >
            <Layers size={24} color="#007AFF" />
            <Text style={styles.modalOptionText}>Flashcard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption} onPress={closeModal}>
            <Folder size={24} color="#007AFF" />
            <Text style={styles.modalOptionText}>Folder</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Static dimmed background
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
});