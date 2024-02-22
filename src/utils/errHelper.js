module.exports = (msg = "invalid inputs", status = 500) => {

    const error = new Error(msg)
    
    return error


}