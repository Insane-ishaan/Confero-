import TextField from '@mui/material/TextField';
import { Lock, AtSign, Eye, EyeOff } from "lucide-react";
import InputAdornment from '@mui/material/InputAdornment';
import Btn from "../../Components/common/Button";
import api from '../../../api/axios';
import { useState, useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';


function GmailField({ mail, setMail, currMode, setCurrMode, mode }) {
    const { setIsAlert, setSuccessInfoToBeAlert, setErrorInfoToBeAlert, setIsSuccess } = useContext(AlertContext);
    const handleClick = async () => {
        try {
            const response = await api.post("/confero/v1/auth/register-send-otp", { mail });
            if (response.status === 200) {
                setCurrMode("otp");
                setIsSuccess(true);
                setIsAlert(true);
                setSuccessInfoToBeAlert(response?.data.msg);
            }
        } catch (e) {
            console.log(e.response?.status);
            console.log(e.response?.data);
            setIsAlert(true);
            setIsSuccess(false);
            setErrorInfoToBeAlert(e.response?.data.msg);
        }
    }

    return (
        <>
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
            {currMode === "gmail" && <Btn label={mode ? "Register" : "Login"} onSuccess={null} onAction={handleClick} />}
        </>
    );
}

export default GmailField;