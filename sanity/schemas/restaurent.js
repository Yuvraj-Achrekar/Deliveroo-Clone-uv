import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurent',
  title: 'Restaurent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurent name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurent',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'latitude of the Restaurent',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitute of the Restaurent',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurent Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please Enter a value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
