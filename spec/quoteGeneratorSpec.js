const {quoteGenerator} = require('../src/quoteGenerator.js')

describe('Quote generator', () => {
  let mockQuoteArray;

  describe('standard quote generator', () =>{
    beforeEach(() => {
      mockQuoteArray = [
        'I am a quote',
        'I am a quote'
      ];
    });

    it('will return a string', () => {
      expect(quoteGenerator(mockQuoteArray)).toBeInstanceOf(String);
    });

    it('will return a random quote', () => {
      expect(quoteGenerator(mockQuoteArray)).toEqual('I am a quote');
    });
  });

  describe('navbar', () => {
    
  });
});
