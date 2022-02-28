import { GlobalState } from './types/globalState';

export default function (initialState: GlobalState) {
  const { currentUser } = initialState;

  return {
    canAdmin: currentUser?.role?.id == 0,
  };
}
