import React from 'react'
import { HomeScreen } from './screens/HomeScreen'
import {ContactScreen} from './screens/ContactScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCommentAlt,
    faHome,
    faMap,
    faUser,
    faPlusSquare,
    faUserCircle,
    IconDefinition,
  } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function HomeStack(): JSX.Element {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let icon: IconDefinition = faUserCircle;
              switch (route.name) {
                case 'Home':
                  icon = faHome;
                  break;
                case 'Contact':
                  icon = faUser;
                  break;
                default:
                  break;
              }
              // You can return any component that you like here!
              return <FontAwesomeIcon icon={icon} size={size} color={color} />;
            },
          })}
        
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name='Contact' component={ContactScreen}/>
        </Tab.Navigator>
    )
}