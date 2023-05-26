const { useState } = require("react");

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return { openHandler, isOpen, closeHandler };
};

export default useModal;
