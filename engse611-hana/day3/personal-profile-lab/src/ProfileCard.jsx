import React, { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ profile }) {
  // ฟังก์ชันสำหรับแสดง Avatar (ตัวอักษรแรกของชื่อ)
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  

  // ฟังก์ชันจัดการเมื่อคลิกที่ skill
  const handleSkillClick = (skill) => {
    alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
  };

  // TODO: นักศึกษาจะเพิ่ม state และ functions เพิ่มเติมในส่วน Challenge
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewCount, setViewCount] = useState(0);
const [favoriteHobbies, setFavoriteHobbies] = useState([]);
const [showContactForm, setShowContactForm] = useState(false);

const handleCardClick = () => {
    setViewCount(viewCount+1)
};

const toggleFavoriteHobby = (hobby) => {
    setFavoriteHobbies(hobby)
};

// ฟังก์ชันจัดการเมื่อคลิกปุ่ม Contact
  const handleContactClick = () => {
    setShowContactForm(!showContactForm)
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // toggle ค่า true/false
  };

  // TODO: เพิ่ม className conditionally
  const cardClassName = `profile-card ${isDarkMode ? "dark" : "light"}`;

  return (
    <div className={cardClassName}>
      {/* ส่วนหัว - รูปและชื่อ */}
      <div className="profile-header">
      <div className={cardClassName} onClick={handleCardClick}>
    {/* เพิ่ม view counter */}
    <div className="view-counter">
        👁️ Views: {viewCount}
    </div>
    
    
    
    
</div>
        {/* TODO: เพิ่มปุ่ม theme toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <div className="profile-avatar">{getInitials(profile.name)}</div>
        <h1 className="profile-name">{profile.name}</h1>
        <div className="student-id">{profile.studentId}</div>
      </div>

      {/* ข้อมูลพื้นฐาน */}
      <div className="profile-info">
        <div className="info-item">
          <div className="info-label">สาขา</div>
          <div className="info-value">{profile.major}</div>
        </div>
        <div className="info-item">
          <div className="info-label">ชั้นปี</div>
          <div className="info-value">{profile.year}</div>
        </div>
        <div className="info-item">
          <div className="info-label">อายุ</div>
          <div className="info-value">{profile.age} ปี</div>
        </div>
        <div className="info-item">
          <div className="info-label">เกรด</div>
          <div className="info-value">
            {profile.gpa.toFixed(2)}
            {profile.gpa >= 3.5 && " 🌟"}
          </div>
        </div>
      </div>

    

      {/* งานอดิเรก */}
      <div className="profile-section">
        <h3>🎯 งานอดิเรก</h3>
          {/* แก้ไข hobbies list */}
    <ul className="hobbies-list">
        {profile.hobbies.map((hobby, index) => (
            <li 
                key={index} 
                className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavoriteHobby(hobby);
                }}
            >
                {hobby} {favoriteHobbies.includes(hobby) && '💖'}
            </li>
        ))}
    </ul>
      </div>

      {/* ทักษะ */}
      <div className="profile-section">
        <h3>💻 ทักษะ</h3>
        <div className="skills">
          {profile.skills.map((skill, index) => (
            <div
              key={index}
              className="skill-tag"
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* Achievement Badges - หลัง info section */}
      <div className="profile-section">
        <h3>🏆 Achievements</h3>
        <div className="achievements">
          {/* TODO: เพิ่มเงื่อนไขแสดง badges */}
          {profile.gpa >= 3.5 && (
            <span className="achievement-badge">🌟 เกียรตินิยม</span>
          )}
          {profile.skills.length >= 5 && (
            <span className="achievement-badge">💪 Multi-skilled</span>
          )}
          {/* เพิ่ม achievement เงื่อนไขอื่นๆ */}
        </div>
      </div>

      {/* Social Links - นักศึกษาเพิ่มเอง */}
      {profile.socialLinks && profile.socialLinks.length > 0 && (
        <div className="profile-section">
          <h3>🌐 Social Media</h3>
          <div className="social-links">
            <ul>
              {profile.socialLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    {data.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TODO: นักศึกษาจะเพิ่ม sections เพิ่มเติมใน Challenge */}

      {/* ปุ่ม Contact */}
      {/* Contact Form */}
    {showContactForm && (
        <div className="contact-form">
         <div className="material-form-container">
  <form className="material-form" noValidate>
    <div className="material-input-group">
      <input type="text" id="username" className="material-input" required />
      <label htmlFor="username" className="material-label">Username</label>
      <div className="material-input-bar" />
    </div>
    <div className="material-input-group">
      <input type="email" id="email" className="material-input" required />
      <label htmlFor="email" className="material-label">Email</label>
      <div className="material-input-bar" />
    </div>
    <div className="material-input-group">
      <input type="password" id="password" className="material-input" required />
      <label htmlFor="password" className="material-label">Password</label>
      <div className="material-input-bar" />
    </div>
    <button type="submit" className="material-button">Submit</button>
  </form>
</div>

        </div>
    )}
      <button className="contact-button" onClick={handleContactClick}>
        📧 ติดต่อ {profile.name}
      </button>
    </div>
  );
}

export default ProfileCard;
