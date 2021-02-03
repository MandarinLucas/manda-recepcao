import styled from 'styled-components';
import Background from '../src/components/Background';
import BackgroundInputs from '../src/components/BackgroundInputs';
import Widget from '../src/components/Widget';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return(
    <Background />
  )
}
