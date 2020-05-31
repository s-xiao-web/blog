import { map } from 'lodash';

const fileLodaer = () => {

  const files = require.context('./', true, /\.tsx$/);
  console.log(files.keys());

};

export default fileLodaer