import { getMockDataById, mockQuery } from './mockData';

// ALWAYS USE MOCK DATA - No API calls
const MockClient = {
  getByID: async (id: string, options?: any) => {
    console.log('📦 Loading local mock data for ID:', id);
    return getMockDataById(id);
  },
  query: async (predicate: any, options?: any) => {
    console.log('📦 Loading local mock query data');
    return mockQuery(predicate);
  }
};

const Client: any = MockClient;

console.log('📦 Running with LOCAL MOCK DATA ONLY - No API calls');
console.log('✏️ Edit src/helpers/mockData.ts to change content');

export default Client;