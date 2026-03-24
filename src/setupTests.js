import "jest-canvas-mock";

jest.mock('colorthief', () => ({
  default: jest.fn().mockImplementation(() => ({
    getColor: jest.fn().mockResolvedValue([255, 255, 255]),
    getPalette: jest.fn().mockResolvedValue([[255, 255, 255]])
  }))
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
