// BoasVindas/index.tsx
import React, { useCallback } from 'react';
import { useOverlay } from '../../../hooks/Overlay';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentGallery from '../../../components/ContentGallery';
// import Covers from '../../../components/Covers';  // <= cái này sắp không cần nữa
import { boasVindasData } from '../../../helpers/mockData';

const BoasVindas: React.FC = () => {
  const {setContent: setOverlayContent, setOverlayVisibility} = useOverlay();
  const { cameraCloseIn, getNormalizedRotationTo } = useClosedCamera();

  const handleClick = useCallback(
    (component: JSX.Element, obj3D: any, hotspot: string) => {
      setOverlayContent(component);
      setOverlayVisibility(true);
      cameraCloseIn(obj3D, hotspot);
    },
    [setOverlayContent, setOverlayVisibility, cameraCloseIn]
  );

  // Lấy URL ảnh bìa từ boasVindasData
  const slide1 = boasVindasData['YK7_XBAAACYAYEN3'];
  const slide2 = boasVindasData['YK7_dhAAACQAYEP0'];
  const slide3 = boasVindasData['YK7_mhAAACQAYESU'];

  return (
    <a-entity id="BoasVindas" room_name="bem vindo">
      {/* NavMesh */}
      <a-plane
        id="Corredor_BoasVindas"
        position="0.020 0.59 9.200"
        scale="1.390 25.960 1"
        navigation_collider
        class="collidable"
        rotation="-90 0 0"
        mixin="navMeshMaterial"
      ></a-plane>
      <a-plane
        id="BoasVindas-NavMesh"
        position="0.020 0.59 -4.160"
        scale="8.990 1.410 1"
        navigation_collider
        class="collidable"
        rotation="-90 0 0"
        mixin="navMeshMaterial"
      ></a-plane>
      <a-plane
        id="BoasVindas_Memorias_Connection"
        position="5.15 0.59 -4.16"
        scale="2.4 1.5 1"
        navigation_collider
        class="collidable"
        rotation="-90 0 0"
        mixin="navMeshMaterial"
      ></a-plane>
      <a-plane
        id="BoasVindas_Infantis_Connection"
        position="-5.25 0.59 -4.21"
        scale="2.4 1.5 1"
        navigation_collider
        class="collidable"
        rotation="-90 0 0"
        mixin="navMeshMaterial"
      ></a-plane>

      {/* NavMesh Occluders */}
      <a-box
        id="BoasVindas_Occluder"
        position="0.06 0.85 -5.18"
        scale="1.916 0.502 0.638"
        class="collidable"
        mixin="occluderMaterial"
      ></a-box>

      {/* ========= PANELS ẢNH HIỆN SẴN TRONG PHÒNG ========= */}
      {/* Panel trái – BoasVindas 1 */}
      <a-plane
        id="BoasVindas_Panel_01"
        position="-3.332 5.801 -4.150"
        rotation="0 90 0"
        scale="1.45 2.35 1"
        material={`src: url(${slide1.data.capa.url}); side: double`}
      ></a-plane>

      {/* Panel giữa – BoasVindas 2 */}
      <a-plane
        id="BoasVindas_Panel_02"
        position="0.074 5.801 -6.767"
        rotation="0 0 0"
        scale="1.45 2.35 1"
        material={`src: url(${slide2.data.capa.url}); side: double`}
      ></a-plane>

      {/* Panel phải – BoasVindas 3 */}
      <a-plane
        id="BoasVindas_Panel_03"
        position="3.382 5.801 -4.150"
        rotation="0 -90 0"
        scale="1.45 2.35 1"
        material={`src: url(${slide3.data.capa.url}); side: double`}
      ></a-plane>

      {/* Nếu Covers chỉ vẽ panel trắng thì có thể bỏ đi */}
      {/* <Covers contentType="boas_vindas" /> */}

      {/* ========= HOTSPOTS: CLICK ĐỂ MỞ OVERLAY ẢNH + GIẢI THÍCH ========= */}
      <a-entity
        hotspot_collider
        id="boasvindas_hotspot_01"
        data-art-ref="YK7_XBAAACYAYEN3"
        onClick={() =>
          handleClick(
            <ContentGallery contentId="YK7_XBAAACYAYEN3" layout="horizontal" />,
            {
              position: { x: -0.7, y: 5.8, z: -4.063 },
              rotation: { x: 0, y: getNormalizedRotationTo('w'), z: 0 }
            },
            'boasvindas_hotspot_01'
          )
        }
        contentType="0"
        scale="0.5 0.5 1"
        mixin="hotspotMixin"
        class="collidable"
        position="-3.3 3 -4.1"
      ></a-entity>

      <a-entity
        hotspot_collider
        id="boasvindas_hotspot_02"
        data-art-ref="YK7_dhAAACQAYEP0"
        onClick={() =>
          handleClick(
            <ContentGallery contentId="YK7_dhAAACQAYEP0" layout="horizontal" />,
            {
              position: { x: 0, y: 5.8, z: -4.3 },
              rotation: { x: 0, y: getNormalizedRotationTo('n'), z: 0 }
            },
            'boasvindas_hotspot_02'
          )
        }
        contentType="0"
        scale="0.5 0.5 1"
        mixin="hotspotMixin"
        class="collidable"
        position="0.05 3 -6.83"
      ></a-entity>

      <a-entity
        hotspot_collider
        id="boasvindas_hotspot_03"
        data-art-ref="YK7_mhAAACQAYESU"
        onClick={() =>
          handleClick(
            <ContentGallery contentId="YK7_mhAAACQAYESU" layout="horizontal" />,
            {
              position: { x: 0.9, y: 5.8, z: -4.063 },
              rotation: { x: 0, y: getNormalizedRotationTo('e'), z: 0 }
            },
            'boasvindas_hotspot_03'
          )
        }
        contentType="0"
        scale="0.5 0.5 1"
        mixin="hotspotMixin"
        class="collidable"
        position="3.3 3 -4.1"
      ></a-entity>
    </a-entity>
  );
};

export default BoasVindas;
