const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add the course title"]
    },
    content: {
        type: String,
        required: [true, "Please add the course content"]
    },
    service: {
        type: String,
        required: [true, "Please add the course service"]
    },
    courseIdentifier: {
        type: String
    }
})

module.exports = mongoose.model("course", courseSchema);