import { map } from 'lodash';

interface ConfigRouter {
  BlogSearch?: React.FC,
  BlogProgress?: React.FC,
  BlogFooter?: React.FC,
  BlogHeader?: React.FC,
  BlogBaseLayout?: React.FC,
  [propName: string]: any
}

const requireTs:any = require;
const files = requireTs.context('./', true, /\.tsx$/);
const configRouter: ConfigRouter = {};

const excludePaeh = [
  './index.tsx',
  './BlogLogin/LoginContext.tsx',
  './BlogLogin/map.tsx',
];

map(files.keys(), key => {

  if ( excludePaeh.includes(key) ) return;

  const path = files(key).default;
  const fileKey = path.name || key.split('/')[1];
  configRouter[fileKey] = path;

})

export default configRouter;