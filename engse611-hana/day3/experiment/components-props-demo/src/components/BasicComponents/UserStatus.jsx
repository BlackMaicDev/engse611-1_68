import React from 'react';
import PropTypes from 'prop-types';

function UserStatus({ user, showDetails = false }) {
    // กรณีไม่ได้เข้าสู่ระบบ
    if (!user) {
        return (
            <div className="status-container">
                <span className="status guest">👤 ผู้เยี่ยมชม</span>
                {showDetails && <p className="status-details">ยังไม่ได้เข้าสู่ระบบ</p>}
            </div>
        );
    }
    
    // กรณี Offline
    if (!user.isOnline) {
        if (user.lastSeen) {
            return (
                <div className="status-container">
                    <span className="status offline">
                        🔴 Offline
                    </span>
                    {showDetails && (
                        <p className="status-details">
                            เห็นครั้งสุดท้าย: {user.lastSeen}
                        </p>
                    )}
                </div>
            );
        }
        return (
            <div className="status-container">
                <span className="status unknown">❓ ไม่ทราบสถานะ</span>
                {showDetails && <p className="status-details">ไม่มีข้อมูลการเชื่อมต่อ</p>}
            </div>
        );
    }
    
    // กรณี Online + Premium
    if (user.isPremium) {
        return (
            <div className="status-container">
                <span className="status premium">🌟 Premium Online</span>
                {showDetails && (
                    <div className="status-details">
                        <p>สมาชิก Premium</p>
                        <p>เชื่อมต่ออยู่ในขณะนี้</p>
                    </div>
                )}
            </div>
        );
    }
    
    // กรณี Online ธรรมดา
    return (
        <div className="status-container">
            <span className="status online">🟢 Online</span>
            {showDetails && (
                <div className="status-details">
                    <p>สมาชิกทั่วไป</p>
                    <p>เชื่อมต่ออยู่ในขณะนี้</p>
                </div>
            )}
        </div>
    );
}

UserStatus.propTypes = {
    user: PropTypes.shape({
        isOnline: PropTypes.bool,
        isPremium: PropTypes.bool,
        lastSeen: PropTypes.string,
        name: PropTypes.string
    }),
    showDetails: PropTypes.bool
};

export default UserStatus;