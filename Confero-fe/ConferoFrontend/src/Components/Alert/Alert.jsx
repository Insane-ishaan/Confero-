import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';

export default function () {
    const { setIsAlert, successInfoToBeAlert, errorInfoToBeAlert, isSuccess } = useContext(AlertContext)
    return (
        <Stack sx={{ mx: "auto", width: '50%', marginTop: "0px" }} >
            <Alert
                severity={isSuccess ? "success" : "error"}
                sx={{
                    borderRadius: "12px",
                }}
                action={
                    <Button color="inherit" size="small" onClick={() => setIsAlert(false)}>
                        UNDO
                    </Button>
                }
            >
                {isSuccess ? successInfoToBeAlert : errorInfoToBeAlert}
            </Alert>
        </Stack>
    );
}
