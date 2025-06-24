import React from "react";
import Navbar from "../components/navbar";
import classes from "./Kontak.module.css"
import Footer from "../components/footer";

export default function KontakSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika kirim pesan di sini, misalnya ke API atau tampilkan alert
    alert("Pesan telah dikirim!");
  };

  return (
    <>
    <Navbar/>
      <div className={classes.hero}>
        <h2>Kontak</h2>
        <p></p>
    </div>
    <main className={classes.container}>
      <div style={{ margin: "1rem 0 3rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4987.942017317537!2d98.60985407589293!3d3.574216196399975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f06577bc8f1%3A0xb23448990c9cab2e!2sYayasan%20Perguruan%20Sultan%20Iskandar%20Muda!5e1!3m2!1sid!2sid!4v1747818966169!5m2!1sid!2sid"
          style={{ border: 0, width: "100%", height: "500px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section
        className={classes['contact-info']}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          margin: "2rem 0",
        }}
      >
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

        <div>
          <h2>
            <i className="fa fa-paper-plane" style={{ color: "var(--primary-color)", marginRight: "0.5rem" }} />
            Kirim Pesan
          </h2>
          <form>
            <div style={{ marginBottom: "1rem" }}>
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                required
                style={{ width: "100%", padding: "0.75rem", backgroundColor:"var(--background)" }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <input
                type="email"
                name="email"
                placeholder="Email Aktif"
                required
                style={{ width: "100%", padding: "0.75rem" }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <textarea
                name="pesan"
                placeholder="Tulis pesan Anda..."
                rows="5"
                required
                style={{ width: "100%", padding: "0.75rem" }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "0.75rem 2rem",
                background: "var(--primary-color)",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                borderRadius: "50px",
              }}
            >
              <i className="fa fa-paper-plane" style={{ marginRight: "4px" }} />
              Kirim
            </button>
          </form>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
