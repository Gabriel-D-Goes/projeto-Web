import React from 'react';

function BookCard({ title, year, availability }) {
    const statusColor = availability === 'Disponivel' ? 'green' : 'red';

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', width: '150px' }}>
            <div style={{ height: '100px', backgroundColor: '#e0e0e0', marginBottom: '10px' }}>
                {/* Placeholder for book cover image */}
            </div>
            <h4>{title}</h4>
            <p>Year: {year}</p>
            <p style={{ color: statusColor, fontWeight: 'bold' }}>{availability}</p>
        </div>
    );
}

export default BookCard;