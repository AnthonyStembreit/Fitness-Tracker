const { response } = require('express')
const  db  = require('../models')

const router = require('express').Router()

router.route("/api/workouts").get(function(req, res){
    db.Workout.find({}).then(workouts => {
        console.log(workouts)
        res.json(workouts)
    })
    .catch(err => {
        res.json(err);
      });
})

router.route("/api/workouts").post(function(req,res){
    db.Workout.create(req.body)
    .then(workout => {
        console.log(workout)
        res.json(workout);
      })
    .catch(err => {
        res.json(err);
    });
})

router.route("/api/workouts/:id").put(function(req,res){
    let id = req.params.id
    db.Workout.findOneAndUpdate({_id: id}, { $push: { exercises: req.body } }, { new: true })
    .then(updatedWorkout => {
        console.log(updatedWorkout)
      res.json(updatedWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.route("/api/workouts/range").get(function(req, res){
    db.Workout.find({}).then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.json(err);
      });
})

module.exports = router