import { DefaultTheme } from '@react-navigation/native';

const MyLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary:"#FE5F00",
        background:"#FFFFFF",
        card:"#FFFFFF",
        text:"#F5F5F5",
        notification:"#C0C0C0"
    },
};

export default MyLightTheme;