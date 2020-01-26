const config = {
  siteTitle: "IEEE SB GCEK", // Site title.
  siteTitleShort: "IEEE SB GCEK", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "IEEE SB GCEK", // Alternative site title for SEO.
  siteLogo: "/logos/ieee.png", // Logo used for SEO and manifest.
  siteUrl: "https://ieeesbgcek.org", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The official website for the IEEE Student Branch of GCEK.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  disqusShortname: process.env.GATSBY_DISQUS_SHORT_NAME,
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  // userName: "Advanced User", // Username to display in the author segment.
  // userEmail: "AdvancedUser@example.com", // Email used for RSS feed's author segment
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  // userLocation: "North Pole, Earth", // User location to display in the author segment.
  // userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  // userDescription:
  //   "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/IEEESB.GCEK/",
    },
    {
      label: "LinkedIn",
      url: "https://in.linkedin.com/company/ieee-sb-gcek",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/ieeesbgcek/"
    },
    {
      label: "Email",
      url: "mailto:ieeesb@gcek.ac.in"
    }
  ],
  copyright: "Copyright © " + new Date().getFullYear() + " IEEE – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#00629B", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
