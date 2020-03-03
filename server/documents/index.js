module.exports = ({ name, image, streetAddress, city, state, zipCode, phone, email, employer1, role, description, languages }) => {
return `
    <!doctype html>
    <html> 
  <div style="border: 3px solid black;
              height: 1000px">
  <div style="display: flex;
               flex-direction: column;
               text-align:center">     
    <h2 style="">${name}'s Resume</h2>
    <img style="width: 10%;
                height: 10%;
                margin-left: 45%"
         src="${image}">
  </div>
      <body> 
        <div style="display: flex;
                    flex-direction: column;
                    text-align: center">
          <p style="text-align:center">${streetAddress} <br>${city}, ${state} ${zipCode} <br>${phone} <br><a href="mailto:${email}"> Email: ${email}</a>
          </p> 
        </div>
        <div style="display: flex;
                    flex-direction: column;
                    text-align: left;
                    margin-left: 15%;
                    margin-right: 15%">
          <p>Job History: <br> <strong>${employer1}</strong>: ${role} <br> ${description}</p> 
          <p>Programming Languages Known: ${languages}</p>
        </div>
      </body>
    </html>
    `;
};