import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReadBarCode from '../screens/ReadBarCode';
import InputBarCode from '../screens/InputBarCode';
import ReadQRCode from '../screens/ReadQRCode';
import Login from '../screens/Login';
import RecoveryPassoword from '../screens/RecoveryPassword';
import Export from '../screens/Export';
import Users from '../screens/Users';
import UsersForm from '../screens/UsersForm';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../theme';

const stackProps = { headerMode: 'none' };

const RegisterStack = createStackNavigator();
const Register = () => (
  <RegisterStack.Navigator {...stackProps}>
    <RegisterStack.Screen name="ReadBarCode" component={ReadBarCode} />
    <RegisterStack.Screen name="InputBarCode" component={InputBarCode} />
    <RegisterStack.Screen name="ReadQRCode" component={ReadQRCode} />
  </RegisterStack.Navigator>
);

const UsersStack = createStackNavigator();
const UsersScreens = () => (
  <UsersStack.Navigator {...stackProps}>
    <UsersStack.Screen name="Users" component={Users} />
    <UsersStack.Screen name="UsersForm" component={UsersForm} />
  </UsersStack.Navigator>
);

const Tab = createBottomTabNavigator();

const LoggedIn = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      style: {
        height: 80,
      },
      tabStyle: {
        marginTop: 5,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 16,
        marginBottom: 10,
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Register') {
          return <AntDesign name="pluscircleo" size={32} color={color} />;
        } else if (route.name === 'Export') {
          return <Entypo name="export" size={32} color={color} />;
        } else {
          return <Feather name="users" size={32} color={color} />;
        }
      },
    })}
  >
    <Tab.Screen
      name="Register"
      options={{ tabBarLabel: 'Novo Registro' }}
      component={Register}
    />
    <Tab.Screen
      name="Export"
      options={{ tabBarLabel: 'Exportação' }}
      component={Export}
    />
    <Tab.Screen
      name="Users"
      options={{ tabBarLabel: 'Usuários' }}
      component={UsersScreens}
    />
  </Tab.Navigator>
);

const LoggedOutStack = createStackNavigator();

const LoggedOut = () => (
  <LoggedOutStack.Navigator {...stackProps}>
    <LoggedOutStack.Screen name="Login" component={Login} />
    <LoggedOutStack.Screen
      name="RecoveryPassword"
      component={RecoveryPassoword}
    />
  </LoggedOutStack.Navigator>
);

const Routes = ({ isLogged }) => (
  <NavigationContainer>
    {isLogged ? <LoggedIn /> : <LoggedOut />}
  </NavigationContainer>
);

export default Routes;
