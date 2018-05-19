import React from 'react';
export const WithParametersRouteComponent = (Component, properties) => {
    return props => (<Component {...props} { ...properties} />);
}