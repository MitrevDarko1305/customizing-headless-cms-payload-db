import type { CollectionConfig } from 'payload'


export const services: CollectionConfig = {
    slug: "services", 
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true,
    },

   fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
    name: "slug",
    type: "text",
    required: true,
    unique: true,
     admin: { description: 'Example: about, services, contact. Use "home" for the homepage.' },
    },
    {
        name: "excerpt",
        type: "textarea",
    },
    {
        name: "featuredImage",
         type: "upload",
         relationTo: "media",

    },

    {
    name: 'status',
    type: 'select',
    defaultValue: 'draft',
    options: [
    { label: 'Draft', value: 'draft' },
    { label: 'Published', value: 'published' },
     ],
    },
     {
      name: 'iconKey',
      type: 'select',
      options: [
        { label: 'Stethoscope', value: 'stethoscope' },
        { label: 'Sparkles', value: 'sparkles' },
        { label: 'Align Center', value: 'alignCenter' },
        { label: 'Shield', value: 'shield' },
        { label: 'Heart Pulse', value: 'heartPulse' },
        { label: 'Smile', value: 'smile' },
      ],
    },

    {
        name: "longDescription",
        type: "richText",
    },
     {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },

      {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },

        {
            name: 'seo',
            type: 'group',
            fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
]
}
    
