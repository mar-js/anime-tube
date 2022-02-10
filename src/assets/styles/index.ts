import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-primary: 'Josefin Sans', sans-serif;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --color-violet: #9775ff;
    --color-violet-grey: #a29bbb;
    --color-violet-opacity: #a98ff8;
    --color-black: #212026;
    --color-black-opacity-primary: #21202633;
    --color-black-opacity-secondary: #212026e6;
    --color-white: #f1f1f1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;

    &::-webkit-scrollbar-track {
      background-color: var(--color-black-opacity-secondary);
    }

    &::-webkit-scrollbar {
      width: .8rem;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-violet);
      border-radius: .5rem;
    }

    body {
      font-family: var(--font-family-primary);
      background-color: var(--color-black);
      color: var(--color-white);

      a {
        text-decoration: none;
      }

      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .infinite-scroll-component__outerdiv,
      .infinite-scroll-component {
        width: 100%;
        height: 100%;
        text-align: center;
      }

      .lazy-load-image-background.blur.lazy-load-image-loaded {
        width: 100%;
        height: 100%;
      }
    }
  }



`
