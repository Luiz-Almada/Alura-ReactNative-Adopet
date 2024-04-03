import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../paginas/Home/index";
import Login from "./../paginas/Login/index";
import Cadastro from "./../paginas/Cadastro/index";
import ListaPets from "./../paginas/ListaPets/index";
import Mensagem from "./../paginas/Mensagem/index";
import { Image } from "react-native";
import Sobre from "./../paginas/Sobre/index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "./../paginas/Perfil/index";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#36D6AD'
        },
        drawerLabelStyle: {
          color: '#FFF',
          fontSize: 14,
          fontFamily: 'PoppinsRegular',
          fontWeight: '400',
          lineHeight: 20
        }
      }}
    >
      {/* <Drawer.Screen name="Lista de Pets" component={ListaPets} /> */}
      <Drawer.Screen name="Lista de Petss" component={TabRoutes} 
        options={{
          drawerLabel: 'Pets para adoção',
          drawerIcon: () => (<Image source={require('../assets/pets.png')} style={{width: 24, height: 24}}></Image>),
          headerTransparent: true,
          title: ''
        }}
      />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Sair" component={Home} />
    </Drawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lista de Pets"
        component={ListaPets}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/pets-green.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={Mensagem}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/mensagens.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
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
        {/* <Stack.Screen name="Tab" component={TabRoutes} /> */}
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
