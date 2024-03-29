import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../paginas/Home/index";
import Login from "./../paginas/Login/index";
import Cadastro from "./../paginas/Cadastro/index";
import ListaPets from "./../paginas/ListaPets/index";
import Mensagem from "./../paginas/Mensagem/index";
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Lista de Pets" component={ListaPets} 
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/pets-green.png')} style={{ width: 24, height: 24 }}/>
          )
        }}
      />
      <Tab.Screen name="Mensagens" component={Mensagem} 
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/mensagens.png')} style={{ width: 24, height: 24 }}/>
          )
        }}      
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //retira o titulo de todas as rota da Tela
          headerTitle: "",
          //retira a barra do titulo de todas as rota da Tela
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   //retira o titulo da rota da Tela
          //   headerTitle: '',
          //   //retira a barra do titulo da rota da Tela
          //   headerShown: false
          // }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Tab" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
