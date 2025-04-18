export const BreadSpecialties = {
    BREAD: "BREAD",
    VIENNOISERIES: "VIENNOISERIES",
    BRIOCHE: "BRIOCHE",
    CAKES: "CAKES",
    SNACKING: "SNACKING",
    COFFEE: "COFFEE",
    HORECA: "HORECA"
} as const;
export type BreadSpecialties = (typeof BreadSpecialties)[keyof typeof BreadSpecialties];
export const ProductOfferings = {
    ENJOY_ON_LOCATION: "ENJOY_ON_LOCATION",
    TAKE_AWAY: "TAKE_AWAY",
    DELIVERY: "DELIVERY"
} as const;
export type ProductOfferings = (typeof ProductOfferings)[keyof typeof ProductOfferings];
