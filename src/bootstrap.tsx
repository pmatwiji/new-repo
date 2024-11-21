import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const rootElement = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

rootElement.render(
    <React.StrictMode>
        <ThemeProvider theme={createTheme()}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
