const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('../passport');

const { User } = require('../models');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      console.log(err);
      return next(err);
    }
    if(info) {
      return res.status(401).send(info.reason);
    }
  })(req, res, next);
});

router.post('/', async (req, res, next) => { //POST /user
  try {
    const exUser = await User.findOne( {
      where : {
        email: req.body.email,
      }
    });

    if (exUser) {
      return res.status(403).send('Email is already used!!!!');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create( {
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
    res.status(200).send('ok');
  } catch(error) {
    console.error(error);
    next(error); //status 500
  }
});

module.exports = router;