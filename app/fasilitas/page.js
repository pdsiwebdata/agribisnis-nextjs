import Navbar from '../components/navbar';
import classes from './Fasilitas.module.css';
import FasilitasCard from './components/FasilitasCard';
import Footer from "../components/footer";

 const data = [

      {

        jenis: "Ruang Kelas",

        luas: "8,50 x 9,50",

        kapasitas: "52",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/RUANG KULIAH.png",

      },

      {

        jenis: "Laboratorium Komputer",

        luas: "850 x 800",

        kapasitas: "55",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/LAB KOMPUTER.png",

      },

      {

        jenis: "Lahan Percobaan",

        luas: "4 x 15",

        kapasitas: "55",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/Lahan Percobaan.jpeg",

      },

      {

        jenis: "Perpustakaan",

        luas: "1680 x 560",

        kapasitas: "52",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/Perpustakaan (3).jpeg",

      },

      {

        jenis: "Ruang Dosen",

        luas: "10,35 x 8,35",

        kapasitas: "53",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/Ruang Kantor.jpeg",

      },

      {

        jenis: "Ruang Konseling",

        luas: "510 x 485",

        kapasitas: "4",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/Ruang Konseling.jpeg",

      },

      {

        jenis: "Ruang Administrasi",

        luas: "11 x 9,80",

        kapasitas: "7",

        kondisi: "Terawat",

        imageUrl: "/images/fasilitas/Ruang Administrasi.jpeg",

      },

    ];

export default function Fasilitas() {
  return (
    <>
    <Navbar/>
    <div className={classes.hero}>
        <h2>Fasilitas</h2>
        <p></p>
    </div>
    <main className={classes.container}>
        <section className={classes['dosen-section']}>
            <div className={classes['section-title']}>
                <h2><i></i>Sarana</h2>
            </div>
            <div className={`${classes['sarana-carousel']} ${classes['sarana-container']}`}>
                {data.map((item, index) => (
                    <FasilitasCard key={index} {...item} />
                ))}
            </div>
        </section>
    </main>
    <Footer/>
    </>
);
}