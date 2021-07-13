import express from 'express';
import patientService from '../services/patientsService';


const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
   res.send(patientService.getPatientsWithoutSsn());
  
  });

  
export default patientRouter;