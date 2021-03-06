import styled from "styled-components";

const Container = styled.div`
  .main-image {
      width: 80%;
      min-width: 400px;
      border-radius: 1em;
      cursor: pointer;
    }

    .shadow {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #image-slider {
      button {
        display: none;
      }
    }

    .modal {
      width: 40%;
      
      .top {
        text-align: right;
        width: 90%;

        .close {
          cursor: pointer;
        }
      }

      
      .content {
        text-align: center;

        .tumb {
          margin: 1em auto;
        }
      }
    }

    .tumb {
      display: flex;
      justify-content: space-between;
      width: 80%;
      min-width: 400px;
      margin-top: 1em;

      img {
        width: 22%;
        border-radius: 1em;
        cursor: pointer;

        &.selected,
        &:hover {
          opacity: .5;
        }
      }
    }

    @media only screen and (max-width: 1030px) {
      .main-image {
        width: 100%;
        border-radius: 0;
        min-width: auto;
      }

      #image-slider {
        position: relative;

        button {
          display: block;
          position: absolute;
          width: 50px;
          height: 50px;
          cursor: pointer;
          border-radius: 90%;
          border: none;
          background: ${ props => props.theme.white };
          z-index: 10;
          top: -200px;

          &.previous {
            left: 10px;
          }

          &.next {
            right: 10px;
          }
        }
      }

      .shadow,
      .tumb {
        display: none;
      }
    }
`;

export default Container;