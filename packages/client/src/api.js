export default {
  libraries: {
    getLibraries: () =>
      fetch('/api/libraries')
        .then(res => res.json())
        .then(apiResponse => apiResponse.libraries)
  }
};
