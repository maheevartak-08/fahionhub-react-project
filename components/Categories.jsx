export function Categories() {
  const sectionStyle = {
    padding: "30px",
    textAlign: "center",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  };

  return (
    <section style={sectionStyle}>
      <h2>Categories</h2>

      <div style={containerStyle}>
        <div style={cardStyle}>Men</div>
        <div style={cardStyle}>Women</div>
        <div style={cardStyle}>Kids</div>
        <div style={cardStyle}>Accessories</div>
      </div>
    </section>
  );
}
