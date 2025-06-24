import Navbar from '../components/navbar'
import classes from './ProfilLulusan.module.css'
import Footer from "../components/footer";

export default function ProfilLulusan() {
    return(
        <>
            <Navbar/>
             <div className={classes.hero}>
                <h2>Profil Lulusan</h2>
                <p></p>
            </div>
            <main className={classes.container}>
                <section>
                    <div className={classes['section-title']}>
                        <h2>
                             <i className="fas fa-graduation-cap"  style={{ color: 'var(--primary-color)', marginRight: '0.5rem',}}></i>
                            Profil Lulusan Program Studi Agribisnis
                        </h2>    
                         <p  style={{textAlign: 'justify',lineHeight: 1.8}}>
                            Lulusan Program Studi Agribisnis diharapkan menjadi insan profesional yang mampu mengelola, mengembangkan, dan
                            menginovasikan bisnis berbasis pertanian dan sumber daya alam secara berkelanjutan. Dengan bekal ilmu manajemen,
                            kewirausahaan, teknologi pertanian, dan komunikasi yang baik, lulusan siap bersaing di dunia kerja maupun
                            menciptakan lapangan pekerjaan sendiri.
                        </p>
                    </div>                    
                </section>    
                <section style={{ marginTop: '30px' }}>
                    <h3 style={{ marginBottom: "8px" }}>Kompetensi Lulusan</h3>
                    <ul style={{ lineHeight:" 1.8", listStyle:"none" }}>
                      <li><i className="fa fa-check-circle" style={{ color: "green", marginRight: "8px" }}></i> Mampu merancang dan menjalankan
                        usaha agriNamebisnis
                        berbasis tNameeknologi dan pasar.</li>
                      <li><i className="fa fa-check-circle" style={{ color: "green", marginRight: "8px" }}></i> Mampu melakukan analisis ekonomi
                        pertanian Namedan
                        kebijakan Nameagribisnis.</li>
                      <li><i className="fa fa-check-circle" style={{ color: "green", marginRight: "8px" }}></i> Terampil dalam manajemen
                        pemasaran,Name keuangan,
                        produksi dNamean sumber daya manusia di sektor agribisnis.</li>
                      <li><i className="fa fa-check-circle" style={{ color: "green", marginRight: "8px" }}></i> Berjiwa wirausaha dan mampu
                        menciptakaNamen inovasi di
                        bidang perNametanian dan agroindustri.</li>
                      <li><i className="fa fa-check-circle" style={{ color: "green", marginRight: "8px" }}></i> Memiliki kepekaan sosial dan
                        mampu memberdayakan
                        masyarakat tani.</li>
                    </ul>
                </section>
                <section style={{ marginTop:"30px" }}>
                    <h3 style={{ marginBottom: "8px" }}>Prospek Karir</h3>
                    <p style={{ textAlign:" justify", marginBottom:" 4px" }}>
                      Lulusan Agribisnis dapat bekerja sebagai:
                    </p>
                    <ul style={{ lineHeight:"1.8", listStyle: "none" }}>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> Wirausahawan Agribisnis</li>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> Konsultan Pertanian</li>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> Analis Pasar Komoditas Pertanian</li>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> Manajer Perusahaan Agribisnis</li>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> ASN (Penyuluh, Perencana, dll.)</li>
                      <li><i className="fa fa-briefcase" style={{ marginRight: "8px" }}></i> Akademisi dan Peneliti di bidang pertanian</li>
                    </ul>   
                </section>
                <section style={{ marginTop:"40px" }}>
                    <h3>Galeri Kegiatan Alumni dan Mahasiswa</h3>
                    <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',gap: '16px',marginTop: '20px'}} >
                        <img src="https://picsum.photos/id/73/500" class="top-img" alt="Lulusan Agribisnis 1"
                          style={{ width:" 100%", borderRadius: "8px" }} />
                        <img src="https://picsum.photos/id/66/500" class="top-img" alt="Lulusan Agribisnis 2"
                          style={{ width:" 100%", borderRadius: "8px" }}/>
                        <img src="https://picsum.photos/id/22/500" class="top-img" alt="Kegiatan Wirausaha Mahasiswa"
                          style={{ width:" 100%", borderRadius: "8px" }}/>
                        <img src="https://picsum.photos/id/53/500" class="top-img" alt="Kegiatan Penyuluhan Masyarakat"
                          style={{ width:" 100%", borderRadius: "8px" }}/>
                    </div>
                </section>
            </main>            
            <Footer/>
        </>
    )
}