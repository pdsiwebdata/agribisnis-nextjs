// components/FormPesan.jsx
export default function FormPesan() {
  return (
    <div>
      <h2>
        <i className="fa fa-paper-plane" style={{ color: "var(--primary-color)", marginRight: "0.5rem" }} />
        Kirim Pesan
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: "1rem" }}>
          <input type="text" name="nama" placeholder="Nama Lengkap" required style={{ width: "100%", padding: "0.75rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input type="email" name="email" placeholder="Email Aktif" required style={{ width: "100%", padding: "0.75rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <textarea name="pesan" placeholder="Tulis pesan Anda..." rows="5" required style={{ width: "100%", padding: "0.75rem" }} />
        </div>
        <button type="submit"
          style={{
            padding: "0.75rem 2rem",
            background: "var(--primary-color)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "50px",
          }}>
          <i className="fa fa-paper-plane" style={{ marginRight: "4px" }} />
          Kirim
        </button>
      </form>
    </div>
  );
}
