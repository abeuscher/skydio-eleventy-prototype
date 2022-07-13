export default {
  name: 'newsroomMain',
  title: 'Newsroom Page Content',
  type: 'object',
  fields: [
    {
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      description: 'This displays at top of page above content',
    },
    {
      name: 'headerText',
      title: 'Header Text',
      type: 'blockText',
      description:
        'This displays at top of page above content. Limit 250 characters',
      validation: Rule => Rule.required().max(250),
    },
    {
      name: 'headerButtons',
      title: 'Header Buttons',
      description: 'These will dispay underneath header text above articles',
      type: 'array',
      of: [
        {
          type: 'button',
        },
      ],
    },
    {
      name: 'featuredArticle',
      title: 'Featured Article',
      description: 'Top Listed article.',
      type: 'reference',
      to: {
        type: 'post',
      },
    },
    {
      name: 'featuredArticleTitle',
      title: 'Featured Article Title',
      type: 'string',
      description: 'Label for Featured Article',
    },
    {
      name: 'announcementsTitle',
      title: 'Announcements Title',
      type: 'string',
      description: 'Label for Announcements',
    },
    {
      name: 'mentionsTitle',
      title: 'Mentions Title',
      type: 'string',
      description: 'Label for Mentions',
    },
    {
      name: 'announcementsButton',
      title: 'Announcements Button',
      type: 'string',
      description: 'Button Label to point to announcements',
    },
    {
      name: 'moreButton',
      title: 'More Button',
      type: 'string',
      description: 'Label for More Mentions',
    },
    {
      name: 'lessButton',
      title: 'Less Button',
      type: 'string',
      description: 'Label for Less Mentions',
    },
  ],
};
