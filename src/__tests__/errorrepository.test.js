import { ErrorRepository } from '../errorrepository';

describe('ErrorRepository', () => {
    let errorRepository;
  
    beforeEach(() => {
      errorRepository = new ErrorRepository();
      errorRepository.addError(404, 'Page not found');
      errorRepository.addError(500, 'Internal server error');
    });
  
    test('translate returns correct error description', () => {
      expect(errorRepository.translate(404)).toBe('Page not found');
      expect(errorRepository.translate(500)).toBe('Internal server error');
    });
  
    test('translate returns "Unknown error" for unknown code', () => {
      expect(errorRepository.translate(403)).toBe('Unknown error');
    });
  });