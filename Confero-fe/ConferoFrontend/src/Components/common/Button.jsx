import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';

function Btn({ onSuccess }) {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);

        onSuccess();
    }
    return (
        <Box className="mt-8">
            <Button
                fullWidth
                variant="contained"
                className='w-full'
                onClick={handleClick}
                loading={loading}
                loadingIndicator="Loading"
                sx={{
                    borderRadius: '9999px',
                }}>Next</Button>
        </Box>
    );
}

export default Btn;