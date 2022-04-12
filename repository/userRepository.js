const User = require('../models/user');

const isAuth=async(user)=>{
    try {
        const findUser= await User.findOne({username:user});
        if(!findUser){
            throw error;
        }else{
            return findUser
            
        }
        
    } catch (error) {
        return error
    }
    
}
module.exports={
    isAuth
}