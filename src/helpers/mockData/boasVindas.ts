// ============================================================
// BOAS VINDAS - Cổng văn hoá (3 nội dung) + ẢNH MINH HOẠ
// ============================================================

export const boasVindasData: { [key: string]: any } = {
  'YK7_XBAAACYAYEN3': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Boas Vindas 1 – Chào mừng đến Gallery', type: 'heading1', spans: [] }],
      capa: {
        url: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
        alt: 'Cổng vào triển lãm văn hoá'
      },
      conteudo: [
        {
          text: 'Đây là điểm khởi đầu hành trình khám phá tư tưởng Hồ Chí Minh về văn hoá và đạo đức.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7_dhAAACQAYEP0': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Boas Vindas 2 – Hành trình Gallery', type: 'heading1', spans: [] }],
      capa: {
        url: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=800',
        alt: 'Hành trình khám phá trong bảo tàng 3D'
      },
      conteudo: [
        {
          text: 'Bạn sẽ đi qua 7 không gian: từ lý luận đến thực tiễn, từ suy ngẫm đến hành động.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7_mhAAACQAYESU': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Boas Vindas 3 – Cách trải nghiệm', type: 'heading1', spans: [] }],
      capa: {
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
        alt: 'Không gian văn hoá – cảm nhận & suy ngẫm'
      },
      conteudo: [
        {
          text: 'Hãy dừng lại, đọc chậm và tự hỏi mình: tư tưởng này có ý nghĩa gì với cuộc sống hôm nay?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};
