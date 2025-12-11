import React, { useCallback } from 'react';
import { useOverlay } from '../../../hooks/Overlay';
import { useTeleport } from '../../../hooks/Teleport';
import { useClosedCamera } from '../../../hooks/ClosedCamera';

import ContentGallery from '../../../components/ContentGallery';
import { contosENovelasData } from '../../../helpers/mockData/contosENovelas';

const ContosENovelas: React.FC = () => {
  const {setContent: setOverlayContent, setOverlayVisibility} = useOverlay();
  const {teleportCamera} = useTeleport();
  const {cameraCloseIn, getNormalizedRotationTo} = useClosedCamera();

  const handleClick = useCallback((component: JSX.Element, cameraCloseCoords: any, hotspot: string) => {
    cameraCloseIn(cameraCloseCoords, hotspot);
    setOverlayContent(component);
    setOverlayVisibility(true);
  }, [setOverlayContent, setOverlayVisibility, cameraCloseIn]);

  const coverPositions: { [key: string]: { position: string; rotation: string; width: number; height: number } } = {
    'YK7F4xAAACUAX0KH': { position: '-26.940 5.801 -2.780', rotation: '0 90 0', width: 1.45, height: 2.35 },
    'YK7NYBAAACQAX2On': { position: '-29.180 5.801 -2.730', rotation: '0 90 0', width: 1.45, height: 2.35 },
    'YK7NexAAACUAX2Qp': { position: '-29.180 5.801 -5.610', rotation: '0 90 0', width: 1.45, height: 2.35 },
    'YK7NlxAAACMAX2Sz': { position: '-26.940 5.801 -5.610', rotation: '0 90 0', width: 1.45, height: 2.35 }
  };

  return (
    <a-entity id="ContosENovelas" room_name="contos & novelas">
      {/* <!--NavMesh--> */}
      <a-plane id="ContosENovelas-NavMesh" position="-20.870 3.810 -4.170" scale="32.520 4.430 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

      {/* <!--NavMesh Occluders--> */}
      <a-box id="ContosENovelas Support_1" position="-27.227 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_2" position="-27.227 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_3" position="-29.470 4.52 -5.64" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Support_4" position="-29.470 4.52 -2.52" scale="0.23 1.745 1.125" class="collidable" mixin="occluderMaterial"></a-box>

      <a-box id="ContosENovelas Wall_1" position="-23.590 5 -5.650" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>
      <a-box id="ContosENovelas Wall_2" position="-23.590 5 -2.620" scale="0.23 2.7 1.65" class="collidable" mixin="occluderMaterial"></a-box>

      {/* <!--Imagens dos totens--> */}
      {['YK7F4xAAACUAX0KH', 'YK7NYBAAACQAX2On', 'YK7NexAAACUAX2Qp', 'YK7NlxAAACMAX2Sz'].map((contentId) => {
        const content = contosENovelasData[contentId];
        const pos = coverPositions[contentId];
        if (!pos || !content?.data?.galeria?.[0]?.imagem?.url) return null;
        
        return (
          <a-plane
            key={`contos_panel_${contentId}`}
            id={`contos_panel_${contentId}`}
            class="collidable"
            geometry={`primitive: plane; width: ${pos.width}; height: ${pos.height}`}
            material={`shader: flat; src: ${content.data.galeria[0].imagem.url}; side: double`}
            position={pos.position}
            rotation={pos.rotation}
          ></a-plane>
        );
      })}

      {/* <!--Hotspots--> */}
      <a-entity id="ContoENovelas_hotspot_01" hotspot_collider data-art-ref="YK7F4xAAACUAX0KH" onClick={() => handleClick(<ContentGallery contentId="YK7F4xAAACUAX0KH" layout="horizontal" />, {position:{x:-26.35, y: 5, z:-3},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_01')} mixin="hotspotMixin" class="collidable" position="-26.940 4.440 -2.780"></a-entity>
      <a-entity id="ContoENovelas_hotspot_02" hotspot_collider data-art-ref="YK7NYBAAACQAX2On" onClick={() => handleClick(<ContentGallery contentId="YK7NYBAAACQAX2On" layout="horizontal" />, {position:{x:-28.65, y: 5, z:-3},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_02')} mixin="hotspotMixin" class="collidable" position="-29.180 4.440 -2.730"></a-entity>
      <a-entity id="ContoENovelas_hotspot_03" hotspot_collider data-art-ref="YK7NexAAACUAX2Qp" onClick={() => handleClick(<ContentGallery contentId="YK7NexAAACUAX2Qp" layout="horizontal" />, {position:{x:-28.65, y: 5, z:-5.8},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_03')} mixin="hotspotMixin" class="collidable" position="-29.180 4.440 -5.610"></a-entity>
      <a-entity id="ContoENovelas_hotspot_04" hotspot_collider data-art-ref="YK7NlxAAACMAX2Sz" onClick={() => handleClick(<ContentGallery contentId="YK7NlxAAACMAX2Sz" layout="horizontal" />, {position:{x:-26.35, y: 5, z:-5.8},rotation:{x:0, y:getNormalizedRotationTo('w'), z:0}}, 'ContoENovelas_hotspot_04')} mixin="hotspotMixin" class="collidable" position="-26.940 4.440 -5.610"></a-entity>
      <a-entity id="ContoENovelas_upStairs" onClick={() => teleportCamera('poesias')} mixin="upStairs" class="collidable" position="-34.630 4.850 -3.380" scale="0.35 0.35 1" ></a-entity>
      <a-entity id="ContoENovelas_downStairs" onClick={() => teleportCamera('infantisStairs')} mixin="downStairs" class="collidable" position="-19.600 4.850 -3.330" scale="0.35 0.35 1" ></a-entity>
      <a-entity id="ContoENovelas_downStairs_ensaios" onClick={() => teleportCamera('ensaiosStairs')} mixin="downStairs" class="collidable" position="-34.630 4.850 -5.629" scale="0.35 0.35 1" ></a-entity>
    </a-entity>
  );
}

export default ContosENovelas;