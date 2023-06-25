export const addNode = (newNode: object, currentNumber: string): object => {
  const payload = {
    ...newNode,
    currentNumber,
  };

  return {
    type: 'ADD_NODE',
    ...payload,
  };
};

export const addEdge = (ids: string[]): object => {
  return {
    type: 'ADD_EDGE',
    ids,
  };
};
