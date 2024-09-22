'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function ContentReveal({ children, duration = 1, delay = 0 }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, height: '0px' }}
        animate={{ opacity: 1, height: '100%' }}
        transition={{
          duration,
          delay,
        }}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
