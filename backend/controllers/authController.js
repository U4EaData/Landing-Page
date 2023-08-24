const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
    // up to sum
    const {email, password} = req.body
    

    if(!email || !password) {
        return res.status(400).json({message: 'All fields are required'})
    }

    const foundUser = await User.findOne({ email }).exec()

    if (!foundUser) {
        return res.status(401).json({message: 'Unauthorized'})
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) return res.status(401).json({message: 'Unauthorized'})

    const accessToken = jwt.sign(
        {
            "UserInfo": { // this info is getting injected into the access token, gotta pull this info outta it in the frontend
                "email": foundUser.email,
                "fullname": foundUser.fullname
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1m'}
    )

    const refreshToken = jwt.sign(
        {"email": foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d'}
    )

    res.cookie('jwt', refreshToken, {
        httpOnly: true, // important: only accessible by web server, so its secure
        secure: true,
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expires weekly
    })

    res.json({accessToken}) // we give react the access token in the front end
    // whenever react sends a request to refresh endpoint, accessToken will come along with it
})

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    const cookies = req.cookies
    if(!cookies?.jwt) return res.status(401).json({message: 'Unauthorized'})

    const refreshToken = cookies.jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({message:'Forbidden'})

            const foundUser = await User.findOne({ email: decoded.email})

            if (!foundUser) return res.status(401).json({message: "Unauthorized"})

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "email": foundUser.email,
                        "fullname":foundUser.fullname
                    },
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1m'}
            )
            res.json({accessToken})
        })
    )
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure:true})
    res.json({message: 'Cookie cleared'}) // by default a 200 status msg
}

module.exports = {
    login, refresh, logout
}