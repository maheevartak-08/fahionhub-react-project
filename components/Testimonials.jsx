export function Testimonials() {
  return (
    <>
      <style>
        {`
          .testimonial-section {
            text-align: center;
            padding: 40px;
            background: #fff;
            margin: 40px 60px;
            border-radius: 10px;
            border: 1px solid #ddd;
          }

          .testimonial-section h2 {
            margin-bottom: 20px;
          }

          .testimonial-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .testimonial-card {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 10px;
            background: #f9f9f9;
          }

          .testimonial-card p {
            font-style: italic;
            margin-bottom: 10px;
          }

          .testimonial-card h4 {
            font-size: 14px;
            color: #333;
          }
        `}
      </style>

      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Amazing quality and fast delivery!"</p>
            <h4>- Rahul</h4>
          </div>

          <div className="testimonial-card">
            <p>"Loved the collection. Very stylish!"</p>
            <h4>- Priya</h4>
          </div>

          <div className="testimonial-card">
            <p>"Best fashion store online!"</p>
            <h4>- Arjun</h4>
          </div>
        </div>
      </section>
    </>
  );
}

