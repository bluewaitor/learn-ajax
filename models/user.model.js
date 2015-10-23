/**
 * Created by waitor on 2015/10/23.
 */

'use strict';
var users = [
    {
        name: 'person1',
        age: 1
    },
    {
        name: "person2",
        age: 2
    },{
        name: "person3",
        age: 3
    }
];

module.exports = {
    find: function(callback){
        callback(null, users);
    }
};