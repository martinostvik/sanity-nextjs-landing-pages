export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48c68e24ed647fccac60cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gabxmhmj',
                  apiId: '89ee9a99-2f92-4718-9a73-f1b7b5c9e999'
                },
                {
                  buildHookId: '5f48c68ea1413d5d623b531b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9vafpwrr',
                  apiId: '761965eb-0a47-48d4-a5a6-04ce4ff91670'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinostvik/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9vafpwrr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
