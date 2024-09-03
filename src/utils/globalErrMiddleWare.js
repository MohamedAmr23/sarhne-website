let mode='dev'
export const globalErrorMiddleWare=(err,req,res,next)=>{
    if(mode==='dev'){
        devmode()
    }else{
        prodmode()
    }
}

const prodmode=(err,res)=>{
    let code=statusCode || 500
    res.status(code).json({statusCode:code,message:err.message})
}
const devmode=(err,res)=>{
    let code=statusCode || 500
    res.status(code).json({statusCode:code,message:err.message,stack:err.stack})
}