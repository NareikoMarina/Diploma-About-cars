export const getBrands = (state) => state.brandReducer.brand;
export const getBrandsLoadingStatus = (state) => state.brandReducer.isLoading;
export const getModels = (state) => state.modelReducer.model;
export const getModelsLoadingStatus = (state) => state.modelReducer.isLoading;
export const getCurrentSpec = (state) => state.carSpecReducer.currentSpec;
export const getCurrentSpecLoadingStatus = (state) =>
  state.carSpecReducer.isLoading;
