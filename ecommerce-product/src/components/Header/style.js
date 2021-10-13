import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  position: relative;

  .avatar {
    width: 50px;
    margin-left: 2em;
    border-radius: 90%;
    border: 2px solid white;

    &:hover {
      border: 2px solid ${ props => props.theme.orange };
      transition: 200ms;
      cursor: pointer;
    }
  }

  .left, 
  .right {
    display: flex;
    align-items: center;
  }
  
  .left { 
    .menu-responsive,  
    .sandwich {
      display: none;
    }

    .menu {
      button {
        margin-left: 4em;
      }
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: ${ props => props.theme.grayishBlue };
  }

  @media only screen and (max-width: 1030px) {
    padding: 1em;
 
    .right {
      width: 50%;
    }

    .right {
      justify-content: right;
    }
    .left {
      .sandwich {
        display: flex;
        margin-right: 1em;
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
        position: fixed;

        .menu-responsive {
          background: ${ props => props.theme.white };
          display: flex;
          flex-direction: column;
          width: 70%;
          height: 100vh;
          position: fixed;
          padding: 2em;
          max-width: 300px;

          .close {
            margin-bottom: 1em;
            cursor: pointer;
            display: flex;
          }
        }
      }

      .menu {
        display: none;
      }
    }
  }
`;

export default Container;