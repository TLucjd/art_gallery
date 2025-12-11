/* eslint-disable array-callback-return */
import { RichText } from 'prismic-reactjs';
import React, { useCallback, useEffect, useState } from 'react';
import Client from '../../helpers/api';

import ImageGalleryPagination from '../ImageGalleryPagination';

import { Container, Content, GalleryImage, GalleryMobile, HorizontalLayout, ImageSection, TextSection } from './styles';

interface IContentProps{
  contentId: string;
  layout?: 'vertical' | 'horizontal'; // vertical: ảnh trên text dưới, horizontal: ảnh trái text phải
}

interface IGalleryDocument{
  data: {
    galeria: {
      imagem: any;
      legenda: any;
      texto_mobile: any;
    }[]
  }
}

const ContentGallery: React.FC<IContentProps> = ({contentId, layout = 'vertical'}) => {
  const [content, setContent] = useState<IGalleryDocument>();
  const [currentImage, setCurrentImage] = useState(0);

  const fetchData = useCallback(async (id: string) => {
    console.log('🖼️ ContentGallery: Fetching data for ID:', id);
    const response: IGalleryDocument = await Client.getByID(id, {});
    console.log('🖼️ ContentGallery: Response received:', response);
    console.log('🖼️ Gallery data:', response?.data?.galeria);
    setContent(response);
  }, []);

  useEffect(() => {
    setCurrentImage(0);
    fetchData(contentId);
  }, [fetchData, contentId]);

  return (
    <>
      {content && layout === 'horizontal' && (
        <Container>
          <HorizontalLayout>
            {content.data.galeria.map((galleryItem: any, index: number) => {
              if(index === currentImage){
                return(
                  <React.Fragment key={contentId+index}>
                    <ImageSection>
                      <GalleryImage src={galleryItem.imagem.url} alt={galleryItem.imagem.alt} />
                      {content.data.galeria.length > 1 && (
                        <ImageGalleryPagination currentPage={currentImage} setCurrentPage={setCurrentImage} totalPages={content.data.galeria.length} />
                      )}
                    </ImageSection>
                    <TextSection>
                      {galleryItem.legenda && galleryItem.legenda.length > 0 && (
                        <div className="title">
                          {RichText.render(galleryItem.legenda)}
                        </div>
                      )}
                      {galleryItem.texto_mobile.length > 0 && (
                        <div className="content">
                          {RichText.render(galleryItem.texto_mobile)}
                        </div>
                      )}
                    </TextSection>
                  </React.Fragment>
                );
              }
            })}
          </HorizontalLayout>
        </Container>
      )}

      {content && layout === 'vertical' && (
        <Container>
          <Content>
            {content.data.galeria.map((galleryItem: any, index: number) => {
              console.log(`🖼️ Gallery item ${index}:`, galleryItem);
              console.log(`🖼️ Image URL:`, galleryItem?.imagem?.url);
              if(index === currentImage){
                return(
                  <>
                    <GalleryImage key={contentId+index} src={galleryItem.imagem.url} alt={galleryItem.imagem.alt} />
                    {galleryItem.texto_mobile.length > 0 && (
                      <GalleryMobile>
                        {RichText.render(galleryItem.texto_mobile)}
                      </GalleryMobile>
                    )}
                  </>
                );
              }
            })}
            <ImageGalleryPagination currentPage={currentImage} setCurrentPage={setCurrentImage} totalPages={content.data.galeria.length} />
          </Content>

          <p>
            {currentImage + 1}
            {' '}
            /
            {' '}
            {content.data.galeria.length}
          </p>

        </Container>
      )}

      {!content && (
        <h3>carregando conteúdo...</h3>
      )}
    </>
  );
}

export default ContentGallery;