// components/KontakInfo.jsx
export default function KontakInfo() {
  return (
    <div>
      <h2>
        <i className="fa fa-info-circle" style={{ color: "var(--primary-color)", marginRight: "0.5rem" }} />
        Informasi Kontak
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
        <i className="fas fa-map-marker-alt" style={{ color: "var(--primary-color)" }} />
        <p style={{ margin: 0 }}>Jl.Sunggal Gg.Bakul Pekan 1 Sunggal Kec. Medan Sunggal, Sumatera Utara</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <i className="fas fa-phone" style={{ color: "var(--primary-color)" }} />
        <p style={{ margin: 0 }}>061-8471234</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <i className="fas fa-envelope" style={{ color: "var(--primary-color)" }} />
        <p style={{ margin: 0 }}>prodi.agribisnis@satyaterrabhinneka.ac.id</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <i className="fab fa-instagram" style={{ color: "var(--primary-color)" }} />
        <p style={{ margin: 0 }}>@agribisnis.stbhinneka</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <i className="fab fa-youtube" style={{ color: "var(--primary-color)" }} />
        <p style={{ margin: 0 }}>@ProdiAgribisnisSTBhinneka</p>
      </div>
    </div>
  );
}
