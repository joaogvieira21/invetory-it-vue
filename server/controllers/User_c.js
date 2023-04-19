const bcrypt = require('bcrypt')
const User = require('../models/User_m');

async function createUser (req, res) {
    const status = {
        code : 200,
        msg : "OK",
        dados: []
    }

    try {
        const { name, email, password} = req.body
        if (!(!name || !email || !password)) {
            const findUser = await User.find({email:email})
            if (findUser[0]===undefined){
                const salt = await bcrypt.genSalt(12)
                const passwordHash = await bcrypt.hash(password, salt)
                const user = new User({
                    name,
                    email,
                    password: passwordHash,
                })
                await user.save()
                status.dados.push(user)
            } else if (findUser[0].id.length>0) {
                status.msg = "E-mail já existe"
                status.code = 422
            } 
        } else {
            status.msg = "Faltando parâmetros obrigatórios!"
            status.code = 422

        }  
    } 
    catch (err) {
        status.msg = "Ocorreu algum erro!"
        status.code = 400
    } 
    res.send(status)
}

module.exports = { createUser }
