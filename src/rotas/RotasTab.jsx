import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inicial } from "../telas/Inicial";
import { Usuarios } from "../telas/Usuarios";
import { AmbientesEquipamentos } from "../telas/AmbientesEquipamentos";

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='inicial' component={Inicial}/>
            <Screen name='usuarios' component={Usuarios}/>
            <Screen name='ambiente' component={AmbientesEquipamentos}/>
        </Navigator>
    )
}