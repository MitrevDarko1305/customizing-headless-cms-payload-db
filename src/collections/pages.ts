import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // public
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Example: about, services, contact. Use "home" for the homepage.' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      required: true,
    },

    // Simple flexible content without a full page-builder:
    {
      name: 'heroHeading',
      type: 'text',
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
    {
    name: 'faqSection',
    type: 'group',
    fields: [
    { name: 'title', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
},

  ],
}
