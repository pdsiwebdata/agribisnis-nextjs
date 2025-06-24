import Navbar from "../components/navbar"
import classes from "./OrganisasiMahasiswa.module.css"
import Footer from "../components/footer";

const upmList = [
  {
    title: 'UPM Green Generation',
    img: 'assets/img/ormawa/upm-green-generation.jpg',
    desc: 'Unit yang mewadahi mahasiswa untuk belajar dan berkompetisi dalam debat ilmiah, argumentasi logis, dan public speaking.'
  },
  {
    title: 'UPM Vocal',
    img: 'assets/img/ormawa/upm-vocal.jpg',
    desc: 'Berfokus pada penelitian ilmiah mahasiswa dan pelatihan penulisan karya ilmiah, jurnal, dan proposal PKM.'
  },
  {
    title: 'UPM Traditional Dance',
    img: 'assets/img/ormawa/upm-traditional-dance.jpg',
    desc: 'Mendorong mahasiswa untuk mengembangkan jiwa entrepreneur melalui pelatihan dan praktik bisnis nyata.'
  },
  {
    title: 'UPM Tenis Meja',
    img: 'assets/img/ormawa/upm-tenis-meja.jpg',
    desc: 'Menyalurkan bakat seni mahasiswa seperti musik, tari, teater, dan desain visual untuk event kampus dan luar kampus.'
  },
  {
    title: 'UPM Suara Bhinneka',
    img: 'assets/img/ormawa/upm-suara-bhinneka.jpg',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
  {
    title: 'UPM Modern Dance',
    img: 'assets/img/ormawa/upm-modern-dance.jpg',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
  {
    title: 'UPM Sastra',
    img: 'assets/img/ormawa/upm-klub-sastra.jpg',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
  {
    title: 'UPM Investasi',
    img: 'assets/img/ormawa/upm-investasi.jpg',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
  {
    title: 'UPM Futsal',
    img: 'assets/img/ormawa/upm-futsal.jpg',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
  {
    title: 'UPM Red Cross',
    img: 'assets/img/ormawa/upm-red-cross.png',
    desc: 'Mewadahi kegiatan olahraga seperti futsal, voli, dan badminton sebagai bagian dari kesehatan dan prestasi mahasiswa.'
  },
];

export default function OrganisasiMahasiswa(){
    return (
        <>
            <Navbar/>
            <div className={classes.hero}>
                <h2>Organisasi Mahasiswa</h2>
                <p></p>
            </div>
            <main className={classes.container}>
                {/* Himagri */}
                <section style={{ marginTop:"40px" }}>
                    <h2><i className="fas fa-seedling"></i> HIMAGRI (Himpunan Mahasiswa Agribisnis)</h2>
                    <div style={{display: 'flex',flexWrap: 'wrap',gap: '20px',marginTop: '20px',alignItems: 'center',}}>
                        <img src="images/ormawa/himagri-logo.png" alt="Logo HIMAGRI" style={{ width: "200px", height: "fit-content" }} />
                        <div style={{ flex:" 1" }}>
                          <p style={{ textAlign:"justify",lineHeight:" 1.8" }}>
                            HIMAGRI adalah wadah organisasi kemahasiswaan di tingkat Program Studi Agribisnis yang berfungsi sebagai
                            sarana pengembangan potensi akademik, sosial, dan kepemimpinan mahasiswa. HIMAGRI menyelenggarakan berbagai
                            kegiatan seperti pelatihan, seminar, studi banding, hingga kegiatan sosial yang mendorong peran aktif
                            mahasiswa dalam pembangunan sektor agribisnis yang berkelanjutan.
                          </p>
                          <p><strong>Visi:</strong> Menjadi organisasi mahasiswa agribisnis yang aktif, progresif, dan solutif.</p>
                          <p><strong>Misi:</strong></p>
                          <ul>
                            <li>Mengembangkan potensi akademik dan keterampilan anggota.</li>
                            <li>Meningkatkan kepedulian sosial dan keorganisasian.</li>
                            <li>Menjalin kemitraan dengan pihak internal dan eksternal kampus.</li>
                          </ul>
                        </div>
                    </div>
                </section>
            
            {/* UPM */}
            <section style={{ marginTop: '60px' }}>
                <h2><i className="fas fa-seedling"></i> Unit Prestasi Mahasiswa (UPM)</h2>
                <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                  UPM merupakan unit pengembangan minat dan bakat mahasiswa Agribisnis di berbagai bidang. Masing-masing unit
                  memiliki kegiatan rutin dan prestasi yang membanggakan baik di tingkat lokal maupun nasional.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                  {upmList.map((upm, index) => (
                    <div className="card" key={index}>
                      <img src={upm.img} alt={upm.title} style={{ width: '100%', borderRadius: '8px' }} />
                      <h4>{upm.title}</h4>
                      <p>{upm.desc}</p>
                    </div>
                  ))}
                </div>
            </section>
            </main>
            <Footer/>
        </>
    )
}