const htmlTemplateGenerator = (nome, quemvisitou, perfil) => {
  const html = `
  <!DOCTYPE html>
  <html xmlns='http://www.w3.org/1999/xhtml'>
  <head>
  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
  </head>
  <body leftmargin='0' topmargin='0' marginwidth='0' marginheight='0' style='background-color:#ede2d5;'>
  <table width='600' align='center' border='0' cellspacing='0' cellpadding='0' style='margin-top:20px;'>
    <tr>
      <td align='center' style='padding: 20px;'>
        <img src='http://recepcao.siteseguro.ws/images/logo.png' border='0' style='display:block' alt='' width='200px' height='45px'>
      </td>
    </tr>

    <tr>
      <td align='center' style='padding: 20px; color: #555555; font-family:Arial, sans-serif; font-size:20px;'>
        <strong>${quemvisitou}</strong> seu ${perfil} chegou!<br>
        Procure <strong style='font-size: 24px; color:#fc4c02;'> ${nome} </strong> na recepção.
      </td>
    </tr>

    <tr>
      <td align='center' style="color: #e0d1c3; font-family:Arial, sans-serif; font-size:12px;">
        ------------------------------------------------------------------------------------------------------------------------------------------
      </td>
    </tr>

    <tr>
      <td align='center' style="color: #555555;font-family:Arial, sans-serif; font-size:20px;">
        <strong>Lembrete:</strong> Você reservou a sala de reunião?
        <br>
        <br>
        <br>
        <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=".date('Ymd')."T".date('His', strtotime('+3 hours'))."Z%2F".date('Ymd')."T".date('His', strtotime('+4 hours'))."Z&text=".$titulo."&location=Mandarin" style='padding: 20px; color: #ffffff; background-color: #00C389; text-decoration: none;line-height:1; font-family:Arial, sans-serif; font-size:20px; line-height:1;'>
          <strong>RESERVE AGORA</strong>
        </a>
        <br>
        <br>
        <br>
        <br>
      </td>
    </tr>

    <tr>
      <td align='center' style='padding-top:20px;'>
        <img src='http://recepcao.siteseguro.ws/images/footer.png' border='0' style='display:block' alt='' width='590px' height='210px'>
      </td>
    </tr>  
  </table>
  </body>
  </html>
  `;

  return html;
};

export default htmlTemplateGenerator;