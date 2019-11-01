# rn-typescript
## React Native TypeScript + Redux
This is my boilerplate for redux configuration when using TypeScript

### Project Structure

```bash
├── __tests_
├── android
├── ios
├── src
│   ├── redux
│   │   ├── your-state
│   │   │   ├── action.ts
│   │   │   ├── reducer.ts
│   │   │   ├── types.ts
│   │   ├── reducers.ts
│   │   ├── store.ts
│   ├── routes
│   │   ├── index.ts
│   ├── screens
│   │   ├── your-screen
│   │   │   ├── About.tsx
│   │   │   ├── index.ts
│   │   │   ├── styles.ts
│   │   │   ├── types.ts
│   ├── services
│   │   ├── api.ts
├── App.tsx
├── index.js
├── package.json
```

### Dependencies
1. Redux:

```
  react-redux
  redux
  redux-devtools-extension
  redux-logger
  redux-persist
  redux-thunk
  @react-native-community/async-storage
```

2. Navigation:

```
  react-navigation
  react-navigation-stack
  react-native-gesture-handler
  react-native-reanimated
```

### Dev Dependencies
You can find devDependencies in package.json
