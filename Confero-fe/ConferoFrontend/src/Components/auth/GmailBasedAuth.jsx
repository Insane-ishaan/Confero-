import Box from '@mui/material/Box';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmPassField from './ConfirmPassField';
import GmailField from "./GmailField";
import PassField from './PassField';
import OTPInput from './OTPInput';
import Button from '@mui/material/Button';

function GmailBasedAuth({ mode }) {
    const [currMode, setCurrMode] = useState("gmail");
    const [mail, setMail] = useState("");
    const navigate = useNavigate();

    return (
        <Box className="flex flex-col gap-6 mx-4" >
            <GmailField mail={mail} setMail={setMail}  currMode={currMode} setCurrMode={setCurrMode} mode={mode} />
            {currMode === "otp" && <OTPInput onSuccess={() => setCurrMode("pass")} />}
            {currMode === "pass" && <PassField />}
            {mode && currMode === "pass" && <ConfirmPassField />}
            
            {!mode && <Box className="mt-1 flex justify-end">
                <Button href="#text-buttons" size='small'>Forgot Password?</Button>
            </Box>}
        </Box>
    );
}

export default GmailBasedAuth;