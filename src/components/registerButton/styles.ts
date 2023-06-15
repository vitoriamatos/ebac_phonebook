import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

export const Circle = styled(Link)`
  background-color: ${variables.darkBlue};
  color: ${variables.white};
  border-radius: 10px;
  padding: 5px;
  height: 70%;
  width: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
`
