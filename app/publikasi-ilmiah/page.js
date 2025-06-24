"use client"

import React, { useState, useEffect } from 'react';

import Navbar from "../components/navbar"
import classes from "./PublikasiIlmiah.module.css"
import Footer from "../components/footer";

 const dataPublikasi = [
    {
        no : 1,
        "judul": "Pemberdayaan Petani Melalui Standard Operational Prosedure (SOP) Budidaya dan Pasca Panen Buncis di Koperasi Max Yasa Purbalingga ",
        "dosen": "Herlyna Novasari Siahaan",
        "terindeks": "Sinta 3 ",
        "tahun": "2023",
        "link": "https://www.journal.unrika.ac.id/index.php/MNDBHRU/article/view/5780"
    },
    {
         no : 2,
        "judul": "Pemberdayaan Siswa dalam Implementasi Digital Marketing Pertanian ",
        "dosen": "Rahmi Nofitasari ",
        "terindeks": "Sinta 4 ",
        "tahun": "2023",
        "link": "https://abdimasku.lppm.dinus.ac.id/index.php/jurnalabdimasku/article/view/1598"
    },
    {
         no : 3,
        "judul": "Wall Green: Teknologi Vertikultur Limbah Plastik dalam Mewujudkan Green School ",
        "dosen": "Mia Wananda Varwasih ",
        "terindeks": "Sinta 3 ",
        "tahun": "2024",
        "link": "https://www.journal.unrika.ac.id/index.php/MNDBHRU/article/view/6708"
    },
    {
         no : 4,
        "judul": "Pemanfaatan Pekarangan Rumah dengan Sistem Budikdamber untuk Ketahanan Pangan bagi keluarga ",
        "dosen": "Herlyna Novasari Siahaan",
        "terindeks": "Sinta 3 ",
        "tahun": "2024",
        "link": "https://www.journal.unrika.ac.id/index.php/MNDBHRU/article/view/6718"
    },
    {
         no : 5,
        "judul": "Implementasi sistem informasi manajemen pembukuan bisnis berbasis aplikasi untuk siswa SMKS Marisi Medan, Sumatera Utara",
        "dosen": "Indah Kartika Sandra ",
        "terindeks": "Sinta 4 ",
        "tahun": "2024",
        "link": "https://journal.ummat.ac.id/index.php/jpmb/article/view/27419"
    },
    {
         no : 6,
        "judul": "Landing Page (LPg) Sebagai Media Digital Marketing Dalam Memulai Usaha Di\nSMK Swasta Gajah Mada",
        "dosen": "Fujiati ",
        "terindeks": "Sinta 4 ",
        "tahun": "2025",
        "link": "https://ejournal.unma.ac.id/index.php/bernas/article/view/10293/5944"
    },
    {
         no : 7,
        "judul": "Penyuluhan dan Pemberdayaan Terkait Potensi Desa Sampe Raya menjadi Desa Wisata Kabupaten Langkat ",
        "dosen": "M. Fariz Afif Hasibuan ",
        "terindeks": "Sinta 3 ",
        "tahun": "2024",
        "link": "https://jurnal.unimed.ac.id/2012/index.php/jpkm/article/view/56610"
    },
    {
         no : 8,
        "judul": "Edukasi Pemanfaatan Botol Bekas Minuman (Sampah Plastik) menjadi Wadah Media Tanam Budidaya Komoditas Hortikultura dengan Pendakatan 3R (Reduce, Reuse, Recycle) ",
        "dosen": "Hendris Syah Putra ",
        "terindeks": "Sinta 4 ",
        "tahun": "2023",
        "link": "https://journal.ummat.ac.id/index.php/jpmb/article/view/17005"
    }
]
export default function PublikasiIlmiah(){
      const [searchTerm, setSearchTerm] = useState('');
            const [filterYear, setFilterYear] = useState('');
            const [filteredData, setFilteredData] = useState(dataPublikasi);
        
            useEffect(() => {
                const filtered = dataPublikasi.filter(item => {
                    const matchesSearch =
                      item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.dosen.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesYear = filterYear === '' || item.tahun === filterYear;
                    return matchesSearch && matchesYear;
                });
                setFilteredData(filtered);
                }, [searchTerm, filterYear]);
    return (
        <>
        <Navbar/>
            <div className={classes.hero}>
                <h2>Publikasi Dosen</h2>
                <p></p>
            </div>
            <main className={classes.container}>
            <section style={{ marginBottom: '2rem' }}>
              <div className={classes['section-title']}>
                <h2><i className="fas fa-seedling"></i>Publikasi Dosen</h2>
              </div>
              <div className={classes.content}>
                <div className={classes['filter-bar']} style={{ display: 'flex', gap: '16px', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    className={classes['form-control']}
                    placeholder="Cari judul atau dosen..."
                    style={{ width: '60%' }}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                  <select
                    className={classes['form-control']}
                    style={{ width: '40%' }}
                    value={filterYear}
                    onChange={e => setFilterYear(e.target.value)}
                  >
                    <option value="">Semua Tahun</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <div className={classes['table-responsive']}>
                  <table className={`${classes['table']} ${classes['table-striped']}
                ${classes['table-bordered']} ${classes['align-middle']}`}>
                    <thead className={classes['thead']}>
                      <tr>
                        <th>No</th>
                        <th>Judul Penelitian</th>
                        <th>Nama Dosen</th>
                        <th>Terindeks</th>
                        <th>Tahun</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.no}</td>
                          <td>{item.judul}</td>
                          <td>{item.dosen}</td>
                          <td>{item.tahun}</td>
                          <td className={classes['td-lihat']}><a href={item.link} target="_blank" rel="noopener noreferrer">Lihat Artikel</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}