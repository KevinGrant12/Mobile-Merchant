import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: .05rem solid var(--blueLight);
  border-color: ${props => props.cart ? "var(--orangeLight)" : "var(--blueLight)"};
  border-radius: 0.5rem;
  color: ${props => props.cart ? "var(--orangeLight)" : "var(--blueLight)"};
  cursor: pointer;
  padding: .2rem .5rem;
  margin: .2rem .5rem 0.2rem 0;
  transition: all .3s ease-in-out;
  &:hover {
    background: ${props => props.cart ? "var(--orangeLight)" : "var(--blueLight)"};
    color: white;
  }
  &:focus {
    outline: none;
  }
`