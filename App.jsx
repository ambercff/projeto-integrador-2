import { StyleSheet, StatusBar, View } from 'react-native';
import { Inicial } from './src/telas/Inicial.jsx';

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Inicial />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
