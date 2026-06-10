export function ProductCard() {
  return (
    <>
      <style>
        {`
          .product-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            padding: 20px 60px;
          }

          .product {
            background: white;
            padding: 20px;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 10px;
          }

          .product img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .product h4 {
            margin-bottom: 5px;
          }

          .product p {
            color: #444;
            margin-bottom: 10px;
          }

          .product button {
            padding: 8px 12px;
            border: none;
            background: gold;
            font-weight: bold;
            cursor: pointer;
          }
        `}
      </style>

      <section>
        <h2 style={{ textAlign: "center", marginTop: "30px" }}>
          Featured Products
        </h2>

        <div className="product-container">
          <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5DOZisdVAPWx8fwkV62_oyDhK-34i3Y8Vw&s" />
            <h4>Men T-Shirt</h4>
            <p>₹499</p>
            <button>Buy Now</button>
          </div>

          <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbtEQGipzxf-FWZVI8IsPhRK15iZyw5_gGA&s" />
            <h4>Women Dress</h4>
            <p>₹899</p>
            <button>Buy Now</button>
          </div>

          <div className="product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgZpjRGyiZDzhmPsktpG6RELCjTdZwzgmWg&s" />
            <h4>Kids Wear</h4>
            <p>₹399</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
