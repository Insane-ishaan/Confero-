import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Toggler from '../../Components/auth/Toggler';

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
                            Welcome Back
                        </Typography>

                        <Typography
                            variant="body2"
                            className="text-center mt-2"
                        >
                            Login to your account to continue
                        </Typography>
                    </Box>
                    <Toggler isRegister={false} />
                    <Box className="mt-6 flex justify-end">
                        <Button href="#text-buttons" size='small'>Forgot Password?</Button>
                    </Box>
                    {/*  <Box className="mt-8">
                        <Button
                            variant="contained"
                            className='w-full'
                            onClick={handleClick}
                            loading={loading}
                            loadingIndicator="logging in"
                            sx={{
                                borderRadius: '9999px',
                            }}>Log in</Button>
                    </Box> */}

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
                            Don't have an account? <Button component={Link} to="/register" size='small'>register</Button>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;