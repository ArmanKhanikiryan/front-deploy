import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProgressCircle = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

export default ProgressCircle;