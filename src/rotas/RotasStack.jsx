import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../telas/Login'
import { RotasTab } from './RotasTab'

const { Navigator, Screen } = createNativeStackNavigator();

export function RostasStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen 
                    name='login'
                    component={Login}
                />

                <Screen 
                    name='rotasTab'
                    component={RotasTab}
                />
            </Navigator>
        </NavigationContainer>
    )
}