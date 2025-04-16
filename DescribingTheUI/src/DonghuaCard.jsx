// DonghuaCard.js
import { getImageUrl } from './utils';

export default function DonghuaCard({ film }) {
  const isFamous = film.accomplishment.length > 10;

  return (
    <li style={styles.card}>
      <img
        src={getImageUrl(film)}
        alt={film.name}
        width={80}
        height={80}
        style={styles.avatar}
      />
      <div>
        <h2>{film.name} {isFamous && '🌟'}</h2>
        <p><b>{film.profession}</b></p>
        <p>Known for: {film.accomplishment}</p>
      </div>
    </li>
  );
}

const styles = {
  card: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    backgroundColor: '#282c34',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '10px',
  },
  avatar: {
    borderRadius: '50%',
  }
};
