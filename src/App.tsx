import React from 'react';
import { Box, Container } from '@mui/material';
import Balance from './components/Balance';

const App: React.FC = () => {
    return (
        <Container maxWidth='sm'>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                }}
            >
                <Balance />
            </Box>
        </Container>
    );
};

export default App;
