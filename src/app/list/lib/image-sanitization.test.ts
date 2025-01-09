import {sanitizeImageSourceForProduction} from "./image-sanitization";

const mockIsProductionEnvironment = jest.fn();

jest.mock('../../lib/application-environment-utils', () => ({
  isProductionEnvironment: jest.fn().mockImplementation(() => mockIsProductionEnvironment())
}));

describe('Image Sanitization', () => {
  beforeEach(() => {
    mockIsProductionEnvironment.mockReset();
  });

  describe('environment is production', () => {
    it('should add the prefix for the application in production', () => {
      // Arrange
      const imageSource = '/images/recipe.jpg';
      mockIsProductionEnvironment.mockReturnValue(true);

      // Act
      const sanitizedImageSource = sanitizeImageSourceForProduction(imageSource);

      // Assert
      expect(sanitizedImageSource).toEqual(`/rz/images/recipe.jpg`);
    });
  });

  describe('environment is not production', () => {
    it('should keep the original relative URL', () => {
      // Arrange
      const imageSource = '/images/recipe.jpg';
      mockIsProductionEnvironment.mockReturnValue(false);

      // Act
      const sanitizedImageSource = sanitizeImageSourceForProduction(imageSource);

      // Assert
      expect(sanitizedImageSource).toEqual(imageSource);
    });
  });
});