import React from 'react'
import styled from 'styled-components'
import HeadingInterface from '../../modules/HeadingInterface'



const Heading:React.FC<HeadingInterface> = ({
  children, variant, color
}) => {

  if(variant === 'h1'){
      return(
        <StyleH1 variant={variant} color={color}>
          {children}
        </StyleH1>
      );
  } else if (variant === 'h2'){
    return(
      <StyleH2 variant={variant} color={color}>
          {children}
        </StyleH2>

    );
  }else {
    return(
      <StyleH3 variant={variant} color={color}>
          {children}
        </StyleH3>
        );
    }
}

const StyleH1 = styled.h1<HeadingInterface>`
  color:${(props) => props.theme.colors.primary.light};
  font-size:2rem;
  font-weight:400;
  line-height:36px;

  @media(min-width:768px) {
    font-size:3rem;
    line-height:3rem;
  }
`;

const StyleH2 = styled.h2<HeadingInterface>`
  color:${(props) => props.color === "dark"
        ? props.theme.colors.primary.dark
        : props.theme.colors.primary.light
        };
  font-size:1.25rem;
  font-weight:500;
  letter-spacing:5px;
  line-height:26px;
  text-transform:uppercase;
`;

const StyleH3 = styled.h3<HeadingInterface>`
  color:${(props) => props.theme.colors.primary.dark};
  font-size:2rem;
  line-height:1.6rem;
  letter-spacing : 5px;
  text-transform:uppercase;
`;

export default Heading