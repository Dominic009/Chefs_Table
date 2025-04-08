import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, closeModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-black/60 backdrop-blur-md fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative border w-[90%] xl:w-[50%] 2xl:w-[35%] bg-white px-5 py-5 rounded-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
          <button
            onClick={closeModal}
            className="text-white bg-red-600 w-10 h-10 rounded-full absolute -top-3 -right-3"
          >
            X
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
