require('rxjs/operators');
const repository = require('../persistence/UsuarioRepositoryPgSequelize');
const jwt = require('jsonwebtoken');


class AuthService {
    SECRET_TOKEN = "2378417834912749812741289";

    constructor(repository, jwt) {
        this.repository = repository;
        this.jwt = jwt;
    }

    login = async (username, password) => {
        const allUsers = await this.repository.findAll();
        const user = allUsers.filter((users) => (users.username == username && users.senha == password));
        if (user.length >= 1) {
            return await new Promise((resolve) => {
                this.jwt.sign( {username}, this.SECRET_TOKEN, (err, token) => {
                    resolve(token)
                });
            });
        }
        return null;
    }

    verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        console.log(bearerHeader);
        if (typeof bearerHeader !== 'undefined') {
            const token = bearerHeader.split(' ')[1];
            this.jwt.verify(token, this.SECRET_TOKEN, (err, authData) => {
                console.log(err);
                if (err) {
                    res.sendStatus(403);
                }
                next();
            });
        } else {
            res.sendStatus(403);
        }
    }
}
module.exports = new AuthService(repository, jwt);