import React, { useState, useRef } from 'react';
import { Tabs } from 'expo-router';
import {
  Search,
  Library,
  Plus,
  User,
  BookOpen,
  Layers, // Correctly imported
  FolderPlus,
} from 'lucide-react-native';
import { router } from 'expo-router';
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

const { height, width } = Dimensions.get('window');

export default function TabLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(height)).current;

  const handleTabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleAddPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsModalVisible(true);
    Animated.spring(slideAnim, {
      toValue: (height - (height * 0.32)) / 2, // 50% height
      tension: 30,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = (callback?: () => void) => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      if (callback && typeof callback === 'function') {
        callback();
      }
    });
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopWidth: 1,
            borderTopColor: '#E0E0E0',
            height: 80,
            paddingBottom: 20,
          },
          tabBarActiveTintColor: '#FFC067',
          tabBarInactiveTintColor: '#A0A0A0',
          tabBarLabelStyle: {
            fontFamily: 'Inter-Medium',
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Library',
            tabBarIcon: ({ color, size }) => <Library size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: '',
            tabBarIcon: () => (
              <View style={styles.addButton}>
                <Plus size={24} color="#FFF" />
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
        <Tabs.Screen
          name="practice"
          options={{
            title: 'Practice',
            tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
          listeners={{ tabPress: handleTabPress }}
        />
      </Tabs>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="none"
      >
        <View style={styles.modalOverlay}>
          <Pressable style={styles.pressableOverlay} onPress={closeModal}>
            <View />
          </Pressable>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <View style={styles.modalTopBar} />
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => closeModal(() => router.push('/create-flashcard'))}
            >
              <View style={styles.iconContainer}>
                {/* Using Layers icon */}
                <Layers size={24} color="#FFC067" />
              </View>
              <Text style={styles.modalOptionText}>Flashcard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() =>
                closeModal(() => {
                  router.push('/create-topic');
                })
              }
            >
              <View style={styles.iconContainer}>
                <FolderPlus size={24} color="#FFC067" />
              </View>
              <Text style={styles.modalOptionText}>Topic</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#FFC067',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    width: width - 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTopBar: {
    width: 50,
    height: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 12,
  },
  modalOptionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    color: '#333',
    marginLeft: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});