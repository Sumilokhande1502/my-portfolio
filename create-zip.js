import fs from 'fs';
import archiver from 'archiver';

// Create a file to stream archive data to
const output = fs.createWriteStream('portfolio-source-code.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('Portfolio source code zip created successfully!');
  console.log(archive.pointer() + ' total bytes');
  console.log('The zip file includes all source code except node_modules and build files.');
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
    console.warn('Warning:', err);
  } else {
    // throw error
    throw err;
  }
});

// Good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files and directories, excluding unwanted ones
archive.glob('**/*', {
  ignore: [
    'node_modules/**',
    'dist/**',
    '.git/**',
    'package-lock.json',
    '.replit*',
    'create-zip.js',
    'portfolio-source-code.zip'
  ]
});

// Finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();