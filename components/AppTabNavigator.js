import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/ItemDonateScreen';
import BookRequestScreen from '../screens/ItemRequestScreen';



export const AppTabNavigator = createBottomTabNavigator({
  ItemDonate: {
    screen: BookDonateScreen,
    navigationOptions: {
      tabBarLabel: "Donate Items",
    }
  },
  ItemRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarLabel: "Request Items",
    }
  }
});
