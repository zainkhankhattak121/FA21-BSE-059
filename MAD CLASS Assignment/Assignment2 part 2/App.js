import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import AddNewContactScreen from './AddNewContactScreen';
import EditContactScreen from './EditContactScreen';
import CallScreen from './CallScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="AddNewContact" component={AddNewContactScreen} />
        <Stack.Screen name="EditContact" component={EditContactScreen} />
        <Stack.Screen name="Call" component={CallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
