import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inicial } from "../telas/Inicial";
import { Usuarios } from "../telas/Usuarios";
import { AmbientesEquipamentos } from "../telas/AmbientesEquipamentos";
import { Feather } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='inicial' component={Inicial} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={size} color={color} />
                )
            }} />
            <Screen name='usuarios' component={Usuarios} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="users" size={size} color={color} />
                )
            }} />
            <Screen name='ambiente' component={AmbientesEquipamentos} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="map-pin" size={size} color={color} />
                )
            }} />
        </Navigator>
    )
}