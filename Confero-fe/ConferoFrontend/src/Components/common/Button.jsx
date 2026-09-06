import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "react-phone-number-input/style.css";
import { useState } from 'react';

function Btn({ label,
    onSuccess, onAction }) {
    const [loading, setLoading] = useState(false);
    const handleBtnClick = async () => {
        const shouldLoad = label === "Login" || label === "Register";
        if (shouldLoad) {
            setLoading(true);
        }
        try {
            if (onAction) {
                await onAction();
            }

            if (onSuccess) {
                onSuccess();
            }

        } catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    return (
        <Button
            fullWidth
            variant="contained"
            className='w-full'
            onClick={handleBtnClick}
            loading={loading}
            loadingIndicator="Loading"
            sx={{
                borderRadius: '9999px',
            }}>{label}</Button>

    );
}

export default Btn;