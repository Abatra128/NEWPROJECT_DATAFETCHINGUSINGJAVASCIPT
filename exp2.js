const fs = require('fs');
  
// Use readFile() method
fs.readFile('cu1.txt', 'utf-8', function(err, data) {
  
    // Write the data read from readeMe.txt
    // to a file writeMe.txt
    if( !err )
        fs.writeFile('cu2.txt', data, (err)=>{
            if( err ) {
                throw err;
            }
        });
    else
        throw err;
});