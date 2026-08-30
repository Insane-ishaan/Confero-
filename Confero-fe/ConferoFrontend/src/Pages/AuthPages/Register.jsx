import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import Toggler from './Toggler';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState("");
    const [method, setMethod] = useState("");
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }


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
                    borderRadius: '5rem'
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
                    <Box className="mt-8">
                        <Button
                            variant="contained"
                            className='w-full'
                            onClick={handleClick}
                            loading={loading}
                            loadingIndicator="Letting you in"
                            sx={{
                                borderRadius: '9999px',
                            }}>Register</Button>
                    </Box>
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