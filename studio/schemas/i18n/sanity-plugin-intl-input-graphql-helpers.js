// helper function which adds i18n config to each schema with type === 'document' to dynamically add the configs and fields to all the custom schema types
// Languages are set in main plugin config (/studio/config/intl-input.json)
export const addLocalizationToDocumentType = schemaType => {
  if (schemaType.type !== 'document') {
    return schemaType;
  }

  return {
    ...schemaType,
    i18n: {
      ...schemaType.i18n,
      // change the names of the default fields
      fieldNames: {
        lang: 'i18n_lang',
        references: 'i18n_refs',
      },
    },
    // add the fields in so we can query with them on graphql
    fields: [
      ...schemaType.fields,
      {
        name: 'i18n_lang',
        type: 'string',
        hidden: true,
      },
      {
        name: 'i18n_refs',
        type: 'array',
        hidden: true,
        of: [
          {
            type: 'i18n_refs_object',
          },
        ],
      },
    ],
  };
};

export const addLocalizationToSchemaType = schemaType => {
  // Filter only the document types we want the localization fields added to
  const localizedTypes = [
    'page',
    'landingPage',
    'navigation',
    'announcementBanner',
    'indexPage',
    'model',
    'modelCollection',
    'episode',
    'series',
    'post',
    'event',
    'resource',
    'resourceType',
    'category',
    'newsroom',
  ];

  if (
    schemaType.type === 'object' ||
    !localizedTypes.includes(schemaType.name)
  ) {
    return schemaType;
  }

  return addLocalizationToDocumentType(schemaType);
};

export const createi18RefsObject = customSchemaTypes => ({
  name: 'i18n_refs_object',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'lang',
    },
    {
      type: 'reference',
      name: 'ref',
      // map over all the custom values to create a dynamic array of types which should be referenced
      to: customSchemaTypes
        .map(customSchema =>
          customSchema?.type === 'document'
            ? { type: customSchema.name }
            : null,
        )
        .filter(Boolean),
    },
  ],
});
