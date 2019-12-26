import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

const tabfive = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.card}>
          <Avatar
            size="large"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            // showEditButton
            onPress={() => console.log("Works!")}
          />
          <View>
            <Text style={styles.cardhead}>Random User</Text>
            <Text style={styles.cardtext}>View Profile</Text>
          </View>
        </View>
      </Card>
      <Card>
        <View style={styles.card}>
          <Avatar
            rounded
            icon={{ name: 'users', type: 'font-awesome' }}
          />
          <Text style={styles.cardlist}>Friends</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.card}>
          <Avatar
            rounded
            icon={{ name: 'microphone', type: 'font-awesome' }}
          />
          <Text style={styles.cardlist}>Recordings</Text>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    margin: 10
  },
  card: {
    flexDirection: "row"
  },
  cardtext: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 15,
    textTransform: "uppercase",
    color: "blue"
  },
  cardhead: {
    fontSize: 25,
    marginLeft: 20,
    textTransform: "uppercase",
    color: "black"
  },
  cardlist: {
    fontSize: 20,
    marginLeft:20,
    color:"black"
  }


});

export default tabfive;