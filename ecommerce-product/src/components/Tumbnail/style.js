import styled from "styled-components";

const Container = styled.div`
  .main-image {
      width: 80%;
      border-radius: 1em;
      cursor: pointer;
    }

    .shadow {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
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
      margin-top: 1em;

      img {
        width: 20%;
        border-radius: 1em;
        cursor: pointer;

        &.selected,
        &:hover {
          opacity: .5;
        }
      }
    }
`;

export default Container;