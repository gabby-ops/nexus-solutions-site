import { useState, useEffect } from 'react';

/**
 * @param {boolean} enabled
 * @param {string[]} sectionIds in scroll order (first section = top of page uses `topId` before first id)
 * @param {string} topId id when scroll is above first section
 */
export function useScrollSpySection(enabled, sectionIds, topId = 'inicio') {
  const [active, setActive] = useState(topId);

  useEffect(() => {
    if (!enabled) return undefined;

    const measure = () => {
      const y = window.scrollY + 120;
      const first = document.getElementById(sectionIds[0]);
      if (first && y < first.offsetTop - 24) {
        setActive(topId);
        return;
      }
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 48) current = id;
      }
      setActive(current);
    };

    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [enabled, sectionIds, topId]);

  return active;
}
