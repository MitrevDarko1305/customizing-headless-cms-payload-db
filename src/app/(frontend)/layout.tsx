import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A headless CMS built with React, Node, and TypeScript, ready to power your next project.Use it as you see fit',
  title: 'Darko Mitrev - Payload Next.js Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
