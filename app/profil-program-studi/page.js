import Navbar from "../components/navbar";
import classes from "./ProfilProgramStudi.module.css";
import Footer from "../components/footer";

export default function profilProgramStudi() {
  return (
    <>
      <Navbar />
      <div className={classes.hero}>
        <h2>Profil Program Studi</h2>
        <p></p>
      </div>
      
      <main className={classes.container}>
      {/* Profil Singkat */}
        <section className={classes.section}>
          <div className={classes['section-title']}>
            <h2><i className="fas fa-seedling"></i>Profil Program Studi Agribisnis</h2>
          </div>
          <div className={classes['content-center']}>
            <p>
              Program Studi Agribisnis merupakan bagian dari Fakultas Pertanian yang berfokus pada pengembangan ilmu dan
              praktik di bidang ekonomi pertanian, manajemen usaha tani, agribisnis, dan kewirausahaan berbasis sumber daya
              lokal. Program ini bertujuan mencetak lulusan yang kompeten dan berdaya saing global serta memiliki jiwa
              kewirausahaan dalam mengelola sektor pertanian secara berkelanjutan.
            </p>
          </div>
        </section>
    {/* Visi Misi Tujuan */}
        <section className={classes.section}>
          <div className={classes['section-title']}>
            <h2><i className="fas fa-eye"></i>Visi, Misi, dan Tujuan</h2>
          </div>
          <div className={classes.content}>
            <div>
              <h3>Visi</h3>
              <p>
                Program Studi Agroteknologi merupakan bagian dari Fakultas Pertanian yang berfokus pada penerapan teknologi
                dalam budidaya tanaman, pengelolaan sumber daya alam, dan inovasi pertanian. Program ini bertujuan untuk
                menghasilkan lulusan yang mampu mengembangkan teknologi pertanian yang ramah lingkungan dan berkelanjutan.
              </p>
            </div>
          </div>
          <div>
          <h3>Misi</h3>
          <ul>
            <li>Menyelenggarakan pendidikan yang bermutu di bidang agribisnis.</li>
            <li>Melaksanakan penelitian yang berkontribusi pada pengembangan ilmu agribisnis dan pemecahan masalah
              pertanian.</li>
            <li>Melaksanakan pengabdian kepada masyarakat berbasis hasil penelitian untuk meningkatkan kesejahteraan
              petani
              dan pelaku agribisnis.</li>
            <li>Membangun jejaring dan kerja sama dengan berbagai institusi dalam dan luar negeri.</li>
          </ul>
        </div>
        <div>
          <h3>Tujuan</h3>
          <ul>
            <li>Menghasilkan lulusan yang memiliki pengetahuan, keterampilan, dan sikap profesional di bidang
              agribisnis.
            </li>
            <li>Mendorong terciptanya inovasi dalam pengembangan usaha agribisnis.</li>
            <li>Meningkatkan kontribusi Program Studi dalam pembangunan pertanian yang berkelanjutan dan berbasis
              masyarakat.</li>
          </ul>
        </div>
        </section>
       {/* Struktur Organisasi */}
       <section className={classes['struktur-section']}>
         <div className={classes['section-title']}>
           <h2><i className="fas fa-sitemap"></i>Struktur Organisasi</h2>
         </div>
         <div className={classes['content-center']}>
           <img src="images/struktur/HA.jpg" alt="Struktur Organisasi Agribisnis" className={classes['struktur-img']} width="100%"/>
           <p style={{ fontStyle: "italic", marginTop: "4px" }}>Struktur Organisasi Program Studi Agribisnis</p>
         </div>
       </section>
      </main>
      <Footer/>
    </>
  );
}