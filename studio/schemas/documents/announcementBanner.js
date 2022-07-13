import { RiFlag2Line } from 'react-icons/ri';

const maxChars = 90;

export default {
  name: 'announcementBanner',
  title: 'Announcement Banner',
  type: 'document',
  icon: RiFlag2Line,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'announcementText',
      title: 'Content for announcement banner',
      description: `Max ${maxChars} characters. Can include links and emoji, but new lines are not valid. Leave blank to hide`,
      type: 'blockText',
      validation: Rule =>
        Rule.custom(blocks => {
          if (!blocks) {
            return true;
          }

          const textArray = blocks.map(block =>
            block.children.map(child => child.text),
          );

          const textString = textArray.join(' ');
          const characterCount = textString.length;

          // No new lines: carriage return, line feed or multiple blocks
          if (/[\r\r\n]/g.test(textString) || blocks.length > 1) {
            return 'Only one line of text is allowed in this input. Please remove all line breaks.';
          }

          if (characterCount > maxChars) {
            return 'Your announcement banner text is too long. Please limit to 90 characters.';
          }

          return true;
        }),
    },
    {
      name: 'announcementDisplayOnlyOnHomepage',
      title: 'Display only on Homepage',
      description:
        'Set to only show the banner when the user is on the homepage',
      type: 'boolean',
    },
    {
      name: 'announcementBannerBgColor',
      title: 'Announcement Banner Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Announcement Banner',
      };
    },
  },
};
