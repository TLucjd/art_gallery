import React from 'react';
import orientations from '../../../helpers/orientations';

import { useTeleport } from '../../../hooks/Teleport';
import { useOverlay } from '../../../hooks/Overlay';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentGallery from '../../../components/ContentGallery';
import ObservatorioPopup from '../../../components/ObservatorioPopup';
import { usePopup } from '../../../hooks/Popup';
import { exposicoesData } from '../../../helpers/mockData/exposicoes';

const Exposicoes: React.FC = () => {
  const {teleportCamera} = useTeleport();
  const {setOverlayVisibility, setContent: setOverlayContent} = useOverlay();
  const {setPopupVisibility, setContent: setPopupContent} = usePopup();
  const {cameraCloseIn} = useClosedCamera();

  const coverPositions: { [key: string]: { position: string; rotation: string; width: number; height: number } } = {
    'YK8CYxAAACUAYFDH': { position: '11.756 1.600 -5.340', rotation: '0 -90 0', width: 1, height: 1.5 },
    'YK8LaRAAACMAYHkL': { position: '11.736 1.600 -2.962', rotation: '0 -90 0', width: 1, height: 1.5 },
    'EXPO_003_NEW': { position: '11.736 1.600 -0.500', rotation: '0 -90 0', width: 1, height: 1.5 },
  };

  const handleClick = (id: string, cameraCloseCoords: any, hotspot: string) => {
    cameraCloseIn(cameraCloseCoords, hotspot);
    setOverlayVisibility(true);
    setOverlayContent(<ContentGallery contentId={id} layout="horizontal" />);
  }

  const observatorioTeleport = () => {
    teleportCamera('observatorio');
    setPopupVisibility(true);
    setPopupContent(<ObservatorioPopup closePopup={() => setPopupVisibility(false)} />)
  }
  
  return (
    <a-entity id="Exposicoes" room_name="exposições">
    {/* <!--NavMesh--> */}
    <a-plane id="Exposicoes-NavMesh" position="13.32 0.59 -4.21" scale="14 4 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

    {/* <!--NavMesh Occluders--> */}
    <a-box id="Exposicoes Wall_1" position="7.521 1.95 -2.620" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
    <a-box id="Exposicoes Wall_2" position="7.521 1.95 -5.710" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>

    {/* <!--Imagens dos totens--> */}
    {['YK8CYxAAACUAYFDH', 'YK8LaRAAACMAYHkL', 'EXPO_003_NEW'].map((contentId) => {
      const content = exposicoesData[contentId];
      const pos = coverPositions[contentId];
      if (!pos || !content?.data?.galeria?.[0]?.imagem?.url) return null;
      
      return (
        <a-entity
          key={`exposicoes_capa_${contentId}`}
          id={`exposicoes_capa_${contentId}`}
          class="collidable"
          geometry={`primitive: plane; width: ${pos.width}; height: ${pos.height}`}
          material={`shader: flat; src: ${content.data.galeria[0].imagem.url}`}
          position={pos.position}
          rotation={pos.rotation}
        ></a-entity>
      );
    })}

    {/* <!--Hotspots--> */}
    <a-entity id="exposicoes_hotspot_01" hotspot_collider data-art-ref="YK8CYxAAACUAYFDH" onClick={() => handleClick('YK8CYxAAACUAYFDH', {position:{x:9.7, y: 1.6, z:-5.330},rotation:orientations.direita}, 'exposicoes_hotspot_01')} mixin="hotspotMixin" class="collidable" position="11.410 1.140 -5.310"></a-entity>
    <a-entity id="exposicoes_hotspot_02" hotspot_collider data-art-ref="YK8LaRAAACMAYHkL" onClick={() => handleClick('YK8LaRAAACMAYHkL', {position:{x:9.7, y: 1.6, z:-2.990},rotation:orientations.direita}, 'exposicoes_hotspot_02')} mixin="hotspotMixin" class="collidable" position="11.410 1.140 -3.000"></a-entity>
    <a-entity id="exposicoes_hotspot_03" hotspot_collider data-art-ref="EXPO_003_NEW" onClick={() => handleClick('EXPO_003_NEW', {position:{x:9.7, y: 1.6, z:-0.500},rotation:orientations.direita}, 'exposicoes_hotspot_03')} mixin="hotspotMixin" class="collidable" position="11.410 1.140 -0.500"></a-entity>
    <a-entity id="exposicoes_upStairs" onClick={() => observatorioTeleport()} mixin="upStairs" class="collidable" position="15 1.560 -6.000" scale="0.35 0.35 1" ></a-entity>
  </a-entity>
  );
}

export default Exposicoes;