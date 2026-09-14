import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const useTypewriter = (
  words,
  { typingSpeed = 80, deletingSpeed = 40, pause = 1800 } = {}
) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduceMotion ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, reduceMotion]);

  return reduceMotion ? words[0] : text;
};

export default useTypewriter;
