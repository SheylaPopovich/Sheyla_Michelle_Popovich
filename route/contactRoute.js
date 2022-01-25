const router = require('express').Router()
const req = require('express/lib/request')
const nodemailer = require('nodemailer')


router.post('/contact', (req,res)=> {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "please fill all fields"})
    }
})