import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';

const tabthree = () =>{
    return (
        <View style={styles.container}>
          <Text> Videos</Text>
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

export default tabthree;