import Prismic from '@prismicio/client';
import { getMockDataById, mockQuery } from './mockData';

const apiEndpoint = 'https://museu.prismic.io/api/v2';
const accessToken = process.env.REACT_APP_API_TOKEN;

// Use mock data if no access token is provided (DEMO MODE)
const useMockData = !accessToken || accessToken === 'your_prismic_access_token_here';

const PrismicClient = useMockData ? null : Prismic.client(apiEndpoint, { accessToken });

// Mock Client for demo mode
const MockClient = {
  getByID: async (id: string, options?: any) => {
    console.log('🎭 DEMO MODE: Loading mock data for ID:', id);
    return getMockDataById(id);
  },
  query: async (predicate: any, options?: any) => {
    console.log('🎭 DEMO MODE: Loading mock query data');
    return mockQuery(predicate);
  }
};

const Client: any = useMockData ? MockClient : PrismicClient;

if (useMockData) {
  console.log('🎭 Running in DEMO MODE - using mock data instead of Prismic CMS');
  console.log('💡 To use real CMS data, add your Prismic access token to .env file');
}

export default Client;