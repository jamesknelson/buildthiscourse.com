export const bodyText = {
  name: 'bodyText',
  type: 'array',
  title: 'Body text',
  of: [
    {
      type: 'block',
    },
    {
      type: 'imageWithAlt',
    },
    {
      type: 'code',
    },
  ],
}

export const bodyImage = {
  name: 'imageWithAlt',
  type: 'image',
  fields: [
    {
      type: 'text',
      name: 'alt',
      title: 'Alternative text',
      description: `Some of your visitors cannot see images,
        be they blind, color-blind, low-sighted;
        alternative text is of great help for those
        people that can rely on it to have a good idea of
        what\'s on your page.`,
    },
  ],
}

// export const demoboard = {
//   name: 'bodyText',
//   type: 'array',
//   title: 'Demoboard',
//   of: [
//     {
//       type: 'block',
//     },
//   ],
// }
