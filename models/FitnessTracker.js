const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises:
        [{
            type: {
                type: String,
                trim: true,
                required: "Choice is required"
            },
            name: {
                type: String,
                trim: true,
                required: "Name is Required"
            },
            duration: {
                type: Number,
                required:"Duration is Required"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }]
})
const FitTracker = mongoose.model("FitTracker", Workout);

module.exports = FitTracker;