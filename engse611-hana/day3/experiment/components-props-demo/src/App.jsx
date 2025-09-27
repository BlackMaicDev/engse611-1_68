import React, { useState } from 'react';
import ErrorBoundary from './components/AdvancedComponents/ErrorBoundary';
import WelcomeCard from './components/BasicComponents/WelcomeCard';
import ProductCard from './components/BasicComponents/ProductCard';
import UserStatus from './components/BasicComponents/UserStatus';
import Card from './components/AdvancedComponents/Card';
import StudentList from './components/AdvancedComponents/StudentList';
import withLoading from './components/HOC/withLoading';
import { sampleProducts, sampleStudents, sampleUsers } from './data/mockData';

function App() {
    // Demo Controls State
    const [showLoadingDemo, setShowLoadingDemo] = useState(false);
    const [studentGroupBy, setStudentGroupBy] = useState('grade');
    const [showStudentStats, setShowStudentStats] = useState(true);
    const [showErrorDemo, setShowErrorDemo] = useState(false);
    
    // Event Handlers สำหรับ demo
    const handleAddToCart = (product) => {
        alert(`✅ เพิ่ม "${product.name}" ในตะกร้าแล้ว!\n💰 ราคา: ฿${product.price.toLocaleString()}`);
    };
    
    const handleViewDetails = (product) => {
        const details = `
🛍️ รายละเอียดสินค้า

📝 ชื่อ: ${product.name}
💰 ราคา: ฿${product.price.toLocaleString()}
📦 สถานะ: ${product.inStock ? 'มีสินค้า' : 'หมดสินค้า'}
📖 รายละเอียด: ${product.description}
        `.trim();
        alert(details);
    };
    
    const handleStudentClick = (student) => {
        alert(`👨‍🎓 ${student.name}\n📊 คะแนน: ${student.score}\n🎓 เกรด: ${student.grade}\n📚 ชั้นปีที่: ${student.year}`);
    };
    
    // Enhanced Components with HOC
    const ProductCardWithLoading = withLoading(ProductCard);
    const StudentListWithLoading = withLoading(StudentList);
    
    // Error Throwing Component สำหรับทดสอบ Error Boundary
    const ErrorThrowingComponent = () => {
        if (showErrorDemo) {
            throw new Error('ทดสอบ Error Boundary - Component นี้มีปัญหา!');
        }
        return <p>✅ Component ทำงานปกติ</p>;
    };
    
    return (
        <div className="demo-container">
            {/* Header */}
            <h1>📚 Demo: Components และ Props</h1>
            <p className="demo-description">
                ตัวอย่างการใช้งาน React Components และ Props ต่างๆ สำหรับการสอนหัวข้อที่ 2
            </p>
            
            {/* Navigation */}
            <div className="demo-nav">
                <h3>🧭 หัวข้อในการสาธิต</h3>
                <div className="nav-links">
                    <a href="#basic-props" className="nav-link">Basic Props</a>
                    <a href="#complex-props" className="nav-link">Complex Props</a>
                    <a href="#children" className="nav-link">Children Props</a>
                    <a href="#conditional" className="nav-link">Conditional Rendering</a>
                    <a href="#lists" className="nav-link">List Rendering</a>
                    <a href="#error-boundary" className="nav-link">Error Boundary</a>
                    <a href="#hoc" className="nav-link">HOC</a>
                </div>
            </div>
            
            {/* Section 1: Basic Props และ Default Props */}
            <section id="basic-props" className="demo-section">
                <h2>1. Basic Props และ Default Props</h2>
                <div className="demo-grid">
                    <WelcomeCard 
                        name="สมชาย ใจดี" 
                        age={25} 
                        role="Senior Developer" 
                        isVIP={true}
                    />
                    <WelcomeCard 
                        name="สมศรี สวยงาม" 
                        age={23} 
                        role="UI/UX Designer"
                        // isVIP ไม่ได้ส่งมา จะใช้ default value = false
                    />
                    <WelcomeCard 
                        name="สมหมาย เก่งมาก" 
                        age={28} 
                        role="Project Manager" 
                        isVIP={false}
                        avatar="https://via.placeholder.com/60x60/28a745/ffffff?text=SM"
                    />
                </div>
                
                <Card title="💡 จุดสำคัญของ Basic Props" variant="primary">
                    <ul className="feature-list">
                        <li>Props เป็น parameters ของ Component</li>
                        <li>ใช้ Default Parameters สำหรับค่าเริ่มต้น</li>
                        <li>Destructuring ทำให้อ่านโค้ดง่ายขึ้น</li>
                        <li>PropTypes ช่วยตรวจสอบประเภทข้อมูล</li>
                    </ul>
                </Card>
            </section>
            
            {/* Section 2: Complex Props และ PropTypes */}
            <section id="complex-props" className="demo-section">
                <h2>2. Complex Props และ PropTypes Validation</h2>
                <div className="demo-grid">
                    {sampleProducts.slice(0, 2).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                            showDiscount={true}
                            showStock={true}
                        />
                    ))}
                </div>
                
                <Card title="🔍 PropTypes Validation" variant="warning">
                    <p>เปิด Console (F12) เพื่อดู PropTypes warnings หากมีการส่ง props ผิดประเภท</p>
                    <div className="code-block">
{`ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // ...
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  showDiscount: PropTypes.bool
};`}
                    </div>
                </Card>
            </section>
            
            {/* Section 3: Children Props และ Composition */}
            <section id="children" className="demo-section">
                <h2>3. Children Props และ Component Composition</h2>
                <div className="demo-grid">
                    <Card title="📊 ข้อมูลส่วนตัว" variant="success">
                        <p><strong>ชื่อ:</strong> สมชาย ใจดี</p>
                        <p><strong>อีเมล:</strong> somchai@email.com</p>
                        <p><strong>เบอร์:</strong> 081-234-5678</p>
                        <button className="btn-primary">แก้ไขข้อมูล</button>
                    </Card>
                    
                    <Card variant="warning">
                        <Card.Header>
                            <Card.Title level={4}>⚠️ คำเตือนสำคัญ</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนส่ง</p>
                            <ul>
                                <li>ชื่อ-นามสกุล</li>
                                <li>หมายเลขโทรศัพท์</li>
                                <li>ที่อยู่อีเมล</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <small>อัพเดทล่าสุด: วันนี้</small>
                        </Card.Footer>
                    </Card>
                </div>
                
                <Card title="🧩 Compound Components Pattern" variant="primary">
                    <p>Pattern นี้ช่วยให้สร้าง flexible API สำหรับ complex components</p>
                    <div className="code-block">
{`<Card variant="warning">
  <Card.Header>
    <Card.Title level={4}>หัวข้อ</Card.Title>
  </Card.Header>
  <Card.Body>
    <p>เนื้อหา...</p>
  </Card.Body>
  <Card.Footer>
    <small>ท้ายการ์ด</small>
  </Card.Footer>
</Card>`}
                    </div>
                </Card>
            </section>
            
            {/* Section 4: Conditional Rendering */}
            <section id="conditional" className="demo-section">
                <h2>4. Conditional Rendering</h2>
                <div className="demo-grid">
                    {sampleUsers.map((user, index) => (
                        <Card key={index} title={`ผู้ใช้ ${index + 1}`}>
                            <UserStatus user={user} showDetails={true} />
                            {user && (
                                <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                                    <p>ชื่อ: {user.name || 'ไม่ระบุ'}</p>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
                
                <Card title="🎭 Conditional Rendering Patterns" variant="secondary">
                    <div className="demo-grid single-column">
                        <div>
                            <h4>1. && Operator (Short Circuit)</h4>
                            <div className="code-block">
{`{user && <UserProfile user={user} />}
{isLoading && <LoadingSpinner />}`}
                            </div>
                        </div>
                        
                        <div>
                            <h4>2. Ternary Operator</h4>
                            <div className="code-block">
{`{user ? (
  <WelcomeMessage user={user} />
) : (
  <LoginForm />
)}`}
                            </div>
                        </div>
                        
                        <div>
                            <h4>3. Early Return</h4>
                            <div className="code-block">
{`if (!user) {
  return <div>ไม่พบผู้ใช้</div>;
}
return <UserProfile user={user} />;`}
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
            
            {/* Section 5: List Rendering และ Keys */}
            <section id="lists" className="demo-section">
                <h2>5. List Rendering และ Keys</h2>
                
                <div className="demo-controls">
                    <label>จัดกลุ่มตาม:</label>
                    <select 
                        value={studentGroupBy}
                        onChange={(e) => setStudentGroupBy(e.target.value)}
                    >
                        <option value="grade">เกรด</option>
                        <option value="year">ชั้นปี</option>
                    </select>
                    
                    <label>
                        <input 
                            type="checkbox"
                            checked={showStudentStats}
                            onChange={(e) => setShowStudentStats(e.target.checked)}
                        />
                        แสดงสถิติ
                    </label>
                </div>
                
                <StudentList 
                    students={sampleStudents}
                    onStudentClick={handleStudentClick}
                    groupBy={studentGroupBy}
                    showStats={showStudentStats}
                />
                
                <Card title="🔑 ความสำคัญของ Keys" variant="danger">
                    <div className="warning-box">
                        <h4>⚠️ อย่าใช้ Array Index เป็น Key!</h4>
                        <p>หากลำดับของรายการเปลี่ยนแปลง จะทำให้ React render ผิดพลาด</p>
                    </div>
                    <div className="code-block">
{`// ❌ ไม่ดี
{items.map((item, index) => 
  <Item key={index} data={item} />
)}

// ✅ ดี  
{items.map(item => 
  <Item key={item.id} data={item} />
)}`}
                    </div>
                </Card>
            </section>
            
            {/* Section 6: Error Boundary */}
            <section id="error-boundary" className="demo-section">
                <h2>6. Error Boundaries</h2>
                
                <div className="demo-controls">
                    <button 
                        onClick={() => setShowErrorDemo(!showErrorDemo)}
                        className={showErrorDemo ? "btn-danger" : "btn-primary"}
                    >
                        {showErrorDemo ? '🔧 แก้ไข Error' : '💥 ทำให้เกิด Error'}
                    </button>
                </div>
                
                <div className="demo-grid">
                    <Card title="Error Boundary Test" variant="danger">
                        <ErrorBoundary showDetails={true}>
                            <ErrorThrowingComponent />
                            <p>Component อื่นๆ ยังทำงานได้ปกติ</p>
                        </ErrorBoundary>
                    </Card>
                    
                    <Card title="Normal Component" variant="success">
                        <p>✅ Component นี้ไม่ได้รับผลกระทบจาก Error</p>
                        <p>Error Boundary ช่วยป้องกันไม่ให้แอปทั้งหมดพัง</p>
                    </Card>
                </div>
                
                <Card title="🛡️ Error Boundary Best Practices" variant="warning">
                    <ul className="feature-list">
                        <li>ใช้ Class Component สำหรับ Error Boundary</li>
                        <li>จัดวาง Error Boundary ในระดับที่เหมาะสม</li>
                        <li>สร้าง Fallback UI ที่เป็นมิตรกับผู้ใช้</li>
                        <li>Log errors ไปยัง monitoring service</li>
                    </ul>
                </Card>
            </section>
            
            {/* Section 7: Higher-Order Components (HOC) */}
            <section id="hoc" className="demo-section">
                <h2>7. Higher-Order Components (HOC)</h2>
                
                <div className="demo-controls">
                    <button 
                        onClick={() => setShowLoadingDemo(!showLoadingDemo)}
                        className="btn-primary"
                    >
                        {showLoadingDemo ? '✅ โหลดเสร็จแล้ว' : '⏳ แสดง Loading'}
                    </button>
                </div>
                
                <div className="demo-grid">
                    <ProductCardWithLoading
                        product={sampleProducts[0]}
                        onAddToCart={handleAddToCart}
                        onViewDetails={handleViewDetails}
                        isLoading={showLoadingDemo}
                        loadingText="กำลังโหลดสินค้า..."
                    />
                    
                    <StudentListWithLoading
                        students={sampleStudents.slice(0, 3)}
                        onStudentClick={handleStudentClick}
                        isLoading={showLoadingDemo}
                        loadingText="กำลังโหลดรายชื่อ..."
                        showStats={false}
                    />
                </div>
                
                <Card title="🔧 HOC Pattern" variant="primary">
                    <p>HOC เป็น function ที่รับ Component และ return Component ใหม่ที่มีฟีเจอร์เพิ่มเติม</p>
                    <div className="code-block">
{`function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>กำลังโหลด...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// การใช้งาน
const ProductCardWithLoading = withLoading(ProductCard);`}
                    </div>
                </Card>
            </section>
            
            {/* Section 8: Props Validation Summary */}
            <section className="demo-section">
                <h2>8. สรุป Props Validation และ Best Practices</h2>
                
                <div className="demo-grid two-columns">
                    <Card title="✅ Do's - สิ่งที่ควรทำ" variant="success">
                        <ul className="feature-list">
                            <li>ใช้ PropTypes validation เสมอ</li>
                            <li>ตั้ง Default Props สำหรับค่าเริ่มต้น</li>
                            <li>ใช้ Destructuring ใน parameters</li>
                            <li>ตั้งชื่อ Props ที่ชัดเจนและสื่อความหมาย</li>
                            <li>แยก Props เป็นหมวดหมู่ (data, callbacks, config)</li>
                        </ul>
                    </Card>
                    
                    <Card title="❌ Don'ts - สิ่งที่ไม่ควรทำ" variant="danger">
                        <ul className="feature-list">
                            <li>ส่ง Props มากเกินไป (ควรใช้ Object)</li>
                            <li>ตั้งชื่อ Props แบบ generic เช่น data, info</li>
                            <li>ลืมใส่ key ใน list rendering</li>
                            <li>ใช้ array index เป็น key</li>
                            <li>ไม่ validate Props สำหรับ public components</li>
                        </ul>
                    </Card>
                </div>
                
                <Card title="📋 PropTypes Reference" variant="secondary">
                    <div className="code-block">
{`// ประเภทข้อมูลพื้นฐาน
PropTypes.string          // ข้อความ
PropTypes.number          // ตัวเลข
PropTypes.bool            // true/false
PropTypes.array           // อาเรย์
PropTypes.object          // อ็อบเจ็กต์
PropTypes.func            // ฟังก์ชัน

// ข้อมูลที่จำเป็น
PropTypes.string.isRequired

// อาเรย์ของข้อมูลประเภทเฉพาะ
PropTypes.arrayOf(PropTypes.number)

// อ็อบเจ็กต์รูปแบบเฉพาะ  
PropTypes.shape({
  name: PropTypes.string.isRequired,
  age: PropTypes.number
})

// เลือกจากตัวเลือกที่กำหนด
PropTypes.oneOf(['small', 'medium', 'large'])

// หลายประเภทที่เป็นไปได้
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])`}
                    </div>
                </Card>
            </section>
            
            {/* Footer */}
            <div className="demo-footer">
                <h3>🎉 สรุปการสาธิต Components และ Props</h3>
                <p>ตัวอย่างทั้งหมดนี้แสดงให้เห็นการใช้งาน React Components และ Props ในสถานการณ์จริง</p>
                <p>เหมาะสำหรับการสอนและทำความเข้าใจ concept สำคัญต่างๆ</p>
                
                <div className="tech-badges">
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">PropTypes</span>
                    <span className="tech-badge">JSX</span>
                    <span className="tech-badge">Error Boundaries</span>
                    <span className="tech-badge">HOC Pattern</span>
                    <span className="tech-badge">Compound Components</span>
                </div>
                
                <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                    <p>📚 สำหรับการสอนหัวข้อที่ 2: การสร้าง Components และ Props</p>
                    <p>🎯 เหมาะสำหรับนักศึกษาวิศวกรรมซอฟต์แวร์ที่เริ่มต้นเรียน React.js</p>
                </div>
            </div>
        </div>
    );
}

export default App;