import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      category: 'Đặt hàng',
      questions: [
        {
          q: 'Làm thế nào để đặt hàng?',
          a: 'Bạn có thể đặt hàng trực tiếp trên website bằng cách chọn sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán. Hoặc liên hệ hotline 0123 456 789 để được hỗ trợ.'
        },
        {
          q: 'Tôi có thể hủy đơn hàng không?',
          a: 'Bạn có thể hủy đơn hàng miễn phí trong vòng 24h sau khi đặt hàng. Sau thời gian này, vui lòng liên hệ bộ phận chăm sóc khách hàng để được hỗ trợ.'
        },
        {
          q: 'Làm sao để theo dõi đơn hàng?',
          a: 'Sau khi đặt hàng thành công, bạn sẽ nhận được mã đơn hàng qua email/SMS. Bạn có thể tra cứu tình trạng đơn hàng trong mục "Đơn hàng của tôi" trên tài khoản.'
        }
      ]
    },
    {
      category: 'Thanh toán',
      questions: [
        {
          q: 'Có những hình thức thanh toán nào?',
          a: 'Chúng tôi hỗ trợ nhiều hình thức: COD (thanh toán khi nhận hàng), chuyển khoản ngân hàng, ví điện tử MoMo, ZaloPay.'
        },
        {
          q: 'Thanh toán COD có mất phí không?',
          a: 'Phí COD là 20.000đ cho đơn hàng dưới 500.000đ. Đơn hàng từ 500.000đ trở lên được miễn phí COD.'
        },
        {
          q: 'Tôi có thể thanh toán bằng thẻ tín dụng không?',
          a: 'Hiện tại chúng tôi chưa hỗ trợ thanh toán trực tiếp bằng thẻ tín dụng. Bạn có thể sử dụng ví điện tử hoặc chuyển khoản ngân hàng.'
        }
      ]
    },
    {
      category: 'Vận chuyển',
      questions: [
        {
          q: 'Thời gian giao hàng là bao lâu?',
          a: 'Thời gian giao hàng từ 2-3 ngày làm việc đối với nội thành và 3-5 ngày đối với các tỉnh thành khác.'
        },
        {
          q: 'Phí vận chuyển là bao nhiêu?',
          a: 'Phí vận chuyển là 30.000đ. Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên.'
        },
        {
          q: 'Tôi có thể thay đổi địa chỉ giao hàng không?',
          a: 'Bạn có thể thay đổi địa chỉ giao hàng trước khi đơn hàng được giao cho đơn vị vận chuyển. Vui lòng liên hệ ngay với chúng tôi.'
        }
      ]
    },
    {
      category: 'Đổi trả & Bảo hành',
      questions: [
        {
          q: 'Chính sách đổi trả như thế nào?',
          a: 'Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm bị lỗi hoặc không đúng mô tả.'
        },
        {
          q: 'Điều kiện để được đổi trả?',
          a: 'Sản phẩm còn nguyên tem mác, chưa qua sử dụng, không bị bẩn hoặc hư hỏng do người dùng.'
        },
        {
          q: 'Chi phí đổi trả do ai chịu?',
          a: 'Nếu lỗi do nhà sản xuất hoặc shop giao sai hàng, chúng tôi sẽ chịu toàn bộ chi phí. Nếu do khách hàng đổi ý, khách hàng sẽ chịu phí vận chuyển.'
        }
      ]
    },
    {
      category: 'Sản phẩm',
      questions: [
        {
          q: 'Sản phẩm có an toàn cho trẻ em không?',
          a: 'Tất cả sản phẩm của chúng tôi đều được kiểm định chất lượng, an toàn tuyệt đối cho trẻ em, không chứa chất độc hại.'
        },
        {
          q: 'Làm thế nào để bảo quản thú bông?',
          a: 'Nên giặt tay nhẹ nhàng với nước lạnh, phơi khô tự nhiên, tránh ánh nắng trực tiếp. Một số sản phẩm có thể giặt máy ở chế độ nhẹ.'
        },
        {
          q: 'Tôi có thể đặt hàng số lượng lớn không?',
          a: 'Có, chúng tôi hỗ trợ đặt hàng số lượng lớn với giá ưu đãi. Vui lòng liên hệ hotline để được tư vấn chi tiết.'
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Câu Hỏi Thường Gặp</h1>
        <p>Tìm câu trả lời cho những thắc mắc của bạn</p>
      </div>

      <div className="faq-container">
        <div className="faq-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="faq-content">
          {filteredFAQ.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((item, qIndex) => {
                  const globalIndex = `${catIndex}-${qIndex}`;
                  const isActive = activeIndex === globalIndex;
                  
                  return (
                    <div key={qIndex} className={`faq-item ${isActive ? 'active' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleQuestion(globalIndex)}
                      >
                        <span>{item.q}</span>
                        {isActive ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {isActive && (
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3>Không tìm thấy câu trả lời?</h3>
          <p>Liên hệ với chúng tôi để được hỗ trợ trực tiếp</p>
          <div className="contact-buttons">
            <a href="tel:0123456789" className="btn-contact phone">
              📞 Gọi ngay
            </a>
            <a href="mailto:contact@teddyshop.vn" className="btn-contact email">
              ✉️ Gửi email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
