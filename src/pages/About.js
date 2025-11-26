import React from 'react';
import { FaHeart, FaShieldAlt, FaTruck, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Về Teddy Shop</h1>
          <p>Mang niềm vui và sự ấm áp đến mọi gia đình</p>
        </div>
      </div>

      <div className="about-container">
        <section className="about-story">
          <div className="story-content">
            <div className="story-text">
              <h2>Câu Chuyện Của Chúng Tôi</h2>
              <p>
                Teddy Shop được thành lập vào năm 2020 với sứ mệnh mang đến những món quà 
                đáng yêu và ý nghĩa cho mọi người. Chúng tôi tin rằng mỗi món thú nhồi bông 
                không chỉ là một món đồ chơi, mà còn là người bạn đồng hành, là kỷ niệm 
                đáng nhớ trong cuộc sống.
              </p>
              <p>
                Với hơn 4 năm kinh nghiệm, chúng tôi đã phục vụ hàng nghìn khách hàng 
                trên toàn quốc. Mỗi sản phẩm đều được chọn lọc kỹ càng, đảm bảo chất lượng 
                cao nhất và an toàn tuyệt đối cho người sử dụng.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=600" alt="Our Story" />
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Chất Lượng</h3>
              <p>Sản phẩm chính hãng, chất lượng cao, an toàn cho trẻ em</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Uy Tín</h3>
              <p>Cam kết minh bạch, trung thực với khách hàng</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Tận Tâm</h3>
              <p>Phục vụ khách hàng với sự nhiệt tình và chu đáo</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Đổi Mới</h3>
              <p>Không ngừng cập nhật sản phẩm mới, xu hướng mới</p>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Khách hàng hài lòng</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Sản phẩm đa dạng</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Đánh giá trung bình</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </section>

        <section className="about-why">
          <h2>Tại Sao Chọn Chúng Tôi?</h2>
          <div className="why-grid">
            <div className="why-card">
              <FaShieldAlt className="why-icon" />
              <h3>An Toàn 100%</h3>
              <p>Sản phẩm được kiểm định chất lượng, an toàn cho trẻ em</p>
            </div>
            <div className="why-card">
              <FaTruck className="why-icon" />
              <h3>Giao Hàng Nhanh</h3>
              <p>Giao hàng toàn quốc trong 2-3 ngày, miễn phí từ 500k</p>
            </div>
            <div className="why-card">
              <FaHeart className="why-icon" />
              <h3>Đóng Gói Đẹp</h3>
              <p>Đóng gói quà tặng miễn phí, kèm thiệp chúc mừng</p>
            </div>
            <div className="why-card">
              <FaStar className="why-icon" />
              <h3>Dịch Vụ Tốt</h3>
              <p>Đội ngũ tư vấn nhiệt tình, hỗ trợ 24/7</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Đội Ngũ Của Chúng Tôi</h2>
          <p className="team-intro">
            Chúng tôi là một đội ngũ trẻ, năng động và đầy nhiệt huyết, 
            luôn sẵn sàng mang đến trải nghiệm mua sắm tuyệt vời nhất cho bạn.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Nguyễn Văn A</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Trần Thị B</h4>
              <p>Marketing Director</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h4>Lê Văn C</h4>
              <p>Product Manager</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h4>Phạm Thị D</h4>
              <p>Customer Service</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
