import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from '../screens/root';
import AnimationType from '../screens/animation-type';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="root">
      <Stack.Screen name="Animations" component={Root} />
      <Stack.Screen name="Animation type" component={AnimationType} />
    </Stack.Navigator>
  );
};

export default Router;
