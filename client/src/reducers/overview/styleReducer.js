import { GET_PRODUCT_STYLES } from '../../actions/overview/types';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case GET_PRODUCT_STYLES:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
