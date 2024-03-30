import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Home from '../screens/Home';
import Tarefas from '../screens/Tarefas';
import Estatisticas from '../screens/Estatisticas';

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>

      <Navigator
        screenOptions={{
          tabBarActiveTintColor: '#db636f',
          tabBarInactiveTintColor: 'beb7bb',
        }}>


        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon :()=><Ionicons name="home" size={24} color="black" />
          }}
        />


        <Screen 
          name="Tarefas" 
          component={Tarefas} 
          options={{
            tabBarIcon :()=><MaterialCommunityIcons name="pencil" size={24} color="black" />
          }}
        />


        <Screen 
          name="Estatisticas" 
          component={Estatisticas}
          options={{
            tabBarIcon :()=><Entypo name="bar-graph" size={24} color="black" />
          }}
        />


      </Navigator>
    </NavigationContainer>
  );
}
