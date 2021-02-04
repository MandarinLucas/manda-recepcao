import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #ede2d5;
  z-index: -2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Background.Image = styled.img`
  z-index: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: 0 auto;
  width: 1024px;
  height: 768px;
`;

export default Background;
