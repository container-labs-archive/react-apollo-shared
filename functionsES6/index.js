import FireClass, {
  createWrapper,
  deleteWrapper,
  listWrapper,
  childListWrapper,
  singleWrapper,
  updateWrapper,
} from './graphql'

import {
  authenticated,
  checkPermission,
  requireAdmin,
  queryLoader,
  waitingOnData,
} from './hocs';

export default FireClass;

export {
  createWrapper,
  deleteWrapper,
  listWrapper,
  childListWrapper,
  singleWrapper,
  updateWrapper,

  authenticated,
  checkPermission,
  requireAdmin,
  queryLoader,
  waitingOnData,
}
