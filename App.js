import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import OtpScreen from "./src/components/OtpScreen";
import Home from "./src/components/Home";
import History from "./src/components/History";
import TicketDetails from "./src/components/TicketDetails";
import TicketList from "./src/components/TicketList";
import Chat from "./src/components/Chat";
import Notification from "./src/components/Notification";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TicketDetails" component={TicketDetails} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="TicketList" component={TicketList} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notification" component={Notification} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
