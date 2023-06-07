import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const MyDarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary:"#FE5F00",
        background:"#000000",
        card:"#383838",
        text:"#464646",
        notification:"#C0C0C0"
    },
};

export default MyDarkTheme;