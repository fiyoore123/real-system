const dugsiModel = require('../models/studentModel');
const customerModel = require('../models/studentModel');
const userModel = require('../models/studentModel');
const errors = require('../shared/errors');
const methods = require('../shared/methods');
const utils = require('../shared/utilities');


function processRequest(actionName,payload,next) {
    switch (actionName) {
        case methods.actions.registerDugsiInfo.name:
            registerDugsiInfo(payload,next);
                break;
        case methods.actions.registerCustomerInfo.name:
            registerCustomerInfo(payload,next);
                break;
        case methods.actions.registerUserInfo.name:
            registerUserInfo(payload,next);
                 break;
        case methods.actions.updateDugsiInfo.name:
            updateDugsiInfo(payload,next);
                break;
        case methods.actions.updateCustomerInfo.name:
            updateCustomerInfo(payload,next);
                break;
        case methods.actions.updateUserInfo.name:
            updateUserInfo(payload,next);
                break;
        case methods.actions.getDugsiInfo.name:
            getDugsiInfo(payload,next);
                break;
        case methods.actions.getCustomerInfo.name:
            getCustomerInfo(payload,next);
                break;
        case methods.actions.getUserInfo.name:
            getUserInfo(payload,next);
                break;
        case methods.actions.getAllDugsiInfo.name:
            getAllDugsiInfo(next);
                break;
        case methods.actions.getAllCustomerInfo.name:
            getAllCustomerInfo(next);
                break;
        case methods.actions.getAllUseriInfo.name:
            getAllUseriInfo(next);
                break;
        case methods.actions.deleteDugsiInfo.name:
            deleteDugsiInfo(payload,next);
                break;
        case methods.actions.deleteUserInfo.name:
            deleteUserInfo(payload,next);
                break;
                
        case methods.actions.deleteCustomerInfo.name:
            deleteCustomerInfo(payload,next);
                break;
        // case methods.actions.deletestudent.name:
        //     deleteStudent(payload,next);
        //         break;
        default:
            next(errors.actionNotFound,null);
            break;
    }
}
function registerDugsiInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['id','name','address','country','city']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
    dugsiModel.addDugsiInfo(payload,next);

}

function registerCustomerInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['customerId','firstName','midlleName','lastName','mobile','address','country','city']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
    customerModel.addCustomeriInfo(payload,next);

}
function registerUserInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['userName','password']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
    userModel.addUseriInfo(payload,next);

}
//updateCustomerInfo
function updateDugsiInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['id']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   dugsiModel.updateDugsiInfo(payload,next);
}
//updateUserInfo
function updateCustomerInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['customerId']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   customerModel.updateCustomerInfo(payload,next);
}
function updateUserInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['userName']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   userModel.updateUserInfo(payload,next);
}


function getDugsiInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['id']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   dugsiModel.getDugsiInfo(payload,next);

}
function getCustomerInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['customerId']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   customerModel.getCustomerInfo(payload,next);

}
function getUserInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['userName']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
    userModel.getUserInfo(payload,next);

}
// get all dugsi info
function getAllDugsiInfo(next) {
    userModel.getAllDugsiInfo(next);
}
function getAllCustomerInfo(next) {
    customerModel.getAllCustomerInfo(next);
}

function getAllUseriInfo(next) {
    userModel.getAllUseriInfo(next);
}

// 
function deleteDugsiInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['id']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   dugsiModel.deleteDugsiInfo(payload,next);

}
function deleteCustomerInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['customerId']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   customerModel.deleteCustomerInfo(payload,next);

}
function deleteUserInfo(payload,next) {
    let validationResult = utils.validatePayload(payload,['userName']);
    if(!validationResult.isValid){
        next(validationResult.msg,null);
        return;
    }
   userModel.deleteUserInfo(payload,next);

}
module.exports.processRequest = processRequest;