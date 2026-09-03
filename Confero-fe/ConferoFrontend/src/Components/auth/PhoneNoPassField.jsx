import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import Box from '@mui/material/Box';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import api from "../../../api/axios";
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

    const handleClick = async () => {
        /* try {
            console.log(phoneNo)
            const response = await api.post("/confero/v1/auth/register-send-otp", { phoneNo });
            console.log(response);
        } catch (e) {
            console.log("STATUS:", e.response?.status);
            console.log("DATA:", e.response?.data);
        } */
    };


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
            <Btn label={"Next"} onSuccess={onSuccess} onAction={handleClick} />
        </Box>
    );
}

export default PhoneNoPassField;