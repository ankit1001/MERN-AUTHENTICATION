const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUserRegistration(data){
    let errors = {};

    //Setting default to empty strring

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    //Check for empty/required Vale
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is not Valid..!";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm Password field is required"
    }

    if(!Validator.isLength(data.password, {min:6, max:20})){
        errors.name = "Password must be at least 6 characters and maximum 20 characters"
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.name = "Password must match";
    }

return {
    errors,
    isValid: isEmpty(errors)
    };

};