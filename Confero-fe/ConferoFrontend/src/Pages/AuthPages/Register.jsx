import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import Toggler from '../../Components/auth/Toggler';

function Register() {
    return (
        <Box
            component="form"
            noValidate
            className="mt-7 flex flex-col items-center justify-center"
        
        >
            <Card
                className="w-full max-w-md"
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    borderRadius: '5rem',
                    transition: "opacity 300ms ease, transform 300ms ease",
                }}
            >
                <CardContent>
                    <Box className="mb-6 mt-4">
                        <Typography
                            variant="h4"
                            className="font-bold text-center"
                        >
                            Let’s Get Connected
                        </Typography>
                        <Typography
                            variant="body2"
                            className="text-center mt-2"
                        >
                            Sign up and start meeting with your team.
                        </Typography>
                    </Box>
                    <Toggler isRegister={true} />
                    <Box className='mt-5'>
                        <Typography
                            variant="body2"
                            color="text.disabled"
                            className='flex justify-center'
                        >
                            or
                        </Typography>
                    </Box>

                    <Box className='mt-5 flex justify-center items-center'>
                        <Typography
                            variant="body2"
                            color="text.disabled"
                        >
                            Already have an account? <Button component={Link} to="/login" size='small'>Log in</Button>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Register;