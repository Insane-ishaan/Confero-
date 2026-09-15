import Box from '@mui/material/Box';
import "react-phone-number-input/style.css";
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmPassField from './ConfirmPassField';
import GmailField from "./GmailField";
import PassField from './PassField';
import OTPInput from './OTPInput';
import Button from '@mui/material/Button';
import Btn from '../common/Button';

function GmailBasedAuth({ mode }) {
    const [currMode, setCurrMode] = useState("gmail");
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState({});


    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    };

    const navigate = useNavigate();

    const handleRegister = () => {
        console.log("register working");
    }

    const handleLogin = () => {
        console.log("login working");
    }
    return (
        <Box className="flex flex-col gap-6 mx-4" >
            <GmailField value={formData.email} onChange={(value) => handleChange("email", value)} onSuccess={() => {
                setCurrMode(mode ? "otp" : "pass");
            }} currMode={currMode} mode={mode} />

            {mode && currMode === "otp" && <OTPInput onChange={(value) => handleChange("otp", value)} onSuccess={() => setCurrMode("pass")} />}

            {currMode === "pass" && <PassField value={formData.password} onChange={(value) => handleChange("password", value)} />}
            {mode && currMode === "pass" && <ConfirmPassField value={formData.confirmPassword} onChange={(value) => handleChange("confirmPassword", value)} />}

            {currMode === "pass" && <Btn label={mode ? "Register" : "Login"} onAction={mode ? handleRegister : handleLogin} />}

            {!mode && <Box className="mt-1 flex justify-end">
                <Button href="#text-buttons" size='small'>Forgot Password?</Button>
            </Box>}
        </Box>
    );
}

export default GmailBasedAuth;