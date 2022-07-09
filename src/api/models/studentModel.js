const mongoose = require('mongoose');
const DugsiInfo = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    }
})
const CustomerInfo = new mongoose.Schema({
    customerId:{
        type:String,
        required:true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    midlleName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    
    mobile:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
   
    city:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    }
})
const UerInfo = new  mongoose.Schema({
    userName:{
        type:String,
      
        trim:true
    },
    password:{
        type:String,
    
        trim:true
    },
    dateCreated:{
        type:Date,
        timestamps: true,
        trim:true
    },
    
})

const dugsiInfo = mongoose.model("dugsiInfo",DugsiInfo)
const customerInfo = mongoose.model("customerInfo",CustomerInfo)
const userInfo = mongoose.model("userInfo",UerInfo)
//Registrtation
function addDugsiInfo(params,next) {
    var dugsiModel = new dugsiInfo();
    dugsiModel.id = params.id,
    dugsiModel.name = params.name,
    dugsiModel.address = params.address,
    dugsiModel.country = params.country,
    dugsiModel.city = params.city,

    dugsiModel.save((err,dugsi)=>{
        let clientResp = {};
            if (err){
                clientResp.err = err;
                clientResp.result = null;
                next(clientResp,null);
                return;
            }
            clientResp.err = null;
            clientResp.result = [dugsi];
           next(null,clientResp);
            
    }) 
}
function addCustomeriInfo(params,next) {
    var customerModel = new customerInfo();
    customerModel.customerId = params.customerId,
    customerModel.firstName = params.firstName,
    customerModel.midlleName = params.midlleName,
    customerModel.lastName = params.lastName,
    customerModel.country = params.country,
    customerModel.city = params.city,
    customerModel.mobile = params.mobile,
    customerModel.address = params.address,


    customerModel.save((err,customer)=>{
        let clientResp = {};
            if (err){
                clientResp.err = err;
                clientResp.result = null;
                next(clientResp,null);
                return;
            }
            clientResp.err = null;
            clientResp.result = [customer];
           next(null,clientResp);
            
    }) 
}
function addUseriInfo(params,next) {
    var userModel = new userInfo();
    userModel.userName = params.userName,
    userModel.password = params.password,
    userModel.dateCreated = params.dateCreated
    userModel.save((err,customer)=>{
        let clientResp = {};
            if (err){
                clientResp.err = err;
                clientResp.result = null;
                next(clientResp,null);
                return;
            }
            clientResp.err = null;
            clientResp.result = [customer];
           next(null,clientResp);
            
    }) 
}

//Update 
function updateDugsiInfo(params,next ) {
   
    dugsiInfo.find({id:params.id}, function (err,dugsi) {
        let clientResp = {};
        if (err) {
            clientResp.err = err;
            clientResp.message = "An error occured while getting dugsi info"
            clientResp.result = [];
            next(clientResp,null);
            return;
        }

        if (!dugsi || !dugsi.length) {
            clientResp.err = null;
            clientResp.message = "No existing record is found for this dugsi."
            clientResp.result = [];
            next(clientResp,null);
            return;
        }
            let updateData = {};
            /*
            {
                "id":"3",
                "name":"salah",
                "country":"somalia",
                "address":"kamil",
                "city":"garowe"
            }

            */
            updateData.id = params.id || dugsi[0].id;
            updateData.name = params.name || dugsi[0].name;
            if(params.country){
                updateData.country = params.country;
            }
            updateData.address = params.address || dugsi[0].address;
            if(params.city){
                updateData.city = params.city;
            }
           
        dugsiInfo.findOneAndUpdate({id:params.id},updateData, {new: true} ,function (err, dugsi) {
            let clientResp = {};
            if (err){
                console.log(err);
                clientResp.err = err;
                clientResp.message = "Error occurred while updating student info ";
                clientResp.result = null;
                next(clientResp);
                return;
            }
            clientResp.err = null;
            clientResp.message = "Success";
            clientResp.result = dugsi;
           next(clientResp);
        });
        })   
}
function updateCustomerInfo(params,next ) {
   
    dugsiInfo.find({customerId:params.customerId}, function (err,customer) {
        let clientResp = {};
        if (err) {
            clientResp.err = err;
            clientResp.message = "An error occured while getting customer info"
            clientResp.result = [];
            next(clientResp,null);
            return;
        }

        if (!customer || !customer.length) {
            clientResp.err = null;
            clientResp.message = "No existing record is found for this customer."
            clientResp.result = [];
            next(clientResp,null);
            return;
        }
            let updateData = {};
            /*
           {
            "customerId":"2",
            "firstName":"ahmed",
            "midlleName":"cumar",
            "lastName":"siyad",
            "country":"somalia",
            "city":"mogadishu",
            "mobile":"06138939399",
            "address":"bakaro"
            }

            */
            updateData.customerId = params.customerId || customer[0].customerId;
            updateData.firstName = params.firstName || customer[0].firstName;
            updateData.midlleName = params.midlleName || customer[0].midlleName;
            updateData.lastName = params.lastName || customer[0].lastName;
            if(params.country){
                updateData.country = params.country;
            }
            if(params.mobile){
                updateData.mobile = params.mobile;
            }
            updateData.address = params.address || customer[0].address;
            if(params.city){
                updateData.city = params.city;
            }
           
        customerInfo.findOneAndUpdate({customerId:params.customerId},updateData, {new: true} ,function (err, customer) {
            let clientResp = {};
            if (err){
                console.log(err);
                clientResp.err = err;
                clientResp.message = "Error occurred while updating customer info ";
                clientResp.result = null;
                next(clientResp);
                return;
            }
            clientResp.err = null;
            clientResp.message = "Success";
            clientResp.result = customer;
           next(clientResp);
        });
        })   
}
function updateUserInfo(params,next ) {
   
    dugsiInfo.find({userName:params.userName}, function (err,user) {
        let clientResp = {};
        if (err) {
            clientResp.err = err;
            clientResp.message = "An error occured while getting user info"
            clientResp.result = [];
            next(clientResp,null);
            return;
        }

        if (!user || !user.length) {
            clientResp.err = null;
            clientResp.message = "No existing record is found for this user."
            clientResp.result = [];
            next(clientResp,null);
            return;
        }
            let updateData = {};
            /*
           {
            "userName"
             "password"
            "dateCreated"
            }
            */
            updateData.userName = params.userName || user[0].userName;
            updateData.password = params.password || user[0].password;
            updateData.dateCreated = params.dateCreated || user[0].dateCreated;
        userInfo.findOneAndUpdate({userName:params.userName},updateData, {new: true} ,function (err, user) {
            let clientResp = {};
            if (err){
                console.log(err);
                clientResp.err = err;
                clientResp.message = "Error occurred while updating user info ";
                clientResp.result = null;
                next(clientResp);
                return;
            }
            clientResp.err = null;
            clientResp.message = "Success";
            clientResp.result = user;
           next(clientResp);
        });
        })   
}
// get 
function getDugsiInfo(params,next) {
    dugsiInfo.find({id:params.id},function (err, dugsi) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = err;
            clientResp.message = "Error occurred while getting dugsi info ";
            clientResp.result = null;
            next(clientResp);
            return;
        }
    
        if (!dugsi || !dugsi.length){
            clientResp.err = null;
            clientResp.message = "No Dugsi info is found";
            clientResp.result = [];
            next(clientResp);
            return;
        }

        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = dugsi;
       next(clientResp);
    });
}

function getCustomerInfo(params,next) {
    customerInfo.find({customerId:params.customerId},function (err, customer) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = err;
            clientResp.message = "Error occurred while getting customers info ";
            clientResp.result = null;
            next(clientResp);
            return;
        }
    
        if (!customer || !customer.length){
            clientResp.err = null;
            clientResp.message = "No Customers info is found";
            clientResp.result = [];
            next(clientResp);
            return;
        }

        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = customer;
       next(clientResp);
    });
}
function getUserInfo(params,next) {
    userInfo.find({userName:params.userName},function (err, user) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = err;
            clientResp.message = "Error occurred while getting user info ";
            clientResp.result = null;
            next(clientResp);
            return;
        }
    
        if (!user || !user.length){
            clientResp.err = null;
            clientResp.message = "No users info is found";
            clientResp.result = [];
            next(clientResp);
            return;
        }

        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = user;
       next(clientResp);
    });
}
// get all
function getAllDugsiInfo(next) {
    dugsiInfo.find(function (err, dugsi) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = {};
            clientResp.message = "Error occurred! ";
            clientResp.code = "404";
            clientResp.result = null;
            next(clientResp);
            return;
        }
        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = [dugsi];
       next(clientResp);
    });
}
function getAllCustomerInfo(next) {
    customerInfo.find(function (err, customers) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = {};
            clientResp.message = "Error occurred! ";
            clientResp.code = "404";
            clientResp.result = null;
            next(clientResp);
            return;
        }
        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = [customers];
       next(clientResp);
    });
}
function getAllUseriInfo(next) {
    userInfo.find(function (err, users) {
        let clientResp = {};
        if (err){
            console.log(err);
            clientResp.err = {};
            clientResp.message = "Error occurred! ";
            clientResp.code = "404";
            clientResp.result = null;
            next(clientResp);
            return;
        }
        clientResp.err = null;
        clientResp.message = "Success";
        clientResp.result = [users];
       next([clientResp]);
    });
}
//delete
function deleteDugsiInfo(params,next) {
        let clientResp = {};
        dugsiInfo.deleteOne({id:params.id},function (err, dugsi) {
                if (err) {
                    clientResp.err = err;
                    clientResp.message = "Error occurred while deleting dugsi info";
                    clientResp.result = null;
                    next(clientResp);
                    return;
                };
                clientResp.err = null;
                clientResp.message = "Dugsi Successfully deleted";
                clientResp.result = dugsi;
                next(clientResp);
                
            });
}
function deleteCustomerInfo(params,next) {
    let clientResp = {};
    customerInfo.deleteOne({customerId:params.customerId},function (err, customers) {
            if (err) {
                clientResp.err = err;
                clientResp.message = "Error occurred while deleting customer info";
                clientResp.result = null;
                next(clientResp);
                return;
            };
            clientResp.err = null;
            clientResp.message = "Customer Successfully deleted";
            clientResp.result = customers;
            next(clientResp);
            
        });
}
function deleteUserInfo(params,next) {
    let clientResp = {};
    userInfo.deleteOne({userName:params.userName},function (err, users) {
            if (err) {
                clientResp.err = err;
                clientResp.message = "Error occurred while deleting user info";
                clientResp.result = null;
                next(clientResp);
                return;
            };
            clientResp.err = null;
            clientResp.message = "User Successfully deleted";
            clientResp.result = users;
            next(clientResp);
            
        });
}
module.exports.addDugsiInfo = addDugsiInfo;
module.exports.addCustomeriInfo = addCustomeriInfo;
module.exports.addUseriInfo = addUseriInfo;
module.exports.updateDugsiInfo = updateDugsiInfo;
module.exports.updateCustomerInfo = updateCustomerInfo;
module.exports.updateUserInfo = updateUserInfo;
module.exports.getDugsiInfo = getDugsiInfo;
module.exports.getAllDugsiInfo = getAllDugsiInfo;
module.exports.getAllCustomerInfo = getAllCustomerInfo;
module.exports.getAllUseriInfo = getAllUseriInfo;
module.exports.getCustomerInfo = getCustomerInfo;
module.exports.getUserInfo = getUserInfo;
module.exports.deleteDugsiInfo = deleteDugsiInfo;
module.exports.deleteCustomerInfo = deleteCustomerInfo;
module.exports.deleteUserInfo = deleteUserInfo;