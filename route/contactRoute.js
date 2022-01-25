const router = require('express').Router()
const req = require('express/lib/request')
const nodemailer = require('nodemailer')


router.post('/contact', (req,res)=> {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "please fill all fields"})

        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user: 'sheylapopovich@gmail.com',
                pass:'Jamie2019!'
            }
        })
        let mailOptions = {
            from:data.email,
            to: 'sheylapopovich@gmail.com',
            subject: `message from $(data.name)`,
            html:`
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
            `
        }
        smtpTransporter.sendMail(mailOptions, ()=>{
            try {
                
            } catch (error) {
                
            }
        })
    }
})