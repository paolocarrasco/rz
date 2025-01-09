import {isProductionEnvironment} from "../../lib/application-environment-utils";

export const sanitizeImageSourceForProduction = (imageSource: string) => {
  return isProductionEnvironment() ? `/rz${imageSource}` : imageSource;
}