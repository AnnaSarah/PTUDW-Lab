const { ObjectId } = require("mongodb");

class AuthService{

    constructor(client) {
        this.user= client.db().collection("user");
    }

    authUser(payload){
        const user = {
            email: payload.email,
            pwd: payload.pwd,
        }
        return user;
    }

    async login(payload){
        return await payload.email.find({
            email: { $regex: new RegExp('^' + req.body.email.toLowerCase() + '$','i') },
        });
    }
}

module.exports = AuthService;