import styled from 'styled-components'

export const Container = styled.div`
  display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 5px;
  }
`
