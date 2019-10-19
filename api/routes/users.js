const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User = require('../model/testquery');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
});

router.get('/', function(req, res) {
    User.find(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

router.post('/add', function(req, res) {
        console.log("working")
        const name = req.body.name
        const subject = req.body.subject
        const phone = req.body.phone
        const email = req.body.email
        const message = req.body.message
        new User({
            name: name,
            subject: subject,
            phone: phone,
            email: email,
            message: message
        }).save(function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    })
    //////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id', (req, res, next) => {
    const id = req.params.id;
    let UserUpdate = {
        _id: id,
        name: req.body.name,
        subject: req.body.subject,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message
    };
    User.findOneAndUpdate({ _id: id }, UserUpdate, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // console.log(data)
            res.json(data)
        }

    })
})

/////////////////edit 
router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, function(err, data) {
        res.json(data);
    })
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id', (req, res) => {
    let id = req.params.id
    User.findOneAndRemove(id, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// router.get('/', function(req, res) {
//     User.find(function(err, data) {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json(data)
//         }
//     })
// })

// router.post('/jobadd', function(req, res) {
//     console.log("working")
//     const eName = req.body.eName
//     const eAddress = req.body.eAddress
//     const eCountry = req.body.eCountry
//     const eState = req.body.eState
//     const eEmail = req.body.eEmail
//     const ePhone = req.body.ePhone
//     const hSchool = req.body.hSchool
//     const hDegree = req.body.hDegree
//     const hDegreeStatus = req.body.hDegreeStatus
//     const hArea = req.body.hArea
//     const hCountry = req.body.hCountry
//     const wEmployer = req.body.wEmployer
//     const wJobTitle = req.body.wJobTitle
//     const wStarting = req.body.wStarting
//     const wState = req.body.wState
//     const wCountry = req.body.wCountry

//     new User({
//         eName: eName,
//         eAddress: eAddress,
//         eCountry: eCountry,
//         eState: eState,
//         eEmail: eEmail,
//         ePhone: ePhone,
//         hSchool: hSchool,
//         hDegree: hDegree,
//         hDegreeStatus: hDegreeStatus,
//         hArea: hArea,
//         hCountry: hCountry,
//         wEmployer: wEmployer,
//         wJobTitle: wJobTitle,
//         wStarting: wStarting,
//         wState: wState,
//         wCountry: wCountry
//     }).save(function(err, data) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
// })