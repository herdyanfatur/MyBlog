// require('dotenv').config();
const { User } = require('../models');
const bcrypt = require('bcryptjs');
// const jsonwebtoken = require('jsonwebtoken');
// const {sendEmail} = require('../helpers');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body);

        const mail = await User.findOne({ where: {email: email}});
        if (mail) {
            return res.status(400).json({
                status: false,
                message: "Email sudah terdaftar!"
            })
        }

        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            firstName,
            lastName, 
            email, 
            password: hashPassword,
        });
        console.log(newUser);
        res.status(201).json({
            status: true,
            message: 'User Berhasil terdaftar!',
            data: newUser,
        });
    
        console.log("successed API");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server errror");
    }
}