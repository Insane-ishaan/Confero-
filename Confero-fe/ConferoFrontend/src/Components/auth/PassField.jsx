import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Lock, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import { useState, forwardRef } from 'react';

function PassField() {
    const [showPassword, setShowPassword] = useState(false);

    return (
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
    );
}

export default PassField;