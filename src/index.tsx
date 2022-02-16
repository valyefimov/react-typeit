import { useState } from 'react';

export type Props = {
  strings: String[];
  startDelay?: number;
  typingDelay?: number;
};

export default function TypeIt({ strings, startDelay, typingDelay = 20 }: Props) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const count = strings.reduce((acc, string) => {
    return acc + string.length;
  }, 0);

  if (visibleIndex <= count) {
    const delay = startDelay && visibleIndex === 0 ? startDelay : typingDelay;

    setTimeout(() => {
      setVisibleIndex(visibleIndex + 1);
    }, delay);
  }

  let index = 0;

  return (
      <>
        {strings.map((string) => {
          return string.split('').map((char) => {
            index++;

            return (
              <span key={char + index} style={{ opacity: index < visibleIndex ? 1 : 0 }}>
                {char}
              </span>
            );
          });
        })}
      </>
  );
}
