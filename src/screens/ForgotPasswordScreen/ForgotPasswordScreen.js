import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
     const [Number, setNumber] = useState('');
     const navigation = useNavigation();
       const onSendPressed = () => {
            navigation.navigate('newpassword');
     }  
     const onSignInPressed = () => {
          navigation.navigate('SignIn');
     }
     return (
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
                    <Text style={styles.title}>Reset your password</Text>

               <CustomInput
                    placeholder="Enter your confirmation code"
                    value={Number}
                    setValue={setNumber}
                    />
               

             <CustomButton text="Send" onPress = {onSendPressed} />
               
            
               <CustomButton text="Back to Sign in" onPress = {onSignInPressed} type="TERTIARY" />
               </View>
               </ScrollView>

     );
};

const styles = StyleSheet.create({
     root: {
          alignItems: 'center',
          padding: 20,
     },
     title: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#051C60',
          margin: 5,
          marginVertical: 25,
     },
     text: {
          color: 'grey',
          marginVertical: 10,
     },
     link: {
          color: '#FDB075',
     },
});
export default ForgotPasswordScreen;