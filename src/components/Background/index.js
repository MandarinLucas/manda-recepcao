import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #ede2d5;
  z-index: -2;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Medium";
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
