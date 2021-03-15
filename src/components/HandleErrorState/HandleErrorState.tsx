import React from "react";
import { UseErrorHandler } from "../../lib/hooks/useErrorHandler";


interface Props {
    error?: string | UseErrorHandler;
    children: React.ReactNode;
}

export const HandleErrorState = (props: Props) => {

    if (!props.error) {
        return <>{props.children}</>;
    }

    return <p>{props.error.toString()}</p>;
};
