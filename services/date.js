const formatData= async ()=>{
    const date= new Date();
    const [m,d,y]= [date.getMonth(), date.getDate(), date.getFullYear()];
    const arrDate=[m,d,y];
    const jData= arrDate.join('/');
    console.log(jData)
    return jData
    
}

module.exports={formatData}