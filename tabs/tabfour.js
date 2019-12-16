import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';

const tabfour = () =>{
    return (
        <View style={styles.container}>
          <Text> Notifications </Text>
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });

export default tabfour;