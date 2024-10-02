'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function ImageCoverReveal({
  children,
  duration = 1,
  delay = 0,
  color = '#101010',
}) {
  const [overlayVisible, setOverlayVisible] = useState(true)

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {overlayVisible && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: color,
            zIndex: 999,
          }}
          initial={{ height: '100%' }}
          whileInView={{ height: 0, top: '100%' }}
          transition={{ duration, delay }}
          viewport={{
            once: true,
          }}
          onAnimationComplete={() => setOverlayVisible(false)}
        />
      )}
      <motion.div>{children}</motion.div>
    </div>
  )
}
