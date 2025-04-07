const jwt = require("jsonwebtoken");

const encrypt = async (payload, secret) => {
  // your code here and return token
  try {
    const token = await jwt.sign(payload,secret,{expiresIn:"1h"});
    return token;
  } catch (error) {
    console.error("Error occurred : ",error);
    return;
  }
};

const decrypt = async (token,secret) => {
  try {
    const decoded = await jwt.verify(token,secret); 
    console.log("The decoded token is : ",decoded);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.log("Token has expired.");
      return;
    } else {
      console.log("Invalid token.");
      return;
    }
  }
}

module.exports = {encrypt,decrypt};
