import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import  Mapa  from '../telas/Mapa'

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Mapa' component={Mapa} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="users" size={size} color={color} />
                )
            }} />
        </Navigator>
    )
}