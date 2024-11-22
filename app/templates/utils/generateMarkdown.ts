// utils/generateMarkdown.ts
type MarkdownData = {
  app_url: string;
  app_logo_url: string;
  app_name: string;
  app_description: string;
  badge_url: string;
  badge_img_url: string;
  badge_alt_text: string;
  gitter_url: string;
  gitter_badge_url: string;
  gitter_badge_alt: string;
  thanks_url: string;
  thanks_badge_url: string;
  thanks_badge_alt: string;
  donate_url: string;
  donate_badge_url: string;
  donate_badge_alt: string;
  screenshot_url: string;
  repo_url: string;
  repo_name: string;
  download_url: string;
  email: string;
  features: string[];
  packages: { name: string; url: string }[];
  related_projects: { name: string; url: string; description: string }[];
  buy_me_a_coffee_url: string;
  buy_me_a_coffee_img_url: string;
  patreon_url: string;
  patreon_img_url: string;
  license: string;
  author_website: string;
  author_website_url: string;
  github_username: string;
  github_url: string;
  twitter_username: string;
  twitter_url: string;
};

export const generateMarkdown = (data: MarkdownData): string => {
  const featuresList = data.features
    .map((feature) => `* ${feature}`)
    .join("\n");
  const packagesList = data.packages
    .map((pkg) => `- [${pkg.name}](${pkg.url})`)
    .join("\n");
  const relatedProjectsList = data.related_projects
    .map(
      (project) =>
        `- [${project.name}](${project.url}) - ${project.description}`,
    )
    .join("\n");

  return `
  <h1 align="center">
    <br>
    <a href="${data.app_url}"><img src="${data.app_logo_url}" alt="${data.app_name}" width="200"></a>
    <br>
    ${data.app_name}
    <br>
  </h1>
  
  <h4 align="center">${data.app_description}</h4>
  
  <p align="center">
    <a href="${data.badge_url}">
      <img src="${data.badge_img_url}" alt="${data.badge_alt_text}">
    </a>
    <a href="${data.gitter_url}">
      <img src="${data.gitter_badge_url}" alt="${data.gitter_badge_alt}">
    </a>
    <a href="${data.thanks_url}">
      <img src="${data.thanks_badge_url}" alt="${data.thanks_badge_alt}">
    </a>
    <a href="${data.donate_url}">
      <img src="${data.donate_badge_url}" alt="${data.donate_badge_alt}">
    </a>
  </p>
  
  <p align="center">
    <a href="#key-features">Key Features</a> •
    <a href="#how-to-use">How To Use</a> •
    <a href="#download">Download</a> •
    <a href="#credits">Credits</a> •
    <a href="#related">Related</a> •
    <a href="#license">License</a>
  </p>
  
  ![screenshot](${data.screenshot_url})
  
  ## Key Features
  
  ${featuresList}
  
  ## How To Use
  
  To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
  
  \`\`\`bash
  # Clone this repository
  $ git clone ${data.repo_url}
  
  # Go into the repository
  $ cd ${data.repo_name}
  
  # Install dependencies
  $ npm install
  
  # Run the app
  $ npm start
  \`\`\`
  
  > **Note**
  > If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use \`node\` from the command prompt.
  
  ## Download
  
  You can [download](${data.download_url}) the latest installable version of ${data.app_name} for Windows, macOS, and Linux.
  
  ## Emailware
  
  ${data.app_name} is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you to send me an email at <${data.email}> about anything you'd want to say about this software. I'd really appreciate it!
  
  ## Credits
  
  This software uses the following open source packages:
  
  ${packagesList}
  
  ## Related
  
  ${relatedProjectsList}
  
  ## Support
  
  <a href="${data.buy_me_a_coffee_url}" target="_blank"><img src="${data.buy_me_a_coffee_img_url}" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>
  
  <p>Or</p> 
  
  <a href="${data.patreon_url}">
      <img src="${data.patreon_img_url}" width="160">
  </a>
  
  ## You may also like...
  
  ${relatedProjectsList}
  
  ## License
  
  ${data.license}
  
  ---
  
  > [${data.author_website}](${data.author_website_url}) &nbsp;&middot;&nbsp;
  > GitHub [@${data.github_username}](${data.github_url}) &nbsp;&middot;&nbsp;
  > Twitter [@${data.twitter_username}](${data.twitter_url})
  `;
};
