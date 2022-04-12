const Store=require('../models/store');
const getData=async (limit,page) => {
    
    const result= await Store.paginate({},{limit,page});
    const data=result.docs;
    
    const orderConcepts= data.map(se=>{
        
        
        return { id:se._id,
                comercio: se.comercio,
                cuit: se.cuit,
                concepts1: se.concepts[0][0],
                concepts2: se.concepts[0][1],
                concepts3: se.concepts[0][2],
                concepts4: se.concepts[0][3],
                concepts5: se.concepts[0][4],
                concepts6: se.concepts[0][5],
                currentBalance: se.currentBalance,
                active: se.active,
                lastSale: se.lastSale,}
                
            })
    
    const totalPage=result.totalPages;
    const totalDocs=result.totalDocs;
    const orderPage={
        data:orderConcepts,
        page:page,
        pages:totalPage,
        limit:limit,
        total:totalDocs
    }  
    
    return orderPage;
}

const createData= async (data)=>{
    const date= new Date();
    const [m,d,y]= [date.getMonth(), date.getDate(), date.getFullYear()];
    const arrDate=[m,d,y];
    const jData= arrDate.join('/');

    const store= new Store();
    store.comercio=data.comercio,
    store.cuit=data.cuit,
    store.concepts=data.concepts,
    store.currentBalance=data.currentBalance,
    store.active=data.active,
    store.lastSale= jData

    
    await Store.create(store);
    return store;
}

module.exports ={
    getData,
    createData
}
