import { Link } from 'react-router-dom';
// import CarouselNovedades from '@/components/CarouselNovedades';
import { useMenu } from '@/context/MenuContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import SpecialItemButton from '@/components/SpecialItemButton';


export default function LoMejorPage() {
  const { specialItems } = useMenu();
  console.log(specialItems)

  return (
    <>
      <header className='lo-mejor-page'>
        <Link to='/'>
          <h2 className='lo-mejor-page page-title'>Platos estrella</h2>
        </Link>
      </header>
      <main className='animate-blink lo-mejor-page'>
        <p>
          Te presentamos los platos y bebidas que no solo son los favoritos de
          nuestros clientes, sino también nuestras recomendaciones especiales.
        </p>
        {specialItems.map((section, i) => (
          <ul className='section-menu' key={i}>
            <h3 className='special-title'>{section[0]}</h3>
            <hr />
            <Swiper
              slidesPerView={1.5}
              spaceBetween={30}
              speed={1000}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: true,
              // }}
              modules={[Autoplay, Navigation]}
              id='swiper-images'
            >
            {section[1].map(({ nombre, imagen_url_notion, id }, index) => (

                <SwiperSlide key={index}>
                  <SpecialItemButton title={nombre}  src={imagen_url_notion} to={id}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        ))}
      </main>
    </>
  );
}
