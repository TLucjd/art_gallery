import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    color: #fff;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GalleryImage = styled.img`
  max-width: 80%;
  max-height: 80vh;

  @media only screen and (max-width: 600px) {
    /* display: none; */
  }
`;

export const GalleryMobile = styled.div`
  width: 80%;
  max-width: 800px;
  max-height: 55vh;
  overflow-y: auto;
  background: #fff;
  padding: 15px 20px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  /* Thanh cuộn tùy chỉnh */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  *{
    color: #000!important;
    margin: 0px 0px 10px 0px!important;
    font-size: 16px;
    line-height: 1.6em!important;
  }

  h2 {
    font-size: 20px !important;
    font-weight: bold !important;
    margin-bottom: 15px !important;
  }

  @media only screen and (max-width: 600px) {
    max-height: 50vh;
    font-size: 14px;
    padding: 10px 15px 15px;
    
    * {
      font-size: 14px !important;
    }
    
    h2 {
      font-size: 18px !important;
    }
  }
`;

// Layout ngang: Ảnh trái - Text phải
export const HorizontalLayout = styled.div`
  display: flex;
  width: 95%;
  max-width: 1400px;
  height: 85vh;
  gap: 20px;
  
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    max-height: 90vh;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 75vh;
    object-fit: contain;
  }
  
  @media only screen and (max-width: 900px) {
    img {
      max-height: 50vh;
    }
  }
`;

export const TextSection = styled.div`
  flex: 1;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  /* Thanh cuộn */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  .title {
    margin-bottom: 20px;
    
    h2 {
      color: #000;
      font-size: 24px;
      font-weight: bold;
      margin: 0 0 10px 0;
      line-height: 1.3;
    }
  }
  
  .content {
    * {
      color: #333 !important;
      margin: 0 0 15px 0 !important;
      font-size: 17px !important;
      line-height: 1.7em !important;
    }
    
    p {
      margin-bottom: 15px !important;
    }
  }
  
  @media only screen and (max-width: 900px) {
    padding: 20px;
    max-height: 40vh;
    
    .title h2 {
      font-size: 20px;
    }
    
    .content * {
      font-size: 15px !important;
    }
  }
`;