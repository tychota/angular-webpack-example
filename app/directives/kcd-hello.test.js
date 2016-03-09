export default (ngModule) => {
  describe('kcd-hello', () => {
    beforeEach(window.module(ngModule.name));

    it('dummy test should pass', () =>{
      expect(true).to.be.true;
    })
  })
}
