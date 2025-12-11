// ============================================================
// MOCK DATA INDEX - Tổng hợp tất cả dữ liệu từ các phòng
// ============================================================

import { instructionsData } from './instructions';
import { galleryMapData } from './galleryMap';
import { observatorioPopupData, observatorioContentData } from './observatorio';
import { exposicoesData } from './exposicoes';
import { ensaiosData } from './ensaios';
import { poesiasData } from './poesias';
import { contosENovelasData } from './contosENovelas';
import { infantisData } from './infantis';
import { boasVindasData } from './boasVindas';

// Re-export để các component khác có thể import trực tiếp
export { boasVindasData } from './boasVindas';

// Tổng hợp tất cả mock data
export const mockContentById: { [key: string]: any } = {
  ...instructionsData,
  ...galleryMapData,
  ...observatorioPopupData,
  ...observatorioContentData,
  ...exposicoesData,
  ...ensaiosData,
  ...poesiasData,
  ...contosENovelasData,
  ...infantisData,
  ...boasVindasData
};

// Mock function to get data by ID
export const getMockDataById = async (id: string): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('📦 getMockDataById for ID:', id);
      const itemData = mockContentById[id];
      if (itemData) {
        resolve({
          id: id,
          data: itemData.data
        });
      } else {
        console.error('❌ Mock data not found for ID:', id);
        resolve({
          id: id,
          data: {}
        });
      }
    }, 200);
  });
};

// Mock function to simulate Prismic Client.query
export const mockQuery = async (predicate: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('📦 mockQuery predicate:', predicate);

      // Check if querying by document.id
      if (predicate && predicate[1]) {
        const queryId = predicate[1];
        console.log('📦 Query by ID:', queryId);

        const itemData = mockContentById[queryId];
        if (itemData) {
          resolve({
            results: [
              {
                id: queryId,
                data: itemData.data
              }
            ]
          });
          return;
        }
      }

      // Check if querying by document.type for ensaios (covers)
      if (predicate && predicate[1] === 'ensaios') {
        console.log('📦 Query for ensaios covers');
        resolve({
          results: [
            {
              id: 'YK7cOxAAACMAX6YT',
              data: {
                titulo: [{ text: 'Ensaio 1 – Khái niệm văn hoá', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
                  alt: 'Khái niệm văn hoá'
                }
              }
            },
            {
              id: 'YK7cTBAAACQAX6Zi',
              data: {
                titulo: [{ text: 'Ensaio 2 – Nền văn hoá mới', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
                  alt: 'Nền văn hoá mới'
                }
              }
            },
            {
              id: 'YK7cYBAAACUAX6bF',
              data: {
                titulo: [{ text: 'Ensaio 3 – Văn hoá & nhiệm vụ cấp bách', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                  alt: 'Văn hoá & nhiệm vụ cấp bách'
                }
              }
            },
            {
              id: 'YK7ccRAAACMAX6cU',
              data: {
                titulo: [{ text: 'Ensaio 4 – Đời sống mới & đạo đức', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
                  alt: 'Đời sống mới'
                }
              }
            },
            {
              id: 'YK7cgxAAACQAX6do',
              data: {
                titulo: [{ text: 'Ensaio 5 – Giáo dục & văn nghệ', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
                  alt: 'Giáo dục & văn nghệ'
                }
              }
            },
            {
              id: 'YK7ckhAAACYAX6ez',
              data: {
                titulo: [{ text: 'Ensaio 6 – Thế hệ trẻ & tương lai', type: 'heading1', spans: [] }],
                capa: {
                  url: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=400',
                  alt: 'Thế hệ trẻ'
                }
              }
            }
          ]
        });
        return;
      }

      // Default: Return mock covers for exposicoes
      console.log('📦 Query for exposicoes covers (default)');
      resolve({
        results: [
          {
            id: 'YK8CYxAAACUAYFDH',
            data: {
              titulo: [{ text: 'Chiến dịch chống nạn mù chữ', type: 'heading1', spans: [] }],
              capa: {
                url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400',
                alt: 'Chống nạn mù chữ'
              }
            }
          },
          {
            id: 'YK8LaRAAACMAYHkL',
            data: {
              titulo: [{ text: 'Đời sống mới – Cần, Kiệm, Liêm, Chính', type: 'heading1', spans: [] }],
              capa: {
                url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400',
                alt: 'Đời sống mới'
              }
            }
          },
          {
            id: 'EXPO_003_NEW',
            data: {
              titulo: [{ text: 'Giáo dục, văn nghệ và thế hệ trẻ', type: 'heading1', spans: [] }],
              capa: {
                url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400',
                alt: 'Giáo dục & thanh niên'
              }
            }
          }
        ]
      });
    }, 300);
  });
};
