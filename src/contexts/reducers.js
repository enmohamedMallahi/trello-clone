export function ListsReducer(state, action) {
  switch (action.type) {
    case 'add-item':
      return {
        items: [...state.items, { ...action.newItem }],
      };
    default:
      return state;
  }
}
