import styled from 'styled-components';

const BackgroundInputs = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ede2d5;
  z-index: -2;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Medium";
`;

BackgroundInputs.Image = styled.img`
  z-index: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

`;

export default BackgroundInputs;
