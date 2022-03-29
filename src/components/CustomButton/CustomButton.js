import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type ="PRIMARY", bgColor, fgColor }) => {
     return (
          <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], bgColor ? { backgroundColor: bgColor } : {}]}>
               <Text style={[styles.text, styles[`text_${type}`] ,
               fgColor ? {color: fgColor} : {},]}>{text}</Text>
          </Pressable>
     );
};

const styles = StyleSheet.create({
     container_PRIMARY: {
          backgroundColor: '#3B71F3',
          width: '100%',
          padding: 15,
          marginVertical: 5,

          alignItems: 'center',
          borderRadius: 5,
     },

     container_SECONDARY: {
          borderColor: '#3B71F3',
          borderWidth: 2,
          width: '100%',
          alignItems: 'center',
          marginVertical: 5,
     },
     container_TERTIARY: {
          padding: 10,
          marginVertical: 5,
          
     },

     text_PRIMARY: {
          fontWeight: 'bold',
          color: 'white',
          
     },

     text_TERTIARY: {
          fontWeight: 'bold',
          color: 'grey',
          textDecorationLine: 'underline',
     },
     text_SECONDARY: {
          color: '#3B71F3',
     },
})

export default CustomButton;