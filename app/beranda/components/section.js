import classes from './Section.module.css';
import HeroCarousel from './HeroCarousel';
import GalleryCarousel from "./GalleryCarousel";
import Features from './Features';
// Hero Section Component
function Section() {
  return (
    <>
      <section className={classes.hero}>
          <div className={`${classes.swiper} ${classes['hero-slider']}`}>
              <div className={`${classes['swiper-wrapper']} ${classes['swiper-wrapper-hero']}`}>
                <HeroCarousel />
              </div>
          </div>
       
      </section>
      <section className={`${classes.welcome} ${classes.container}`}>
          <div className={classes['welcome-img']}>
            <img src="/images/sambutan/kaprodi.png" alt="Ketua Program Studi" className={classes['top-img']} />
          </div>
          <div className={classes['welcome-text']}>
              <h3>Sambutan Ketua Program Studi</h3>

              <p>Assalamu’alaikum warahmatullahi wabarakatuh,</p>

              <p>Salam sejahtera, Om Swastiastu, Namo Buddhaya, Salam Kebajikan, Horas.</p>
              <p>Program Studi Agribisnis ST Bhinneka hadir sebagai jawaban atas kebutuhan zaman akan profesional agribisnis

                yang tidak hanya menguasai aspek teknis pertanian, tetapi juga memiliki kemampuan manajerial, analisis

                ekonomi, dan pemahaman pasar yang baik. Dengan kurikulum yang terus diperbarui sesuai kebutuhan industri dan

                perkembangan ilmu pengetahuan, kami berkomitmen untuk menghasilkan lulusan yang kompeten, inovatif, dan

                adaptif terhadap tantangan global.</p>

              <p>Website resmi ini kami hadirkan sebagai jendela informasi dan komunikasi bagi seluruh civitas akademika,

                calon mahasiswa, alumni, serta mitra kerja sama. Melalui media ini, kami berharap masyarakat dapat mengakses

                informasi terkait visi dan misi, kegiatan akademik dan non-akademik, prestasi, serta berbagai peluang kerja

                sama yang dapat dikembangkan bersama.</p>
              <p>Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
              <p><strong>Salam Agribisnis</strong></p>
          </div>
      </section>
       <Features />
       <section className={classes['image-carousel']}></section>
        <div className={classes['section-title']}>
          <h2>Galeri Kegiatan</h2>
              <GalleryCarousel />
        </div>
    </>
  );
}

export default Section;
// This code defines a React component named Section that renders a section of a webpage with a title and a paragraph.