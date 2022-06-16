import React from "react";

const MenuList = ({visible, children}) => {

    let className = 'fade';
    if(!visible) {
        className += ' out'
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default MenuList;