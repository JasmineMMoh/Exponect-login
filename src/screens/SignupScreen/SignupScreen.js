import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const SignupScreen = () => {
     const [usernumber, setNumber] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [passwordRepeat, setPasswordRepeat] = useState('');
     
     const navigation = useNavigation();
     
     const onRegisterPressed = () => {
          navigation.navigate('SignIn');
     }
     
     const onSignInPressed = () => {
          navigation.navigate('SignIn');
     }
     const onTermsofUsePressed = () => {
          console.warn('terms of use');
     }
     const onPolicyPressed = () => {
          console.warn('Privacy policy');
     }
     return (
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
                    <Text style={styles.title}>Create an account</Text>

               <CustomInput
                    placeholder="Mobile number"
                    value={usernumber}
                    setValue={setNumber}
                    />
               <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
               />
               <CustomInput
                    placeholder="Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
               />
               <CustomInput
                    placeholder="Repeat password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
               />


             <CustomButton text="Register" onPress = {onRegisterPressed} />
              <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsofUsePressed}>terms of Use</Text>  and <Text style={styles.link} onPress={onPolicyPressed}>privacy policy</Text> </Text>
             
                    <SocialSignInButtons />
               
               <CustomButton text="Already have an account? Sign in" onPress = {onSignInPressed} type="TERTIARY" />
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
export default SignupScreen;