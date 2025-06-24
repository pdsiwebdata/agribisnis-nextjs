import Image from 'next/image';
import classes from './FasilitasCard.module.css';

export default function FasilitasCard({ jenis, luas, kapasitas, kondisi, imageUrl }) {
    return (
    <div className={classes['fasilitas-card']}>
      <Image src={imageUrl} alt={jenis} width={200} height={200} />
      <h3>{jenis}</h3>
      <p style={{ margin: 0 }}>Seluas {luas} ,<sup>2</sup></p>
      <p>Kapasitas: <strong>{kapasitas}</strong></p>
      <p style={{ backgroundColor: 'var(--primary-color)', 
        color: 'var(--light-text)', display: 'inline-block',
         padding: '4px 24px', marginTop: '1rem',padding:'0.5rem 2rem',
          borderRadius: '100px',fontSize:'1.1rem'}}> {kondisi}</p>
    </div>
  );
}