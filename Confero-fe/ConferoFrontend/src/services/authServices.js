import api from "../../api/axios.js";

export const registerSendOtp = async (mail) => {
  try {
    const response = await api.post("/confero/v1/auth/register-send-otp", {
      mail,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const verifyOtp = async (otp) => {
  try {
    const response = await api.post("/confero/v1/auth/verify-otp", {
      otp,
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};
