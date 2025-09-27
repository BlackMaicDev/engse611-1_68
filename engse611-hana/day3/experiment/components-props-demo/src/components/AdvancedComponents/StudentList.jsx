import React from 'react';
import PropTypes from 'prop-types';

function StudentList({ students, onStudentClick, groupBy = 'grade', showStats = true }) {
    if (students.length === 0) {
        return (
            <div className="empty-state">
                <p>📚 ไม่มีข้อมูลนักศึกษา</p>
                <small>ลองเพิ่มข้อมูลนักศึกษาใหม่</small>
            </div>
        );
    }
    
    // จัดกลุ่มข้อมูล
    const groupedStudents = students.reduce((groups, student) => {
        const key = student[groupBy];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(student);
        return groups;
    }, {});
    
    // คำนวณสถิติ
    const totalStudents = students.length;
    const averageScore = students.reduce((sum, student) => sum + student.score, 0) / totalStudents;
    const gradeDistribution = students.reduce((dist, student) => {
        dist[student.grade] = (dist[student.grade] || 0) + 1;
        return dist;
    }, {});
    
    return (
        <div className="student-list-container">
            {showStats && (
                <div className="student-stats">
                    <div className="stat-item">
                        <span className="stat-label">จำนวนนักศึกษา:</span>
                        <span className="stat-value">{totalStudents} คน</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">คะแนนเฉลี่ย:</span>
                        <span className="stat-value">{averageScore.toFixed(2)}</span>
                    </div>
                    <div className="grade-distribution">
                        <span className="stat-label">การกระจายเกรด:</span>
                        {Object.entries(gradeDistribution).map(([grade, count]) => (
                            <span key={grade} className="grade-stat">
                                {grade}: {count}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="student-groups">
                {Object.entries(groupedStudents).map(([groupKey, groupStudents]) => (
                    <div key={groupKey} className="student-group">
                        <h4 className="group-title">
                            {groupBy === 'grade' ? `เกรด ${groupKey}` : 
                             groupBy === 'year' ? `ชั้นปีที่ ${groupKey}` : groupKey}
                            <span className="group-count">({groupStudents.length} คน)</span>
                        </h4>
                        
                        <div className="student-cards">
                            {groupStudents.map(student => (
                                <div 
                                    key={student.id} 
                                    className="student-card"
                                    onClick={() => onStudentClick(student)}
                                >
                                    <div className="student-info">
                                        <span className="student-name">{student.name}</span>
                                        <span className="student-score">
                                            คะแนน: {student.score}
                                        </span>
                                    </div>
                                    <div className="student-badges">
                                        <span className={`grade-badge grade-${student.grade.replace('+', 'plus').replace('-', 'minus')}`}>
                                            {student.grade}
                                        </span>
                                        <span className="year-badge">
                                            ปี {student.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

StudentList.propTypes = {
    students: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            grade: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired
        })
    ).isRequired,
    onStudentClick: PropTypes.func.isRequired,
    groupBy: PropTypes.oneOf(['grade', 'year']),
    showStats: PropTypes.bool
};

export default StudentList;