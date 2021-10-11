import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4em 0;

  .left,
  .right {
    width: 40%;
  }

  .left {

    #main-image {
      width: 80%;
      border-radius: 1em;
    }
  }

  .right {
    h3 {
      color: ${ props => props.theme.orange };
      text-transform: uppercase;
      margin: 3em 0 1em 0;
      font-size: 1.2em;
    }

    h2 {
      font-size: 3em;
      margin-bottom: 1em;
    }

    p {
      color: ${ props => props.theme.darkGrayishBlue };
      font-size: 1.3em;
      margin-bottom: 1em;
    }

    .price {
      display: flex;
      align-items: center;
      font-weight: 700;

      .value {
        font-size: 2em;
        margin-right: .5em;
      }

      .discount {
        color: ${ props => props.theme.orange };
        background: ${ props => props.theme.paleOrange };
        padding: 5px 10px;
        border-radius: 8px;
      }
    }

    .old-price {
      color: ${ props => props.theme.grayishBlue };
      font-weight: 700;
      text-decoration: line-through;
      margin: 1em 0 2em 0;
    }
  }
`;

export default Container;