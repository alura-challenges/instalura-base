import React from 'react';

export function useOnScreen(options = {}) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    // eslint-disable-next-line no-unused-expressions
    ref && observer.observe(ref);

    return () => ref && observer.unobserve(ref);
  }, [ref, options]);

  return [setRef, visible];
}
