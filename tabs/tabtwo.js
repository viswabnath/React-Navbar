import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { ListItem } from 'react-native-elements'

const tabtwo = () =>{
    return (

      <View style={styles.container}>
      {
        <ListItem 
          leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
          placeHolder = "N"
          title="Mary Joseph"
          bottomDivider
        />
      }
  
    {
      <ListItem
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
        title="Paul Allen"
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
    },
  
  });

export default tabtwo;