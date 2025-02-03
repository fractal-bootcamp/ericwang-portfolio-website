import {defineField, defineType} from 'sanity'
import {LemonIcon} from '@sanity/icons'

export const infoPanelType = defineType({
  name: 'infoPanel',
  title: 'Info Panel',
  type: 'document',
  icon: LemonIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule
        .required()
        .error('Name required')
    }),
    defineField({
      name: 'about',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'focus',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'contact',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({
                allowRelative: false, // Ensure only absolute URLs
                scheme: ['http', 'https'], // Allow only http or https
              }),
            },
            {
              name: 'urlText',
              title: 'URL Text',
              type: 'string', // Field for the text describing the link
              validation: (Rule) => Rule.required().max(100).warning('Keep link text concise.'),
            },
          ],
          preview: {
            select: {
              title: 'urlText',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})