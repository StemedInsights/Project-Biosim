const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");
const Utils = require("../utils/utilities");

const createCourse = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        let data = {
            "title": req.body.title,
            "content": req.body.content,
            "service": req.body.service,
            "exam": req.body.exam
        }

        const course = await Course.create(data);
        res.status(200).json(course);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            "code": 'course-create-failed',
            "messages": ['Internal Server Error: Unable to create course']
        });
    }
});

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses);
})

const getCourseById = asyncHandler(async (request, response) => {
    try{
        const course = await Course.findById(request.params.id);
        if(Utils.isEmptyOrNil(course)){
            response.status(constants.NOT_FOUND).json({
                "code": 'course-not-found',
                "messages": ["Could not find course with given id: " + request.params.id]
            });
            return;
        }

        response.status(200).json(course);
    }catch(err){
        console.log(err);
        response.status(500).json({
            "code": 'course-get-failed',
            "messages": ["Error getting course with given id: " + request.params.id]
        });
    }
});

const updateCourseById = asyncHandler(async (request, response) => {
    try{
        const course = await Course.findById(request.params.id);
        
        if(Utils.isEmptyOrNil(course)){
            response.status(404).json({
                "code": 'course-not-found',
                "messages": ["Could not find course with given id: " + request.params.id]
            });
            return;
        }
        
        const updatedCourse = await Course.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true }
        );

        response.status(200).json(updatedCourse);
    }catch(err){
        response.status(500).json({
            "code": 'user-update-failed',
            "messages": ['Internal Server Error: Unable to update course']
        });
    }
})

const deleteCourseById = asyncHandler(async (request, response) => {
    try{
        const course = await Course.findById(request.params.id);
        
        if(Utils.isEmptyOrNil(course)){
            response.status(404).json({
                "code": 'course-delete-failed',
                "messages": ["Unable to find course with given id"]
            });
            return;
        }

        await Course.deleteOne(course);
        response.status(200).json(course);
    }catch(err){
        response.status(404).json({
            "code": 'course-delete-failed',
            "messages": ["Unable to find course with given id"]
        });
    }
})

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
}