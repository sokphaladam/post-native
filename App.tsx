import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const TabNvigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-home' color={tintColor} size={25}/>
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-person' color={tintColor} size={25}/>
      )
    }
  }, 
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({tintColor}) => (
        <Icon name ='ios-menu' color={tintColor} size={25}/>
      )
    }
  },
},{
  tabBarOptions: {
    
  }
})

export default createAppContainer(TabNvigator);


