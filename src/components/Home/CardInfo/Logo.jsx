//dibuat oleh cey
import { motion } from "framer-motion"

export default function Logo({ title, text, color, image }) {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all ${color}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-white">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <p className="text-sm opacity-90">{text}</p>
      </div>
    </motion.div>
  )
}
