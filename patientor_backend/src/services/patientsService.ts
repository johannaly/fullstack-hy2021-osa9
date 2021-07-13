import patientsData from '../../data/patients.json';
import { PatientsWithoutSsn } from '../types';

//const patients: Array<Patients> = patientsData;

const getPatientsWithoutSsn = (): PatientsWithoutSsn[] => {
   return patientsData.map(({ id, name, dateOfBirth, gender, occupation}) => ({
     id,
     name,
     dateOfBirth,
     gender,
     occupation
   }));
};

export default { getPatientsWithoutSsn };