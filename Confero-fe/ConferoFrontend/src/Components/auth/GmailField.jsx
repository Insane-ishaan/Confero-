import TextField from '@mui/material/TextField';
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';


function GmailField({ value, onChange, error }) {
    return (
        <TextField
            name="email"
            id="outlined-required"
            label="Email"
            type="email"
            value={value}
            error={Boolean(error)}
            helperText={error}
            onChange={(e) => onChange(e.target.value)}
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
    );
}

export default GmailField;