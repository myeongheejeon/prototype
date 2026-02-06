'use client'

import React, { useEffect } from 'react'

const BODY_CLASS = 'design-a-body'

export default function DesignALayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.classList.add(BODY_CLASS)
    return () => document.body.classList.remove(BODY_CLASS)
  }, [])

  return <>{children}</>
}
