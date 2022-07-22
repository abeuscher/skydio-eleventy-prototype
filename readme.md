Note: Windows users need to:
npm install -g win-node-env

TODO:

Build:

- Make a filter for Sanity Link
- Header,Footer
- Styles
- Components
  - Page Modules
  - Module Parts

Pieces:

- What parts are worth rethinking in this pass (stretch goals)?
  - Can we implement any export / import between environments?
- What parts MUST be rethought in this pass?
  - Loc Logic
  - Image and Video presentation
  - <head> contents and assembly
  - Deployment / git repo webhooks and netlify integration.
  - Shopify connection (for cart number)
  - Swiper implementation

Approach:

- We should each pick a module at a time and make sure to split up hard parts.
- We make sure we know who is handling the smaller peices - video, image, link, etc.
- As we go, the smaller pieces will get refined as we add themin to each new module.
- It would be nice to target the homepage and then the blog entries as the first things to have completed.
