import {RouteComponentProps} from "@reach/router";
import {PropsWithChildren} from "react";

function UniversesMain(props: PropsWithChildren<RouteComponentProps>) {
    return <div>{props.children}</div>;
}

export default UniversesMain;