// The Route model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema

var routeSchema = mongoose.Schema({
    name: String, 
    path: [ { lat: Number, lon: Number } ],
    start_time: Date,
    num_places: Number,
    applications: [ Schema.ObjectId ], // ***
    passengers: [ String ], // [ Schema.ObjectId ]
    create_by: String
})

module.exports = mongoose.model('Route', routeSchema);
