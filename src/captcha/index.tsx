import { useRef, useState } from 'react';
import button from '../assets/captcha/button.png';
import buttonDisabled from '../assets/captcha/button_disabled.png';
import buttonHover from '../assets/captcha/button_highlighted.png';
import key from '../assets/captcha/key.webp';
import prison from '../assets/captcha/prison.webp';
import { Portal } from './games/portal';
import './index.css';

enum State {
  PRE = 'pre',
  INPROGRESS = 'inprogress',
  FINISHED = 'finished',
}

export default function Captcha() {
  const [state, setState] = useState<State>(State.PRE);

  // Generate a starting point y coordinate between 1 and 16 with a middle point between all games
  const y = new Array(2 + 1)
    .fill(0)
    .map(() => Math.floor(Math.random() * 8) + 1);

  const [indication, setIndication] = useState<string>('');
  const endKeyRef = useRef<HTMLImageElement>(null);

  return (
    <div className='captcha'>
      <h1>Défis Captcha</h1>

      <span id='validation'>
        <img
          src={prison}
          className={`${state === State.PRE ? 'pre' : ''} ${
            state === State.INPROGRESS ? 'inprogress' : ''
          } ${state === State.FINISHED ? 'finished' : ''}`}
        />
        <button
          disabled={state === State.INPROGRESS}
          onClick={(e) => {
            // @ts-ignore
            e.target?.blur?.();

            if (state === State.PRE) {
              setState(State.INPROGRESS);
              // @ts-ignore
              setIndication(randomGames[0].indication);
            }

            if (state === State.FINISHED) {
              window.location.replace('/');
            }
          }}
          style={{
            // @ts-ignore
            '--background': `url(${button})`,
            '--background-hover': `url(${buttonHover})`,
            '--background-disabled': `url(${buttonDisabled})`,
          }}
        >
          Je ne suis pas un robot
        </button>
      </span>

      {state === State.INPROGRESS && (
        <>
          <span>Indication: {indication}</span>

          <div id='games'>
            <Portal
              active
              start={y[0]}
              end={1}
              onSuccess={() => {
                setState(State.FINISHED);
                setTimeout(() => {
                  if (endKeyRef.current) {
                    endKeyRef.current.style.display = 'none';
                  }
                }, 1000);
              }}
            />

            <span
              id='key'
              style={{
                // @ts-ignore
                '--y': `${y[y.length - 1]}`,
              }}
            >
              <img src={key} />
            </span>
          </div>
        </>
      )}

      {state === State.FINISHED && (
        <img ref={endKeyRef} src={key} id='end-key' />
      )}
    </div>
  );
}
