import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from "react-native";

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import{
    StyledContainer,
    InnerContainer,
    PageTitle,
    PageLogo,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Color,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
} from './../component/style';

//colors
const {brand, darkLight, primary} = Color;

//keyboard


const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <ScrollView>
    <StyledContainer>
    <StatusBar style="dark"/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
            <PageTitle>Login</PageTitle>
            <SubTitle>Welcome</SubTitle>

            <Formik
                initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput 
                label="Email Address"
                icon='mail'
                placeholder='enter your mail id'
                placeholderTextColor={darkLight}
                value={values.email}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}/>
                <MyTextInput 
                label="Password"
                icon='lock'
                placeholder='* * * * * *'
                placeholderTextColor={darkLight}
                value={values.password}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                secureTextEntry={hidePassword}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}/>
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line/>
                <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                    <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                <ExtraText>Don't have an account? </ExtraText>
                <TextLink>
                    <TextLinkContent>Register Now </TextLinkContent>
                </TextLink>
                </ExtraView>
                </StyledFormArea>
                )}
            </Formik>
        </InnerContainer>
    </StyledContainer>
    </ScrollView>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
            </RightIcon>
        )}
        </View>
    );
};

export default Login;