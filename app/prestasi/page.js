import Navbar from "../components/navbar";
import classes from './Prestasi.module.css'
import Footer from "../components/footer";
const prestasiList = [
  {
    name: 'Team Agribisnis',
    img: 'images/prestasi/tec.jpg',
    desc: 'Silver Medal Toba Essay Competition Batch 2, 21-24 Februari 2025'
  },
  {
    name: 'Karolus Kaltinus Daeli',
    img: 'images/prestasi/badminton.jpg',
    desc: 'Juara 1 Korempa Cup BNKP Tanjung Anom, 28 Oktober 2023'
  },
  {
    name: 'Mutia Agustina Sinaga',
    img: 'images/prestasi/mutia-agustina-sinaga.jpg',
    desc: 'Juara 3 Turnamen Futsal Kartini Cup, 28 Oktober 2023'
  },
  {
    name: 'M. Rai Permana Putra',
    img: 'images/prestasi/peksimida.jpg',
    desc: 'Juara 2 Pekan Seni Mahasiswa Daerah (PEKSIMIDA) Sumatera Utara Tangkai Lomba Tari di Universitas Negeri Medan'
  },
  {
    name: 'M. Rai Permana Putra',
    img: 'images/prestasi/m-rai-permana-putra.jpg',
    desc: 'Juara 2 Business Competition II Kategori BIP, Wilayah 5 Sumatera Bagian Utara'
  },
  {
    name: 'Team Mahasiswa Agribisnis',
    img: 'images/prestasi/business-plan.jpg',
    desc: 'Favorite Team Business Plan Agribussiness 2023 tingkat internasional'
  },
];


export default function Prestasi(){
    return(
        <>
        <Navbar/>
        <div className={classes.hero}>
            <h2>Prestasi Mahasiswa</h2>
            <p></p>
        </div>
          <main className={classes.container}>
        <section className={classes['profil-section']} id="prestasi">
          <div className={classes['section-title']}>
            <h2>
              <i className="fas fa-trophy" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>
              Prestasi Mahasiswa
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', fontSize: '1rem', color: '#555' }}>
              Berikut adalah beberapa prestasi membanggakan yang telah diraih oleh mahasiswa kami.
            </p>
          </div>
          <div className={`${classes['profil-carousel']} ${classes['profil-container']}}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {prestasiList.map((prestasi, index) => (
              <div className={classes['profil-card']} key={index}>
                <img src={prestasi.img} alt={prestasi.name} style={{ width: '100%', borderRadius: '8px' }} />
                <h3>{prestasi.name}</h3>
                <p>{prestasi.desc}</p>
                <a href="#" className={`${classes['btn']} ${classes['btn-profile']}}`}>Detail Prestasi</a>
              </div>
            ))}
          </div>
        </section>
    </main>
    <Footer/>
        </>
    )
}