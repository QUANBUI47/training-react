// Donghuaist.js
import DonghuaCard from './DonghuaCard';
import { donghuas } from './data';

export default function DonghuaList() {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {donghuas.map(film => (
        <DonghuaCard key={film.id} film={film} />
      ))}
    </ul>
  );
}
