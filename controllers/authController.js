const login = (request, response) => {
    return response.render('auth/login')
}

const loginPost = (request, response) => {
    return response.send('login post')
}
const signup = (request, response) => {
    return response.render('auth/signup')
}

const signupPost = (request, response) => {
    return response.send('signup')
}

module.exports = {
    login,
    loginPost,
    signup,
    signupPost
}