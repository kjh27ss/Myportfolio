import React from 'react'
import styled from 'styled-components'

const Categories = () => {
  return (
    // <Aldiv>
    //   <Ul>
    //     <Li>
    //       <Lia href="#">
    //         <Fdiv>
    //           <Fh1>WEB Design</Fh1>
    //           <Span>View projects
    //             <img src='../../assets/shared/Group5.png'></img>
    //           </Span>
    //         </Fdiv>
    //       </Lia>
    //     </Li>
    //   </Ul>
    // </Aldiv>
    <div></div>
  )
}

export default Categories

const Aldiv = styled.div`
  display:flex;
  text-align:left;
  flex-direction : column;
  margin:0 auto;
  max-width:1200px;
  min-height:64rem;
  justify-content:center;
  align-items:flex-start;
  border-radius:1.5rem;
  background-color:#e88069;
  border:none;
  
`;

const Ul = styled.ul`
  display:grid;
  grid-gap:2.4rem 3rem;
  gap:2.4rem 3rem;
  height:640px;
  list-style:none;
  border:1px solid #333;
  margin:12rem auto;
`;

const Li = styled.li`
  border-radius:1.5em;
  overflow:hidden;

`;

const Lia = styled.a`
  list-style:none;
`;

const Fdiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  position:absolute;
  inset:0px;
  box-sizing:border-box;
  margin:0px; 
`;

const Fh1 = styled.h1`
  font-size:4rem;
  margin-bottom:2.2rem;
`;

const Span = styled.span`

`;