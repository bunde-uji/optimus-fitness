import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

const devEnvironment = process.env.NODE_ENV === 'development';


export default commerce;