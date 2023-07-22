import React from "react";
import { StatusBar } from 'expo-status-bar';

import{
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from './../component/style';

const Welcome = () => {
    return(
    <>
    <StatusBar style="light"/>
        <InnerContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/img/welcome.jpg')}/>
            <WelcomeContainer>
            <PageTitle welcome={true}>Welcome</PageTitle>
            <SubTitle welcome={true}>Fazal</SubTitle>
            <SubTitle welcome={true}>Md.fazaluddin501@gmail.com</SubTitle>
                
                <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')}/>
                <Line/>
                <StyledButton onPress={() => {}}>
                    <ButtonText>Logout</ButtonText>
                </StyledButton>
                </StyledFormArea>
            </WelcomeContainer>
        </InnerContainer>
    </>
    );
};

export default Welcome;