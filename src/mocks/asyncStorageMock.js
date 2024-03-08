const mockAsyncStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  // Adicione outros métodos do AsyncStorage que você utiliza em seus testes
};

export default mockAsyncStorage;
