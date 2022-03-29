import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logoi.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     
     const { height } = useWindowDimensions();
     const navigation = useNavigation();
     
     const onSignInPressed = () => {
          
          //validation code here
          navigation.navigate('Home');
     }
     const onForgotPasswordPressed = () => {
          
          navigation.navigate('ForgotPassword');
     }
    
     const ondonthaveaccount = () => {
          navigation.navigate('Signup');
     }
     return (
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
               <Image source={Logo} style={[StyleSheet.logo, { height: height * 0.4 }]} resizeMode="contain" />

               <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
               />
               <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
               />

             <CustomButton text="Sign In" onPress = {onSignInPressed} />

                    <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
                    
                    <SocialSignInButtons />

               <CustomButton text="Don't have an account? Create one." onPress = {ondonthaveaccount} type="TERTIARY" />
               </View>
               </ScrollView>

     );
};

const styles = StyleSheet.create({
     root: {
          alignItems: 'center',
          padding: 20,
     },
     logo: {
          width:'100%',
          maxWidth:300, 
          maxHeight: 300,
     },
});
export default SignInScreen;