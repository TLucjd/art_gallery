// Mock data for demo mode - replaces Prismic CMS content

export const mockContentById: { [key: string]: any } = {
  // Instructions page
  'YagjLBIAACEAWFY3': {
    data: {
      slides: [
        {
          title: [{ text: 'Bem-vindo à Galeria Virtual 3D', type: 'heading1', spans: [] }],
          text: [
            { text: 'Explore nossa galeria de arte virtual em 3D.', type: 'paragraph', spans: [] },
            { text: 'Use as teclas W, A, S, D ou as setas para se mover.', type: 'paragraph', spans: [] },
            { text: 'Clique nos quadros para ver mais detalhes.', type: 'paragraph', spans: [] }
          ],
          image: { url: '' }
        },
        {
          title: [{ text: 'Navegação', type: 'heading1', spans: [] }],
          text: [
            { text: 'Use o mouse para olhar ao redor.', type: 'paragraph', spans: [] },
            { text: 'Clique nos ícones no mapa para se teletransportar.', type: 'paragraph', spans: [] }
          ],
          image: { url: '' }
        },
        {
          title: [{ text: 'Aproveite a Experiência', type: 'heading1', spans: [] }],
          text: [
            { text: 'Mergulhe na arte e cultura através desta experiência imersiva.', type: 'paragraph', spans: [] }
          ],
          image: { url: '' }
        }
      ]
    }
  },

  // Gallery Map texts
  'Yc4VtxMAACEAsMew': {
    data: {
      texto_bemvindo: [
        { text: 'Bem-vindo', type: 'heading1', spans: [] },
        { text: 'Início da sua jornada pela galeria virtual.', type: 'paragraph', spans: [] }
      ],
      texto_ensaios: [
        { text: 'Ensaios', type: 'heading1', spans: [] },
        { text: 'Coleção de ensaios artísticos e literários.', type: 'paragraph', spans: [] }
      ],
      texto_poesias: [
        { text: 'Poesias', type: 'heading1', spans: [] },
        { text: 'Explore nossa coleção de poesias.', type: 'paragraph', spans: [] }
      ],
      texto_exposicoes: [
        { text: 'Exposições', type: 'heading1', spans: [] },
        { text: 'Exposições especiais de arte contemporânea.', type: 'paragraph', spans: [] }
      ],
      texto_observatorio: [
        { text: 'Observatório', type: 'heading1', spans: [] },
        { text: 'Espaço para reflexão e observação.', type: 'paragraph', spans: [] }
      ],
      texto_contos_novelas: [
        { text: 'Contos e Novelas', type: 'heading1', spans: [] },
        { text: 'Literatura em prosa curta e longa.', type: 'paragraph', spans: [] }
      ],
      texto_infantis: [
        { text: 'Infantis', type: 'heading1', spans: [] },
        { text: 'Conteúdo dedicado ao público infantil.', type: 'paragraph', spans: [] }
      ]
    }
  },

  // Observatorio Popup
  'YYRTkhAAACIAf_Sd': {
    data: {
      popupslides: [
        {
          title: [{ text: 'Observatório Cultural', type: 'heading1', spans: [] }],
          description: [
            { text: 'Bem-vindo ao Observatório Cultural.', type: 'paragraph', spans: [] },
            { text: 'Um espaço dedicado à reflexão e contemplação artística.', type: 'paragraph', spans: [] }
          ]
        },
        {
          title: [{ text: 'Arte e Cultura', type: 'heading1', spans: [] }],
          description: [
            { text: 'Explore diferentes perspectivas da arte contemporânea.', type: 'paragraph', spans: [] }
          ]
        }
      ]
    }
  },

  // Exposicoes content examples
  'YK8CYxAAACUAYFDH': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Exposição 1 - Arte Moderna', type: 'heading1', spans: [] }],
      conteudo: [
        { text: 'Uma coleção especial de arte moderna.', type: 'paragraph', spans: [] },
        { text: 'Explore as obras e descubra novos horizontes artísticos.', type: 'paragraph', spans: [] }
      ]
    }
  },

  'YK8LaRAAACMAYHkL': {
    data: {
      tipo_de_conteudo: true,
      titulo: [{ text: 'Exposição 2 - Galeria de Imagens', type: 'heading1', spans: [] }],
      galeria: [
        { 
          imagem: { url: '' }, 
          legenda: [{ text: 'Obra 1', type: 'paragraph', spans: [] }],
          texto_mobile: [{ text: 'Descrição da Obra 1', type: 'paragraph', spans: [] }]
        },
        { 
          imagem: { url: '' }, 
          legenda: [{ text: 'Obra 2', type: 'paragraph', spans: [] }],
          texto_mobile: [{ text: 'Descrição da Obra 2', type: 'paragraph', spans: [] }]
        }
      ]
    }
  }
};

// Mock function to simulate Prismic Client.getByID
export const getMockDataById = async (id: string): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = mockContentById[id];
      if (data) {
        resolve(data);
      } else {
        resolve({
          data: {
            titulo: [{ text: 'Conteúdo de Demonstração', type: 'heading1', spans: [] }],
            conteudo: [
              { text: 'Este é um conteúdo de demonstração.', type: 'paragraph', spans: [] },
              { text: 'Modo DEMO - sem conexão com Prismic CMS.', type: 'paragraph', spans: [] }
            ]
          }
        });
      }
    }, 300);
  });
};

// Mock function to simulate Prismic Client.query
export const mockQuery = async (predicate: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        results: [
          {
            id: 'mock-id',
            data: {
              titulo: [{ text: 'Título de Demonstração', type: 'heading1', spans: [] }]
            }
          }
        ]
      });
    }, 300);
  });
};
