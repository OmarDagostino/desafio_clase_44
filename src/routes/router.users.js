import {Router} from 'express';
import bodyParser from 'body-parser';
import usersController from '../controllers/usersController.js';
import { authUser } from '../middlewares/authMiddle.js';
export const router = Router ();
router.use(bodyParser.urlencoded({ extended: true }));
import upload from '../middlewares/uploadFiles.js';

// subir documentos con información de los usuarios

router.post('/users/:uid/documents',upload.uploader.array('archivos1'),usersController.documents)
  
// actualizar tipo de usuario

router.get('/users/premium/:email',authUser, usersController.premium)