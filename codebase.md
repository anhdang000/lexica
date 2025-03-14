# .bolt/config.json

```json
{
  "template": "bolt-expo"
}

```

# .expo/devices.json

```json
{
  "devices": []
}

```

# .expo/README.md

```md
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

```

# .expo/types/router.d.ts

```ts
/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/create-flashcard`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(onboarding)'}/welcome` | `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/add` | `/add`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/library` | `/library`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/practice` | `/practice`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/create-flashcard`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(onboarding)'}/welcome` | `/welcome`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/add` | `/add`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/library` | `/library`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/practice` | `/practice`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/create-flashcard${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(onboarding)'}/welcome${`?${string}` | `#${string}` | ''}` | `/welcome${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/add${`?${string}` | `#${string}` | ''}` | `/add${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/library${`?${string}` | `#${string}` | ''}` | `/library${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/practice${`?${string}` | `#${string}` | ''}` | `/practice${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/create-flashcard`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(onboarding)'}/welcome` | `/welcome`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/add` | `/add`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/library` | `/library`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/practice` | `/practice`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}

```

# .gitignore

```
# dependencies
node_modules/

# expo
.expo/
dist/
web-build/
expo-env.d.ts

# native
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macos
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

```

# .prettierrc

```
{
  "useTabs": false,
  "bracketSpacing": true,
  "singleQuote": true,
  "tabWidth": 2
}

```

# app.json

```json
{
  "expo": {
    "name": "bolt-expo-nativewind",
    "slug": "bolt-expo-nativewind",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "web": {
      "bundler": "metro",
      "output": "single",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": ["expo-router"],
    "experiments": {
      "typedRoutes": true
    }
  }
}

```

# app/_layout.tsx

```tsx
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { SplashScreen } from 'expo-router';

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Playfair-Regular': PlayfairDisplay_400Regular,
    'Playfair-Bold': PlayfairDisplay_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
```

# app/(auth)/login.tsx

```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement authentication
    router.replace('/(onboarding)/welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Lexica</Text>
        <Text style={styles.subtitle}>Your personal dictionary companion</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Mail size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Lock size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
          <ArrowRight size={20} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://www.google.com/favicon.ico' }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: 'https://www.apple.com/favicon.ico' }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 16,
    padding: 4,
  },
  inputIcon: {
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    padding: 12,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Inter-Medium',
    color: '#007AFF',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginHorizontal: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  signupText: {
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  signupLink: {
    fontFamily: 'Inter-SemiBold',
    color: '#007AFF',
  },
});
```

# app/(onboarding)/welcome.tsx

```tsx
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
```

# app/(tabs)/_layout.tsx

```tsx
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
```

# app/(tabs)/add.tsx

```tsx
import { View, Text } from 'react-native';

export default function AddScreen() {
  return (
    <View>
      <Text>Add Screen</Text>
    </View>
  );
} 
```

# app/(tabs)/index.tsx

```tsx
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
```

# app/(tabs)/library.tsx

```tsx
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
```

# app/(tabs)/practice.tsx

```tsx
import { View, Text } from 'react-native';

export default function PracticeScreen() {
  return (
    <View>
      <Text>Practice Screen</Text>
    </View>
  );
} 
```

# app/(tabs)/profile.tsx

```tsx
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
} 
```

# app/+not-found.tsx

```tsx
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.text}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

```

# app/create-flashcard.tsx

```tsx
import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform 
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function CreateFlashcardScreen() {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSave = () => {
    // TODO: Implement flashcard saving logic (e.g., save to local storage or backend)
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Flashcard</Text>
        {/* Just a placeholder to keep the title centered */}
        <View style={{ width: 24 }} />
      </View>

      {/* Flashcard Form */}
      <View style={styles.form}>
        {/* FRONT Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Front</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Type the front side..."
            placeholderTextColor="#999"
            value={front}
            onChangeText={setFront}
            multiline
          />
        </View>

        {/* BACK Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Back</Text>
          <TextInput
            style={styles.cardInput}
            placeholder="Type the back side..."
            placeholderTextColor="#999"
            value={back}
            onChangeText={setBack}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Container with a subtle background color
  container: {
    flex: 1,
    backgroundColor: '#0d1117', 
  },
  // Header with modern style and white text/icon
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#161b22',
    borderBottomWidth: 1,
    borderBottomColor: '#2f363d',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  // Form container
  form: {
    flex: 1,
    padding: 20,
  },
  // Each flashcard "side" as a card
  card: {
    backgroundColor: '#21262d',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    // Shadows (iOS + Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  // Label above each input
  cardLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#c9d1d9',
    marginBottom: 8,
  },
  // TextInput styled to feel like text in a card
  cardInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#f0f6fc',
    // Make multiline look better
    minHeight: 80,
    textAlignVertical: 'top',
  },
  // "Save" button
  saveButton: {
    backgroundColor: '#238636',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  saveButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});

```

# assets/images/favicon.png

This is a binary file of the type: Image

# assets/images/icon.png

This is a binary file of the type: Image

# expo-env.d.ts

```ts
/// <reference types="expo/types" />

// NOTE: This file should not be edited and should be in your git ignore
```

# hooks/useFrameworkReady.ts

```ts
import { useEffect } from 'react';

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export function useFrameworkReady() {
  useEffect(() => {
    window.frameworkReady?.();
  });
}

```

# package.json

```json
{
  "name": "lexica-dictionary",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "EXPO_NO_TELEMETRY=1 expo start",
    "build:web": "expo export --platform web",
    "lint": "expo lint"
  },
  "dependencies": {
    "@expo-google-fonts/inter": "^0.2.3",
    "@expo-google-fonts/playfair-display": "^0.2.3",
    "@expo/vector-icons": "^14.0.2",
    "@lucide/lab": "^0.1.2",
    "@react-navigation/bottom-tabs": "^7.2.0",
    "@react-navigation/native": "^7.0.14",
    "expo-auth-session": "~5.4.0",
    "expo-blur": "^14.0.3",
    "expo-constants": "^17.0.5",
    "expo-font": "^13.0.3",
    "expo-haptics": "^14.0.1",
    "expo-linear-gradient": "^14.0.2",
    "expo-linking": "^7.0.5",
    "expo-router": "4.0.17",
    "expo-secure-store": "~12.8.1",
    "expo-splash-screen": "^0.29.21",
    "expo-status-bar": "^2.0.1",
    "expo-symbols": "^0.2.2",
    "expo-system-ui": "^4.0.7",
    "expo-web-browser": "^14.0.2",
    "lucide-react-native": "^0.475.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-native": "0.76.6",
    "react-native-gesture-handler": "^2.23.0",
    "react-native-reanimated": "^3.16.7",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "^4.4.0",
    "react-native-svg": "^15.11.1",
    "react-native-url-polyfill": "^2.0.0",
    "react-native-web": "^0.19.13",
    "react-native-webview": "13.12.5"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@types/react": "~18.3.12",
    "@types/react-native": "^0.72.8",
    "expo": "^52.0.38",
    "typescript": "^5.3.3"
  }
}

```

# tsconfig.json

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-native",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "nativewind-env.d.ts"
  ]
}

```
