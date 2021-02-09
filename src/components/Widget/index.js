import styled from 'styled-components';
import InputMask from 'react-input-mask';

const Widget = styled.div`
  background-color: #ede2d5;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  /* p {
  align-items: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
} */
`;

Widget.Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .LogoMandarin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 6vh 0;
    z-index: 10;
    width: 300px;
    height: 70px;
  }

  h1 {
    z-index: 10;
    color: #757575;
    margin-bottom: 6vh;
  }
`;

Widget.Input = styled.input`
  z-index: 10;
  top: 0;
  background: white;
  padding: 2.6vh 2vw;
  margin: 0 0 2vh 0;
  font-size: 1.375em;
  border-radius: 0.5em;
  border: none;
  color: #333333;
  width: 70vw;
  height: 1vh;

    -webkit-box-shadow: ${(props) =>
      props.error ? 'inset 0px 0px 0px 5px red' : ''};
    -moz-box-shadow: ${(props) =>
      props.error ? 'inset 0px 0px 0px 5px red' : ''};
    box-shadow: ${(props) =>
      props.error ? 'inset 0px 0px 0px 5px red' : ''};

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    -moz-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

Widget.InputMask = styled(InputMask)`
  z-index: 10;
  top: 0;
  background: white;
  padding: 2.6vh 2vw;
  margin: 0 0 2vh 0;
  font-size: 1.375em;
  border-radius: 0.5em;
  border: none;
  color: #333333;
  width: 70vw;
  height: 1vh;

  &:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    -moz-box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
    box-shadow: inset 0px 0px 0px 5px rgba(4, 153, 109, 1);
  }

  &:disabled {
    opacity: 0.4;
  }
`;

Widget.P = styled.p`
  color: #333333;
  font-size: 1.125em;
  display: flex;
`;
Widget.Erro = styled.p`
  color: red;
  font-size: 1.125em;
  height: 25px;
  display: flex;
`;
Widget.Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Widget.Button = styled.button`
  display: flex;
  justify-content: center;
  background: #00c389;
  padding: 2vh 2vh;
  border-radius: 0.5em;
  color: white;
  box-shadow: 5px 8px 17px rgb(0 0 0 / 16%);
  width: 172px;
  font-size: 1.4em;
  margin: 0 0 4.9vh 0;
  align-self: center;
  z-index: 10;
  cursor: pointer;
  border-style: none;
  outline: 0;

  &:disabled {
    opacity: 0.4;
  }
`;

export default Widget;
