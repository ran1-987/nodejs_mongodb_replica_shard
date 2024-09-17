import Location from '../models/locationModel.js';

// POST - Create a new location
export const createLocation = async (req, res) => {
  const newLocation = new Location(req.body);
  try {
    const savedLocation = await newLocation.save();
    res.status(201).json({ message: 'Location created successfully', location: savedLocation });
  } catch (err) {
    res.status(500).json({ message: 'Error creating location', error: err.message });
  }
};


export const getAllLocations = async (req, res) => {
  const page = parseInt(req.query.page) || 1;  // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default limit to 10 records per page

  try {
    // Get total number of records
    const totalRecords = await Location.countDocuments();

    // Calculate the number of records to skip for pagination
    const skip = (page - 1) * limit;

    // Fetch the records with limit and skip
    const locations = await Location.find({})
      .skip(skip)
      .limit(limit);

    // Response with data and metadata for pagination
    res.status(200).json({
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),  // Total number of pages
      currentPage: page,
      recordsPerPage: limit,
      data: locations,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving locations', error: err.message });
  }
};


// GET - Retrieve a location by ID
export const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving location', error: err.message });
  }
};

// PUT - Update a location's data
export const updateLocation = async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({ message: 'Location updated successfully', location: updatedLocation });
  } catch (err) {
    res.status(500).json({ message: 'Error updating location', error: err.message });
  }
};

// PATCH - Partially update a location
export const partialUpdateLocation = async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({ message: 'Location partially updated successfully', location: updatedLocation });
  } catch (err) {
    res.status(500).json({ message: 'Error partially updating location', error: err.message });
  }
};

// DELETE - Remove a location by ID
export const deleteLocation = async (req, res) => {
  try {
    const result = await Location.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({ message: 'Location deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting location', error: err.message });
  }
};
