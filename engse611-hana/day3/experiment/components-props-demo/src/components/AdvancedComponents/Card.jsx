import React from 'react';
import PropTypes from 'prop-types';

function Card({ 
    title, 
    children, 
    className = '', 
    variant = 'default',
    showHeader = true,
    actions = null
}) {
    return (
        <div className={`card card-${variant} ${className}`}>
            {(showHeader && title) && (
                <div className="card-header">
                    <h3>{title}</h3>
                    {actions && <div className="card-actions">{actions}</div>}
                </div>
            )}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'danger']),
    showHeader: PropTypes.bool,
    actions: PropTypes.node
};

// Sub-components สำหรับ Compound Component Pattern
Card.Header = ({ children, className = '' }) => (
    <div className={`card-header ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`card-footer ${className}`}>{children}</div>
);

Card.Title = ({ children, level = 3 }) => {
    const HeadingTag = `h${level}`;
    return <HeadingTag className="card-title">{children}</HeadingTag>;
};

// PropTypes สำหรับ sub-components
Card.Header.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Body.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Footer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.Title.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Card;