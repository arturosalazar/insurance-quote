"use strict";
module.exports = function(sequelize, DataTypes) {
    var card = sequelize.define("card", {
        cardnum : {
        type : DataTypes.STRING,
    },
    customerid : {
        type : DataTypes.STRING,
    },
    card_type : {
        type : DataTypes.STRING,
    },
    lastname : {
        type : DataTypes.STRING,
    },
    firstname : {
        type : DataTypes.STRING,
    },
    cvv : {
        type : DataTypes.STRING,
    },
    expiration : {
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
    valid_card : {
        type : DataTypes.BOOLEAN,
    },
    });
 return Todo;
};