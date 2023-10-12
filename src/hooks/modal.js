import { useState } from "react";

/**
 * @function useModal
 * hook para el control de la instancia de un modal
 *  
 * @return {Array} variable de estado del modal
 * y función para cambiar el estado
 */
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return [isOpen, toggle];
}
