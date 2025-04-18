import { db } from '../../../db/db';
import { BakerBusiness } from '../../../db/types';

// Get all businesses
export const getAllBusinesses = async () => {
  try {
    const businesses = await db.selectFrom('baker_businesses').selectAll().execute();

    return businesses;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    throw error;
  }
};

// Create a new business
export const createBusiness = async (data: BakerBusiness) => {
  try {
    const newBusiness = await db.insertInto('baker_businesses').values(data);
    return newBusiness;
  } catch (error) {
    console.error('Error creating business:', error);
    throw error;
  }
};

// Get a business by ID
export const getBusinessById = async (id: string) => {
  try {
    const business = await db
      .selectFrom('baker_businesses')
      .selectAll()
      .where('baker_businesses.id', '=', id)
      .execute();

    return business;
  } catch (error) {
    console.error('Error fetching business by ID:', error);
    throw error;
  }
};

// Update a business by ID
export const updateBusiness = async (id: string, data: Partial<BakerBusiness>) => {
  try {
    const updatedBusiness = await db
      .updateTable('baker_businesses')
      .where('baker_businesses.id', '=', id)
      .set(data)
      .execute();
    return updatedBusiness;
  } catch (error) {
    console.error('Error updating business:', error);
    throw error;
  }
};

// // Delete a business by ID
// export const deleteBusiness = async (id: number) => {
//   try {
//     const deletedBusiness = await prisma.business.delete({
//       where: { id },
//     });
//     return deletedBusiness;
//   } catch (error) {
//     console.error('Error deleting business:', error);
//     throw error;
//   }
// };
