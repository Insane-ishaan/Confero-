import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function WithGoogleBtn() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
                variant="outlined"
                size="large"
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: "30px",
                    width: "90%",
                    height: "50%",
                    gap: 1,
                    px: 5.5,
                    py: 1.5
                }}
            >
                <i className="fa-brands fa-google text-2xl" style={{ color: "#4285F4" }}></i>
                <span>Continue With Google</span>
            </Button>
        </Box>
    );
}
