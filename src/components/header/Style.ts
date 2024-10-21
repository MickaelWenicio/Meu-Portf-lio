import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 7em;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111;
  margin-right: 8px;

  div:first-child{
    width: var(--default-width);
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
        gap: 2.5em;

        li{
          font-weight: 500;
          color: var(--description);
          cursor: pointer;
          transition: all ease-in-out .2s;

          &:hover{
            color: #ffffff;
          }
        }
      }
    }
  }

  
`

export default Container