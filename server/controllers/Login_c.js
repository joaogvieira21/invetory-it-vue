const User = require('../models/User_m');
require('dotenv').config();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

async function loginUser (req, res) {

    try {
        const { email, password} = req.body
        if (!(!email || !password)) {
            const findUser = await User.findOne({email:email})
            if (findUser===null) {
                return res.status(404).json({ message: "Usuário não encontrado."})       
            } else {
                const checkPassword = await bcrypt.compare(password, findUser.password)
                if (!checkPassword) {
                    return res.status(401).json({ message: 'Senha inválida.' })
                } else {
                    const secret = process.env.SECRET
                    const token = jwt.sign(
                        {
                            id: findUser._id,
                        },
                        secret,
                        )
                        req.session.isLoggedIn = true
                        req.session.userData = findUser
                        
                    return res.status(200).json({ token, message: 'Usuário Autorizado' })
                    
                    
                }
            }
        } else {
            return res.status(422).json({ message: 'Preencha os campos.' })
        }
    }
    catch (err) {
        throw err
    }
}

module.exports = { loginUser }