const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    prompt: {
        type: String,
        required: [true, "Please add the prompt"]
    },
    answers: {
        type: Array,
        required: [true, "Please add the answers"]
    },
    correctAnswerNumber: {
        type: Number,
        required: [true, "Please add the correct answer"]
    }
});

const examSchema = mongoose.Schema({
    questions: {
        type: [[questionSchema]],
        required: [true, "Please add the test questions"]
    }
});

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
    },
    exam: {
        type: [examSchema]
    }
})

module.exports = mongoose.model("course", courseSchema);