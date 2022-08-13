import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#6a52b3',
            main: '#4527a0',
            dark: '#301b70',
            contrastText: '#fff',
        },
        secondary: {
            light: '#a6e981',
            main: '#74b652',
            dark: '#438624',
            contrastText: '#000',
        },
        background: {
            default: '#F5F5F5',
        },
    },
});

export default theme;
