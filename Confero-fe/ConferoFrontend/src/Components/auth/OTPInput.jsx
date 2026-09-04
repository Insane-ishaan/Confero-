import { useRef, useState, useContext } from "react";
import { AlertContext } from "../../context/AlertContext";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Btn from "../common/Button";
import api from "../../../api/axios";

export default function OTPInput({ onSuccess }) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const { isAlert, setIsAlert } = useContext(AlertContext);
    const inputRefs = useRef([]);

    const handleVerification = async () => {
        try {
            const otpStr = otp.join("");
            const info = await api.post("/confero/v1/auth/verify-otp", { otp: otpStr });
            if (info.status === 200) {
                setIsAlert(true);
                onSuccess();
            }
        } catch (e) {
            console.log(e.message);
            console.log(e.response?.data?.msg);
        }
    }

    const handleChange = (e, index) => {
        const value = e.target.value;

        // Only allow one digit
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next box
        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <Box className="flex flex-col gap-6 mx-4">
            <Box sx={{ display: "flex", gap: 1.5 }}>
                {otp.map((digit, index) => (
                    <OutlinedInput
                        key={index}
                        value={digit}
                        onChange={(e) => { handleChange(e, index); handleVerification }}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        inputRef={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        inputProps={{
                            maxLength: 1,
                            inputMode: "numeric",
                        }}
                        sx={{
                            width: 48,
                            height: 48,

                            "& input": {
                                textAlign: "center",
                                padding: 0,
                                fontSize: "1.25rem",
                                fontWeight: 600,
                            },
                        }}
                    />
                ))}
            </Box>
            <Btn label={"Next"} onSuccess={handleVerification} />
        </Box>
    );
}