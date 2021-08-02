import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #212121;
  color: #fff;
  text-align: center;
  padding: 20px 0;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

  @media (min-width: 992px) {
    p {
      font-size: 16px;
    }
  }
`
