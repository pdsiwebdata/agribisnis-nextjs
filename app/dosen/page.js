import Navbar from "../components/navbar";
import DosenCard from "./components/DosenCard";
import classes from "./Dosen.module.css";
import Footer from "../components/footer";

const dataDosen = [
      {
        nama: "M. Fariz Afif Hasibuan, S.P., M.Si",
        jabatan: "Ketua Prodi",
        image: "/images/dosen/fariz.jpg",
        profil: "https://scholar.google.com/citations?user=-UM_BmgAAAAJ&hl=en",
      },
      {
        nama: "A'ung Ezra Al'fatah, S.P, M.Si",
        jabatan: "Dosen",
        image: "/images/dosen/ezra.jpg",
        profil: "https://scholar.google.com/citations?hl=id&user=tm8CluEAAAAJ",
      },
      {
        nama: "Astuti Purwasari, M. Pd",
        jabatan: "Dosen",
        image: "/images/dosen/astuti.jpg",
        profil: "",
      },
      {
        nama: "Dela Arinda, S.Si., M.Si",
        jabatan: "Dosen",
        image: "/images/dosen/dela.jpg",
        profil: "https://scholar.google.com/citations?hl=id&user=uuH9an4AAAAJ",
      },
      {
        nama: "Hendris Syah Putra, S.P., M.Si",
        jabatan: "Dosen",
        image: "/images/dosen/hendris.jpg",
        profil: "https://scholar.google.com/citations?user=AuDmwy8AAAAJ&hl=id",
      },
      {
        nama: "Herlyna Novasari Siahaan, S.P., M.Sc",
        jabatan: "Dosen",
        image: "/images/dosen/herlyna.jpg",
        profil: "https://scholar.google.com/citations?user=SdjIKOoAAAAJ&hl=id",
      },
      {
        nama:"Ina Febria Ginting, S.P., M.Si" ,
        jabatan: "Dosen",
        image:  "/images/dosen/ina.jpg",
        profil: "https://scholar.google.com/citations?hl=id&user=pz1YA98AAAAJ",
      },
        {
        nama: "Indah Adelina Siregar, S.P., M.Si" ,
        jabatan: "Dosen" ,
        image: "/images/dosen/indah.jpg"  ,
        profil: "https://scholar.google.com/citations?hl=en&user=p__b2nAAAAAJ",
      },
      ,
        {
        nama: "Indah Kartika Sandra, S.P., M.Si" ,
        jabatan: "Dosen" ,
        image: "/images/dosen/kartika.jpg"  ,
        profil: "https://scholar.google.com/citations?user=32nPdXgAAAAJ&hl=id&oi=ao",
      },
       {
        nama: "Julia Mardalisa M, S.P., M.Si" ,
        jabatan: "Dosen" ,
        image: "/images/dosen/julia.jpg" ,
        profil: "https://scholar.google.com/citations?user=32nPdXgAAAAJ&hl=id&oi=ao",
      },
       {
        nama:"Mei Ryan Sandi, S.P., M.P." ,
        jabatan: "Dosen" ,
        image: "/images/dosen/ryan.jpg"  ,
        profil: "https://scholar.google.com/citations?user=F5meDXYAAAAJ&hl=id&oi=ao",
      },
       {
        nama:"Mutiara Fahmi, SE.i, M.Si",
        jabatan:"Dosen" ,
        image:"/images/dosen/mutiara.jpg"  ,
        profil: "https://scholar.google.com/citations?hl=id&user=DDvEAmsAAAAJ",
      },
       {
        nama:"Rahmi Nofitasari, S.P., M.P ",
        jabatan:"Dosen" ,
        image: "/images/dosen/rahmi.jpg",
        profil : "https://scholar.google.com/citations?user=lJU8VBMAAAAJ&hl=id",
      },
       {
        nama:"Safrizal, S.Agr., M.Si",
        jabatan:"Dosen" ,
        image: "/images/dosen/safrizal.jpg" ,
        profil: "https://scholar.google.com/citations?hl=en&user=FmUonu0AAAAJ",
      },
       {
        nama: "Siti Mewah Siregar, S.P., M.Si",
        jabatan: "Dosen" ,
        image: "/images/dosen/mewah.jpg"  ,
        profil: "https://scholar.google.com/citations?user=d6s5y1EAAAAJ&hl=id&oi=ao",
      },
    ];

export default function Dosen() {
  return (
    <>
        <Navbar />
      <section className={classes.hero}>
        <div className={classes['hero-content']}>
        <h2>Dosen dan Tenaga Pengajar</h2>
        <p>Tim dosen profesional dan berpengalaman yang siap membimbing mahasiswa dalam mengembangkan kompetensi di bidang agribisnis dengan standar internasional.</p>
        </div>
      </section>
      <main className={classes.container}>
        {/* Daftar Dosen */}
        <section className={classes['dosen-section']}>
          <div className={classes['section-title']}>
            <h2><i className="fas fa-chalkboard-teacher" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>Dosen & Tenaga Pelajar</h2>
            <p>
          Program Studi Agribisnis didukung oleh dosen-dosen profesional dengan latar belakang pendidikan tinggi dan
          pengalaman di bidang agribisnis modern.
        </p>
        </div>
        <div className={`${classes['dosen-carousel']} ${classes['dosen-container']}`}>
                {dataDosen.map((dosen, index) => (
                <DosenCard key={index} {...dosen} />
                ))}     
        </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}