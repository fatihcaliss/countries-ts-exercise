import React, { FunctionComponent } from 'react'

interface ILoadingProps {
    loading: boolean;
    children: React.ReactNode;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
    const { loading } = props;

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>{props.children}</div>
    )
}

export default Loading