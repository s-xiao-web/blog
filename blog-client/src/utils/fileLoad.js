import { map } from 'lodash';
const path = require('path');
const fileLoda = ({
  path: filePath = './',
  excludePath = ['./index.tsx'],
  files
}) => {

  const configRouter = {};

  map(files.keys(), key => {
    if ( excludePath.includes(key) ) return;
    const path = files(key).default;
    const fileKey = path.name || key.split('/')[1];
    configRouter[fileKey] = path;
  })
  
  return configRouter

}


export default fileLoda;