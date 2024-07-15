import api from "../config/api";

const getProfile = () => api.get("user/whoami").then(res => res || false);
export {getProfile} 