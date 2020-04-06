export function showModal(id) {
  return {
    type: '@modal/OPEN',
    payload: { id },
  };
}

export function hideModal(id) {
  return {
    type: '@modal/CLOSE',
    payload: { id },
  };
}
