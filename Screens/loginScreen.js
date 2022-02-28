import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Dimensions } from 'react-native';

const loginScreen = () {
     return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <Text>Header</Text>
               </View >
               <View style={styles.footer}>
                    <Text>Footer</Text>
               </View>
          </View>
     );

};

export default loginScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#246EE9'
     },
     header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
     },
     footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
     }
});

