'use client'

import { PortableText } from '@portabletext/react'

const components = {
  types: {},
  marks: {
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-brand1 underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-6 mb-2">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold mt-6 mb-2">{children}</h2>,
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return (
    <PortableText
      value={value}
      components={components}
    />
  )
}