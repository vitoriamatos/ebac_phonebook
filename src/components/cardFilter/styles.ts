import styled from 'styled-components'

type Props = {
  active: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${(props) =>
    props.active ? 'transaparent' : 'transparent'};
  color: ${(props) => (props.active ? '#1E90FF' : '#5e5e5e')};

  border-bottom: ${(props) =>
    props.active ? '5px solid #2f3640' : 'transparent'};
  color: ${(props) => (props.active ? '#2f3640' : '#5e5e5e')};
  font-weight: ${(props) => (props.active ? 'bold' : '300')};
  cursor: pointer;
  display: flex;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-right: 10px;
`

export const Label = styled.span`
  font-size: 18px;
`
