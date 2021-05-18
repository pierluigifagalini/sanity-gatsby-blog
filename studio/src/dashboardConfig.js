export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a3731c5429d6afbddca1c5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6kdk3e51",
                  apiId: "9c81500a-c3a6-4773-a7ab-fc5b6049298d",
                },
                {
                  buildHookId: "60a3731c5429d6b873dca06f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2fxsici5",
                  apiId: "b629cdf7-57e0-4f75-a495-7741b46d2d21",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pierluigifagalini/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2fxsici5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
