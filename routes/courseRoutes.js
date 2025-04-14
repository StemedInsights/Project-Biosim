const express = require("express");
const router = express.Router();
const {
    createCourse,
    getCourses,
    getCourseById,
    getCourseByService,
    updateCourseById,
    deleteCourseById
} = require("../controllers/courseController");

router.route("/")
    .post(createCourse)
    .get(getCourses)

router.route("/id/:id")
    .get(getCourseById)
    .put(updateCourseById)
    .delete(deleteCourseById)

router.route("/service/:service")
    .get(getCourseByService)

module.exports = router;