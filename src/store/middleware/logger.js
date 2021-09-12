

const logger = param => store => next => action => {
    console.log("loggging", param);
    // console.log("store", store);
    // console.log("next", store);
    // console.log("action", action);
    //console.log(action);
    return next(action);
}

export default logger;