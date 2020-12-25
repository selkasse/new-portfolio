export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fe58eeaa3b5c838c57dfaf4',
                  title: 'Sanity Studio',
                  name: 'new-portfolio-studio',
                  apiId: '14d7cf70-4367-4d05-b69a-7bab28d60188'
                },
                {
                  buildHookId: '5fe58eeabf1584135ad6ec58',
                  title: 'Portfolio Website',
                  name: 'new-portfolio-web',
                  apiId: '620890a3-a22d-4769-a273-da8ca7aa3822'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/new-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://new-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
