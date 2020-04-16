export function showModal() {
  return {
    type: '@modal/OPEN',
  };
}

export function hideModal() {
  return {
    type: '@modal/CLOSE',
  };
}
