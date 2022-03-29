import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const ConfirmScreen = () => {
     const [code, setcode] = useState('');
     
     
     
     
     const onCofirmPressed = () => {
          console.warn("Confirm");
     }
     
     const onSignInPressed = () => {
          console.warn("Sign In");
     }
     const onResendPressed = () => {
          console.warn("Resend");
     }
     
     return (
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
                    <Text style={styles.title}>Confirm your Email</Text>

               <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setcode}
                    />
               

             <CustomButton text="Confirm" onPress = {onCofirmPressed} />
               
              <CustomButton text="Resend Code" onPress = {onResendPressed} type="SECONDARY" />
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
export default ConfirmScreen;