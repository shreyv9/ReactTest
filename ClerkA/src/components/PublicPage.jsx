import React from 'react';
import { Link } from 'react-router-dom';

const PublicPage = () => {
    return (
        <div>
            <h1>Welcome to the Public Page</h1>
            <p>This is a demo public page accessible to everyone.</p>
            <p>
                <Link to="/protected" style={{ color: '#646cff', textDecoration: 'none' }}>
                    Click here to access the protected page.
                </Link>
            </p>
        </div>
    );
};

export default PublicPage;