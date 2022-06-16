import React from "react";

const Fade = ({visible, children}) => {

    let className= 'slide';
    if(!visible) {
        className += ' out'
    };

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Fade;