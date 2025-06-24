"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import classes from './PengabdianMasyarakat.module.css'
import Footer from "../components/footer";

const dataPengabdian = [
    {
        no : 1,
        "pengabdian": "Sustainable Good Agriculture Practice/GAP on Arabica Coffee",
        "tingkat": "Internasional ",
        "tahun": "2023 - 2024 ",
        "link": "https://drive.google.com/file/d/11eJuIgmKHacQTuLlbcm2Bka6KCWcC4tR/view?usp=drive_link"
    },
    {
         no : 2,
        "pengabdian": "Pemberdayaan Siswa dalam Implementasi Digital Marketing pada Produk Pertanian ",
        "tingkat": "Mandiri ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/19OGc1Jd-m-yKdwWVzi0VC6Jso-jq8tKi/view?usp=drive_link"
    },
    {
         no : 3,
        "pengabdian": "Pemberdayaan Petani Melalui SOP Budidaya dan Pasca Panen Buncis di Koperasi Max Yasa Purbalingga",
        "tingkat": "Mandiri ",
        "tahun": "Desember 2023",
        "link": "https://drive.google.com/file/d/1cgIquB4rrX97sCHIPVrl5HBvblLv1i8A/view?usp=sharing"
    },
    {
         no : 4,
        "pengabdian": "Edukasi Pemanfaatan Botol Bekas Minuman (Sampah Plastik) Menjadi Wadah Media Tanam Budidaya Komoditas Hortikultura dengan Pendekatan 3R (Reduce, Reuse, Recycle)",
        "tingkat": "Mandiri ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/1fvgzBnUCRAIeRZhaIZ8SEzakOqeZ-ew3/view?usp=drive_link"
    },
    {
         no : 5,
        "pengabdian": "Pemanfaatan Pekarangan Rumah dengan Sistem Budikdamber sebagai Upaya Ketahanan Pangan Keluarga di Desa Pasar Melintang",
        "tingkat": "Internal ",
        "tahun": "Desember 2023",
        "link": "https://drive.google.com/file/d/1X-shw_5pnflvmzXYY_ZFW3MifgPH5xiC/view?usp=drive_link"
    },
    {
         no : 6,
        "pengabdian": "Penyuluhan dan pemberdayaan Terkait Potensi Desa Sampe Raya Menjadi Desa Wisata Kabupaten Langkat",
        "tingkat": "Internal ",
        "tahun": "Oktober 2023",
        "link": "https://drive.google.com/file/d/1zBuy_6jmBDNXTYEQHKFonU74WgoW9iG1/view?usp=drive_link"
    },
    {
         no : 7,
        "pengabdian": "Landing Page (LPg) sebagai Media Digital Marketing dalam Memulai Usaha di SMK Swasta Gajah Mada ",
        "tingkat": "Internal ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/1sIKqcnHtyP5Pn4HCOuYw0RR6o8V0bGyv/view?usp=drive_link"
    },
    {
         no : 8,
        "pengabdian": "Penerapan Pekarangan Pangan Lestari Melalui Vertikultur pada KWT Rampah Estate Mandiri Serdang Berdagai ",
        "tingkat": "Internal ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/1BYGHRm7d2MnqwT43iWqjShNIZ2Yvg9ri/view?usp=drive_link"
    },
    {
         no : 9,
        "pengabdian": "Pemberdayaan Kelompok Lembaga Pengelola Hutan Desa Terhadap Agrowisata Berkelanjutan di Desa Pasar Rawa Kecamatan Gebang Kabupaten Langkat ",
        "tingkat": "Eksternal (DIKTI) ",
        "tahun": "Juni 2024",
        "link": "https://drive.google.com/file/d/1pHb78OhvaPt53mh0laTEbeC23V7Yc1Oz/view?usp=drive_link"
    },
    {
         no : 10,
        "pengabdian": "Wall Green: Teknologi Vertikultur Limbah Plastik dalam Mewujudkan Green School ",
        "tingkat": "Mandiri ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/1LU2LB7KtPZv2XQSUbl9r_CPSXuqJI-jA/view?usp=drive_link"
    },
    {
         no : 11,
        "pengabdian": "Implementasi Sistem Informasi Manajemen Pembukuan Bisnis Berbasis Aplikasi Untuk Siswa SMK Swasta Marisi Medan, Sumatera Utara",
        "tingkat": "Mandiri ",
        "tahun": "Mei 2024",
        "link": "https://drive.google.com/file/d/1Q4BuVA5DUR5KbjfOimG2gpMaGNBDJRwY/view?usp=drive_link"
    },
    {
         no : 12,
        "pengabdian": "Alih Teknologi Ekonomi Sirkular Berbasis Inovasi Sosial Ekologis Pada Pengolahan Kopi Robusta Rakyat untuk Kesejahteraan Kelompok Tani Perkasa Kabupaten langkat ",
        "tingkat": "Eksternal (DIKTI) ",
        "tahun": "Juni 2024",
        "link": "https://drive.google.com/file/d/10glC3KlNedMhqOSnN89Kc4RdpGFfn7F3/view?usp=drive_link"
    },
    {
         no : 13,
        "pengabdian": "Pemberdayaan Kewirausahaan Berbasis Home Industry: Produksi Linsu sebagai Solusi Mendukung Ekonomi Keluarga di Masyarakat Sekitar kampus Universitas Satya Terra Bhinneka",
        "tingkat": "Mandiri",
        "tahun": "Nopember 2024 ",
        "link": "https://drive.google.com/file/d/1x-f34u78kt5BwqwXE-DIyrda4lrnQ0Qz/view?usp=drive_link"
    },
    {
         no : 14,
        "pengabdian": "Peningkatkan Pemahaman dan Kesadaran siswa SMK SPP Snakma Muhammadiyah Tanjung Anom Terhadap Dampak Pemanasan Global Melalui Metode Focus Group Discussion",
        "tingkat": "Mandiri ",
        "tahun": "Desember 2024",
        "link": "https://drive.google.com/file/d/1O-bGdOJsahi07J7lfvNMrbG_AwRjdHQb/view?usp=drive_link"
    },
    {
         no : 15,
        "pengabdian": "Implementasi Moderasi dan Inklusivitas Beragama untuk Membangun Gen-Z SMA Buddhis Bodhicitta Medan",
        "tingkat": "Mandiri ",
        "tahun": "Desember 2024",
        "link": "https://drive.google.com/file/d/1AG-fpnrsuRZm0Lt2wuTh6CictDbiET0U/view?usp=sharing"
    },
    {
         no : 16,
        "pengabdian": "Eco-Enzyme go to School: Upaya Pembentukan Karakter Peduli Lingkungan dan Kemandirian Berkelanjutan Melalui Pengolahan Sampah Organik Berbasis Eco-Enzyme di SMK SPP Snakma Muhammadiyah Tanjung Anom ",
        "tingkat": "Mandiri ",
        "tahun": "Desember 2024",
        "link": "https://drive.google.com/file/d/1WRHnRCyOjcJYTLFvPiD98wZETwrfuuet/view?usp=drive_link"
    },
    {
         no : 17,
        "pengabdian": "Pengenalan Seni Makrame dan Perawatan Bunga sebagai Ekonomi Kreatif untuk Ibu Rumah Tangga di Medan Sunggal Sumatera Utara ",
        "tingkat": "Mandiri ",
        "tahun": "April 2025",
        "link": "https://drive.google.com/file/d/1kQHufDy4RO-rG4C_zwhcYmrj5tAUq3Fe/view?usp=sharing"
    }
]
export default function PengabdianMasyarakat(){
        const [searchTerm, setSearchTerm] = useState('');
        const [filterYear, setFilterYear] = useState('');
        const [filteredData, setFilteredData] = useState(dataPengabdian);
    
        useEffect(() => {
            const filtered = dataPengabdian.filter(item => {
                const matchesSearch =
                  item.pengabdian.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.tingkat.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesYear = filterYear === '' || item.tahun.toString() === filterYear;
                return matchesSearch && matchesYear;
            });
            setFilteredData(filtered);
            }, [searchTerm, filterYear]);
    return(
        <>
        <Navbar/>
        <div className={classes.hero}>
                <h2>Pengabdian Dosen</h2>
                <p></p>
            </div>
            <main className={classes.container}>
            <section style={{ marginBottom: '2rem' }}>
              <div className={classes['section-title']}>
                <h2><i className="fas fa-seedling"></i> Pengabdian Dosen</h2>
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
                        <th>Judul Pengabdian</th>
                        <th>Tingkat</th>
                        <th>Tahun</th>
                        <th>Link Artikel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.no}</td>
                          <td>{item.pengabdian}</td>
                          <td>{item.tingkat}</td>
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