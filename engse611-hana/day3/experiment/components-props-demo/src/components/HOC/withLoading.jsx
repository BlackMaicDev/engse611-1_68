import React from 'react';
import PropTypes from 'prop-types';

// Higher-Order Component สำหรับเพิ่ม loading state
function withLoading(WrappedComponent) {
    const WithLoadingComponent = ({ 
        isLoading, 
        loadingText = 'กำลังโหลด...', 
        loadingComponent = null,
        ...props 
    }) => {
        if (isLoading) {
            if (loadingComponent) {
                return loadingComponent;
            }
            
            return (
                <div className="loading-container">
                    <div className="loading-spinner">⏳</div>
                    <p className="loading-text">{loadingText}</p>
                </div>
            );
        }
        
        return <WrappedComponent {...props} />;
    };
    
    WithLoadingComponent.propTypes = {
        isLoading: PropTypes.bool,
        loadingText: PropTypes.string,
        loadingComponent: PropTypes.node
    };
    
    WithLoadingComponent.defaultProps = {
        isLoading: false
    };
    
    // ตั้งชื่อ component สำหรับ debugging
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLoadingComponent.displayName = `withLoading(${componentName})`;
    
    return WithLoadingComponent;
}

export default withLoading;

// HOC อื่นๆ ที่เป็นตัวอย่าง

// HOC สำหรับเพิ่ม error handling
export function withErrorHandling(WrappedComponent) {
    const WithErrorHandlingComponent = ({ onError, ...props }) => {
        const handleError = (error) => {
            console.error('Component error:', error);
            if (onError) {
                onError(error);
            }
        };
        
        return (
            <WrappedComponent 
                {...props} 
                onError={handleError}
            />
        );
    };
    
    WithErrorHandlingComponent.propTypes = {
        onError: PropTypes.func
    };
    
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithErrorHandlingComponent.displayName = `withErrorHandling(${componentName})`;
    
    return WithErrorHandlingComponent;
}

// HOC สำหรับเพิ่ม analytics tracking
export function withAnalytics(WrappedComponent) {
    const WithAnalyticsComponent = ({ trackingId, ...props }) => {
        const trackEvent = (eventName, data = {}) => {
            console.log(`Analytics: ${eventName}`, { trackingId, ...data });
            // ส่งข้อมูลไป analytics service
        };
        
        return (
            <WrappedComponent 
                {...props} 
                trackEvent={trackEvent}
            />
        );
    };
    
    WithAnalyticsComponent.propTypes = {
        trackingId: PropTypes.string
    };
    
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithAnalyticsComponent.displayName = `withAnalytics(${componentName})`;
    
    return WithAnalyticsComponent;
}