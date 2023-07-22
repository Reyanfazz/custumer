import React, {Component, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

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

//date&time
import DateTimePicker from '@react-native-community/datetimepicker';
const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
     
    //Actual date of birth
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }
    const showDatePicker = () => {
        setShow(true);
    }
    return(
        <ScrollView>
    <StyledContainer>
    <StatusBar style="dark"/>
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')}/>
            <PageTitle>Signup</PageTitle>
            <SubTitle>Signup to Continue</SubTitle>

            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

            <Formik
                initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput 
                label="Full Name"
                icon='person'
                placeholder='Enter your Full Name'
                placeholderTextColor={darkLight}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}/>
                
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
                label="Date of Birth"
                icon='calendar'
                placeholder='YYY - MM - DD'
                placeholderTextColor={darkLight}
                value={dob ? dob.toDateString() : ''}
                isDate = {true}
                editable = {false}
                showDatePicker = {showDatePicker}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}/>
                
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
                
                <MyTextInput 
                label="Confirm Password"
                icon='lock'
                placeholder='* * * * * *'
                placeholderTextColor={darkLight}
                value={values.confirmPassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                secureTextEntry={hidePassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}/>
                
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line/>

                <ExtraView>
                <ExtraText>Already have an account? </ExtraText>

                <TextLink>
                    <TextLinkContent>Login </TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <ScrollView>
        <View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        
        {!isDate && <StyledTextInput {...props}/>}
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props}/>
            </TouchableOpacity>
        )}

        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
            </RightIcon>
        )}
        </View>
        </ScrollView>
    );
};

export default Signup;