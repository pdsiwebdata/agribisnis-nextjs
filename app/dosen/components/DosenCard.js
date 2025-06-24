import Image from 'next/image';
import classes from './DosenCard.module.css';
export default function DosenCard({ nama, jabatan, image, profil }) {
    return (
    <div className={classes['dosen-card']}>
      <Image src={image} alt={nama} width={200} height={200} />
      <h3>{nama}</h3>
      <p>{jabatan}</p>
      <a href={profil} className={`${classes['btn-link']} ${classes['btn-profile']}`} target="_blank" rel="noopener noreferrer">
        Lihat Profil
      </a>
    </div>
  );
}