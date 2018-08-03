global.Materialize = {
  toast: jest.fn()
};

global.FileReader = () => ({
  readAsDataURL: () => {},
  onload: () => {},
  result: () => {},
});

global.$ = () => ({
  sideNav: () => {},
  material_select: () => {},
  change: () => {}
});

global.File = () => ({
});
