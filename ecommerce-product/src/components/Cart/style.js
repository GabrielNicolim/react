import styled from "styled-components";

const Container = styled.div`
  position: relative;
  cursor: pointer;

  .counter {
    background: ${ props => props.theme.orange };
    color: ${ props => props.theme.white };
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 8px;
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: -15px;
  }

  #drop {
    background: ${ props => props.theme.white };
    z-index: 99;
    position: absolute;
    right: -100px;
    bottom: -220px;
    width: 400px;
    box-shadow: 2px 2px 10px ${ props => props.theme.grayishBlue };
    padding: 1em;

    h3 {
      padding: 0 0 1em 0;

      &::after {
        content: '';
        display: block;
        margin-top: 1em;
        height: 1px;
        background: ${ props => props.theme.grayishBlue };
      } 
    }

    .empty {
      text-align: center;
      color: ${ props => props.theme.veryDarkBlue };
      font-weight: 700;
      font-size: 1.1em;
      margin: 2em 0;
    }

    .content {
      padding: 0 1em;

      button {
        padding: 1em;
        border: none;
        color: ${ props => props.theme.white };
        background: ${ props => props.theme.orange };
        font-weight: 700;
        text-align: center;
        font-size: 1em;
        width: 100%;
        border-radius: 1em;
        margin-top: 1em;
        cursor: pointer;
      }
    }

    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .preview {
        border-radius: 8px;
        height: 60px;
      }

      .details {
        color: ${ props => props.theme.darkGrayishBlue };

        .name {
          margin-bottom: 10px;
        }

        .full-price {
          font-weight: 700;
          color: ${ props => props.theme.veryDarkBlue }
        }
      }
    }
  }

  @media only screen and (max-width: 1030px) {
    #drop {
      width: 340px;
      right: -100px;
    }
  }
`;

export default Container;
