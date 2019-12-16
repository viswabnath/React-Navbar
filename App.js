import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import Navigator from "./navigation/navigator";


export default class app extends Component {
  render() {

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 25 }}>
        <Navigator />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
 
});

