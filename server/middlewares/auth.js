import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export default function () {
    return (req, res, next) => {
        let token = req.cookies[config.COOKIE_NAME];
        if (token) {
            jwt.verify(token, config.SECRET, function (err, decoded) {
                if (err) {
                    res.clearCookie(config.COOKIE_NAME);
                } else {
                    req.user = decoded;
                    res.locals.user = decoded;
                    res.locals.isAuthenticated = true;
                }
            });
        }

        next();
    };
}