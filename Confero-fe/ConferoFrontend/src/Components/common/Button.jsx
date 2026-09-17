import Button from '@mui/material/Button';
import "react-phone-number-input/style.css";
import { useState } from 'react';

function Btn({ label }) {
    const [loading, setLoading] = useState(false);
    const handleBtnClick = async () => {
        const shouldLoad = label === "Login" || label === "Register";
        if (shouldLoad) {
            setLoading(true);
        }
    }

    return (
        <Button
            fullWidth
            variant="contained"
            className='w-full'
            type="submit"
            onClick={handleBtnClick}
            loading={loading}
            loadingIndicator="Loading"
            sx={{
                borderRadius: '9999px',
            }}>{label}</Button>

    );
}

export default Btn;