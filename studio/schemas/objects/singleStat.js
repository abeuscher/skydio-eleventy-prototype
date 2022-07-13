export default {
  title: 'Single Stat',
  name: 'singleStat',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      type: 'string',
      name: 'headline',
    },
    {
      title: 'Statistic',
      type: 'string',
      name: 'stat',
    },
    {
      title: 'Flair Text',
      type: 'string',
      description: 'Optional Text To Call out stat',
      name: 'flairText',
    },
    {
      title: 'Flair Text Style',
      type: 'string',
      description: 'Optional Class for special text under stat',
      name: 'flairTextStyle',
    },
  ],
};
