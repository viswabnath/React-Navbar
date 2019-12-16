import tabone from '../tabs/tabone';
import tabtwo from '../tabs/tabtwo';
import tabthree from '../tabs/tabthree';
import tabfive from '../tabs/tabfive';
import tabfour from '../tabs/tabfour';
import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

  const tabs = createMaterialTopTabNavigator({
    Home: {
      screen: tabone,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={28}></Icon>
        )
  
      }
    },
  
    Friends: {
      screen: tabtwo,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-people" color={tintColor} size={28}></Icon>
        )
      }
    },
    Video: {
      screen: tabthree,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-youtube" color={tintColor} size={28}></Icon>
        )
      }
    },
    Notification: {
      screen: tabfour,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications" color={tintColor} size={28}></Icon>
        )
      }
    },
    Menu: {
      screen: tabfive,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-menu" color={tintColor} size={28}></Icon>
        )
      }
    },
  }, {
    initialRouteName: 'Home',
    // order: ['Settings','Home'],
    // activeTintColor: 'skyblue',
    // tabBarPosition:'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'blue',
      style: {
        backgroundColor: '#f8f9f8'
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: false,
    },
  
  });

  export default createAppContainer(tabs);