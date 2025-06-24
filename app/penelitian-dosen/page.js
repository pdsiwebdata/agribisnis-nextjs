"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import classes from './PenelitianDosen.module.css'
import Footer from "../components/footer";

const penelitianList  = [
    {   
        no : 1,
        "judul": "Analisis Perwilayahan Komoditas Dan Peranan Perkebunan Kopi Arabika Rakyat Terhadap Pembangunan Wilayah Provinsi Sumatera Utara",
        "dosen": "Hendris syah putra, S.P., M.Si. dan Herlyna Novasari Siahaan, S.P., M.Sc",
        "tahun": "2023",
        "link": "https://ejournal.agribisnis.uho.ac.id/index.php/JIMDP/article/view/1139"
    },
    {
         "no" : 2,
        "judul": "Analisis Keberlanjutan Agribisnis Kopi Arabika Rakyat di Provinsi Sumatera Utara",
        "dosen": "M. Fariz Afif Hasibuan, S.P., M.Si, Ulidesi Siadari, Hendris Syah Putra, Vista Uli Sihombing",
        "tahun": "2023",
        "link": "https://jssm.umt.edu.my"
    },
    {
         "no" : 3,
        "judul": "Implementations of Corporate Farming and Development of Bean Cultivation at Max Yasa Cooperative District Purbalingga Central Java",
        "dosen": "Herlyna Novasari Siahaan, S.P., M.Sc",
        "tahun": "2023",
        "link": "https://ejournal.unib.ac.id/JASEB/article/view/27903/12551"
    },
    {
         "no" : 4,
        "judul": "Utilization of Coffee Commodity Agricultural Waste Through Partnership Towards Sustainable Production and Consumption",
        "dosen": "Herlyna Novasari Siahaan, Hendris Syah Putra, M. Fariz Afif Nasution",
        "tahun": "2023",
        "link": "https://jurnalfkip.unram.ac.id/index.php/JBT/article/view/6161/3545"
    },
    {
         "no" : 5,
        "judul": "ANALISIS PERSAINGAN EKSPOR BIJI KOPI DI PASAR INTERNASIONAL",
        "dosen": "M. Fariz Afif Hasibuan, Hendris syah putra",
        "tahun": "2024",
        "link": "https://jurnal.unprimdn.ac.id/index.php/Agriprimatech/article/view/4160"
    },
    {
         "no" : 6,
        "judul": "Social Life Cycle Assessment dari Sistem Manajemen Produksi Kopi Arabika Rakyat di Daerah Pedesaan: Evaluasi Regional Agribisnis Kopi Arabika di Sumatera Utara",
        "dosen": "Hendris Syah Putra",
        "tahun": "2024",
        "link": "https://ejournal.unipas.ac.id/index.php/Agro"
    },
    {
         "no" : 7,
        "judul": "Determinants of Spatial Market Integration of Garlic in Indonesia",
        "dosen": "Indah Kartika Sandra",
        "tahun": "2024",
        "link": "https://ejournal.unib.ac.id/JASEB/article/view/37242"
    },
    {
         "no" : 8,
        "judul": "Analisis Kandungan Nutrisi Pada Beras Galur Mutan M5 Padi (Oryza sativa L.) Lokal Sigupai Aceh Barat Daya",
        "dosen": "Safrizal",
        "tahun": "2024",
        "link": "https://journal.unej.ac.id/BIP/article/view/4074"
    },
    {
         "no" : 9,
        "judul": "Transmisi Asimetris Harga Tandan Buah Segar (TBS) Domestik dengan Harga Crude Palm Oil (CPO) Domestik",
        "dosen": "Mia Wananda Varwasih",
        "tahun": "2024",
        "link": "https://jurnal.unigal.ac.id/mimbaragribisnis/article/view/16794/pdf"
    },
    {
         "no" : 10,
        "judul": "Performance Analysis of the Village Unit Cooperative (KUD) “Suka Makmur” Using the Balanced Score Card",
        "dosen": "Herlyna Novasari Siahaan",
        "tahun": "2024",
        "link": "https://ejournal.umm.ac.id/index.php/agriecobis/article/view/35333"
    },
    {
         "no" : 11,
        "judul": "Effectiveness of Goat Manure and Liquid Organic Fertilizer in Increasing The Growth and Production of Cucumber (Cucumis sativus L.)",
        "dosen": "Safrizal",
        "tahun": "2024",
        "link": "https://ojs.uma.ac.id/index.php/agrotekma/article/view/13341"
    },
    {
         "no" : 12,
        "judul": "Strategi Pengembangan Teknologi Pertanian Padi Sawah di Langkat, Sumatera Utara",
        "dosen": "Rahmi Nofitasari",
        "tahun": "2024",
        "link": "https://ejournal.agribisnis.uho.ac.id/index.php/JIA/article/view/947"
    },
    {
         "no" : 13,
        "judul": "Analysis of Determinants and Factors Affecting Indonesian Soybean Import",
        "dosen": "Indah Adelina Siregar",
        "tahun": "2024",
        "link": "https://ejournal.agribisnis.uho.ac.id/index.php/JIA/article/view/1204"
    },
    {
         "no" : 14,
        "judul": "Factors Affecting Indonesian Natural Rubber Export Prices",
        "dosen": "Mia Wananda Varwasih",
        "tahun": "2024",
        "link": "https://ejournal.unib.ac.id/JASEB/article/view/34306"
    },
    {
         "no" : 15,
        "judul": "Analisis Pengaruh dan Efisiensi Ekonomi Usahatani Padi Sawah di Rimbo Kedui, Seluma, Bengkulu",
        "dosen": "Rahmi Nofitasari",
        "tahun": "2024",
        "link": "https://jurnal.unigal.ac.id/mimbaragribisnis/article/view/13496"
    },
    {
         "no" : 16,
        "judul": "The Impact of Indonesian Crude Oil Demand Prices on the Indonesian Biodiesel Industry",
        "dosen": "Indah Adelina Siregar",
        "tahun": "2024",
        "link": "https://jurnal.unigal.ac.id/mimbaragribisnis/article/view/15020"
    },
    {
         "no" : 17,
        "judul": "Strategi Peremajaan Sawit Rakyat dan Pengembangan Usaha KUD Sumber Makmur Menggunakan Pendekatan Business Model Canvas",
        "dosen": "Herlyna Novasari Siahaan",
        "tahun": "2024",
        "link": "https://jurnal.unigal.ac.id/mimbaragribisnis/article/view/13938"
    },
    {
         "no" : 18,
        "judul": "Pengaruh Pengaplikasian Eco-Enzyme Terhadap Pertumbuhan Jagung Glass Gem Corn (Zea Mays L.)",
        "dosen": "Mei Ryan Sandi",
        "tahun": "2024",
        "link": "https://jurnal.uisu.ac.id/index.php/be st/article/view/10262"
    },
    {
         "no" : 19,
        "judul": "Penilaian Keberlanjutan Sosial Kemitraan Usaha Perkebunan Kopi Rakyat dan Kaitannya terhadap Pencapaian Tujuan Pembangunan Berkelanjutan: Studi Kasus di Provinsi Sumatera Utara",
        "dosen": "Indah Kartika Sandra",
        "tahun": "2024",
        "link": "https://ejournal.unipas.ac.id/index.php/Agro"
    },
    {
         "no" : 20,
        "judul": "Motivasi “Hijau” sebagai Anteseden Pembelian Kopi Berlabel Keberlanjutan",
        "dosen": "Hendris Syah Putra",
        "tahun": "2024",
        "link": "https://ejournal.unib.ac.id/agrisep/"
    },
    {
         "no" : 21,
        "judul": "Padi dan Perubahan Iklim: Kajian Kerentanan serta Upaya Adaptasi di Kabupaten Deli Serdang",
        "dosen": "Herlyna Novasari Siahaan",
        "tahun": "2024",
        "link": "https://ejournal.unib.ac.id/index.php/agrisep/index"
    },
    {
         "no" : 22,
        "judul": "Analisis Food Supply Chain Network dan Perancangan Sistem Informasi Pemasaran Kelapa Sawit Rakyat di Kabupaten Langkat menggunakan Soft System Methodology",
        "dosen": "M. Fariz Afif Hasibuan",
        "tahun": "2024",
        "link": "https://journal.univetbantara.ac.id/index.php/agrisaintifika/article/download/5835/3166/22065"
    },
    {
         "no" : 23,
        "judul": "Decoding Arabica Coffee Purchase Intention: Exploring the Role of Product Origin Through Fuzzy-Set Qualitative Comparative Analysis",
        "dosen": "Hendris Syah Putra",
        "tahun": "2024",
        "link": "https://ieeexplore.ieee.org/abstract/document/10775358"
    },
    {
         "no" : 24,
        "judul": "Struktur Organisasi dan Sistem Manajemen Berbasis Mato di Rumah Makan Padang",
        "dosen": "Siti Mewah Sirega",
        "tahun": "2024",
        "link": "https://agroteksos.unram.ac.id/index.php/Agroteksos/article/view/1282"
    },
    {
         "no" : 25,
        "judul": "Strategi Pengembangan Sektor Unggulan Dalam Pembangunan Ekonomi di Simalungun, Sumatera Utara",
        "dosen": "Rahmi Nofitasar",
        "tahun": "2024",
        "link": "https://jurnal.unigal.ac.id/mimbaragribisnis/article/view/15680/pdf"
    },
    {
         "no" : 26,
        "judul": "COMMUNITY-BASED AGROTOURISM DEVELOPMENT IN SAMPE RAYA VILLAGE FOR SUSTAINABLE ECONOMIC GROWTH",
        "dosen": "Hendris Syah Putra",
        "tahun": "2024",
        "link": "https://gtic.poltekparmedan.ac.id/index.php/gtic/article/view/259"
    },
    {
         "no" : 27,
        "judul": "From Like Lights: Social Media’s Influence in Promoting Renewable Energy\ntowards Indonesian Students",
        "dosen": "Hendris Syah Putra",
        "tahun": "2024",
        "link": "https://drive.google.com/file/d/1VQQcUZWlHYOEHbGdDqFTNlMW6XGE-sSK/view?usp=drive_link"
    },
    {
         "no" : 28,
        "judul": "Sinergi Multi Pihak (Quadruple Helix) Dalam Membangun Entrepreneur Network Pada Kedai Minum Kopi Kota Medan",
        "dosen": "Julia Mardalisa",
        "tahun": "2025",
        "link": "https://jurnal.satyaterrabhinneka.ac.id/index.php/asa/article/view/29"
    },
    {
         "no" : 29,
        "judul": "Efektivitas Kinerja Penyuluh Pertanian dalam Era Teknologi : Dampaknya pada Produktivitas Padi Sawah di Kelurahan Rimbo Kedui, Seluma, Bengkulu.",
        "dosen": "Rahmi Nofitasari",
        "tahun": "2025",
        "link": "https://www.ejournalugj.com/index.php/JPA/article/view/9846"
    }
]

export default function Penelitian(){
    const [searchTerm, setSearchTerm] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [filteredData, setFilteredData] = useState(penelitianList);

    useEffect(() => {
        const filtered = penelitianList.filter(item => {
            const matchesSearch =
              item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.dosen.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesYear = filterYear === '' || item.tahun === filterYear;
            return matchesSearch && matchesYear;
        });
        setFilteredData(filtered);
        }, [searchTerm, filterYear]);
    return(
        <>
            <Navbar/>
            <div className={classes.hero}>
                <h2>Penelitian Dosen</h2>
                <p></p>
            </div>
             <main className={classes.container}>
            <section style={{ marginBottom: '2rem' }}>
              <div className={classes['section-title']}>
                <h2><i className="fas fa-seedling"></i> Penelitian Dosen</h2>
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
                        <th>Tahun</th>
                        <th>Link Artikel</th>
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