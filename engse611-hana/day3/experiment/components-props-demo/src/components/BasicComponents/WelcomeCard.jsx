import React from 'react';
import PropTypes from 'prop-types';

function WelcomeCard({ name, age, role, isVIP = false, avatar = null }) {
    return (
        <div className={`welcome-card ${isVIP ? 'vip' : ''}`}>
            <div className="welcome-header">
                {avatar ? (
                    <img src={avatar} alt={name} className="avatar" />
                ) : (
                    <div className="avatar-placeholder">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
                <h3>🎉 ยินดีต้อนรับ {name}!</h3>
            </div>
            
            <div className="welcome-info">
                <p><strong>อายุ:</strong> {age} ปี</p>
                <p><strong>บทบาท:</strong> {role}</p>
            </div>
            
            {isVIP && (
                <div className="vip-section">
                    <span className="vip-badge">⭐ VIP Member</span>
                    <p className="vip-benefits">พิเศษ! ได้รับส่วนลด 20%</p>
                </div>
            )}
            
            <div className="welcome-actions">
                <button className="btn-primary">เข้าสู่ระบบ</button>
                {!isVIP && <button className="btn-secondary">สมัคร VIP</button>}
            </div>
        </div>
    );
}

WelcomeCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    isVIP: PropTypes.bool,
    avatar: PropTypes.string
};

export default WelcomeCard;