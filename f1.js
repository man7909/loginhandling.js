function login(username, password) {
    let validUser = "admin";
    let validPass = "1234";

    if (username === validUser && password === validPass) {
        return "Login Successful";
    } else {
        return "Invalid Credentials";
    }
}

modele.exports ={login};