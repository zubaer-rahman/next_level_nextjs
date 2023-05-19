export const errorHandler = (res, stcode=400, message= "Internal Server Error") => {
    return res.status(stcode).json({
        success: false,
        message
    })
}
export const asyncError = (passedFunc) => (req, res) => {
   return  Promise.resolve(passedFunc(req, res)).catch(err => {
    return errorHandler(res, 500, err.message);
   });
}