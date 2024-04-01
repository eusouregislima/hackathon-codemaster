import styled from 'styled-components'

export const ContainerInfo = styled.div`
  width: 53rem;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    .info {
      display: flex;
      gap: 0.4rem;

      p {
        margin: 0;
      }
    }
  }

  div {
    background: #333333;
    border-radius: 99px;

    height: 15px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 760px) {
    width: 25rem;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme['purple-500']};
  margin: 0;
`
