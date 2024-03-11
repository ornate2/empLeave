const cds = require('@sap/cds');

module.exports = cds.service.impl(async srv => {


  srv.on('READ', 'LoggedInUser', async (req) => {
    console.log('LoggedInUser read:', req.data);

    //const  [fullName="suraj", userRole="Employee"] = req.data;
    return {
      fullName: 'Suraj',
      userRole: 'Emp'
    };
    //console.log(req.data)
       
  });

});
