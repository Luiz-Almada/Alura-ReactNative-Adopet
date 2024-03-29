import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../paginas/Home/index";
import Login from "./../paginas/Login/index";
import Cadastro from './../paginas/Cadastro/index';

const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
