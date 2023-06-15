import styled from 'styled-components'

export const Forms = styled.form`
  max-width: 547px;
  width: 100%;
  display: block;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 46px;

  p {
    justify-content: left;
    margin-bottom: 20px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;

  input,
  label {
    margin-right: 6px;
  }
`
export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #ccc;
  width: 100%;
  border: #ddd solid 1px;
  padding: 20px;
  margin-bottom: 20px;
`
export const Title = styled.h1`
  font-size: 30px;
  padding: 80px 0 40px 0px;
`
export const GroupLabel = styled.p`
  font-size: 26px;
  font-weight: bold;
  padding: 10px 0 10px 0px;
  text-align: left;
`
