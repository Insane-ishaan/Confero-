import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import "react-phone-number-input/style.css";
import { useState, useEffect } from 'react';


function ConfirmPassField() {
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Box className="flex flex-col gap-6 ">
            <TextField
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                size="small"
                placeholder="************"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock size={18} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    type="button"
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide confirm password"
                                            : "Show confirm password"
                                    }
                                    onClick={() =>
                                        setShowConfirmPassword(prev => !prev)
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <Eye size={18} />
                                    ) : (
                                        <EyeOff size={18} />
                                    )}
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
    );
}

export default ConfirmPassField;