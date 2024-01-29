const jwtSecret = require("../config")
const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
    //checking if auth header is passed or not and it should be bearer token
    const authorizationHeader = req.header("Authorization")
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
        console.log("invalid authorization : authHeader error");
        return res
            .status(403)
            .json({ success: false, message: "Invalid authorization header" });
    }

    //checking for jwt token present or if only Bearer present as token
    const token = authorizationHeader.split(" ")[1]
    if (!token) {
        return res
            .status(403)
            .json({ success: false, message: "Authorization token not found" });
    }

    //verification of token
    try {
        const decoded = jwt.verify(token, jwtSecret)
        req.username = decoded.username
        next()
    } catch (error) {
        console.error(error);
        return res.status(403).json({
            success: false, message: "Invalid token"
        })
    }
}

module.exports = authMiddleware