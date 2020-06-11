import { map } from 'lodash';

interface ConfigRouter {
  BlogSearch?: Function,
  BlogProgress?: Function,
  BlogFooter?: Function,
  BlogHeader?: Function,
  BlogBaseLayout?: Function,
  BlogLogin?: Function,
  [propName: string]: any
}

const requireTs:any = require;
const files = requireTs.context('./', true, /\.tsx$/);
const configRouter: ConfigRouter = {};

map(files.keys(), key => {

  if (key === ('./index.tsx')) return;

  const path = files(key).default;
  const fileKey = path.name || key.split('/')[1];
  configRouter[fileKey] = path;

})

export default configRouter;