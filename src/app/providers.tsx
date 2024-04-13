'use client'

import { NextUIProvider } from '@nextui-org/system'
// import { createContext } from 'react'

export function NUIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}


// export const ThemeContext = createContext({})