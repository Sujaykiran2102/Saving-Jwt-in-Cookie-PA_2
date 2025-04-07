const {encrypt,decrypt} = require("./script");

const secret = "My_JWt_SECRET_123";
const payload = {
    userId : 20210206,
    name : "Saanvi Sujakiran"
};

const token = encrypt(payload,secret);
decrypt(token);