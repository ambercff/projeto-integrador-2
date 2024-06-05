import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../telas/Login'
import { Formulario } from '../components/Formulario';
import { RotasTab } from './RotasTab';
import { AuthProvider } from '../components/AuthContext';

const { Navigator, Screen } = createNativeStackNavigator();

export function RostasStack(){
    return (
        <AuthProvider>
            <NavigationContainer>
                <Navigator screenOptions={{headerShown: false}}>
                    <Screen 
                        name='login'
                        component={Login}
                    />

                    <Screen
                        name='cadastro'
                        component={Formulario}
                    />

                    <Screen 
                        name='rotasTab'
                        component={RotasTab}
                    />
                </Navigator>
            </NavigationContainer>
        </AuthProvider>
    )
}