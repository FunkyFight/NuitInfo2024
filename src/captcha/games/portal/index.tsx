import { useEffect, useRef, useState } from 'react';
import blue from '../../../assets/captcha/blue_portal_straight.png';
import orange from '../../../assets/captcha/orange_portal_straight.png';
import cube from '../../../assets/captcha/portal_cube.png';
import cubeGen from '../../../assets/captcha/portal_cube_gen.png';
import tile from '../../../assets/captcha/portal_tile.jpg';
import './index.css';
let activeyesno = Math.random();
export function Portal({
  active,
  start,
  end,
  onSuccess,
}: {
  active: boolean;
  start: number;
  end: number;
  onSuccess: () => void;
}) {
  const [placeBlue, setPlaceBlue] = useState(true);
  const [blueCoords, setBlueCoords] = useState({ x: 0, y: 0 });
  const [orangeCoords, setOrangeCoords] = useState({ x: 0, y: 0 });

  const cubeRef = useRef<HTMLImageElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLImageElement>(null);
  const blueRef = useRef<HTMLImageElement>(null);

  const originalCubeY = `calc(15vw - ${(start * 15) / 8 + 'vw'} + 20px)`;

  useEffect(() => {
    let id = Math.random();
    activeyesno = id;
    const nextTick = (id: number) => {
      if (id != activeyesno) {
        return;
      }

      if (
        active &&
        cubeRef.current &&
        rootRef.current &&
        orangeRef.current &&
        blueRef.current
      ) {
        let left = Number(cubeRef.current?.style.left.replace('px', ''));
        let newX = left + 1;
        let newY = null;
        if (left > rootRef.current.clientWidth) {
          newX = 0;
          newY = originalCubeY;

          const cubeRect = cubeRef.current.getBoundingClientRect();
          const rootRect = rootRef.current.getBoundingClientRect();

          const y = cubeRect.y - rootRect.y;

          const step = rootRect.height / 8;

          if ((end - 1) * step < y && y < end * step) {
            onSuccess?.();
            return;
          }
        }

        {
          const orangeRect = orangeRef.current.getBoundingClientRect();
          const blueRect = blueRef.current.getBoundingClientRect();
          const cubeRect = cubeRef.current.getBoundingClientRect();
          if (orangeRect && blueRect && cubeRect) {
            const blueX = blueRect.left + blueRect.width / 2;
            const blueY = blueRect.top + blueRect.height / 2;

            const cubeX = cubeRect.left + cubeRect.width / 2;
            const cubeY = cubeRect.top + cubeRect.height / 2;

            if (Math.abs(cubeX - blueX) < 10 && Math.abs(cubeY - blueY) < 25) {
              newX = orangeCoords.x + 15;
              newY = orangeCoords.y + 35 + 'px';
            }
          }
        }

        {
          const orangeRect = orangeRef.current.getBoundingClientRect();
          const blueRect = blueRef.current.getBoundingClientRect();
          const cubeRect = cubeRef.current.getBoundingClientRect();
          if (orangeRect && blueRect && cubeRect) {
            const blueX = orangeRect.left + orangeRect.width / 2;
            const blueY = orangeRect.top + orangeRect.height / 2;

            const cubeX = cubeRect.left + cubeRect.width / 2;
            const cubeY = cubeRect.top + cubeRect.height / 2;

            if (Math.abs(cubeX - blueX) < 10 && Math.abs(cubeY - blueY) < 25) {
              newX = blueCoords.x + 15;
              newY = blueCoords.y + 35 + 'px';
            }
          }
        }

        cubeRef.current.style.left = `${newX}px`;

        if (newY) cubeRef.current.style.top = newY;
      }

      setTimeout(nextTick, 15, id);
    };
    nextTick(id);
  }, [cubeRef, orangeCoords, blueCoords]);

  return (
    <div
      className='game portal'
      style={{
        backgroundImage: `url(${tile})`,
      }}
      ref={rootRef}
      onClick={(e) => {
        if (!blueRef.current || !orangeRef.current) return;

        const rect = rootRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left - 10;
        const y = e.clientY - rect.top - 35;

        if (placeBlue) {
          blueRef.current.style.left = x + 'px';
          blueRef.current.style.top = y + 'px';

          setBlueCoords({ x, y });
          setPlaceBlue(false);
        } else {
          orangeRef.current.style.left = x + 'px';
          orangeRef.current.style.top = y + 'px';

          setOrangeCoords({ x, y });
          setPlaceBlue(true);
        }
      }}
    >
      <img
        id='start'
        src={cubeGen}
        style={{
          bottom: (start * 15) / 8 + 'vw',
        }}
      />

      <img
        src={cube}
        ref={cubeRef}
        id='cube'
        style={{
          top: originalCubeY,
        }}
      />

      <img id='orange' src={orange} ref={orangeRef} />
      <img id='blue' src={blue} ref={blueRef} />
    </div>
  );
}

Portal.indication = 'Place le portail au bon endroit pour récupérer la clef';
