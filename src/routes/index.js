import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadBarCode from '../screens/ReadBarCode';
import ReadQRCode from '../screens/ReadQRCode';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ReadBarCode" component={ReadBarCode} />
        <Stack.Screen name="ReadQRCode" component={ReadQRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
