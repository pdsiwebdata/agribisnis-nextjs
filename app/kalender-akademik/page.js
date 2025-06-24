import classes from "./KalenderAkademik.module.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer";
export default function KalenderAkademik() {
    return (
        <>
            <Navbar/>
            <div className={classes.hero}>
            <h2>Struktur Kurikulum</h2>
            <p></p>
            </div>
            <main className={classes.container}>
                <div className={classes['section-title']}>
                    <h2><i class="fas fa-calendar-days"></i> Kalender Akademik T.A 2024/2025</h2>
                </div>
                <div className={classes.content}>
                    <div className={classes['table-responsive']}>
                        <table className={`${classes['table']} ${classes['table-bordered']} ${classes['table-striped']} ${classes['align-middle']}`}>
                             <thead  className={classes['thead']}>
                        <tr>
                            <th>No</th>
                            <th>Kegiatan</th>
                            <th>Semester Ganjil</th>
                            <th>Semester Genap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Persiapan Awal Semester</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Batas Akhir Permohonan Pindah Waktu Kuliah</td>
                            <td>13 Juli 2024</td>
                            <td>25 Januari 2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Batas Akhir Permohonan Penundaan Kegiatan Akademik</td>
                            <td>13 Juli 2024</td>
                            <td>25 Januari 2025</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Konseling Pengambilan Mata Kuliah (Nonsemester dan Pindahan)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Registrasi Administrasi (Pembayaran Uang Kuliah)
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Termin I</td>
                            <td>1 s.d. 6 Juli 2024</td>
                            <td>6 s.d. 11 Januari 2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Termin II</td>
                            <td>14 s.d. 19 Oktober 2024 (Minggu 5 kuliah)</td>
                            <td>10 s.d. 15 Maret 2025 (Minggu 2 kuliah)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Termin III</td>
                            <td>25 s.d. 30 November 2024 (Minggu 10 kuliah)</td>
                            <td>12 s.d. 17 Mei 2025 (Minggu 9 kuliah)</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Registrasi Akademik</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pengisian Kartu Rencana Studi (KRS)</td>
                            <td>1 s.d. 3 Agustus 2024</td>
                            <td>10 s.d. 12 Februari 2025</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Merdeka Belajar – Kampus Merdeka (MBKM)</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Publikasi pendaftaran dan seleksi mahasiswa</td>
                            <td>-Mengikuti dari Dikti</td>
                            <td>-Mengikuti dari Dikti</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Kegiatan Orientasi Mahasiswa</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Orientasi mahasiswa baru</td>
                            <td>9 s.d. 14 September 2024</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Perkuliahan dan Ujian</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Perkuliahan Pra Ujian Tengah Semester (UTS)</td>
                            <td>17 September s.d. 2 November 2024</td>
                            <td>3 Maret s.d. 26 April 2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Batas Akhir Pengunggahan Soal UTS</td>
                            <td>13 Oktober 2024</td>
                            <td>30 Maret 2025</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Libur Persiapan UTS / Pengganti Kuliah Hari Libur / Besar</td>
                            <td>4 s.d. 9 November 2024</td>
                            <td>28 April s.d. 3 Mei 2025</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>UTS</td>
                            <td>11 s.d. 15 November 2024</td>
                            <td>5 s.d. 9 Mei 2025</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pendaftaran dan Pembayaran UTS Susulan</td>
                            <td>8 s.d. 16 November 2024</td>
                            <td>5 s.d. 10 Mei 2025</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>UTS Susulan</td>
                            <td>20 s.d. 22 November 2024</td>
                            <td>14 s.d. 17 Mei 2025</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Pengajuan Koreksi Nilai UTS</td>
                            <td>2 s.d. 4 Desember 2024</td>
                            <td>21 s.d. 23 Mei 2025</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Perkuliahan Pra Ujian Akhir Semester (UAS)</td>
                            <td>18 November 2024 s.d. 11 Januari 2025</td>
                            <td>12 Mei s.d. 28 Juni 2025</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Batas Akhir Pengunggahan Soal UAS</td>
                            <td>15 Desember 2024</td>
                            <td>8 Juni 2025</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Libur Persiapan UAS / Pengganti Kuliah Hari Libur / Besar</td>
                            <td>13 s.d. 18 Januari 2025</td>
                            <td>30 Juni s.d. 5 Juli 2025</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>UAS</td>
                            <td>20 s.d. 24 Januari 2025</td>
                            <td>7 s.d. 11 Juli 2025</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Pendaftaran dan Pembayaran UAS Susulan</td>
                            <td>17 Januari s.d. 25 Januari 2025</td>
                            <td>7 s.d. 12 Juli 2025</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>UAS Susulan</td>
                            <td>5 s.d. 8 Februari 2025</td>
                            <td>16 s.d. 19 Juli 2025</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Pengajuan Koreksi Nilai Tugas dan UAS</td>
                            <td>13 s.d. 15 Februari 2025</td>
                            <td>23 s.d. 25 Juli 2025</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Akhir Semester</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Evaluasi Proses Belajar Mengajar terhadap Dosen oleh Mahasiswa Pra UTS</td>
                            <td>28 Oktober s.d. 2 November 2024</td>
                            <td>21 s.d. 26 April 2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Evaluasi Proses Belajar Mengajar terhadap Dosen oleh Mahasiswa Pra UAS</td>
                            <td>13 s.d. 17 Januari 2025</td>
                            <td>23 s.d. 28 Juni 2025</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Evaluasi Kepuasan Layanan</td>
                            <td>13 s.d. 17 Januari 2025</td>
                            <td>23 s.d. 28 Juni 2025</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Pendaftaran dan Pembayaran Ujian Remedial Semester</td>
                            <td>17 s.d. 19 Februari 2025</td>
                            <td>4 s.d. 6 Agustus 2025</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Ujian Remedial Semester</td>
                            <td>24 s.d. 28 Februari 2025</td>
                            <td>13 s.d. 16 Agustus 2025</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pendaftaran dan Pembayaran Ujian Remedial Ulang</td>
                            <td>-</td>
                            <td>4 s.d. 6 Agustus 2025</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Ujian Remedial Ulang</td>
                            <td>-</td>
                            <td>13 s.d. 16 Agustus 2025</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Batas Akhir Pemrosesan Kartu Hasil Studi (KHS)</td>
                            <td>10 Maret 2025</td>
                            <td>26 Agustus 2025</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Tugas Akhir</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Permohonan Judul Tugas Akhir</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pembayaran Biaya Tugas Akhir</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Persetujuan Tinjauan Praujian Akhir (Dosen Pembimbing)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Pengajuan Tinjauan Praujian Akhir (Dosen Pembimbing)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Persetujuan Permohonan Ujian Akhir (Dosen Pembimbing)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pengajuan Permohonan Ujian Akhir (Mahasiswa)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Pelaksanaan Ujian Akhir</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Upacara Wisuda</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Batas Akhir Pendaftaran dan Pembayaran Biaya Wisuda</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pengambilan Toga</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Gladi Resik</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Pelaksanaan</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Tanggal Libur T.A. 2023/2024</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Hari Kemerdekaan Republik Indonesia</td>
                            <td>17 Agustus 2024</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Maulid Nabi Muhammad SAW</td>
                            <td>16-Sep-24</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hari Raya Natal</td>
                            <td>25 Desember 2024</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hari Raya Diwali</td>
                            <td>1-Nov-24</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pemilihan Kepala Daerah</td>
                            <td>27-Nov-24</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Hari Raya Natal 2024 dan Tahun Baru 2025 Masehi</td>
                            <td>24, 26-31 Desember 2024 s.d. 1 Januari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Tahun Baru 2025 Masehi</td>
                            <td>1 Januari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Isra Miraj Nabi Muhammad SAW</td>
                            <td>27 Januari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Tahun Baru Imlek</td>
                            <td>29 Januari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Hari Suci Nyepi</td>
                            <td>29 Maret 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Hari Raya Idul Fitri 1446 Hijriyah</td>
                            <td>1 - 2 April 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Wafat Isa Almasih</td>
                            <td>18-Apr-25</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Hari Paskah</td>
                            <td>20-Apr-25</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Hari Buruh Internasional</td>
                            <td>1 Mei 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Hari Raya Waisak 2569 BE</td>
                            <td>12 Mei 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Kenaikan Isa Almasih</td>
                            <td>29 Mei 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Hari Lahir Pancasila</td>
                            <td>1 Juni 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Hari Raya Idul Adha 1447 Hijriyah</td>
                            <td>7 Juni 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Tahun Baru Islam 1448 Hijriyah</td>
                            <td>27 Juni 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Hari Kemerdekaan Republik Indonesia</td>
                            <td>17 Agustus 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Maulid Nabi Muhammad SAW</td>
                            <td>5-Sep-25</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Hari Raya Natal</td>
                            <td>25 Desember 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="5" className={classes['semester-title']}>Cuti Bersama</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Tahun Baru 2025 Masehi</td>
                            <td>2 Januari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Tahun Baru Imlek 2576 Kongzili</td>
                            <td>28 Januari s.d. 2 Februari 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Menyambut Bulan Suci Ramadhan</td>
                            <td>1 Maret s.d. 3 Maret 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hari Raya Idul Fitri 1446 Hijriyah</td>
                            <td>31 Maret, 3-6 April 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Wafat Isa Almasih</td>
                            <td>17, 19 April 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Hari Raya Diwali</td>
                            <td>20 Oktober 2025</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Hari Raya Natal dan Tahun Baru 2026 Masehi</td>
                            <td>24, 26 - 31 Desember 2025</td>
                            <td></td>
                        </tr>
                    </tbody>
                        </table>

                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}