class HelloService {
  constructor($http) {
    this.$http = $http;
  }
  getViewerName() {
    return this.$http.get('api/viewer/name');
  }
}

export const registerHelloService = (ngModule) => {
  ngModule.service('helloService', HelloService);
};
