import {defineField, defineType} from 'sanity'

export default ({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string"
    },
    {
      name: "progress",
      title: "Progress",
      type: "number", 
      description: "Progess of skill 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
      options: {
        hotspot: true
      }
    },
    {
      name: "image",
      title: "image",
      type: "image",
      option: {
        hotspots: true
      }
    }
  ]
})
