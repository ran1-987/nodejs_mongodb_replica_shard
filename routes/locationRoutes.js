


import express from 'express';
import { 
  createLocation, 
  getAllLocations,
  getLocationById, 
  updateLocation, 
  partialUpdateLocation, 
  deleteLocation 
} from '../controllers/locationController.js';

const router = express.Router();

router.post('/', createLocation);
router.get('/', getAllLocations);
router.get('/:id', getLocationById);
router.put('/:id', updateLocation);
router.patch('/:id', partialUpdateLocation);
router.delete('/:id', deleteLocation);

export default router;
