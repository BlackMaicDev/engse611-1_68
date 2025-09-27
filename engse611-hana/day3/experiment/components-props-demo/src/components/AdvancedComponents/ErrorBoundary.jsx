import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null, 
            errorInfo: null 
        };
    }
    
    static getDerivedStateFromError(error) {
        // อัพเดท state เพื่อแสดง fallback UI
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // บันทึกข้อมูล error
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        
        // ส่ง error ไป logging service (ในการใช้งานจริง)
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // Custom error UI
            if (this.props.fallback) {
                return this.props.fallback(this.state.error, this.state.errorInfo);
            }
            
            // Default error UI
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <h3>🚨 เกิดข้อผิดพลาด</h3>
                        <p>Component นี้พบปัญหาและไม่สามารถแสดงผลได้</p>
                        
                        {this.props.showDetails && (
                            <details className="error-details">
                                <summary>รายละเอียดข้อผิดพลาด</summary>
                                <pre className="error-stack">
                                    {this.state.error && this.state.error.toString()}
                                </pre>
                                <pre className="error-info">
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                        
                        <div className="error-actions">
                            <button 
                                onClick={() => this.setState({ 
                                    hasError: false, 
                                    error: null, 
                                    errorInfo: null 
                                })}
                                className="btn-primary"
                            >
                                🔄 ลองใหม่
                            </button>
                            <button 
                                onClick={() => window.location.reload()}
                                className="btn-secondary"
                            >
                                🏠 รีโหลดหน้า
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.func,
    showDetails: PropTypes.bool
};

ErrorBoundary.defaultProps = {
    showDetails: false
};

export default ErrorBoundary;