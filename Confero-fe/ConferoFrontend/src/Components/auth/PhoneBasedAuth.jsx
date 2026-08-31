import Box from '@mui/material/Box';
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmPassField from '../../Components/auth/ConfirmPassField';
import OTPPassField from "../../Components/auth/OTPPassField"
import PhoneNoPassField from './PhoneNoPassField';
import PassField from './PassField';


function PhoneBasedAuth({ mode }) {
    const [showPassword, setShowPassword] = useState(false);
    const [currmode, setCurrMode] = useState("phoneNo");
    const navigate = useNavigate();

    return (
        <Box className="flex flex-col gap-6 mx-4" >

            {currmode === "phoneNo" && <PhoneNoPassField onSuccess={() => setCurrMode("otp")} />}

            {currmode === "otp" && <OTPPassField onSuccess={() => setCurrMode("password")} />}
            {currmode === "password" && <PassField />}
            {mode && currmode === "password" && <ConfirmPassField
            />}
        </Box>
    );
}

export default PhoneBasedAuth;