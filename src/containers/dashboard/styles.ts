import styled from 'styled-components'

export const Aside = styled.aside`
  padding-top: 10rem;
  width: 150;
  // height: 92.5vh;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const ListItem = styled.li`
  margin-bottom: 40px;
  padding: 10px;
  :hover {
    background-color: black;
    border-radius: 50%;
    color: #fff;
  }
`
