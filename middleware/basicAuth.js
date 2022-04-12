const auth =require('basic-auth');
let bcrypt = require('bcrypt-nodejs');
const authRepository = require('../repository/userRepository')
exports.auth= async (req,res,next)=>{
    
    try {
        const user= await auth(req);
        const authValidate= await authRepository.isAuth(user.name);
    
        if(user && user.name === authValidate.username){
            if(bcrypt.compareSync(user.pass, authValidate.password)){
                next();
            }else{
                res.status(401).json({msg :"Incorrect Password"});
            }
        }else {
            res.status(404).json({msg: "User No Exist"})
        }
    } catch (error) {
        res.status(404).json(error);
    }
    



}