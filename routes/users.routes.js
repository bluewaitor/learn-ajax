/**
 * Created by waitor on 2015/10/23.
 */
'use strict';

var userController = require('../controllers/users.controller.js');

module.exports = function(app){
    app.route('/api/users').get(userController.list);
};