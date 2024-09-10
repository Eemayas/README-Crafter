import SocialIcon from "@/components/social-icons";
import Link from "next/link";

const socialMediaLinks = {
  author: "Prashant Manandhar",
  title: "README Crafter",
  language: "en-us",
  siteUrl: "https://eemayas.vercel.app/",
  siteRepo: "https://github.com/Eemayas/Personal-Portfolio",
  siteLogo: "/assets/Favicon/apple-touch-icon.png",
  socialBanner: "/assets/Profilepic.webp",
  mastodon: "https://mastodon.social/@mastodonuser",
  email: "prashantmanandhar2002@gmail.com ",
  github: "https://github.com/Eemayas",
  x: "https://x.com/PrashantManand8",
  facebook: "https://www.facebook.com/prashant.manandhar.88/",
  youtube: "https://www.youtube.com/channel/UC48ObF2A5sOK02kZWwZ4PEQ",
  linkedin: "https://www.linkedin.com/in/prashant-manandhar/",
  threads: "https://www.threads.net/@prashant__manandhar",
  instagram: "https://www.instagram.com/prashant__manandhar/",
};

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${socialMediaLinks.email}`}
            size={6}
          />
          <SocialIcon kind="github" href={socialMediaLinks.github} size={6} />
          <SocialIcon
            kind="facebook"
            href={socialMediaLinks.facebook}
            size={6}
          />
          <SocialIcon kind="youtube" href={socialMediaLinks.youtube} size={6} />
          <SocialIcon
            kind="linkedin"
            href={socialMediaLinks.linkedin}
            size={6}
          />
          <SocialIcon kind="twitter" href={socialMediaLinks.x} size={6} />
          <SocialIcon kind="x" href={socialMediaLinks.x} size={6} />
          <SocialIcon
            kind="instagram"
            href={socialMediaLinks.instagram}
            size={6}
          />
          <SocialIcon kind="threads" href={socialMediaLinks.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm">
          <div>{socialMediaLinks.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{socialMediaLinks.title}</Link>
        </div>
      </div>
      
    </footer>
  );
}
