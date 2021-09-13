import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;

  .swiper {
    display: flex;
    justify-content: flex-end;
  }

  .slide {
    width: 100px;
    height: 100px;
    background: #f00;
  }

  .swiper-slide-active {
    background: #0fe;
  }
`;

// .swiper
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .swiper {
//   margin-left: auto;
//   margin-right: auto;
// }
