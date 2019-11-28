import React, {memo} from "react";

const Header = (props) => <div> <h1 className={props.className}> This is an auth0 integration workshop </h1></div>
export default memo(Header);