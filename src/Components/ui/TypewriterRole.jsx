import useTypewriter from "../../hooks/useTypewriter";

// Isolated so the typewriter's per-character state updates only re-render
// this small span, not the whole hero section, for as long as the tab stays open.
const TypewriterRole = ({ roles }) => {
  const role = useTypewriter(roles);
  return <>{role}</>;
};

export default TypewriterRole;
