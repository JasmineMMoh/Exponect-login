import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {
     const [code, setcode] = useState('');
     const [newpassword, setnewpassword] = useState('');
     const [repeatpassword, setrepeatpassword] = useState('');
     
     const navigation = useNavigation();
       const onSubmitPressed = () => {
            navigation.navigate('Home');

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
                    value={code}
                    setValue={setcode}
                    />
               <CustomInput
                    placeholder="Enter your new password"
                    value={newpassword}
                    setValue={setnewpassword}
                    />
               <CustomInput
                    placeholder="Repeat password"
                    value={repeatpassword}
                    setValue={setrepeatpassword}
                    />
               

             <CustomButton text="Submit" onPress = {onSubmitPressed} />
               
            
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
export default NewPasswordScreen;