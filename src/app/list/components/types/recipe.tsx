import {StaticImport} from "next/dist/shared/lib/get-img-props";

export type Recipe = {
  name: string;
  description: string;
  imageSource: string | StaticImport;
  ingredients: string[];
}