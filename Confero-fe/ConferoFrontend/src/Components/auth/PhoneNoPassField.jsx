import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import Box from '@mui/material/Box';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import Btn from '../common/Button';

const MuiPhoneInput = forwardRef(function MuiPhoneInput(props, ref) {
    return (
        <TextField
            {...props}
            inputRef={ref}
            label="Contact"
            size="small"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '9999px',
                },
            }}
        />
    );
});

function PhoneNoPassField({ onSuccess }) {
    const [phoneNo, setPhoneNo] = useState("");
    return (
        <Box className="flex flex-col gap-6 mx-4" >
            <PhoneInput
                international
                defaultCountry="IN"
                value={phoneNo}
                onChange={setPhoneNo}
                placeholder="Enter phone number"
                inputComponent={MuiPhoneInput}
            />
            <Btn onSuccess={onSuccess} />
        </Box>
    );
}

export default PhoneNoPassField;