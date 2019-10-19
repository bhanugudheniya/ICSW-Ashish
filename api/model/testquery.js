const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    subject: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
});
module.exports = mongoose.model('User', user);

// //////////////////////////////////////////////////////

// let job = new Schema({
//     eName: {
//         type: String
//     },
//     eAddress: {
//         type: String
//     },
//     eCountry: {
//         type: String
//     },
//     eState: {
//         type: String
//     },
//     eEmail: {
//         type: String
//     },
//     ePhone: {
//         type: String
//     },




//     hSchool: {
//         type: String
//     },
//     hDegree: {
//         type: String
//     },
//     hDegreeStatus: {
//         type: String
//     },
//     hArea: {
//         type: String
//     },
//     higherCountry: {
//         type: String
//     },



//     wEmployer: {
//         type: String
//     },
//     wJobTitle: {
//         type: String
//     },
//     wStarting: {
//         type: String
//     },
//     wState: {
//         type: String
//     },
//     wCountry: {
//         type: String
//     }
// });
// module.exports = mongoose.model('Job', job);