async function sessionUser (req, res) {
    const userData = req.session.userData
    console.log(userData)
    return res.status(200).json({ userData })
}


module.exports = { sessionUser }

