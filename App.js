import React, { Component } from 'react';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import{ createMaterialTopTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

export default class app extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1,backgroundColor:'#f2f2f2'}}>
        <AppTabNavigator />
      </SafeAreaView>
    )
  }
}
export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Navigator</Text>
      </View>
    );
  }
}

export class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Chat Navigator</Text>
      </View>
    );
  }
}

export class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Search Navigator</Text>
      </View>
    );
  }
}

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Navigator</Text>
      </View>
    );
  }
}

const AppTabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24}></Icon>
      )
    }
  },
  
  chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: 'Chats',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24}></Icon>
      )
    }
  },
  search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'search',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24}></Icon>
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24}></Icon>
      )
    }
  },

}, {
  initialRouteName: 'Home',
  // order: ['Settings','Home'],
  // activeTintColor: 'skyblue',
  // tabBarPosition:'bottom',
  tabBarOptions:{
    activeTintColor:'white',
    inactiveTintColor:'black',
    // style:{
    //   backgroundColor:'#f2f2f2'
    // }
  },
  // indicatorStyle:{
  //   height:0
  // },
  // showIcon:true
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
