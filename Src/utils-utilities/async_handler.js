const async_handler = (fun) => {
    return (req, res, next) => {
        Promise.resolve(fun(req,res,next)).catch((error) => next)
    }
}

export { async_handler }


// async try catch

// const async_handler = (fun) => {
//     return async (req, res, next) => {
//         try {
//             await fun(req, res, next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }