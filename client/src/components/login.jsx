import React, {useState} from "react";
import "../custom style/login.css";
import InfoAboutWeb from "./InfoAboutWeb";

function Login() {
    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();

        var {uname, pass} = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({name: "uname", message: errors.uname});
        }
    };
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    {isSubmitted ?
                        <InfoAboutWeb />
                         :
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>Username </label>
                                    <input type="text" name="uname" required/>
                                    {renderErrorMessage("uname")}
                                </div>
                                <div className="input-container">
                                    <label>Password </label>
                                    <input type="password" name="pass" required/>
                                    {renderErrorMessage("pass")}
                                </div>
                                <div className="button-container">
                                    <input type="submit"/>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>


        </>

    )
};

export default Login;