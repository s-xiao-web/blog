import lodaFiles from '@/utils/fileLoad';
const files = require.context( './', true, /\.tsx$/);

const components = lodaFiles({files});

export default components;