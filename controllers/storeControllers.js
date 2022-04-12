'use strict';
const repository=require ('../repository/storeRepository');

exports.getStore= async(req,res)=>{
    try {
        const limite=req.query.limit || 100;
        const pages =req.query.page || 1;
        const datas=await repository.getData(limite,pages);
        res.status(200).json(datas);
    } catch (error) {
        res.status(400).json(error)
    }
    
    
}

exports.createStore=async(req,res)=>{
    try {
        if(req.body){
            const create= await repository.createData(req.body)
            res.status(201).json(create)
        }else{
            res.status(204).json('no content')
        }
    } catch (error) {
        res.status(404).json(error)
    }
    
}