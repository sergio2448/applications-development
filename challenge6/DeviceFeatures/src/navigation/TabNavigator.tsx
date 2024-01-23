import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="shop" size={24} color={focused ? '#fff' : '#ccc'} />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? '#fff' : '#ccc'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrdersNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="reorder"
                size={24}
                color={focused ? '#fff' : '#ccc'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user-o"
                size={24}
                color={focused ? '#fff' : '#ccc'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0D0D0D',
    shadowColor: '#ccc',
    elevation: 1,
    position: 'absolute',
    left: 25,
    right: 25,
    bottom: 25,
    height: 60,
    borderRadius: 20,
  },
});
