import 'cross-fetch'; // For testing for library reducer

export default {
  libraries: {
    getLibraries: async () => {
      const res = await fetch('/api/libraries');
      const apiResponse = await res.json();
      return apiResponse.libraries;
    }
  }
};
