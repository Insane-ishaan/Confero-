import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Btn from "../../Components/common/Button";
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ConfirmPassField from './ConfirmPassField';
import api from '../../../api/axios';
import PassField from './PassField';
import OTPInput from './OTPInput';

function GmailBasedAuth({ mode }) {
    const [currMode, setCurrMode] = useState("gmail");
    const [mail, setMail] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await api.post("/confero/v1/auth/register-send-otp", { mail });
            if (response.status == 200) {
                setCurrMode("otp");
            }

        } catch (e) {
            console.log(e.response?.status);
            console.log(e.response?.data);
        }
    }

    return (
        <Box className="flex flex-col gap-6 mx-4" >


            <TextField
                name="email"
                id="outlined-required"
                label="Email"
                type="email"
                value={mail}
                onChange={(e) => { setMail(e.target.value) }}
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
            {currMode === "pass" && <PassField />}
            {currMode === "otp" && <OTPInput onSuccess={() => setCurrMode("pass")} />}
            {mode && currMode === "pass" && <ConfirmPassField  />}
            <Btn label={mode ? "Register" : "Login"} onSuccess={null} onAction={handleClick} />
        </Box>
    );
}

export default GmailBasedAuth;