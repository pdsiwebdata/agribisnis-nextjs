import classes from './Footer.module.css'

export default function Footer(){
    return (
        <>
            <footer className={classes.footer}>
                <div className={classes['footer-container']}>
                    <div className={classes['footer-col']}>
                    <h3>Program Studi Agribisnis</h3>
                    <p>Fakultas Pertanian dan Kehutanan</p>
                    <p>Universitas Satya Terra Bhinneka</p>
                    <div className={classes['social-links']}>
                        <a href='https://www.instagram.com/agribisnis.stbhinneka/'><i className="fab fa-instagram"></i></a>
                        <a href='https://www.youtube.com/@ProdiAgribisnisSTBhinneka'><i className="fab fa-youtube"></i></a>
                    </div>
               </div>

                <div className={classes['footer-col']}>
                    <h3>Link Cepat</h3>
                    <ul className={classes['footer-links']}>
                        <li>
                            <a href='index.html'>Beranda</a>
                        </li>
                        <li>
                            <a href="profil.html">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="https://satyaterrabhinneka.ac.id/">ST Bhinneka</a>
                        </li>
                        <li>
                            <a href="berita.html">Berita & Kegiatan</a>
                        </li>
                        <li>
                            <a href="https://pmb.satyaterrabhinneka.ac.id/">Pendaftaran</a>
                        </li>
                    </ul>
                </div>

                <div className={classes['footer-col']}>
                    <h3>Informasi Akademik</h3>
                    <ul className={classes['footer-links']}>
                        <li>
                            <a href="https://pustaka.satyaterrabhinneka.ac.id/">Siakad</a>
                        </li>
                        <li>
                            <a href="https://lms.satyaterrabhinneka.ac.id/">LMS</a>
                        </li>
                        <li>
                            <a href="https://lpm.satyaterrabhinneka.ac.id/">Penjaminan Mutu</a>
                        </li>
                        <li>
                            <a href="https://lppm.satyaterrabhinneka.ac.id/">Penelitian & Pengabdian</a>
                        </li>
                        <li>
                            <a href="https://jurnal.satyaterrabhinneka.ac.id/">Jurnal Penelitian</a>
                        </li>
                    </ul>
                </div>

                <div className={`${classes['footer-col']} ${classes['contact-info']}`}>
                    <h3>Kontak Kami</h3>
                    <div style={{ display:"flex", alignItems:'center', gap:'12px', marginBottom:'12px' }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p style={{ margin:'0' }}>Jl.Sunggal Gg.Bakul Pekan 1 Sunggal Kec. Medan Sunggal, Sumatera Utara</p>
                    </div>
                    <div style={{ display:'flex',alignItems:'center', gap:'12px',marginBottom:'12px' }}>
                        <i className="fas fa-phone"></i>
                        <p style={{ margin: '0' }}>(021) 1234-5678</p>
                    </div>
                    <div style={{ display:'flex',alignItems:'center', gap:'12px',marginBottom:'12px' }}>
                        <i className="fas fa-envelope"></i>
                        <p style={{ margin:'0' }}>prodi.agribisnis@satyaterrabhinneka.ac.id</p>
                    </div>
                      <div style={{ display:'flex',alignItems:'center', gap:'12px',marginBottom:'12px' }}>
                        <i className="fas fa-clock"></i>
                        <p style={{ margin:'0' }}>Senin - Jumat: 09.00 - 17.00</p>                        <p style={{ margin:'0' }}>prodi.agribisnis@satyaterrabhinneka.ac.id</p>
                    </div>
                </div>

 </div>
                <div className={classes.subfooter}>
                    <p>&copy; 2025 Program Studi Agribisnis. Hak Cipta Dilindungi.</p>
                </div>
            </footer>
        </>
    )
}