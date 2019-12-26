import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

const tabfour = () =>{
  return (

    <View style={styles.container}>
      {
        <ListItem style={styles.notification}
          leftAvatar={{ source: { uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png' } }}
          title="Notification"
          subtitle="You don't have any Notifications"
          bottomDivider
        />
      }
  
    {
      <ListItem style={styles.notification}
        leftAvatar={{ source: { uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png' } }}
        title="Notification"
        subtitle="You don't have any Notifications"
        bottomDivider
      />
    }
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      textTransform:"uppercase"
    },
    notification :{
      paddingBottom:5,
    }
  
  });

export default tabfour;