import Zip from '../models/zipModel.js';

// POST - Create a new zip
export const createZip = async (req, res) => {
    const newZip = new Zip(req.body);
    try {
        const savedZip = await newZip.save();
        res.status(201).json({ message: 'Zip created successfully', zip: savedZip });
    } catch (err) {
        res.status(500).json({ message: 'Error creating zip', error: err.message });
    }
};

// GET - Retrieve a zip by ID
export const getZipById = async (req, res) => {
    try {
        const zip = await Zip.findById(req.params.id);
        if (!zip) {
            return res.status(404).json({ message: 'Zip not found' });
        }
        res.json(zip);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving zip', error: err.message });
    }
};

// GET - Retrieve all zips
export const getAllZips = async (req, res) => {
    try {
        const zips = await Zip.find();
        res.json(zips);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving zips', error: err.message });
    }
};

// PUT - Update a zip's data
export const updateZip = async (req, res) => {
    try {
        const updatedZip = await Zip.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedZip) {
            return res.status(404).json({ message: 'Zip not found' });
        }
        res.json({ message: 'Zip updated successfully', zip: updatedZip });
    } catch (err) {
        res.status(500).json({ message: 'Error updating zip', error: err.message });
    }
};

// PATCH - Partially update a zip
export const partialUpdateZip = async (req, res) => {
    try {
        const updatedZip = await Zip.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedZip) {
            return res.status(404).json({ message: 'Zip not found' });
        }
        res.json({ message: 'Zip partially updated successfully', zip: updatedZip });
    } catch (err) {
        res.status(500).json({ message: 'Error partially updating zip', error: err.message });
    }
};

// DELETE - Remove a zip by ID
export const deleteZip = async (req, res) => {
    try {
        const result = await Zip.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Zip not found' });
        }
        res.json({ message: 'Zip deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting zip', error: err.message });
    }
};
