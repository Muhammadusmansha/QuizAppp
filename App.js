import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/Main';
import ResultScreen from "./screens/Result";
import SnquesScreen from "./screens/Snques";
import AlquesScreen from "./screens/Alques";
import LoginScreen from "./screens/Login";
import ForgetpasScreen from "./screens/Forget";
import SelectionScreen from "./screens/Selection";
import CredentialScreen from "./screens/Credentals";
import UpdateScreen from "./screens/Update";
import CodeScreen from "./screens/Code";
import GetStartScreen from "./screens/GetStart";
import CreateAccountScreen from "./screens/CreateAccount";
import LevelScreen from "./screens/Level";

const Stack = createNativeStackNavigator();


const stack1 = () => {
  return (


    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen name="GetStart" component={GetStartScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forget" component={ForgetpasScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="Credentals" component={CredentialScreen} />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Snques" component={SnquesScreen} />
        <Stack.Screen name="Alques" component={AlquesScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />
        <Stack.Screen name="Level" component={LevelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default stack1;