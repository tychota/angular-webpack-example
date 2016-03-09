export default (ngModule) => {
  describe('Bundle hello related tests', () => {
    beforeEach(window.module(ngModule.name));

    it('dummy test should pass', () => {
      expect(true).to.be.true;
    });
  });
};
