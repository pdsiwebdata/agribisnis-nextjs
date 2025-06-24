'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './Navbar.module.css';
function Navbar() {
     const pathname = usePathname();

     const isActivePenelitian =
  pathname === '/penelitian-dosen' ||
  pathname === '/pengabdian-masyarakat' ||
  pathname === '/publikasi-ilmiah';

  const isActiveKemahasiswaan =
  pathname === '/organisasi-mahasiswa' ||
  pathname === '/prestasi'

    const isActiveTentangKami =
  pathname === '/profil-program-studi' ||
  pathname === '/dosen' ||
  pathname === '/fasilitas'

 const isActiveAkademik =
  pathname === '/struktur-kurikulum' ||
  pathname === '/kalender-akademik' ||
  pathname === '/profil-lulusan'

     const isActiveBerita =
  pathname === '/berita'
  

  return (
    <>
    <header className={classes.header}>
        <div className={classes['header-container']}>
            <div className={classes.logo}>
            <img src="images/logo/logo.png" alt="Logo Agribisnis" />
            <div className={classes['logo-text']}>
                <h1>Program Studi Agribisnis</h1>
                <p>Fakultas Pertanian dan Kehutanan - Universitas Satya Terra Bhinneka</p>
            </div>
            </div>
        <button className={classes['mobile-menu-btn']}>
             <i className='fas fa-bars'></i>
        </button>
        </div>
    </header>    
    <nav className={classes.navbar}>
        <div className={classes['nav-container']}>
            <ul className={classes['main-menu']}>
                <li className={classes['nav-active']}>
                    <Link href="/beranda" className={`${classes['nav-link']} ${pathname === '/beranda' ? classes['active'] : ''}`}><i className='fa fa-home'></i> Beranda </Link>
                    </li>
                <li>
                    <Link href="" className={`${classes['nav-link']} ${isActiveTentangKami ? classes['active'] : ''}`}><i className='fa fa-university'></i> Tentang Kami</Link>
                    <ul className={classes.dropdown}>
                        <li><Link href="/profil-program-studi" >Profil Program Studi</Link></li>
                        <li><Link href="/dosen" >Dosen dan Tenaga Pengajar</Link></li>
                        <li><Link href="/fasilitas">Fasilitas</Link></li>
                        <li><Link href="https://pmb.satyaterrabhinneka.ac.id">Pendaftaran</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className={`${classes['nav-link']} ${isActiveAkademik ? classes['active'] : ''}`}><i className='fa fa-book'></i> Akademik</Link>
                    <ul className={classes.dropdown}>
                        <li><Link href="/struktur-kurikulum">Struktur Kurikulum</Link></li>
                        <li><Link href="/kalender-akademik" >Kalender Akademik</Link></li>
                        <li><Link href="/profil-lulusan" >Profil Lulusan</Link></li>
                        <li><Link href="https://jurnal.satyaterrabhinneka.ac.id/index.php/asa/index">Jurnal Prodi</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className={`${classes['nav-link']} ${isActiveBerita ? classes['active'] : ''}`}><i className='fa fa-newspaper'></i> Berita & Kegiatan</Link>
                    <ul className={classes.dropdown}>
                        <li><Link href="/berita">Berita Terkini</Link></li>
                        <li><Link href="">Kegiatan Mahasiswa</Link></li>
                        <li><Link href="#">Seminar / Webinar / Pelatihan</Link></li>
                        <li><Link href="#">Galer Foto & Video</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className={`${classes['nav-link']} ${isActiveKemahasiswaan ? classes['active'] : ''}`}><i className='fa fa-users'></i> Kemahasiswaan</Link>
                    <ul className={classes.dropdown}>
                        <li><Link href="/organisasi-mahasiswa" >Organisasi Mahasiswa</Link></li>
                        <li><Link href="/prestasi" >Prestasi Mahasiswa</Link></li>
                        <li><Link href="#">Beasiswa</Link></li>
                        <li><Link href="#">Alumni</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#" className={`${classes['nav-link']} ${isActivePenelitian ? classes['active'] : ''}`}><i className='fa fa-lightbulb'></i> Penelitian & Pengabdian</Link>
                    <ul className={classes.dropdown}>
                        <li><Link href="/penelitian-dosen" >Penelitian Dosen & Mahasiswa</Link></li>
                        <li><Link href="/pengabdian-masyarakat">Pengabdian Masyarakat</Link></li>
                        <li><Link href="/publikasi-ilmiah">Publikasi Ilmiah</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/kontak"><i className='fa fa-envelope'></i> Kontak</Link>
                </li>
            </ul>
        </div>
    </nav>
    </>

  );
}

export default Navbar;