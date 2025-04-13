const express = require("express");
const router = express.Router();
const {
    createCourse,
    getCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
} = require("../controllers/courseController");

router.route("/")
    .post(createCourse)
    .get(getCourses)

router.route("/:id")
    .get(getCourseById)
    .put(updateCourseById)
    .delete(deleteCourseById)

module.exports = router;