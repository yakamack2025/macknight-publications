# Firebase Setup Instructions

## 1. Get Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `litverse-4bfx4`
3. Go to Project Settings (gear icon) > General tab
4. Scroll down to "Your apps" section
5. If no web app exists, click "Add app" and create one
6. Copy the configuration object

## 2. Update Configuration File
Replace the placeholder values in `src/environments/firebase.config.ts` with your actual config:

```typescript
export const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "litverse-4bfx4.firebaseapp.com",
  projectId: "litverse-4bfx4", 
  storageBucket: "litverse-4bfx4.firebasestorage.app",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 3. Set Up Firestore Database
1. In Firebase Console, go to Firestore Database
2. Create database in "production mode" 
3. Choose a location (us-central1 recommended)
4. Set up these security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to chat messages
    match /50InfluentialChats/{document=**} {
      allow read, write: if true; // For demo - restrict in production
    }
  }
}
```

## 4. Enable Authentication
1. Go to Authentication > Sign-in method
2. Enable "Anonymous" sign-in
3. This allows users to chat without creating accounts

## 5. Database Structure
The chat will create this structure automatically:
```
50InfluentialChats/
  ├── messages/
  │   └── all/
  │       └── [message documents]
  └── users/
      └── online/
          └── [user presence documents]
```

## 6. Test the Chat
- Deploy your app and test the chat functionality
- Messages should persist across browser sessions
- Multiple users can chat in real-time

## Security Notes
- Current rules allow all access (good for demo)
- For production, add proper user authentication
- Consider message moderation for public deployment