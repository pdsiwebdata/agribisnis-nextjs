import Navbar from "../components/navbar";
import classes from "./Berita.module.css"
import Footer from "../components/footer";
export default function Berita(){
    return(
        <>
            <Navbar/>
            <div className={classes.hero}>
                <h2> Kegiatan Terbaru</h2>
                <p></p>
            </div>
            <div className={classes.container}>
                <div className={classes['section-title']}>
                     <h2><i className="fas fa-newspaper" style={{color: 'var(--primary-color)',marginRight: '0.5rem',}}></i>Berita &
                     Kegiatan Terbaru</h2>
                </div>

                <section className={classes['news-events']}>
                    <div className={classes['new-grid']}>
                        
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}