import React from 'react';

import { Color } from '../component/style';
const {primary, tertiary} = Color;
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome'; 

const Stack = createStackNavigation();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },

                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            >
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;