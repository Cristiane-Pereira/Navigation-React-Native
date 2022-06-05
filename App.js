import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contacts from "./src/pages/Contacts/Contacts";
import Informations from "./src/pages/Informations/Informations";
import AppContacts from "./src/pages/AppContacts";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator tabBarShowLabel={false}>
      <Tab.Screen name="AppContact" component={AppContacts} />
      <Tab.Screen name="Contact" component={Contacts} />
    </Tab.Navigator>
  );
}

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppContact"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Information" component={Informations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
