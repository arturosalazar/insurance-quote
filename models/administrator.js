"use strict";
module.exports = function(sequelize, DataTypes) {
    var administrator = sequelize.define("administrator", {
        adminid : {
        type : DataTypes.STRING,
    },
    lastname : {
        type : DataTypes.STRING,
    },
    firstname : {
        type : DataTypes.STRING,
    },
    username : {
        type : DataTypes.STRING,
    },
    pwd : {
        type : DataTypes.STRING,
    },
    street : {
        type : DataTypes.STRING,
    },
    city : {
        type : DataTypes.STRING,
    },
    usastate : {
        type : DataTypes.STRING,
    },
    zipcode : {
        type : DataTypes.STRING,
    },
    dob : {
        type : DataTypes.STRING,
    },
    jobtitle : {
        type : DataTypes.STRING,
    }
    });
 return Todo;
};