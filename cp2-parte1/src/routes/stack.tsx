import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import Tarefas from '../screens/Tarefas'
import Estatisticas from '../screens/Estatisticas'


const Stack = createStackNavigator();

export default function StackRoutes(){

  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}