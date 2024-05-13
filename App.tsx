import { createDrawerNavigator } from "@react-navigation/drawer";
import {DarkTheme, NavigationContainer} from '@react-navigation/native'
import Register from "./screens/templates/Auth";
import Dashboard from "./screens/templates/Dashboard";
import { AuthProvider, useAuth } from "./utils/context/AuthContext";


const Drawer = createDrawerNavigator()
const App = () => {
  let {authState} = useAuth()

  return (
  <AuthProvider>
    <NavigationContainer theme={myThem}  >
        <Drawer.Navigator
        screenOptions={screenOptions}>
              {authState?.authenticated?<Drawer.Screen name="Dashboard" component={Dashboard} /> 
               :  <Drawer.Screen name="Register" component={Register}/>}
        </Drawer.Navigator>
    </NavigationContainer>
  </AuthProvider> 
  
  );
};

export default App;

const screenOptions = {
  headerTintColor: "white",
          headerStyle: {
            backgroundColor: "rgb(1, 27, 27)"
          },
          drawerContentStyle:{
            backgroundColor: "rgb(1, 27, 27)"
          }
}

const myThem = {
  ...DarkTheme , 
  colors:{
    ...DarkTheme.colors,
    primary:'white',
  
  }
}