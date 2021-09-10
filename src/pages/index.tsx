import CarCard from '../components/CarCard';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <CarCard
        brand='Lorem'
        model='Ipsum'
        price={999}
        main_image_url='https://imgur.com/eneoPe7.png'
      />
    </>
  );
}
