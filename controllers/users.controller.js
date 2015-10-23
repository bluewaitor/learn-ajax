/**
 * Created by waitor on 2015/10/23.
 */
'use strict';

var userModel = require('../models/user.model.js');
exports.list = function(req, res){
    userModel.find(function(err, users){
        if(err){
            return res.status(400).send({
                message: 'something error'
            });
        }else{
            res.json(users);
        }
    });
};