# Mock Data Structure

Dữ liệu mock được tổ chức theo từng phòng để dễ quản lý và chỉnh sửa.

## Cấu trúc thư mục

```
mockData/
├── index.ts                 # File tổng hợp (export chính)
├── instructions.ts          # Hướng dẫn Gallery
├── galleryMap.ts            # Menu chính / Bản đồ phòng
├── observatorio.ts          # Đài quan sát (popup + 7 nội dung)
├── exposicoes.ts            # Bảo tàng thị giác (3 triển lãm)
├── ensaios.ts               # Không gian lý luận (6 bài luận)
├── poesias.ts               # Phòng trích dẫn (8 trích dẫn)
├── contosENovelas.ts        # Chuyện đời thường (4 câu chuyện)
├── infantis.ts              # Góc thiếu nhi (4 galleries)
└── boasVindas.ts            # Cổng văn hoá (3 nội dung)
```

## Cách sử dụng

### Import từ code
```typescript
import { getMockDataById, mockQuery } from './mockData';
```

Không cần thay đổi gì, vì `index.ts` sẽ export tất cả.

### Chỉnh sửa nội dung

#### 1. Sửa nội dung một phòng cụ thể
- Mở file phòng đó, ví dụ: `ensaios.ts`
- Tìm ID cần sửa
- Chỉnh sửa trực tiếp

#### 2. Thêm nội dung mới
- Mở file phòng tương ứng
- Thêm object mới với ID riêng
- Export sẽ tự động cập nhật

#### 3. Thêm phòng mới
1. Tạo file mới, ví dụ: `phongMoi.ts`
2. Export data với cấu trúc tương tự
3. Import vào `index.ts`:
   ```typescript
   import { phongMoiData } from './phongMoi';
   ```
4. Thêm vào `mockContentById`:
   ```typescript
   export const mockContentById = {
     ...existingData,
     ...phongMoiData  // Thêm dòng này
   };
   ```

## Ví dụ chỉnh sửa

### Thay đổi tiêu đề một Ensaio
Mở `ensaios.ts`:
```typescript
'YK7cOxAAACMAX6YT': {
  data: {
    tipo_de_conteudo: false,
    titulo: [{ 
      text: 'Tiêu đề mới của bạn',  // Sửa ở đây
      type: 'heading1', 
      spans: [] 
    }],
    ...
  }
}
```

### Thêm một Exposição mới
Mở `exposicoes.ts`:
```typescript
export const exposicoesData: { [key: string]: any } = {
  // ... dữ liệu cũ ...
  
  'EXPO_004_NEW': {  // ID mới
    data: {
      tipo_de_conteudo: true,
      titulo: [{ text: 'Triển lãm mới', type: 'heading1', spans: [] }],
      galeria: [
        // ... nội dung gallery ...
      ]
    }
  }
};
```

## Lợi ích

✅ **Dễ tìm**: Biết ngay nội dung ở file nào  
✅ **Dễ sửa**: Chỉnh sửa trong file nhỏ, không lo conflict  
✅ **Dễ mở rộng**: Thêm phòng mới không ảnh hưởng file khác  
✅ **Dễ review**: Git diff rõ ràng, chỉ thấy thay đổi ở file liên quan  
✅ **Performance**: Import chỉ file cần thiết (nếu cần tối ưu sau này)

## Notes

- Mỗi file export một object chứa dữ liệu của phòng đó
- `index.ts` tổng hợp tất cả bằng spread operator (`...`)
- Không cần thay đổi code import ở nơi khác
- File `mockData.ts` cũ có thể xóa an toàn
