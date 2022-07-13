import { MdOpenInBrowser } from 'react-icons/md';

export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: MdOpenInBrowser,
  fields: [
    {
      name: 'fromPath',
      title: 'From Path',
      type: 'string',
      description:
        'Old slug being redirected FROM. Use preceding slash (e.g. "/help")',
      validation: Rule => Rule.required(),
    },
    {
      name: 'toPath',
      title: 'To Path',
      type: 'string',
      description:
        'New slug being redirected TO. For relative links use preceding slash (e.g. "/support"), otherwise use fully qualified domain.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'statusCode',
      title: 'Status Code',
      type: 'number',
      description:
        'Default: 302 (temporary redirect). Permanent: 301. Not Found: 404. For any other uses, refer to this guide: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',
    },
  ],
  preview: {
    select: {
      to: 'toPath',
      from: 'fromPath',
    },
    prepare(selection) {
      const { to, from } = selection;
      return {
        title: `${from} ➡️ ${to}`,
      };
    },
  },
};
