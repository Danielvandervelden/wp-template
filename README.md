# WordPress template

This is my personal WordPress template. There's a lot here already properly configured. We have sample blocks, TypeScript, SCSS, working menu (as well as mobile menu), logo upload, social media customizer fields and a lot more.

## How to use

1. Clone this repository
2. Run `bun install` in the `theme-name` folder
3. Run `bun run build` to build the theme
4. Run `bun start` to start the development server
   
## Updating custom blocks

Custom blocks are located in `wp-content/plugins/daniel-custom-blocks`. In order to develop them, you will need to `npm install` followed by `npm start`. To build for production, run `npm run build`. If you want to add another plugin, go into the `src` folder within your terminal and run `npx @wordpress/create-block` this will open the initializer for the block. Make sure to update `wp-content/plugins/daniel-custom-blocks/daniel-custom-blocks.php` with the newly created block.

