import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
    return (
        <Stack sx={{ mx: "auto", width: '50%', marginTop: "0px" }} >
            <Alert
                severity="success"
                sx={{
                    borderRadius: "12px",
                }}
                action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
            >
                This Alert uses a Button component for its action.
            </Alert>
        </Stack>
    );
}
