import {Link} from "@reach/router";
import React from "react";


function NavLink(props: any) {
    return (<Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
                className: isCurrent ? "nav-link active" : "nav-link"
            };
        }}
    />);
}
export default NavLink;