import produce from 'immer';

const INITIAL_STATE = {
  opened: false,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@modal/OPEN': {
        draft.opened = true;
        break;
      }

      case '@modal/CLOSE': {
        draft.opened = false;
        break;
      }

      default:
        return state;
    }
  });
}
