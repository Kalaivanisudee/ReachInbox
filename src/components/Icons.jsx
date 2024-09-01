import React from 'react';

const Icon = ({ currColor, color, isActive, children, onClick }) => {
    const activeStyle = {
        backgroundColor: currColor && isActive ? '#2F3030' : (!currColor && isActive ? '#E5E7EB' : 'transparent'), // #E5E7EB is a light gray for "bg-gray-200"
        padding: '4px', 
        borderRadius: '4px', 
        cursor: 'pointer',
    };

    return (
        <div style={activeStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export default Icon;
