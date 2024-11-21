import React, { useState } from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface BalanceData {
    currentBalance: number;
    currency: string;
}

const Balance: React.FC = () => {
    const [showBalance, setShowBalance] = useState(true);

    const balanceData: BalanceData = {
        currentBalance: 5842.5,
        currency: 'USD',
    };

    const formatBalance = () => {
        if (showBalance) {
            return balanceData.currentBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }
        return '****.**';
    };

    return (
        <Paper
            elevation={3}
            sx={{ p: 3, borderRadius: 2 }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <Typography
                    variant='h6'
                    color='text.secondary'
                    gutterBottom
                >
                    Current Balance
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }}
                >
                    <Typography
                        variant='h3'
                        component='div'
                        sx={{
                            fontWeight: 'bold',
                            transition: 'opacity 0.2s', // Smooth transition
                            opacity: showBalance ? 1 : 0.7, // Slight opacity change
                        }}
                    >
                        {balanceData.currency} {formatBalance()}
                    </Typography>
                    <IconButton
                        onClick={() => setShowBalance(!showBalance)}
                        sx={{
                            ml: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            },
                        }}
                        aria-label={
                            showBalance ? 'hide balance' : 'show balance'
                        }
                    >
                        {showBalance ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    );
};

export default Balance;
