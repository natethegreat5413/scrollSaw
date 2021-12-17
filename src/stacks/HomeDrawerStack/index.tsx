import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import { ContactScreen } from '../HomeStack/screens/ContactScreen';


const Drawer = createDrawerNavigator()

export default function HomeDrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Contact Us" component={ContactScreen}/>
        </Drawer.Navigator>
    )
}


// function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
  
//         <View style={{ height: 50 }}>
//           <Sd.Text>ver. {process.env.COMMIT}</Sd.Text>
//         </View>
//         <DrawerItem
//           {...props}
//           label="Contact"
//           style={{
//             backgroundColor: 'dodgerblue',
//           }}
//           onPress={() => {
//             props.navigation.navigate('AuthStack', {
//               screen: 'LoginScreen',
//               params: {
//                 message: 'You have logged out.',
//               },
//             });
//           }}
//         />
//       </DrawerContentScrollView>
//     );
//   }