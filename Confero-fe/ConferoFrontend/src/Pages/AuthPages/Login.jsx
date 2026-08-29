import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
function Login() {
    const [showPassword, setShowPassword] = useState(false);
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
                className="w-full max-w-md rounded-2xl"
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
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
                    <Box className="flex flex-col gap-6 mx-4" >


                        <TextField
                            name="email"
                            id="outlined-required"
                            label="Email"
                            type="email"
                            size="small"
                            placeholder='alice@gmail.com'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AtSign size={18} />
                                        </InputAdornment>
                                    ),
                                },
                            }}

                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '9999px',
                                },
                            }}
                        />

                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            size="small"
                            placeholder='************'
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock size={18} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(prev => !prev)}>
                                                {showPassword ?
                                                    <Eye size={18} /> :
                                                    <EyeOff size={18} />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '9999px',
                                },
                            }}
                        />

                    </Box>
                    <Box className="mt-6 flex justify-end">
                        <Button href="#text-buttons" size='small'>Forgot Password?</Button>
                    </Box>
                    <Box className="mt-8">
                        <Button
                            variant="contained"
                            className='w-full'
                            onClick={handleClick}
                            loading={loading}
                            loadingIndicator="logging in"
                            sx={{
                                borderRadius: '9999px',
                            }}>Log in</Button>
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
                            Don't have an account? <Button href="#text-buttons" size='small'>register</Button>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;