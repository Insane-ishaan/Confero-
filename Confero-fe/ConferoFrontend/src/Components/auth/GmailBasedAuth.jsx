import Box from '@mui/material/Box';
import "react-phone-number-input/style.css";
import { useState, forwardRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmPassField from './ConfirmPassField';
import GmailField from "./GmailField";
import PassField from './PassField';
import OTPInput from './OTPInput';
import Button from '@mui/material/Button';
import Btn from '../common/Button';
import { registerSendOtp, verifyOtp } from '../../services/authServices.js';
import { AlertContext } from '../../context/AlertContext.jsx';

function GmailBasedAuth({ mode }) {
    const [currMode, setCurrMode] = useState("email");
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState({});
    const { setIsAlert, setSuccessInfoToBeAlert, setErrorInfoToBeAlert, setIsSuccess } = useContext(AlertContext);



    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))

        setError((prev) => ({
            ...prev,
            [field]: ""
        }))
    };

    const handleEmailStep = async () => {
        if (!formData.email.trim()) {
            setError({ email: "Email is required" });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError({ email: "Enter a valid email" });
            return;
        }

        try {
            if (mode) {
                const response = await registerSendOtp(formData.email);
                console.log(response);
                if (response.status) {
                    setCurrMode("otp");
                    setIsAlert(true);
                    setIsSuccess(true);
                    setSuccessInfoToBeAlert(response?.msg);
                }
            } else {
                console.log("reached");
                setCurrMode("pass");
            }
        } catch (e) {
            setIsAlert(true);
            setIsSuccess(false);
            console.log(e.response?.data);
            setErrorInfoToBeAlert(e.response?.data);
        }
    }

    const handleOtpStep = async () => {
        if (!formData.otp) {
            setError({ otp: "OTP is required" });
            return;
        } else if (formData.otp.length !== 6) {
            setError({ otp: "OTP must be 6 digits" });
            return;
        }

        try {
            const response = await verifyOtp(formData.otp);

            if (response.status == 200) {
                setCurrMode("pass");
            }

        } catch (e) {
            setIsAlert(true);
            setIsSuccess(false);
            console.log(e);
            setErrorInfoToBeAlert(e.response?.data);
        }
    }

    const handlePassStep = async () => {
        const newErrors = {};
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (mode && !formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm Passwords is required";
        } else if (mode && formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        if (mode) {
            handleRegister();
        } else {
            handleLogin();
        }
    }

    const handleLogin = () => {
        console.log("login working");
    }

    const handleRegister = () => {
        console.log("register working");
    }


    const handleSubmit = async (e) => {
        console.log("button clicked ");
        e.preventDefault();

        if (currMode === "email") {
            console.log("call email");
            await handleEmailStep();
            return;
        }

        if (currMode === "otp") {
            await handleOtpStep();
            return;
        }

        if (currMode === "pass") {
            await handlePassStep();
            return;
        }
    }

    const getButtonLabel = () => {
        if (currMode === "email") {
            return mode ? "Send OTP" : "Login";
        }

        if (currMode === "otp") {
            return "Verify OTP";
        }

        if (currMode == "pass") {
            return mode ? "Register" : "Login";
        }

        return "Continue";
    }

    return (
        <Box className="flex flex-col gap-6 mx-4" component="form" onSubmit={handleSubmit} >
            <GmailField value={formData.email} onChange={(value) => handleChange("email", value)} error={error.email} />

            {mode && currMode === "otp" && <OTPInput onChange={(value) => handleChange("otp", value)} error={error.otp} />}

            {currMode === "pass" && <PassField value={formData.password} onChange={(value) => handleChange("password", value)} error={error.password} />}
            {mode && currMode === "pass" && <ConfirmPassField value={formData.confirmPassword} onChange={(value) => handleChange("confirmPassword", value)} error={error.confirmPassword} />}

            <Btn label={getButtonLabel()} />

            {!mode && <Box className="mt-1 flex justify-end">
                <Button href="#text-buttons" size='small'>Forgot Password?</Button>
            </Box>}
        </Box>
    );
}

export default GmailBasedAuth;