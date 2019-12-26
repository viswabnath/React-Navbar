import React, { Component } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const tabthree = () => {
  return (
   
    <View>
      <Card>
        <Text style={styles.container}
        icon={<Icon name="ios-play" color="white" size={30} style={{marginRight:15}}></Icon>}>
          Recording One</Text>
      </Card>
      <Card>
        <Text style={styles.container}
        icon={<Icon name="ios-play" color="white" size={30} style={{marginRight:15}}></Icon>}>
          Recording Two</Text>
      </Card>
      <Card>
        <Text style={styles.container}
        icon={<Icon name="ios-play" color="white" size={30} style={{marginRight:15}}></Icon>} >
          Recording Three</Text>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    textTransform: "uppercase",
    justifyContent: 'center',
    marginBottom: 5,


  }
});

export default tabthree;