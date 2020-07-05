import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReadBarCode from '../screens/ReadBarCode';
import ReadQRCode from '../screens/ReadQRCode';
import Login from '../screens/Login';
import RecoveryPassoword from '../screens/RecoveryPassword';
import Export from '../screens/Export';
import Users from '../screens/Users';
import UsersForm from '../screens/UsersForm';

const RegisterStack = createStackNavigator();
const Register = () => (
  <RegisterStack.Navigator>
    <RegisterStack.Screen name="ReadBarCode" component={ReadBarCode} />
    <RegisterStack.Screen name="ReadQRCode" component={ReadQRCode} />
  </RegisterStack.Navigator>
);

const UsersStack = createStackNavigator();
const UsersScreens = () => (
  <UsersStack.Navigator>
    <UsersStack.Screen name="Users" component={Users} />
    <UsersStack.Screen name="UsersForm" component={UsersForm} />
  </UsersStack.Navigator>
);

const Tab = createBottomTabNavigator();

const LoggedIn = () => (
  <Tab.Navigator>
    <Tab.Screen name="Register" component={Register} />
    <Tab.Screen name="Export" component={Export} />
    <Tab.Screen name="Users" component={UsersScreens} />
  </Tab.Navigator>
);

const LoggedOutStack = createStackNavigator();

const LoggedOut = () => (
  <LoggedOutStack.Navigator>
    <LoggedOutStack.Screen name="Login" component={Login} />
    <LoggedOutStack.Screen
      name="RecoveryPassoword"
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
