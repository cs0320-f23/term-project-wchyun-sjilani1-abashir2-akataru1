import React from 'react';

function Table() {
    const table = [1,2,3];

    return (
        <ul>
            {table.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default Table;

