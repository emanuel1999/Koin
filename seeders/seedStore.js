const Store=require('../models/store');
const {formatData}=require('../services/date');

const createData= async (req,res)=>{
try {

    const date= new Date();
    const [m,d,y]= [date.getMonth(), date.getDate(), date.getFullYear()];
    const arrDate=[m,d,y];
    const jData= arrDate.join('/');
    const store= new Store();
    store.concepts=[
            
                "tiene calco",
                "de cuero",
                "sin piernas",
                "paso"
            
        ],
        
        store.comercio= "Pan dulce luz ",
        store.cuit= "21-04212341-21",
        store.currentBalance= 1921,
        store.active= "true",
        store.lastSale=jData

        const store1= new Store();
        store1.concepts=[
            
                "heladeras",
                "no froost",
                "doble puerta",
                "210",
                "240x210",
                "gigante"
            
        ],
        
        store1.comercio= "Mercadeo Naut ",
        store1.cuit= "21-2124512-21",
        store1.currentBalance= 21345,
        store1.active= "true",
        store1.lastSale=jData
   
    await Store.create(store);    
    res.json("created")
} catch (error) {
     res.json(error)}   
}    
    


module.exports={createData}