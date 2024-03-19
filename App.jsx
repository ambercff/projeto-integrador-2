import { StyleSheet, StatusBar, View } from 'react-native';
import { Inicial } from './src/telas/Inicial.jsx';
import { Usuarios } from './src/telas/Usuarios.jsx';
import { Cadastro } from './src/telas/Cadastro.jsx';
import { Login } from './src/telas/Login.jsx';
import { Sobre } from './src/telas/Sobre.jsx';

export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <Inicial /> */}
        {/* <Usuarios /> */}
        {/* <Cadastro /> */}
        <Login />
        {/* <Sobre /> */}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
