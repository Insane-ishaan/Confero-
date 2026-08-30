import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ConfirmPassField from '../../Components/ConfirmPassField';

function GmailBasedAuth({ mode }) {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
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

            {mode && <ConfirmPassField />}

        </Box>
    );
}

export default GmailBasedAuth;