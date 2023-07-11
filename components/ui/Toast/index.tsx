import { AnimatePresence, m as motion } from "framer-motion"

import Icon from "@/components/Icon"

import { useToast } from "./context"

const Toast = () => {
  const { toasts, removeToast } = useToast()

  if (!Object.values(toasts).length) return null

  return (
    <>
      {Object.values(toasts).map((toast, idx) => (
        <AnimatePresence key={`toast-${toast.id}`}>
          {toast.visible && (
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: "100%" }}
              drag="x"
              dragElastic={false}
              dragConstraints={{ left: -100, right: 0 }}
              whileDrag={{ opacity: 0.85, transition: { duration: 0.1 } }}
              onDrag={(_, info) => {
                if (info.offset.x > 100) {
                  removeToast(toast.id || "")
                }
              }}
              className={`toast toast-end`}
              style={{ top: `${idx * 140}px` }}
            >
              <div className="alert flex-col flex items-start gap-1 lg:gap-2">
                <div className="flex gap-2 items-center">
                  {toast.variant === "success" && (
                    <Icon type="success" className="text-success w-7 h-7 " />
                  )}
                  {toast.variant === "error" && (
                    <Icon type="error" className="text-error w-7 h-7 " />
                  )}
                  <span className="title mr-8">{toast.title}</span>
                </div>

                <span>{toast.message}</span>
              </div>

              <button
                className="close"
                onClick={() => removeToast(toast.id || "")}
              >
                <Icon type="close" className="h-7 w-7" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </>
  )
}

export default Toast
