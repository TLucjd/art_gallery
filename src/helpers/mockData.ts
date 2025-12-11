// Mock data for demo mode - replaces Prismic CMS content
// Tổ chức theo từng phòng để dễ quản lý

// ============================================================
// INSTRUCTIONS - Hướng dẫn Gallery
// ============================================================
const instructionsData: { [key: string]: any } = {
  'YagjLBIAACEAWFY3': {
    data: {
      slides: [
        {
          title: [
            { text: 'Chào mừng đến Gallery 3D – Hành trình Chương 6', type: 'heading1', spans: [] }
          ],
          text: [
            {
              text: 'Đây là không gian 3D giúp bạn khám phá Chương 6: Tư tưởng Hồ Chí Minh về văn hoá và đạo đức theo cách trực quan và sống động.',
              type: 'paragraph',
              spans: []
            },
            {
              text: 'Thay vì chỉ đọc lý thuyết, bạn có thể “đi dạo” qua từng phòng trưng bày, quan sát hình ảnh, đọc trích dẫn, trải nghiệm tình huống và tự liên hệ với bản thân.',
              type: 'paragraph',
              spans: []
            },
            {
              text: 'Toàn bộ gallery được thiết kế như một hành trình: từ bối cảnh – lý luận – thực tiễn – suy ngẫm – thiếu nhi – đời sống thường ngày – tới những trích dẫn kết tinh tư tưởng Hồ Chí Minh.',
              type: 'paragraph',
              spans: []
            }
          ],
          image: { url: '' }
        },
        {
          title: [
            { text: 'Hành trình các không gian', type: 'heading1', spans: [] }
          ],
          text: [
            {
              text: '• Bem-vindo – Cổng Văn Hoá: điểm khởi đầu, giới thiệu tổng quan Chương 6 và cách đi trong gallery.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Ensaios – Không gian lý luận: các bài luận, khái niệm văn hoá, năm điểm lớn xây dựng nền văn hoá mới, vai trò văn hoá trong cách mạng.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Exposições – Bảo tàng thị giác: trưng bày trực quan về chống nạn mù chữ, Đời sống mới, Cần – Kiệm – Liêm – Chính, giáo dục và văn nghệ.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Observatório – Đài quan sát tư tưởng: không gian suy ngẫm, đặt câu hỏi cho chính mình về văn hoá và đạo đức hôm nay.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Infantis – Góc thiếu nhi: nội dung về thiếu nhi, trường học mới, thư Bác gửi các cháu, thế hệ măng non.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Contos & Novelas – Chuyện đời thường: các tình huống đạo đức nhỏ gắn với Cần – Kiệm – Liêm – Chính trong đời sống sinh viên.',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Poesias – Phòng trích dẫn: những câu nói, trích dẫn đắt giá của Hồ Chí Minh, giúp tổng kết và khắc sâu tinh thần Chương 6.',
              type: 'paragraph',
              spans: []
            }
          ],
          image: { url: '' }
        },
        {
          title: [
            { text: 'Cách trải nghiệm Gallery', type: 'heading1', spans: [] }
          ],
          text: [
            {
              text: 'Hãy di chuyển theo vòng: Bem-vindo → Ensaios → Exposições → Observatório → Infantis → Contos & Novelas → Poesias để cảm nhận trọn vẹn logic của Chương 6.',
              type: 'paragraph',
              spans: []
            },
            {
              text: 'Khi mở một nội dung, hãy đọc chậm, liên hệ với thực tế cuộc sống và tự hỏi: tư tưởng văn hoá, đạo đức mà Bác nói có thể áp dụng thế nào vào hôm nay?',
              type: 'paragraph',
              spans: []
            },
            {
              text: 'Mục tiêu của gallery không chỉ là “ôn thi Chương 6” mà còn để bạn thực sự cảm nhận: văn hoá là nền tảng tinh thần của xã hội và là động lực phát triển đất nước.',
              type: 'paragraph',
              spans: []
            }
          ],
          image: { url: '' }
        }
      ]
    }
  }
};

// ============================================================
// GALLERY MAP - Menu chính / Cổng chọn phòng
// ============================================================
const galleryMapData: { [key: string]: any } = {
  'Yc4VtxMAACEAsMew': {
    data: {
      texto_bemvindo: [
        { text: 'Bem-vindo – Cổng Văn Hoá', type: 'heading1', spans: [] },
        {
          text: 'Đây là điểm khởi đầu hành trình của bạn trong Gallery 3D về Tư tưởng Hồ Chí Minh đối với văn hoá và đạo đức (Chương 6).',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Từ đây, bạn sẽ lần lượt bước qua: Ensaios (lý luận) → Exposições (thị giác) → Observatório (suy ngẫm) → Infantis (thiếu nhi) → Contos & Novelas (đời thường) → Poesias (trích dẫn kết tinh).',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_ensaios: [
        { text: 'Ensaios – Không gian lý luận', type: 'heading1', spans: [] },
        {
          text: 'Khu vực này tập hợp các bài viết, đoạn trích và giải thích ngắn về khái niệm văn hoá theo Hồ Chí Minh và những luận điểm nền tảng của Chương 6.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Tại đây, bạn sẽ gặp: định nghĩa văn hoá là “toàn bộ những sáng tạo và phát minh”, năm điểm lớn xây dựng nền văn hoá mới, và vai trò của văn hoá trong sự nghiệp kháng chiến – kiến quốc.',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_poesias: [
        { text: 'Poesias – Phòng trích dẫn', type: 'heading1', spans: [] },
        {
          text: 'Không gian này giới thiệu những câu nói, khẩu hiệu, trích dẫn cô đọng và giàu cảm xúc của Hồ Chí Minh về văn hoá, đạo đức, giáo dục và thế hệ trẻ.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Đây cũng là điểm kết thúc hành trình – nơi người xem dừng lại, đọc chậm từng câu và “mang theo” một thông điệp cho bản thân sau khi rời gallery.',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_exposicoes: [
        { text: 'Exposições – Bảo tàng thị giác', type: 'heading1', spans: [] },
        {
          text: 'Khu trưng bày hình ảnh và infographic về những mảng tiêu biểu của Chương 6, giúp lý luận trở nên trực quan, dễ cảm nhận.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Tại đây, bạn sẽ thấy: chiến dịch chống nạn mù chữ, phong trào Đời sống mới, Cần – Kiệm – Liêm – Chính, giáo dục mới, văn nghệ và thanh niên – những trụ cột của nền văn hoá mới.',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_observatorio: [
        { text: 'Observatório – Đài quan sát tư tưởng', type: 'heading1', spans: [] },
        {
          text: 'Đây là không gian để bạn tạm dừng sau phần trưng bày thị giác, nhìn lại bản thân và đời sống xung quanh dưới ánh sáng tư tưởng Hồ Chí Minh.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Bạn sẽ gặp những câu hỏi gợi mở về: văn hoá là nền tảng tinh thần, ý nghĩa Cần – Kiệm – Liêm – Chính hôm nay, và trách nhiệm cá nhân trong việc xây dựng đời sống mới.',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_contos_novelas: [
        { text: 'Contos & Novelas – Chuyện đời thường', type: 'heading1', spans: [] },
        {
          text: 'Không gian này kể lại những câu chuyện và tình huống rất đời thường, nhưng được soi dưới lăng kính đạo đức cách mạng.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Qua mỗi câu chuyện, bạn sẽ thấy tư tưởng về Cần – Kiệm – Liêm – Chính, chống lãng phí, chống chủ nghĩa cá nhân… xuất hiện trong những lựa chọn nhỏ của sinh viên, cán bộ trẻ, người bình thường.',
          type: 'paragraph',
          spans: []
        }
      ],
      texto_infantis: [
        { text: 'Infantis – Góc thiếu nhi & măng non', type: 'heading1', spans: [] },
        {
          text: 'Phòng này dành cho nội dung liên quan đến thiếu nhi và thế hệ trẻ trong tư tưởng Hồ Chí Minh về văn hoá và đạo đức.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Bạn sẽ thấy hình ảnh và trích đoạn từ thư Bác gửi thiếu nhi, trường học mới, vai trò của thầy cô và ý nghĩa giáo dục toàn diện đối với “tiểu chủ nhân” của đất nước.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};

// ============================================================
// OBSERVATORIO - Đài quan sát / Popup suy ngẫm
// ============================================================
const observatorioPopupData: { [key: string]: any } = {
  'YYRTkhAAACIAf_Sd': {
    data: {
      popupslides: [
        {
          title: [{ text: 'Observatório – Đài quan sát tư tưởng', type: 'heading1', spans: [] }],
          description: [
            {
              text: 'Chào mừng bạn đến với Observatório – không gian lặng để tạm dừng sau các khu trưng bày và suy nghĩ về văn hoá, đạo đức theo tinh thần Chương 6.',
              type: 'paragraph',
              spans: []
            },
            {
              text: 'Tại đây, bạn không chỉ “xem” nội dung mà được khuyến khích đối thoại với chính mình, xem mình đang đứng ở đâu trong đời sống văn hoá hôm nay.',
              type: 'paragraph',
              spans: []
            }
          ]
        },
        {
          title: [{ text: 'Tự hỏi chính mình', type: 'heading1', spans: [] }],
          description: [
            {
              text: '• Với bạn, “văn hoá là nền tảng tinh thần của xã hội” có nghĩa gì trong lựa chọn học tập, làm việc, giải trí hằng ngày?',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Bạn đã từng đối mặt với tình huống phải chọn giữa lợi ích riêng và lợi ích chung? Khi đó, Cần – Kiệm – Liêm – Chính đã được bạn áp dụng như thế nào?',
              type: 'paragraph',
              spans: []
            },
            {
              text: '• Nếu thiết kế một hoạt động “Đời sống mới” cho lớp hoặc trường, bạn sẽ làm gì để thay đổi một thói quen chưa tốt trong môi trường xung quanh?',
              type: 'paragraph',
              spans: []
            }
          ]
        }
      ]
    }
  }
};

const observatorioContentData: { [key: string]: any } = {
  'YWoVlhEAACQAky7U': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 1 – Văn hoá là nền tảng tinh thần', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Văn hoá không chỉ là nghệ thuật, lễ hội mà là toàn bộ đời sống tinh thần của xã hội, ảnh hưởng đến cách suy nghĩ, cảm nhận và hành động của mỗi người.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn có đang sống theo những giá trị văn hoá mà bạn tôn trọng? Hay chỉ biết nói mà không thực hiện?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YWoV4REAACUAkzAo': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 2 – Cần – Kiệm – Liêm – Chính hôm nay', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Trong thời đại tiêu dùng, cạnh tranh, bốn phẩm chất này vẫn là thước đo chuẩn mực cho người có đạo đức.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn có sử dụng tài nguyên chung một cách lãng phí? Có trung thực trong từng việc nhỏ? Có đặt lợi ích chung lên trên lợi ích riêng?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YWoV_hEAACMAkzCs': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 3 – Trách nhiệm cá nhân với đời sống mới', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Đời sống mới không phải việc của Nhà nước hoặc ai đó, mà bắt đầu từ chính bạn: thay đổi thói quen nhỏ, cư xử đúng mực, góp phần xây dựng môi trường văn minh.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn đã làm gì để cải thiện môi trường sống xung quanh, dù chỉ là việc nhỏ như giữ gìn vệ sinh, nói lời tử tế?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YWoWIxEAACQAkzFQ': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 4 – Văn hoá trong giáo dục', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Giáo dục không chỉ là học kiến thức mà còn là học cách sống, cách cư xử, cách yêu thương và trách nhiệm với cộng đồng.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn đi học để làm gì? Để lấy bằng, hay để thực sự trở thành người có ích cho xã hội?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YWoWQhEAACYAkzHi': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 5 – Chống chủ nghĩa cá nhân', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Chủ nghĩa cá nhân làm con người chỉ nghĩ cho mình, quên đi trách nhiệm với tập thể, dẫn đến sự tha hoá và mất đoàn kết.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn có thường xuyên đặt lợi ích cá nhân lên trên lợi ích chung? Có thờ ơ với khó khăn của người xung quanh?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YWoWXREAACYAkzJa': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 6 – Vai trò của thanh niên', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Thanh niên là lực lượng xung kích trong xây dựng nền văn hoá mới, có trách nhiệm thay đổi bản thân và ảnh hưởng tích cực đến môi trường xung quanh.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Với tư cách là sinh viên, bạn đang làm gì để góp phần vào nền văn hoá mới mà Hồ Chí Minh mong muốn?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },
  'YYWmZxAAACMAhbCx': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Observatório 7 – Văn hoá soi đường cho quốc dân đi', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Văn hoá là ánh sáng định hướng cho sự phát triển của cả cá nhân và dân tộc. Không có văn hoá đúng đắn, con người sẽ mất phương hướng.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hãy tự hỏi: Bạn có đang sống theo những giá trị văn hoá đúng đắn, hay đang theo đuổi những xu hướng trái với đạo đức và nhân văn?',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};

// ============================================================
// EXPOSICOES - Bảo tàng thị giác
// ============================================================
const exposicoesData: { [key: string]: any } = {
  'YK8CYxAAACUAYFDH': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Chiến dịch chống nạn mù chữ', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Ngay sau Cách mạng Tháng Tám, Hồ Chí Minh xác định chống nạn mù chữ là một trong những nhiệm vụ cấp bách nhất của Nhà nước mới.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Khẩu hiệu “Một dân tộc dốt là một dân tộc yếu” cho thấy văn hoá và giáo dục là điều kiện để giữ vững độc lập dân tộc và xây dựng đất nước phát triển.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK8LaRAAACMAYHkL': {
    data: {
      tipo_de_conteudo: true,
      titulo: [{ text: 'Đời sống mới – Cần, Kiệm, Liêm, Chính', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800', alt: 'Đời sống mới' },
          legenda: [
            {
              text: 'Đời sống mới: bỏ thói xấu, xây thói quen tốt trong lao động, sinh hoạt, quan hệ giữa người với người.',
              type: 'paragraph',
              spans: []
            }
          ],
          texto_mobile: [
            {
              text: 'Hồ Chí Minh kêu gọi xây dựng đời sống mới với bốn chuẩn mực: Cần – Kiệm – Liêm – Chính, bắt đầu từ mỗi cá nhân và lan toả ra cộng đồng.',
              type: 'paragraph',
              spans: []
            }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800', alt: 'Cần – Kiệm – Liêm – Chính' },
          legenda: [
            {
              text: 'Cần – Kiệm – Liêm – Chính là nền tảng đạo đức của người cách mạng và mỗi công dân trong xã hội mới.',
              type: 'paragraph',
              spans: []
            }
          ],
          texto_mobile: [
            {
              text: 'Bốn phẩm chất này gắn trực tiếp với việc chống tham ô, lãng phí, quan liêu và chủ nghĩa cá nhân trong bộ máy nhà nước cũng như đời sống hằng ngày.',
              type: 'paragraph',
              spans: []
            }
          ]
        }
      ]
    }
  },

  'EXPO_003_NEW': {
    data: {
      tipo_de_conteudo: true,
      titulo: [{ text: 'Giáo dục, văn nghệ và thế hệ trẻ', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800', alt: 'Giáo dục mới' },
          legenda: [
            {
              text: 'Nhà trường mới phải gắn với thực tế, phục vụ Tổ quốc và nhân dân, đào tạo con người vừa “hồng” vừa “chuyên”.',
              type: 'paragraph',
              spans: []
            }
          ],
          texto_mobile: [
            {
              text: 'Hồ Chí Minh yêu cầu giáo dục phải đào tạo những người chủ tương lai của đất nước, có tri thức, đạo đức và tinh thần phục vụ nhân dân.',
              type: 'paragraph',
              spans: []
            }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800', alt: 'Thanh niên & văn hoá' },
          legenda: [
            {
              text: 'Thanh niên là lực lượng xung kích trong xây dựng và bảo vệ nền văn hoá mới.',
              type: 'paragraph',
              spans: []
            }
          ],
          texto_mobile: [
            {
              text: 'Văn nghệ, báo chí và các hoạt động văn hoá phải hướng đến việc nâng cao đời sống tinh thần, bồi dưỡng lý tưởng cho thế hệ trẻ.',
              type: 'paragraph',
              spans: []
            }
          ]
        }
      ]
    }
  }
};

// ============================================================
// ENSAIOS - Không gian lý luận (6 bài luận)
// ============================================================
const ensaiosData: { [key: string]: any } = {
  'YK7cOxAAACMAX6YT': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 1 – Khái niệm văn hoá theo Hồ Chí Minh', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Văn hoá theo Hồ Chí Minh là toàn bộ những sáng tạo và phát minh của loài người về ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật và cả cách ăn, ở, mặc, ứng xử hằng ngày.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Định nghĩa này cho thấy văn hoá không chỉ là nghệ thuật hoặc lễ hội, mà là toàn bộ đời sống tinh thần của xã hội, gắn chặt với từng con người cụ thể.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7cTBAAACQAX6Zi': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 2 – Năm điểm lớn xây dựng nền văn hoá mới', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Hồ Chí Minh nêu năm điểm lớn: xây dựng tâm lý độc lập tự cường; luân lý biết hy sinh mình làm lợi cho quần chúng; xã hội vì phúc lợi nhân dân; chính trị dân quyền; kinh tế dân sinh.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Năm điểm này tạo thành khung tổng thể cho một nền văn hoá mới, trong đó văn hoá không tách rời chính trị, kinh tế, đạo đức và đời sống nhân dân.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7cYBAAACUAX6bF': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 3 – Văn hoá gắn với nhiệm vụ cấp bách của dân tộc', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Trong bối cảnh sau Cách mạng Tháng Tám, xây dựng văn hoá không phải việc xa xôi mà gắn với những nhiệm vụ cấp bách: chống nạn mù chữ, giáo dục lại nhân dân, xoá bỏ tàn dư nô dịch của thực dân, phong kiến.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Những nhiệm vụ này cho thấy văn hoá là điều kiện để bảo vệ chính quyền cách mạng, củng cố độc lập dân tộc và mở đường cho sự phát triển lâu dài.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7ccRAAACMAX6cU': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 4 – Đời sống mới và đạo đức cách mạng', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Phong trào Đời sống mới nhằm thay đổi thói quen cũ, lạc hậu, xây dựng lối sống văn minh, lành mạnh, có kỷ luật, có tổ chức.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Cốt lõi của Đời sống mới là thực hành Cần – Kiệm – Liêm – Chính, chí công vô tư, chống chủ nghĩa cá nhân – những phẩm chất nền tảng của đạo đức cách mạng.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7cgxAAACQAX6do': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 5 – Vai trò của giáo dục và văn nghệ', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Giáo dục và văn nghệ được Hồ Chí Minh coi là hai mặt trận quan trọng để nâng cao dân trí, bồi dưỡng lý tưởng và đạo đức cho nhân dân.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Nhà trường, báo chí, văn nghệ sĩ đều phải trả lời câu hỏi: “phục vụ ai?” – và câu trả lời mà Người nhấn mạnh là phục vụ nhân dân, trước hết là công – nông – binh.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7ckhAAACYAX6ez': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Ensaio 6 – Thế hệ trẻ và tương lai nền văn hoá mới', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Thanh niên và thiếu nhi là lực lượng kế tục sự nghiệp cách mạng và công cuộc xây dựng nền văn hoá mới.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hồ Chí Minh luôn nhấn mạnh việc chăm lo giáo dục thế hệ trẻ cả về tri thức, đạo đức và lý tưởng, để họ trở thành những công dân tốt và người chủ tương lai của đất nước.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};

// ============================================================
// POESIAS - Phòng trích dẫn (8 câu nói nổi tiếng)
// ============================================================
const poesiasData: { [key: string]: any } = {
  'YKgtiBEAACIAc1rT': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 1 – “Một dân tộc dốt là một dân tộc yếu”', type: 'heading1', spans: [] }],
      conteudo: [
        { text: '“Một dân tộc dốt là một dân tộc yếu.” – Hồ Chí Minh', type: 'paragraph', spans: [] },
        {
          text: 'Câu nói được Người nhấn mạnh khi bàn về nhiệm vụ chống nạn mù chữ sau Cách mạng Tháng Tám, khẳng định giáo dục là điều kiện sống còn cho sức mạnh dân tộc.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK6ssxAAACYAXtDp': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 2 – Văn hoá soi đường cho quốc dân đi', type: 'heading1', spans: [] }],
      conteudo: [
        { text: '“Văn hoá phải soi đường cho quốc dân đi.” – Hồ Chí Minh', type: 'paragraph', spans: [] },
        {
          text: 'Hồ Chí Minh coi văn hoá là ánh sáng định hướng cho con đường phát triển của đất nước. Không có văn hoá, con người và xã hội sẽ mất phương hướng.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK66nRAAACMAXw_m': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 3 – Năm điểm lớn của nền văn hoá mới', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: '“Xây dựng tâm lý độc lập tự cường; xây dựng luân lý biết hy sinh mình làm lợi cho quần chúng; xây dựng xã hội vì phúc lợi nhân dân; xây dựng chính trị dân quyền; xây dựng kinh tế dân sinh.” – Tóm lược năm điểm lớn về văn hoá.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Năm điểm này cho thấy văn hoá mà Hồ Chí Minh nói đến là một chỉnh thể toàn diện, gắn chặt với đời sống vật chất và tinh thần của nhân dân.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK66xBAAACYAXxCg': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 4 – Đời sống mới', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: '“Đời sống mới không phải cái gì cao xa, mà là sửa đổi cách ăn, cách mặc, cách ở, cách làm việc, cách cư xử với nhau.” – Hồ Chí Minh',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Đời sống mới bắt đầu từ những việc rất nhỏ, nhưng nếu được thực hiện rộng rãi sẽ tạo thành sức mạnh biến đổi cả xã hội.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK663hAAACMAXxEX': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 5 – Cần, Kiệm, Liêm, Chính', type: 'heading1', spans: [] }],
      conteudo: [
        { text: '“Cần, Kiệm, Liêm, Chính là gốc của người cách mạng.” – Hồ Chí Minh', type: 'paragraph', spans: [] },
        {
          text: 'Bốn phẩm chất này không chỉ là đạo đức của cán bộ, mà là chuẩn mực chung cho mọi công dân trong xã hội mới, tạo nền tảng cho niềm tin của nhân dân vào Đảng và Nhà nước.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK66-BAAACMAXxGN': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 6 – Chống chủ nghĩa cá nhân', type: 'heading1', spans: [] }],
      conteudo: [
        { text: '“Chủ nghĩa cá nhân là kẻ thù rất ác của đạo đức cách mạng.” – Hồ Chí Minh', type: 'paragraph', spans: [] },
        {
          text: 'Trong xây dựng văn hoá và đạo đức, Người luôn cảnh báo chủ nghĩa cá nhân vì nó làm tha hoá con người, phá vỡ đoàn kết và làm suy yếu sức mạnh tập thể.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK67JhAAACMAXxJh': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 7 – Dân là gốc', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: '“Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân.” – Hồ Chí Minh',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Văn hoá và đạo đức mà Người nói đến luôn xoay quanh trung tâm là nhân dân: vì dân, do dân, dựa vào dân, tôn trọng và phát huy quyền làm chủ của nhân dân.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK67DhAAACQAXxHz': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Poesia 8 – Thanh niên và tương lai', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: '“Non sông Việt Nam có trở nên tươi đẹp hay không… chính là nhờ một phần lớn ở công học tập của các cháu.” – Hồ Chí Minh',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Thế hệ trẻ là chủ nhân tương lai, nên việc giáo dục văn hoá, đạo đức, lý tưởng cho thanh thiếu niên là nhiệm vụ lâu dài và sống còn của nền văn hoá mới.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};

// ============================================================
// CONTOS & NOVELAS - Chuyện đời thường (4 tình huống)
// ============================================================
const contosENovelasData: { [key: string]: any } = {
  'YK7F4xAAACUAX0KH': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Câu chuyện 1 – Tiền quỹ lớp và đức Liêm', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Lớp có một khoản tiền quỹ để tổ chức hoạt động chung. Một bạn trong ban cán sự được giao giữ quỹ nhưng đã lén dùng tạm cho việc cá nhân, nghĩ rằng sau này sẽ bù lại.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Câu chuyện gợi lại yêu cầu về đức Liêm và Chính mà Hồ Chí Minh nhấn mạnh: không tham của công, không đặt lợi ích riêng lên trên tập thể, dù chỉ là “mượn tạm một chút”.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7NYBAAACQAX2On': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Câu chuyện 2 – Viết báo cáo nhóm và tinh thần Cần – Chính', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Trong một bài tập nhóm, có người gần như không tham gia nhưng vẫn muốn ký tên đầy đủ để hưởng trọn điểm chung. Nhóm trưởng thì ngại nhắc, sợ mất lòng.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Tình huống này liên hệ với tinh thần Cần và Chính: mỗi người phải thật sự làm việc, có trách nhiệm, trung thực với đóng góp của mình, dám góp ý thẳng thắn vì lợi ích chung – đúng tinh thần đạo đức cách mạng mà Hồ Chí Minh đề cao.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7NexAAACUAX2Qp': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Câu chuyện 3 – Lãng phí điện nước ở ký túc xá', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Ký túc xá có biển yêu cầu tiết kiệm điện nước, nhưng nhiều bạn vẫn bật điều hoà, đèn, nước suốt dù không dùng, “vì đã đóng tiền rồi”.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Hồ Chí Minh coi Kiệm là phẩm chất cốt lõi, không chỉ trong chi tiêu tiền bạc mà cả trong sử dụng tài nguyên chung. Lãng phí là trái với đạo đức mới, làm tổn hại lợi ích của cộng đồng.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  },

  'YK7NlxAAACMAX2Sz': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Câu chuyện 4 – Chọn việc dễ hay việc khó', type: 'heading1', spans: [] }],
      conteudo: [
        {
          text: 'Khi phân công nhiệm vụ trong một hoạt động tình nguyện, nhiều người tranh nhận phần nhẹ, phần “được chụp hình”, còn việc nặng, dọn dẹp, hậu cần thì ít ai xung phong.',
          type: 'paragraph',
          spans: []
        },
        {
          text: 'Đây là bài kiểm tra nhỏ về đức Cần, Liêm và tinh thần “hy sinh mình, làm lợi cho quần chúng”. Người có đạo đức mới sẽ dám nhận việc khó, việc ít ai muốn, làm tốt phần việc thầm lặng mà không cần được khen.',
          type: 'paragraph',
          spans: []
        }
      ]
    }
  }
};

// ============================================================
// INFANTIS - Góc thiếu nhi (4 galleries)
// ============================================================
const infantisData: { [key: string]: any } = {
  // --- INFANTIS: Góc thiếu nhi & giáo dục mới ---
  'YK7jQhAAACMAX8bf': {
    data: {
      titulo: [{ text: 'Thiếu nhi – “Tiểu chủ nhân” của đất nước', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800', alt: 'Thiếu nhi cười' },
          legenda: [
            { text: 'Thiếu nhi được Hồ Chí Minh coi là “tiểu chủ nhân” của đất nước, cần được yêu thương và chăm sóc toàn diện.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Bác luôn nhắc phải chăm lo cả học tập, vui chơi và sức khoẻ cho các em nhỏ, vì tương lai dân tộc nằm trong tay các em.', type: 'paragraph', spans: [] }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800', alt: 'Trẻ em đọc sách' },
          legenda: [
            { text: 'Giáo dục thiếu nhi là điểm xuất phát của việc xây dựng nền văn hoá mới, bền vững từ gốc.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Từ việc học chữ đến rèn đạo đức, thế hệ nhỏ hôm nay chính là những công dân gánh vác đất nước ngày mai.', type: 'paragraph', spans: [] }
          ]
        }
      ]
    }
  },

  'YK75phAAACUAYCos': {
    data: {
      titulo: [{ text: 'Thư gửi các cháu thiếu nhi', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800', alt: 'Trẻ em cầm cờ' },
          legenda: [
            { text: 'Trong nhiều lá thư, Hồ Chí Minh gửi lời chúc, lời dặn dò thiếu nhi nhân các dịp lễ, Tết, Trung thu.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Người luôn nhấn mạnh: các cháu phải chăm ngoan, học giỏi, biết yêu thương, đoàn kết và giúp đỡ nhau.', type: 'paragraph', spans: [] }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1522651767861-9e60c9797e47?w=800', alt: 'Trẻ em vui chơi' },
          legenda: [
            { text: 'Vui chơi lành mạnh cũng là một phần của đời sống văn hoá mới dành cho thiếu nhi.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Thiếu nhi cần được vui chơi, nhưng phải an toàn, bổ ích và góp phần xây dựng tinh thần tập thể, kỷ luật, yêu lao động.', type: 'paragraph', spans: [] }
          ]
        }
      ]
    }
  },

  'YK75vRAAACMAYCqR': {
    data: {
      titulo: [{ text: 'Trường học mới cho thiếu nhi', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800', alt: 'Lớp học thiếu nhi' },
          legenda: [
            { text: 'Trường học trong chế độ mới phải khác hẳn trường học thực dân, phong kiến, đặt học sinh ở vị trí trung tâm.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Nhà trường phải gắn với đời sống nhân dân, dạy trẻ em vừa kiến thức, vừa đạo đức, vừa lao động, đúng tinh thần “học đi đôi với hành”.', type: 'paragraph', spans: [] }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800', alt: 'Cô giáo và học sinh' },
          legenda: [
            { text: 'Thầy cô giáo có vai trò rất quan trọng trong việc gieo mầm văn hoá và đạo đức cho thế hệ nhỏ.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Hồ Chí Minh luôn đánh giá cao nghề dạy học và coi đó là nghề “rất vẻ vang”, vì góp phần xây dựng con người mới.', type: 'paragraph', spans: [] }
          ]
        }
      ]
    }
  },

  'YK751BAAACMAYCsB': {
    data: {
      titulo: [{ text: 'Thiếu nhi và lối sống mới', type: 'heading1', spans: [] }],
      galeria: [
        {
          imagem: { url: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800', alt: 'Trẻ em làm việc nhóm' },
          legenda: [
            { text: 'Thiếu nhi tập làm việc nhóm, giúp đỡ nhau trong học tập và sinh hoạt hằng ngày.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Tinh thần đoàn kết, kỷ luật, biết nghĩ cho tập thể là hạt giống của lối sống mới mà Hồ Chí Minh mong muốn.', type: 'paragraph', spans: [] }
          ]
        },
        {
          imagem: { url: 'https://images.unsplash.com/photo-1503457574462-bd27054394c1?w=800', alt: 'Trẻ em trồng cây' },
          legenda: [
            { text: 'Hoạt động lao động, trồng cây, bảo vệ môi trường là một phần của đời sống văn hoá lành mạnh dành cho thiếu nhi.', type: 'paragraph', spans: [] }
          ],
          texto_mobile: [
            { text: 'Qua những việc nhỏ như trồng cây, giữ vệ sinh, các em học được ý thức trách nhiệm với cộng đồng và thiên nhiên.', type: 'paragraph', spans: [] }
          ]
        }
      ]
    }
  }
};

// ============================================================
// BOAS VINDAS - Cổng văn hoá (chưa có nội dung chi tiết)
// ============================================================
const boasVindasData: { [key: string]: any } = {
  'YK7_XBAAACYAYEN3': {
    data: {
      tipo_de_conteudo: false,
      titulo: [{ text: 'Boas Vindas 1 – Chào mừng đến Gallery', type: 'heading1', spans: [] }],
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

// ============================================================
// TỔNG HỢP TẤT CẢ DỮ LIỆU
// ============================================================
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
                url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400',
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
