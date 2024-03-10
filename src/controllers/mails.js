import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
})

export const sendSchoolEmail = (req, res) => {
    const { nombre, email, mensaje } = req.body
    
    const mailOptions = {
        from: email,
        to: 'mpmjardin@live.com',
        subject: `Consulta de ${nombre}`,
        html: `
            <div>
                <h1>Consulta</h1>
                <p>${mensaje}</p>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {    
        if (error) return res.status(500).json({ message: 'algo salio mal con el envio del mail' })
        return res.json(info)
    })
}

export const sendUserEmail = (req, res) => {
    const { nombre, email } = req.body

    const mailOptions = {
        from: 'mpmjardin@live.com',
        to: email,
        subject: `Mensaje enviado correctamente!`,
        html: `
            <div>
                <h1>Hola ${nombre}!</h1>
                <p>Enviaste una consulta a Jardín Mi Pequeño Mundo desde la pagina web, a la brevedad te contestaran!</p>
                <br/>
                <p>Saludos Mi Pequeño Mundo</p>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {    
        if (error) return res.status(500).json({ message: 'algo salio mal con el envio del mail' })
        return res.json(info)
    })
} 