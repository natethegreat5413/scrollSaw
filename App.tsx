import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/stacks/HomeStack'

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeStack'>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
          </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
