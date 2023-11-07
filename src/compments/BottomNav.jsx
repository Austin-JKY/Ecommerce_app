import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../core/Styles';
import MyCarts from '../screens/MyCarts';
import DetailScreen from '../screens/DetailScreen';
// import { View,Text} from 'react-native';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {color: '#000', fontSize: 12},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Feather name="home" size={21} color={colors.mainColor} />
            ) : (

              <Feather name="home" size={21} color={colors.black} />
            ),
        }}
      />
      <Tab.Screen
        name="Mycart"
        component={MyCarts}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarLabelStyle: {color: '#000', fontSize: 12},
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntDesign
                name="shoppingcart"
                size={23}
                color={colors.mainColor}
              />
            ) : (
              <AntDesign name="shoppingcart" size={23} color={colors.black} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,

          tabBarLabelStyle: {color: '#000', fontSize: 12},
          tabBarIcon: ({focused}) =>
            focused ? (
              <EvilIcons name="user" size={30} color={colors.mainColor} />
            ) : (
              <EvilIcons name="user" size={30} color={colors.black} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  const user = useSelector((state)=>state.user.user);
  // console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (
            <>
        
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
            </>
          ) : (
            <>
          <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
