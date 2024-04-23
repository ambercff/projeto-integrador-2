import { StyleSheet, StatusBar, View } from 'react-native';
import { Login } from './src/telas/Login.jsx';
import { RostasStack } from './src/rotas/RotasStack.jsx';


export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <RostasStack />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
