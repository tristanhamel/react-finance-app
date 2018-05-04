import devRoot from './Root.dev';
import prodRoot from './Root.prod';

let Root;
if (process.env.NODE_ENV === 'production') {
  Root = prodRoot;
} else {
  Root = devRoot;
}

export default Root;
