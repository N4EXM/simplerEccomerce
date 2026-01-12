import React from 'react';

const ColourCircles = ({ colors, circleSize = 14, overlap = 4 }) => {
    
    const containerStyle = {
        position: 'relative',
        width: `${circleSize + (colors.length - 1) * (circleSize - overlap)}px`,
        height: `${circleSize}px`,
        // margin: '20px'
    };

    return (
        <div style={containerStyle}>
        {colors.map((color, index) => (
            <div
            key={index}
            style={{
                position: 'absolute',
                left: `${index * (circleSize - overlap)}px`,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                borderRadius: '50%',
                backgroundColor: color,
                border: '0px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                zIndex: colors.length - index
            }}
            title={color}
            />
        ))}
        </div>
    );
};

export default ColourCircles

// Usage:
// <ColorCircles colors={['red', 'blue', 'green']} />