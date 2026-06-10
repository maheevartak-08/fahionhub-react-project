export function Hero() {
  return (
    <>
      <style>
        {`
          .hero {
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url("https://images.unsplash.com/photo-1483985988355-763728e1935b") center/cover;
            color: white;
          }

          .hero h1 {
            font-size: 42px;
            margin-bottom: 10px;
          }

          .hero p {
            font-size: 18px;
            margin-bottom: 15px;
          }

          .hero button {
            padding: 10px 20px;
            border: none;
            background: gold;
            color: black;
            font-weight: bold;
          }
        `}
      </style>

      <section className="hero">
        <h1>Discover Your Style</h1>
        <p>Trendy Fashion for Every Occasion</p>
        <button>Shop Now</button>
      </section>
    </>
  );
}
