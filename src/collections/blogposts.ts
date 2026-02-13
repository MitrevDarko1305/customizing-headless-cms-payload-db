import type { CollectionConfig } from "payload"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "kicker", "status", "publishedAt", "readTimeMinutes"],
  },
  access: { read: () => true },
  fields: [
    // Card fields
    { name: "kicker", type: "text", required: true },          // "Treatment options"
    { name: "title", type: "text", required: true },           // big title
    { name: "description", type: "textarea", required: true }, // card excerpt/description

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },

    { name: "authorName", type: "text", required: true },      // "Darko Mitrev"
    {
      name: "authorAvatar",
      type: "upload",
      relationTo: "media",
      required: false,
    },

    {
      name: "publishedAt",
      type: "date",
      required: true,
      admin: { date: { pickerAppearance: "dayOnly" } },
    },

    { name: "readTimeMinutes", type: "number", defaultValue: 5 },

    // Optional but very useful
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: 'Example: "treatment-options"' },
    },

    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      required: true,
    },

    {
      name: "showOnHome",
      type: "checkbox",
      defaultValue: false,
    },

    // For full blog page later
    {
      name: "content",
      type: "richText",
      required: false,
    },
  ],
}

