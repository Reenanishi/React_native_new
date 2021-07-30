import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
        <Main />
    </Provider>
    );
}






// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>INITIAL APP DONOT DLETE</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0ff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
