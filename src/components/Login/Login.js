import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.css"

const Login = withRouter(({history, name}) => (
    <div className={"login"}>
        <h2> Welcome {name} </h2>
        <button onClick={ () => history.push("home") } style={{float: "right", marginTop: "-15px"}}> Sign In </button>
    </div>
));
export default Login;