const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Excercises = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    type:{
        type: Boolean,
        //required: true
    },
    name:{
        type: String,
        trim: true,
        required: "String is Required"
    },
    duration:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
    },
    reps:{
        type: Number,
    },
    sets:{
        type: Number,
    },
    distance:{
        type: Number,
    }
})
const FitTracker = mongoose.model("Excercises", Excercises);

module.exports = FitTracker;