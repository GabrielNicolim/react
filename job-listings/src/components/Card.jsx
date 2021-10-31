import styled from "styled-components";
import Photo from '../images/manage.svg';

const Card = ({ company, name, time, type, locale, tags, search }) => {
  return (
    <StyledCard>
      <div className='content'>
        <StyledPhoto src={ Photo }/>

        <div className='info'>
          <div className='company'>
            { company }
          </div>

          <div className='name'>
            { name }
          </div>

          <div className='about'>
            <span> 
              { time } 
            </span>
            <span>
              { type }
            </span>
            <span>
              { locale }
            </span>
          </div>
        </div>
      </div>

      <div className='tags'>
        {
          tags.map((tag, index) => {
            return(
              <Tag key={index} onClick={ () => search(tag) }>
                { tag }
              </Tag>
            );
          })
        }
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: white;
  width: 100%;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  .content {
    display: flex;
    font-size: 11px;

    .company, 
    .name {
      font-weight: 700;
      margin-bottom: .5em;
    }

    .company {
      color: ${ props => props.theme.darkCyan };
      text-align: left;
    }

    .name {
      color: ${ props => props.theme.veryDarkCyan };
    }

    .about {
      display: flex;
      justify-content: space-between;
      color: ${ props => props.theme.darkGrayishCyan  };
    }
  }
`;

const StyledPhoto = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 2em;
`;

const Tag = styled.span`
  padding: 10px;
  background: ${ props => props.theme.lightCyan };
  color: ${ props => props.theme.darkCyan };
  font-weight: 700;
  font-size: .7em;
  margin: 0 5px;  
  border-radius: 8px;

  &:hover {
    background: ${ props => props.theme.darkCyan };
    color: ${ props => props.theme.lightCyan };
    cursor: pointer;
    transition: 200ms;
  }
`;

export default Card; 
