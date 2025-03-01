export const checkValidData = (email, password) => {

    const isEmailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
    const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)


    if (!isEmailValid) {
        return 'Invalid Email'
    }

    if (!isPasswordValid) {
        return 'Invalid Password'
    }

    return null;

}