import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


const tabone = () =>{
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
              showEditButton
              onPress={() => console.log("Works!")}
            />
            <View>
            <Text style={styles.cardtext}>Posted By</Text>
            <Text style={styles.cardhead}>Random User</Text>
            </View>
            

          </View>
        
            <Text style={styles.text}>
              The idea with React Native Elements is more about component structure than actual design.  </Text>
            <Button
             icon={<Icon name="ios-play" color="white" size={30} style={{marginRight:15}}></Icon>}
              title='PLAY' />
          </Card>
    
        </View>
      );    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    text : {
      fontSize:20,
      margin:10
  },
  card : {
    flexDirection:"row"
  },
  cardtext : {
    fontSize:15,
    marginLeft:20,
    marginTop:15,
    textTransform:"uppercase",
    color:"blue"
  },
  cardhead: {
    fontSize:25,
    marginLeft:20,
    textTransform:"uppercase",
    color:"black"
  }
  
  });
export default tabone;