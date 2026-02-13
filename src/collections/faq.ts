import type { CollectionConfig } from 'payload'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'isActive'],
  },
  access: {
    read: () => true, // public
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText', // or 'textarea' if you want simple text
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower number appears first',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },

    // Optional (very powerful later):
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
    },
  ],
}
