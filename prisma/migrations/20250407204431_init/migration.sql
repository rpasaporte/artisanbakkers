-- CreateEnum
CREATE TYPE "BreadSpecialties" AS ENUM ('BREAD', 'VIENNOISERIES', 'BRIOCHE', 'CAKES', 'SNACKING', 'COFFEE', 'HORECA');

-- CreateEnum
CREATE TYPE "ProductOfferings" AS ENUM ('ENJOY_ON_LOCATION', 'TAKE_AWAY', 'DELIVERY');

-- CreateTable
CREATE TABLE "baker_businesses" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "businessAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "websiteOrSocialLinks" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "uniqueSellingPoints" TEXT NOT NULL,
    "breadSpecialties" "BreadSpecialties"[],
    "productOfferings" "ProductOfferings"[],
    "organicIngredients" BOOLEAN NOT NULL,
    "ingredientDetails" TEXT,

    CONSTRAINT "baker_businesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaContent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "bakerBusinessId" TEXT NOT NULL,

    CONSTRAINT "MediaContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "baker_businesses_email_key" ON "baker_businesses"("email");

-- AddForeignKey
ALTER TABLE "MediaContent" ADD CONSTRAINT "MediaContent_bakerBusinessId_fkey" FOREIGN KEY ("bakerBusinessId") REFERENCES "baker_businesses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
