import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { BreadSpecialties, ProductOfferings } from "./enums";

export type BakerBusiness = {
    id: string;
    businessName: string;
    ownerName: string;
    businessAddress: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    websiteOrSocialLinks: string;
    shortDescription: string;
    uniqueSellingPoints: string;
    breadSpecialties: BreadSpecialties[];
    productOfferings: ProductOfferings[];
    organicIngredients: boolean;
    ingredientDetails: string | null;
};
export type MediaContent = {
    id: string;
    type: string;
    url: string;
    bakerBusinessId: string;
};
export type DB = {
    baker_businesses: BakerBusiness;
    MediaContent: MediaContent;
};
