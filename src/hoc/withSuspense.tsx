import React from "react";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<div>Загрузка...</div>}>
            <WrappedComponent{...props}/>
        </React.Suspense>
    };
}