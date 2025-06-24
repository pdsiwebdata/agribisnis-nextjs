import Navbar from "../components/navbar";
import classes from "./StrukturKurikulum.module.css";
import Footer from "../components/footer";

export default function StrukturKurikulum() {
    return (
        <>
         
            <Navbar />
        <div className={classes.hero}>
        <h2>Struktur Kurikulum</h2>
        <p></p>
        </div>
            <main className={classes.container}>
            <section className={classes.section}>
                <div className={classes['section-title']}>
                    <h2><i className="fas fa-seedling"></i> Kurikulum Program Studi Agribisnis</h2>
                </div>
            </section>
            <div className={classes.content}>
                <div className={classes['table-responsive']}>
                <table className={`${classes['table']} ${classes['table-striped']}
                ${classes['table-bordered']} ${classes['align-middle']}`}>    
                    <thead className={classes['thead']}>
                        <tr>
                            <th>No</th>
                <th>Kode MK</th>
                <th>Mata Kuliah (MK)</th>
                <th>Bobot SKS</th>
                <th>Jenis Mata Kuliah</th>
                        </tr>
                    </thead>
                     <tbody>
              <tr>
                <td colSpan="5" className={classes['semester-title']}>Semester 1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>UM2305</td>
                <td>Pancasila dan Kewarganegaraan</td>
                <td>4</td>
                <td>Wajib Nasional</td>
              </tr>
              <tr>
                <td>2</td>
                <td>EK2310</td>
                <td>Ilmu Ekonomi</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>PP2301</td>
                <td>Pertanian Modern</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>BI2301</td>
                <td>Bisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>SL2301</td>
                <td>Ilmu Sosial Dan Budaya Dasar</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>MN2307</td>
                <td>Manajemen Dan Organisasi</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>7</td>
                <td>SL2302</td>
                <td>Sosiologi Pertanian</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>8</td>
                <td>BI2320</td>
                <td>Sistem Agribisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 2</td>
              </tr>
              <tr>
                <td>1</td>
                <td>UM2306</td>
                <td>Pendidikan Untuk Pembangunan Berkelanjutan</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>EK2311</td>
                <td>Ekonomi Mikro</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>EK2312</td>
                <td>Ilmu Usahatani</td>
                <td>3</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>MN2305</td>
                <td>Manajemen Sumber Daya Manusia</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>AK2304</td>
                <td>Akuntansi Agribisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>MN2309</td>
                <td>Manajemen Perkebunan</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>7</td>
                <td>SL2303</td>
                <td>Koperasi dan Kelembagaan Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 3</td>
              </tr>
              <tr>
                <td>1</td>
                <td>UM2301</td>
                <td>Keberagaman</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>UM2303</td>
                <td>Inklusivitas dan Multikulturalisme</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>TP2301</td>
                <td>Klimatologi</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>TP2303</td>
                <td>Agronomi</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>MN2310</td>
                <td>Manajemen Produksi Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>EK2313</td>
                <td>Ekonomi Makro</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>7</td>
                <td>MN2301</td>
                <td>Kepemimpinan</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>UM2302</td>
                <td>Bahasa Indonesia</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>UM2309</td>
                <td>Bahasa Inggris Untuk Agribisnis</td>
                <td>2</td>
                <td>Wajib Nasional</td>
              </tr>
              <tr>
                <td>3</td>
                <td>UM2304</td>
                <td>Metodologi Penelitian</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>TP2302</td>
                <td>Ilmu Tanah</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>TP2304</td>
                <td>Perlindungan Tanaman</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>KW2319</td>
                <td>Kewirausahaan Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>7</td>
                <td>EK2314</td>
                <td>Ekonomi Produksi Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>BI2310</td>
                <td>Etika Agribisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BI2321</td>
                <td>Digitalisasi Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>KW2320</td>
                <td>Teknologi Hasil Pertanian</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>BI2322</td>
                <td>Strategi Pemasaran</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>BI2323</td>
                <td>Rantai Pasok Agribisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>EK2317</td>
                <td>Perbankan</td>
                <td>2</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td>7</td>
                <td>MN2311</td>
                <td>Manajemen Strategi</td>
                <td>2</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td>8</td>
                <td>PP2307</td>
                <td>Ekonomi Manajerial</td>
                <td>2</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td>9</td>
                <td>KW2321</td>
                <td>UMKM Agribisnis</td>
                <td>4</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td>10</td>
                <td>MN2319</td>
                <td>Manajemen Finansial</td>
                <td>4</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td>11</td>
                <td>BI2329</td>
                <td>Periklanan dan Promosi Penjualan</td>
                <td>4</td>
                <td>Pilihan</td>
              </tr>
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 6</td>
              </tr>
              <tr>
                <td>1</td>
                <td>EK2316</td>
                <td>Ekonometrika Pertanian</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BI2324</td>
                <td>Agribisnis Internasional</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BI2325</td>
                <td>Riset Operasi Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>UM2318</td>
                <td>Metodologi Kuantitatif Agribisnis</td>
                <td>2</td>
                <td>Wajib Nasional</td>
              </tr>
              <tr>
                <td>5</td>
                <td>BI2311</td>
                <td>Perilaku Konsumen Agribisnis</td>
                <td>2</td>
                <td>Wajib Nasional</td>
              </tr>
              <tr>
                <td>6</td>
                <td>BI2327</td>
                <td>Pelabelan dan Pengemasan Agribisnis</td>
                <td>2</td>
                <td>Wajib Nasional</td>
              </tr>
              <tr>
                <td>7</td>
                <td>PP2302</td>
                <td>Pemberdayaan Masyarakat Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr> 
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 7</td>
              </tr>
              <tr>
                <td>1</td>
                <td>EK2320</td>
                <td>Statistik Non Parametrik</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>2</td>
                <td>PP2303</td>
                <td>Perencanaan Pembangunan Wilayah Pertanian</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>3</td>
                <td>PP2304</td>
                <td>Studi Kelayakan Agribisnis</td>
                <td>4</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>4</td>
                <td>PP2305</td>
                <td>Pembangunan Pertanian Berkelanjutan</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>5</td>
                <td>PP2306</td>
                <td>Strategi Kebijakan Pertanian</td>
                <td>2</td>
                <td>Wajib</td>
              </tr>
              <tr>
                <td>6</td>
                <td>BI2328</td>
                <td>Risiko Agribisnis</td>
                <td>2</td>
                <td>Wajib</td>
              </tr> 
              <tr>
                <td colspan="5" className={classes['semester-title']}>Semester 8</td>
              </tr>
              <tr>
                <td>1</td>
                <td>KW2314</td>
                <td>Skripsi/Tugas Akhir</td>
                <td>6</td>
                <td>Wajib</td>
              </tr>
            </tbody>
                    </table>
                </div>
            </div>
            </main>
    <Footer/>

        </>


    );  
}