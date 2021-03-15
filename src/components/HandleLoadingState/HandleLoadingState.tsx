import React from "react";

interface Props {
    loading?: boolean;
    children: React.ReactNode;
}

export const HandleLoadingState = (props: Props) => {
    if (!props.loading) {
        return <>{props.children}</>;
    }
    return <p>Loading...</p>;
};
