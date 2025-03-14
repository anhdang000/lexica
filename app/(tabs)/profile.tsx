import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  User,
  LogOut,
  Settings,
  ChevronRight,
  Shield,
  HelpCircle,
} from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <User size={64} color="#FFC067" />
        <Text style={styles.name}>Alex Johnson</Text>
        <Text style={styles.email}>alex.johnson@example.com</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Settings size={24} color="#666" style={styles.optionIcon} />
          <Text style={styles.optionText}>Settings</Text>
          <ChevronRight size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Shield size={24} color="#666" style={styles.optionIcon} />
          <Text style={styles.optionText}>Privacy & Security</Text>
          <ChevronRight size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <HelpCircle size={24} color="#666" style={styles.optionIcon} />
          <Text style={styles.optionText}>Help & Support</Text>
          <ChevronRight size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <LogOut size={24} color="#666" style={styles.optionIcon} />
          <Text style={styles.optionText}>Logout</Text>
          <ChevronRight size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#757575',
  },
  options: {
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
});