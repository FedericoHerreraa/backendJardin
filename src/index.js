import express from 'express';
import cors from 'cors';
import mailRouter from './routes/mailRouter.js';


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

app.use('/api', mailRouter)

app.use('/wakeUp', (req, res) => {
    console.log(res.json())
    res.json('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000')
})