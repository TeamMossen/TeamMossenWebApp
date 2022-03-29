import express from 'express'; //import express
import cors from 'cors';
import { userRouter } from './Routes/user.mjs';
import { loginRouter } from './Routes/login.mjs';
import { bossRouter } from './Routes/boss.mjs';
import { projectmanagerRouter } from './Routes/projectmanager.mjs';

const port = 8000;



const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRouter, loginRouter, bossRouter, projectmanagerRouter); //to use the routes

const listener = app.listen(process.env.PORT || port, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})