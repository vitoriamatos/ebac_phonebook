import styled from 'styled-components'
import { Button } from '../../styles'
import variables from '../../styles/variables'
import React, { useState } from 'react'

type Props = {
  show: boolean
}
export const Card = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 16px;
  margin-bottom: 32px;
  margin-top: 32px;
  border-left: 8px solid black;
  display: flex;
  border-radius: 20px;
  background-color: #fff;
  justify-content: space-around;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    .grid_1 {
      grid-area: header;
    }

    .grid_2 {
      grid-area: sidenav;
    }
    .grid_3 {
      grid-area: content;
    }
    .grid_4 {
      grid-area: footer;
      display: flex;
      justify-content: right;
    }
    display: grid;
    grid-template-areas:
      'header footer'
      'sidenav content';

    justify-items: space-betwen;
  }
`

export const Cell = styled.div`
  display: block;
`
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
  display: flex;

  span {
    color: #219abf;
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`
export const Number = styled.textarea`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
  display: flex;
`

export const Description = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  line-height: 24px;
  display: block;

  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ActionsBar = styled.div`
  width: 100px;
  display: block;
  span {
    overflow-y: hidden !important;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: right;
  }
  @media (max-width: 768px) {
  }
`

export const DeleteButton = styled(Button)`
  background-color: ${variables.red};
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
export const GroupLabel = styled.p`
  font-size: 26px;
  font-weight: bold;
  padding: 10px 0 10px 0px;
  text-align: left;
`
export const OptionsContainer = styled.div<Props>`
  background-color: #fff;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  justify-content: right;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`

export const OptionButton = styled.button`
  border: none;
  width: 100%;
  padding: 10px;
  float: right;
  font-size: 14px;
  text-align: left;
  display: block;
  &:hover {
    background-color: darkgray;
  }
`
export const MainButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  position: relative;
  margin-top: 20px;

  &:hover {
    background-color: #f1f1f1;
    padding: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    padding: 5px;
    height: 50%;
    &:hover {
      background-color: #f1f1f1;
      padding: 5px;
      height: 50%;
    }
  }
`

export const Select = styled.select`
  padding: 10px;
  margin-top: 20px;
`
