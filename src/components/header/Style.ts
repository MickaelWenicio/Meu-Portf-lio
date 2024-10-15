import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111;

  div:first-child{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;

    .navBar{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 40%;
      height: 100%;
    
      ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 2em;
      }
    }
  }

  
`

export default Container