import { Router } from "express";
import { sendSchoolEmail, sendUserEmail } from "../controllers/mails.js";

const mailRouter = Router();

mailRouter.post('/sendSchool', sendSchoolEmail)

mailRouter.post('/sendUser', sendUserEmail)

export default mailRouter;


