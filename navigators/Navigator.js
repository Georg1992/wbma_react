import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import Login from '../views/Login';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
// import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#845EC3',
          height: 60,
          width: '100%',
          paddingBottom: 20,
          flexDirection: 'column',
          alignSelf: 'center',
          elevation: 2,
        },
        labelStyle: {
          color: 'black',
        },
      }}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     switch (route.name === 'Home') {
      //       case 'Home':
      //         iconName = 'home';
      //         break;
      //       case 'Profile':
      //         iconName = 'account-box';
      //         break;
      //     }
      //     return <Icon name={iconName} size={size} color={color} />;
      //   },
      // })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  const {isLoggedIn} = useContext(MainContext);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={TabScreen}
            options={({route}) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
            })}
          />
          <Stack.Screen name="Single" component={Single} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
