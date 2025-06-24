import classes from './BeritaKegiatan.module.css'
import Navbar from '@/app/components/navbar'
export default function BeritaKegiatan(){
    return(
        <>
            <Navbar/>
            <div className={classes.hero}>
                <h2>Kontak</h2>
                <p></p>
            </div>
            <section className={`${classes['news-evemts']} ${classes['container']}`}>
                <div className={classes[section-tile]}>\
                    <h2>Berita & Kegiatan Terbaru</h2>
                </div>
           
                <div className={classes['news-grid']}>
                    <div className={classes['news-card']}>
                        <div className={classes['new-img']}>
                            <img src="https://picsum.photos/id/17/500" alt="Berita 1"/>
                        </div>
                        <div className={classes['news-content']}>
                            <div className={classes['news-date']}><i className="fa fa-calendar-alt" style={{ marginRight: "4px" }}></i>10 Mei 2025</div>
                            <h3>Mahasiswa Agribisnis Raih Juara Kompetisi Kewirausahaan Nasional</h3>
                            <p>Tim mahasiswa Program Studi Agribisnis berhasil meraih juara pertama dalam kompetisi kewirausahaan
                            tingkat nasional dengan inovasi produk olahan hasil pertanian.</p>
                            <a href="berita-detail.html" className={classes['read-more']}>Baca Selengkapnya</a>
                        </div>
                    </div>
                    <div className={classes['news-card']}>
                        <div className={classes['news-img']}>
                            <img src="https://picsum.photos/id/17/500" alt="Berita 2"/>
                        </div>
                        <div className={classes['news-content']}>
                            <div className={classes['news-date']}><i className="fa fa-calendar-alt" style={{ marginRight: "4px" }}></i>10 Mei 2025</div>
                            <h3>Program Studi Agribisnis Menjalin Kerjasama dengan Perusahaan Multinasional</h3>
                            <p>Program Studi Agribisnis menandatangani MoU dengan perusahaan agribisnis multinasional untuk program
                                magang dan penelitian bersama.</p>
                            <a href="berita-detail.html" className={classes['read-more']}>Baca Selengkapnya</a>
                        </div>
                    </div>
                    <div className={classes['news-card']}>
                        <div className={classes['news-img']}>
                            <img src="https://picsum.photos/id/17/500" alt="Berita 2"/>
                        </div>
                        <div className={classes['news-content']}>
                            <div className={classes['news-date']}><i className="fa fa-calendar-alt" style={{ marginRight: "4px" }}></i>10 Mei 2025</div>
                            <h3>Seminar Internasional: Pertanian Berkelanjutan di Era Digital</h3>
                            <p>Program Studi Agribisnis menyelenggarakan seminar internasional dengan menghadirkan pakar pertanian dari
                                berbagai negara untuk membahas transformasi digital di sektor pertanian.</p>
                            <a href="berita-detail.html" className={classes['read-more']}>Baca Selengkapnya</a>
                        </div>
                    </div>
                    <div className={classes['announcement-all']}>
                        <a href="berita.html" className={classes['btn-more']}>
                            <span>Lihat Semua Berita</span>
                        <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className={classes.videoSection}>
                <div className={classes.sectionTitle}>
                  <h2>Video Profil Program Studi</h2>
                </div>
                <div className={classes.videoContainer}>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/UY3dPM46iPw"
                    title="COMPANY PROFILE PROGRAM STUDI AGRIBISNIS ST BHINNEKA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={classes.videoDescription}>
                  <h3>Kenali Lebih Dekat Program Studi Agribisnis</h3>
                  <p>
                    Video ini memberikan gambaran komprehensif tentang Program Studi Agribisnis, termasuk fasilitas
                    pembelajaran, kegiatan mahasiswa, dan wawancara dengan alumni sukses. Tonton untuk mengetahui lebih
                    lanjut tentang peluang karir di bidang agribisnis dan bagaimana program studi kami mempersiapkan
                    mahasiswa untuk sukses di dunia kerja.
                  </p>
                </div>
                <div className={classes.videoButtons}>
                    <Link href="https://www.youtube.com/@ProdiAgribisnisSTBhinneka" target="_blank" className={classes.btn}>
                      Lihat Video Lainnya
                    </Link>
                </div>
                
            <section/>
            <section className={`${classes.announcements} container`}>
      <div className={classes.sectionTitle}>
        <h2>Pengumuman Terkini</h2>
      </div>

      <div className={classes.announcementsContainer}>
        <div className={`${classes.announcementCard} ${classes.featured}`}>
          <div className={classes.cardBadge}>New</div>
          <div className={classes.announcementHeader}>
            <div className={classes.announcementIcon}>
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className={classes.announcementMeta}>
              <span className={classes.announcementCategory}>Akademik</span>
              <span className={classes.announcementDate}>11 Mei 2025</span>
            </div>
          </div>
          <h3>Penerimaan Mahasiswa Baru Tahun Akademik 2025/2026</h3>
          <p>
            Pendaftaran gelombang kedua Program Studi Agribisnis telah dibuka! Kesempatan terakhir untuk bergabung dengan program studi terbaik di bidang agribisnis.
          </p>
          <div className={classes.announcementCta}>
            <Link href="#" className={classes.btnOutlineDark}>Lihat Detail</Link>
            <span className={classes.countdown} data-deadline="2025-06-30">49 hari tersisa</span>
          </div>
        </div>

        <div className={classes.announcementsGrid}>
          {/* Card 1 */}
          <div className={classes.announcementCard}>
            <div className={classes.announcementHeader}>
              <div className={classes.announcementIcon}>
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className={classes.announcementMeta}>
                <span className={classes.announcementCategory}>Event</span>
                <span className={classes.announcementDate}>9 Mei 2025</span>
              </div>
            </div>
            <h3>Seminar Online: Digitalisasi Pertanian di Era 5.0</h3>
            <p>Webinar ekslusif dengan pembicara dari industri dan perguruan tinggi terkemuka. Daftarkan diri Anda sekarang!</p>
            <div className={classes.announcementTags}>
              <span>Webinar</span>
              <span>Gratis</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={classes.announcementCard}>
            <div className={classes.announcementHeader}>
              <div className={classes.announcementIcon}>
                <i className="fas fa-award"></i>
              </div>
              <div className={classes.announcementMeta}>
                <span className={classes.announcementCategory}>Beasiswa</span>
                <span className={classes.announcementDate}>7 Mei 2025</span>
              </div>
            </div>
            <h3>Program Beasiswa Prestasi Mahasiswa Agribisnis</h3>
            <p>Kesempatan beasiswa bagi mahasiswa aktif dengan IPK minimal 3.5. Pendaftaran dibuka sampai 30 Mei 2025.</p>
            <div className={classes.announcementTags}>
              <span>Beasiswa</span>
              <span>Prestasi</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={classes.announcementCard}>
            <div className={classes.announcementHeader}>
              <div className={classes.announcementIcon}>
                <i className="fas fa-book"></i>
              </div>
              <div className={classes.announcementMeta}>
                <span className={classes.announcementCategory}>Publikasi</span>
                <span className={classes.announcementDate}>5 Mei 2025</span>
              </div>
            </div>
            <h3>Call for Papers: Jurnal Agribisnis Terapan Vol. 12</h3>
            <p>Undangan untuk mengirimkan naskah penelitian untuk publikasi di Jurnal Agribisnis Terapan. Deadline: 15 Juni 2025.</p>
            <div className={classes.announcementTags}>
              <span>Jurnal</span>
              <span>Research</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className={classes.announcementCard}>
            <div className={classes.announcementHeader}>
              <div className={classes.announcementIcon}>
                <i className="fas fa-briefcase"></i>
              </div>
              <div className={classes.announcementMeta}>
                <span className={classes.announcementCategory}>Karir</span>
                <span className={classes.announcementDate}>2 Mei 2025</span>
              </div>
            </div>
            <h3>Job Fair Agribisnis 2025: Connecting Talents with Industries</h3>
            <p>Job fair tahunan yang menghubungkan mahasiswa dan alumni dengan perusahaan-perusahaan di bidang agribisnis.</p>
            <div className={classes.announcementTags}>
              <span>Karir</span>
              <span>Networking</span>
            </div>
          </div>
        </div>

        <div className={classes.announcementAll} style={{ marginTop: 0 }}>
          <Link href="#" className={classes.btnMore}>
            <span>Lihat Semua Pengumuman</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
    </section>
        </>
    )
}