const fs = require('fs');
const fileToStream = process.argv[2];

fs.createReadStream(fileToStream).pipe(process.stdout)
