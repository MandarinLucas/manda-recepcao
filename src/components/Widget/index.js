import styled from 'styled-components';

const Widget = styled.div`
/* margin-top:24px;
margin-bottom:24px;
background-color: #ede2d5;
border-radius: 4px;
overflow: hidden;

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
} */
`;

Widget.Body = styled.body`
    
`;

Widget.Header = styled.header`

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
    position: relative;
    z-index: 10;
    width: 300px;
    height: 70px;
  }
`;

Widget.Topic = styled.a`

`;

export default Widget;