import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiSettings3Line } from 'react-icons/ri';

export default {
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  icon: RiSettings3Line,
  __experimental_actions: ['update', 'publish'],
  fieldsets: [
    {
      name: 'home',
      title: 'Home',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'scans',
      title: '3D Scans',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'ccpa',
      title: 'California Consumer Privacy Act (CCPA)',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'localization',
      title: 'Localization',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'note',
      type: 'note',
      options: {
        icon: AiOutlineQuestionCircle,
        headline: "What's This?",
        message:
          '<p>You can configure global site settings here.</p> <p>You can also configure settings for specific areas of the site that may not have an explicit page to edit, or settings that may be shared across document instances.</p>',
        tone: 'positive',
      },
    },
    {
      name: 'frontpage',
      title: 'Home Page',
      type: 'reference',
      to: [{ type: 'landingPage' }],
      description: 'Set the page that will be the home page',
      fieldset: 'home',
      validation: Rule => Rule.required(),
    },
    {
      name: 'scansDescription',
      title: '3D Scans Model Description',
      description:
        'This is the generic text that appears below each model on the individual model pages',
      type: 'blockContent',
      fieldset: 'scans',
    },
    {
      name: 'ccpaContent',
      title: 'CCPA Content',
      type: 'blockText',
      description:
        'Set the message for the CCPA banner. Leave blank to hide the banner.',
      fieldset: 'ccpa',
    },
    {
      name: 'displayLanguages',
      title: 'Visible Languages',
      type: 'array',
      description:
        'Set the languages that will be available in the locale switcher, it needs more than 2 to display.',
      of: [{ type: 'string' }],
      fieldset: 'localization',
      options: {
        list: [
          { title: 'English - United States', value: 'en-us' },
          { title: 'English - Australia', value: 'en-au' },
          { title: 'English - New Zealand', value: 'en-nz' },
        ],
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Config',
      };
    },
  },
};
