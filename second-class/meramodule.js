module.exports.changepackage = ( ) => { 
    const fs = require('fs')

    fs.readFile('package.json', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const theData = JSON.parse(data);
        // theData.push( {'the_key' : 'the_value'} )
        
        theData.the_key = 'the_value';
        theData['the_key2'] = 'the_value2';
        console.log( theData );
        
        fs.writeFile('package.json', JSON.stringify(theData), err => {
            if (err) {
                console.error(err)
                return
            }
            })
    });
};