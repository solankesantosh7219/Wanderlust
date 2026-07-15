const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.CLOUD_API_KEY);
console.log(
    "Secret Check:",
    process.env.CLOUD_API_SECRET?.substring(0,3),
    process.env.CLOUD_API_SECRET?.slice(-3)
);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});



const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_DEV",
       allowed_formats: ["png", "jpg","jpeg"],  //suport promise as well
    },
});

module.exports = {
    cloudinary,
    storage,
};