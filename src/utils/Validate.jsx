export const ValidateData = (email, Password,name) => {
    const isemailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password);
    if (name) {
        const isnameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(name);
        if (!isnameValid) return "Fullname is not Valid"
    }
    if (!isemailValid) return "email is not Valid";
    if (!ispasswordValid) return "password is not Valid";
    return null;

};