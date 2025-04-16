import DonghuaList from './DonghuaList';

export default function App() {
  return (
    <div style={styles.app}>
      <h1>Famous Donghua</h1>
      <DonghuaList />
    </div>
  );  
}

const styles = {
  app: {
    backgroundColor: '#20232a',
    color: '#61dafb',
    padding: '2rem',
    fontFamily: 'Arial'
  }
};