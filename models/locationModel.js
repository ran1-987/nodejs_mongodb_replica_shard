import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    iso_code: String,
    location: String,
    gender: String,
    full_name: String,
    email: String,
    job_title: String,
    country: String,
    is_online: Boolean,
    rating: Number,
    target: Number,
    budget: Number,
    phone: String,
    address: Object,
    img_id: Number,
    img: String,
    vehicle: Object,
}, {
    collection: 'locations' ,
    _id: true
});

export default mongoose.model('Location', locationSchema);
