import { StyleSheet, StatusBar, View } from 'react-native';
import { Inicial } from './src/telas/Inicial.jsx';
import { Usuarios } from './src/telas/Usuarios.jsx';

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <Inicial /> */}
        <Usuarios />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
