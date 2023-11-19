// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/database');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

// Create comment
router.post('/create', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    var token = getToken(req.headers);
    if(token) {
        var decoded = jwt.decode(token, config.secret);
        var newComment = new Comment({