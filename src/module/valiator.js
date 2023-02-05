export const validateSignin = (id, password) => {
    console.log('validating sign-in ...');
    const localId = localStorage.getItem('id')
    const localPassword = localStorage.getItem('password')
    if(localId !== id) {
        return false
    }
    if(localPassword !== password){
        return false
    }
    return true
}

export const IsRepeated = (password, passwordRepeat) => {
    console.log('validating is repeated ...');
    if(password === passwordRepeat) {
        return true
    }
    else {
        return false
    }
}