import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { CardDestaque } from "./index.styled";
import imagebanner from '../../banner.png'
import LazyImage2 from "../../components/image/lazyimage2";
import { NewTag } from "../../components/listitens/listitens.styled";
import {useNavigate} from 'react-router-dom'

const CarouselIndex = ({data}:{data:any}) => {

  const navigate = useNavigate();
  const redirectViewPage = (id:string,nome:string,desc:string) => {
    navigate(`/anuncio/${nome.split(' ').join('-')}_${desc.split(' ').join('-')} /${id}`);
}

    return (
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2600}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable={true}
        autoPlay
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      
      >
        {data ? (
        data.map((e: any) => (
                <CardDestaque key={e?.Id} onClick={() => redirectViewPage(e?.Id,e?.Name,e?.Description)}>
                <LazyImage2 src={e?.Images?.length >= 1 ? e?.Images[0]?.UrlImage : imagebanner} alt={e?.Description}/>
                  <h1>{e?.Name}</h1>
                  <h3>{e?.City}</h3>
                  <NewTag>Novo</NewTag>
                </CardDestaque>
              ))
            ) : (
              <h1 style={{textAlign:'center'}}>Os dados não estão disponíveis no momento.</h1>
            )}
        </Carousel>
    )
}

export default CarouselIndex;