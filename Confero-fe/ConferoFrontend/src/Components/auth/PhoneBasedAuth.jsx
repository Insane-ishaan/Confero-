import Box from '@mui/material/Box';
import { useState } from 'react';
import ConfirmPassField from '../../Components/auth/ConfirmPassField';
import OTPPassField from "../../Components/auth/OTPPassField"
import PhoneNoPassField from './PhoneNoPassField';
import PassField from './PassField';
import Btn from '../common/Button';


function PhoneBasedAuth({ mode }) {
    const [currmode, setCurrMode] = useState("phoneNo");

    return (
        <Box className="flex flex-col gap-6 mx-4" >

            {currmode === "phoneNo" && <PhoneNoPassField onSuccess={() => setCurrMode("otp")} />}

            {currmode === "otp" && <OTPPassField onSuccess={() => setCurrMode("password")} />}

            {currmode === "password" && <PassField />}

            {mode && currmode === "password" && <ConfirmPassField />}

            {(currmode === "password") &&
                <Btn label={!mode ? "Login" : "Register"} />
            }
        </Box>
    );
}

export default PhoneBasedAuth;