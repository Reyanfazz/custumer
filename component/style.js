import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
//colors
export const Color = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    yellow: "yellow"
};
const {primary, secondary, tertiary, darkLight, brand, green, red, yellow} = Color;
export const StyledContainer = styled(View)`
flex: 1;
padding: 25px;
paddingTop: ${StatusBarHeight + 10}px;
backgroundColor: ${yellow};
`;
export const InnerContainer = styled(View)`
flex: 1;
width: 100%;   
align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
padding: 25px;
paddingTop: 10px;
justifyContent: center;
`;

export const PageLogo = styled(Image)`
width: 250px;
height: 200px;
`;

export const Avatar = styled(Image)`
width: 100px;
height: 100px;
margin: auto;
borderRadius: 50px;
borderWidth: 2px;
borderColor: ${secondary};
marginBottom: 10px;
marginTop: 10px;
`;

export const WelcomeImage = styled(Image)`
height: 250px;
minWidth: 50%;
`;

export const PageTitle = styled(Text)`
fontSize: 30px;
textAlign: center;
fontWeight: bold;
color: ${brand};
padding: 10px;

${(props) => props.welcome && `
fontSize: 35px;
`}
`;
export const SubTitle = styled(Text)`
fontSize: 18px;
marginBottom: 20px;
letterSpacing:1px;
fontWeight:bold;
color: ${tertiary};

${(props) => props.welcome && `
marginBottom: 5px;
fontWeight: normal;
`}
`;

export const StyledFormArea = styled(View)`
width:90%;
`;
export const StyledTextInput = styled(TextInput)`
backgroundColor: ${secondary};
padding: 15px;
paddingLeft: 55px;
paddingRight: 55px;
borderRadius: 10px;
fontSize: 16px;
height: 60px;
marginBottom: 10px;
marginVertical: 3px;
color:${tertiary};
`;

export const StyledInputLabel = styled(Text)`
color: ${tertiary};
fontSize: 13px;
textAlign: left;
`;

export const LeftIcon = styled(View)`
left: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
right: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity) `
padding: 15px;
backgroundColor: ${brand};
justifyContent: center;
borderRadius: 5px;
alignItems: center;
marginVertical: 5px;
height: 60px;

${(props) => props.google == true && `
backgroundColor: ${green};
flexDirection: row;
justifyContent: center;
`}
`;

export const ButtonText = styled(Text)`
color: ${primary};
fontSize: 16px;

${(props) => props.google == true && `
paddingLeft: 8%;
`}
`;

export const MsgBox = styled(Text)`
textAlign: center;
fontSize: 13px;
`;

export const Line = styled(View)`
height: 1px;
width: 100%;
backgroundColor: ${darkLight};
marginVertical: 10px;
`;

export const ExtraView = styled(View)`
justifyContent: center;
flexDirection: row;
alignItems: center;
padding: 10px;
`;

export const ExtraText = styled(Text)`
justifyContent: center;
alignContent: center;
color: ${tertiary};
fontSize: 15px; 
`;

export const TextLink = styled(TouchableOpacity)`
justifyContent: center;
alignItems: center;
`;

export const TextLinkContent = styled(Text)`
color: ${brand};
fontSize: 15px;
`;