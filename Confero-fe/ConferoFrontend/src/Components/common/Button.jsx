import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';

function Btn({ onSuccess, handleClick }) {
    const [loading, setLoading] = useState(false);
    async function handleBtnClick() {
        setLoading(true);

        try {
            if (handleClick) {
                await handleClick();
            }
            onSuccess();
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    return (
        <Box className="mt-8">
            <Button
                fullWidth
                variant="contained"
                className='w-full'
                onClick={handleBtnClick}
                loading={loading}
                loadingIndicator="Loading"
                sx={{
                    borderRadius: '9999px',
                }}>Next</Button>
        </Box>
    );
}

export default Btn;