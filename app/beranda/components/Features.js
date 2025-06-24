import classes from './Features.module.css';

function Features() {
  return (
    <main>
        <section className={classes.features}>
            <div className={classes['section-title']} >
                <h2>Mengapa Memilih Agribisnis</h2>
            </div>
            <div className={classes['features-grid']}>
                <div className={classes['feature-item']}>
                    <div className={classes['feature-icon']}>
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Kurikulum Komprehensif</h3>
                     <p>Kurikulum yang dirancang sesuai dengan perkembangan industri dan kebutuhan pasar tenaga kerja di bidang
            agribisnis.</p>
                </div>
            <div className={classes['feature-item']}>
                <div className={classes['feature-icon']}>
                    <i className="fas fa-users"></i>
                </div>
                <h3>Dosen Berkualitas</h3>
                <p>Dosen berpengalaman dengan latar belakang pendidikan S2 dan S3 dari universitas terkemuka dalam dan luar
                    negeri.</p>
            </div>
            <div className={classes['feature-item']}>
                <div className={classes['feature-icon']}>
                    <i className="fas fa-flask"></i>
                </div>
                <h3>Fasilitas Lengkap</h3>
                <p>Didukung laboratorium modern, lahan praktikum, dan berbagai fasilitas penunjang pembelajaran berkualitas
                    tinggi.</p>
            </div>
            <div className={classes['feature-item']}>
                <div className={classes['feature-icon']}>
                    <i className="fas fa-handshake"></i>
                </div>
                <h3>Jaringan Kerja Sama</h3>
                <p>Kerja sama dengan industri, instansi pemerintah, dan lembaga internasional untuk program magang dan
                    penempatan kerja.</p>
            </div>
            </div>

        </section>
    </main>
  );
}   

export default Features;