import React, { useCallback } from 'react';
import { useOverlay } from '../../../hooks/Overlay';
import { useTeleport } from '../../../hooks/Teleport';

import ContentGallery from '../../../components/ContentGallery';
import { useClosedCamera } from '../../../hooks/ClosedCamera';
import { ensaiosData } from '../../../helpers/mockData/ensaios';

const Ensaios: React.FC = () => {
  const {setContent: setOverlayContent, setOverlayVisibility} = useOverlay();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn, getNormalizedRotationTo} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, cameraCloseCoords: any, hotspot: string) => {
    cameraCloseIn(cameraCloseCoords, hotspot);
    setOverlayContent(component);
    setOverlayVisibility(true);
  }, [setOverlayContent, setOverlayVisibility, cameraCloseIn]);

  const coverPositions: { [key: string]: { position: string; rotation: string; width: number; height: number } } = {
    'YK7cOxAAACMAX6YT': { position: '-27.950 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5 },
    'YK7cTBAAACQAX6Zi': { position: '-30.755 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5 },
    'YK7cYBAAACUAX6bF': { position: '-33.485 1.562 -2.430', rotation: '0 -180 0', width: 1, height: 1.5 },
    'YK7ccRAAACMAX6cU': { position: '-33.495 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5 },
    'YK7cgxAAACQAX6do': { position: '-30.750 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5 },
    'YK7ckhAAACYAX6ez': { position: '-27.980 1.562 -5.880', rotation: '0 0 0', width: 1, height: 1.5 },
  };

  return (
    <a-entity id="Ensaios" room_name="ensaios">
      {/* <!--NavMesh--> */}
      <a-plane id="Ensaios-NavMesh" position="-32.880 0.59 -4.12" scale="14 3.63 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

      {/* <!--NavMesh Occluders--> */}
      <a-box id="Ensaios Wall_1" position="-26.534 1.95 -2.620" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="Ensaios Wall_2" position="-26.534 1.95 -5.720" scale="0.08 2.79 1.8" class="collidable" mixin="occluderMaterial"></a-box>

      {/* <!--Imagens dos totens--> */}
      {Object.keys(ensaiosData).map((contentId) => {
        const content = ensaiosData[contentId];
        const pos = coverPositions[contentId];
        if (!pos || !content.data.capa?.url) return null;
        
        return (
          <a-entity
            key={`ensaios_capa_${contentId}`}
            id={`ensaios_capa_${contentId}`}
            class="collidable"
            geometry={`primitive: plane; width: ${pos.width}; height: ${pos.height}`}
            material={`shader: flat; src: ${content.data.capa.url}`}
            position={pos.position}
            rotation={pos.rotation}
          ></a-entity>
        );
      })}

      {/* <!--Hotspots--> */}
      <a-entity id="ensaios_hotspot_01" hotspot_collider data-art-ref="YK7cOxAAACMAX6YT" onClick={() => handleClick(<ContentGallery contentId="YK7cOxAAACMAX6YT" layout="horizontal" />, {position:{x:-27.926, y: 1.6, z:-4.4},rotation:{x:0, y:getNormalizedRotationTo('s'), z:0}}, 'ensaios_hotspot_01')} mixin="hotspotMixin" class="collidable" position="-27.910 0.75 -2.630"></a-entity>
      <a-entity id="ensaios_hotspot_02" hotspot_collider data-art-ref="YK7cTBAAACQAX6Zi" onClick={() => handleClick(<ContentGallery contentId="YK7cTBAAACQAX6Zi" layout="horizontal" />, {position:{x:-30.756, y: 1.6, z:-4.4},rotation:{x:0, y:getNormalizedRotationTo('s'), z:0}}, 'ensaios_hotspot_02')} mixin="hotspotMixin" class="collidable" position="-30.750 0.75 -2.630"></a-entity>
      <a-entity id="ensaios_hotspot_03" hotspot_collider data-art-ref="YK7cYBAAACUAX6bF" onClick={() => handleClick(<ContentGallery contentId="YK7cYBAAACUAX6bF" layout="horizontal" />, {position:{x:-33.446, y: 1.6, z:-4.4},rotation:{x:0, y:getNormalizedRotationTo('s'), z:0}}, 'ensaios_hotspot_03')} mixin="hotspotMixin" class="collidable" position="-33.470 0.75 -2.630"></a-entity> 
      <a-entity id="ensaios_hotspot_04" hotspot_collider data-art-ref="YK7ccRAAACMAX6cU" onClick={() => handleClick(<ContentGallery contentId="YK7ccRAAACMAX6cU" layout="horizontal" />, {position:{x:-33.446, y: 1.6, z:-3.9},rotation:{x:0, y:getNormalizedRotationTo('n'), z:0}}, 'ensaios_hotspot_04')} mixin="hotspotMixin" class="collidable" position="-33.470 0.75 -5.630"></a-entity>
      <a-entity id="ensaios_hotspot_05" hotspot_collider data-art-ref="YK7cgxAAACQAX6do" onClick={() => handleClick(<ContentGallery contentId="YK7cgxAAACQAX6do" layout="horizontal" />, {position:{x:-30.756, y: 1.6, z:-3.9},rotation:{x:0, y:getNormalizedRotationTo('n'), z:0}}, 'ensaios_hotspot_05')} mixin="hotspotMixin" class="collidable" position="-30.750 0.75 -5.630"></a-entity>
      <a-entity id="ensaios_hotspot_06" hotspot_collider data-art-ref="YK7ckhAAACYAX6ez" onClick={() => handleClick(<ContentGallery contentId="YK7ckhAAACYAX6ez" layout="horizontal" />, {position:{x:-27.926, y: 1.6, z:-3.9},rotation:{x:0, y:getNormalizedRotationTo('n'), z:0}}, 'ensaios_hotspot_06')} mixin="hotspotMixin" class="collidable" position="-27.910 0.75 -5.630"></a-entity>
      <a-entity id="ContoENovelas_upStairs" onClick={() => teleportCamera('contosENovelasStairs')} mixin="upStairs" class="collidable" position="-37.390 1.600 -4.880" scale="0.35 0.35 1" ></a-entity>
    </a-entity>
  );
}

export default Ensaios;