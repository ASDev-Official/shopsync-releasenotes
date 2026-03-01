import type {
	ExpressiveCodeConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "ShopSync Release Notes",
	subtitle: "",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 150, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "/images/shopsync-logo.png", // Path of the favicon, relative to the /public directory
		},
	],
	// Google Analytics - replace with your measurement ID
	googleAnalytics: {
		id: "G-MM28T9KL97",
	},
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "RSS Feed",
			url: "/rss.xml",
			external: false,
		},
		{
			name: "ShopSync",
			url: "https://shopsync.aadish.dev",
			external: true,
		},
		{
			name: "GitHub",
			url: "https://github.com/ASDev-Official/shopsync-releasenotes",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/shopsync-logo.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "ShopSync",
	bio: "Latest release updates and features",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/ASDev-Official/shopsync",
		},
	],
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
