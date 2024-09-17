import express from 'express';
import { 
  createZip, 
  getAllZips,
  getZipById, 
  updateZip, 
  partialUpdateZip, 
  deleteZip 
} from '../controllers/zipController.js';

const router = express.Router();

router.post('/', createZip);
router.get('/', getAllZips);
router.get('/:id', getZipById);
router.put('/:id', updateZip);
router.patch('/:id', partialUpdateZip);
router.delete('/:id', deleteZip);

export default router;
