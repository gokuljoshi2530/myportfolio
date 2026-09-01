// ============================================================================
//  SITE CONTENT — edit everything here. No need to touch the components.
//  Replace placeholder images/videos with your own (drop files in /public and
//  use "/your-file.jpg", or paste any image/video URL).
// ============================================================================

// Reliable placeholder image helper (random-but-stable photos by seed).
const pic = (seed, w = 800, h = 600, extra = "") =>
  `https://picsum.photos/seed/${seed}/${w}/${h}${extra}`;

// Stable cinematic sample videos — swap for your own reels (e.g. "/videos/showreel.mp4").
// HERO_VIDEO: short 10s loop (~1MB). SHOWREEL_VIDEO: full trailer (W3C-hosted).
const HERO_VIDEO =
  "https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4";
const SHOWREEL_VIDEO = "https://media.w3.org/2010/05/sintel/trailer.mp4";

export const socials = [
  { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { name: "YouTube", href: "https://youtube.com/", icon: "youtube" },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { name: "Behance", href: "https://behance.net/", icon: "behance" },
];

export const siteConfig = {
  name: "Gokul Joshi",
  firstName: "Gokul",
  role: "Professional Video Editor",
  tagline: "Turning Raw Footage Into Engaging Stories",
  subheadline:
    "Professional Video Editor | Reels | YouTube Videos | Ads | Commercials | Social Media Content",
  email: "gokuljoshi678@gmail.com",
  phoneDisplay: "+91 8708268010",
  phoneTel: "+918708268010", // tel: + country code, no spaces
  whatsapp: "918708268010", // wa.me country code, no "+" / spaces
  location: "India · Available Worldwide",
  url: "https://gokuljoshi.com", // <-- replace with your real domain (used for SEO)
  socials,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Showreel", href: "#showreel" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const media = {
  heroVideo: HERO_VIDEO,
  heroPoster: pic("herofilm", 1920, 1080, "?grayscale"),
  showreelVideo: SHOWREEL_VIDEO,
  showreelPoster: pic("showreel2025", 1600, 900),
  about: pic("editorportrait", 800, 1000),
  beforeAfter: {
    // Same seed → same scene; grayscale "before" vs color "after" = a believable
    // colour-grading comparison out of the box.
    before: pic("gradeshot", 1280, 720, "?grayscale"),
    after: pic("gradeshot", 1280, 720),
  },
};

export const expertise = [
  { title: "Video Editing", icon: "scissors", desc: "Seamless cuts, pacing & narrative flow." },
  { title: "Color Grading", icon: "droplet", desc: "Cinematic looks & consistent tones." },
  { title: "Motion Graphics", icon: "layers", desc: "Titles, lower-thirds & animated assets." },
  { title: "Social Media Content", icon: "smartphone", desc: "Scroll-stopping vertical formats." },
  { title: "Advertisement Videos", icon: "trending", desc: "Persuasive, conversion-driven edits." },
  { title: "YouTube Editing", icon: "youtube", desc: "Retention-focused long-form stories." },
];

export const services = [
  {
    num: "01",
    title: "Video Editing",
    icon: "scissors",
    desc: "Professional editing that shapes raw clips into a polished, story-driven final cut.",
  },
  {
    num: "02",
    title: "Reels Editing",
    icon: "instagram",
    desc: "Punchy, trend-aware vertical edits engineered to stop the scroll and boost reach.",
  },
  {
    num: "03",
    title: "YouTube Editing",
    icon: "youtube",
    desc: "Retention-optimised long-form edits with hooks, b-roll and clean pacing.",
  },
  {
    num: "04",
    title: "Motion Graphics",
    icon: "layers",
    desc: "Custom titles, transitions and animated graphics that elevate every frame.",
  },
  {
    num: "05",
    title: "Color Grading",
    icon: "droplet",
    desc: "Cinematic colour treatment for a premium, consistent and emotive look.",
  },
  {
    num: "06",
    title: "Advertisement Editing",
    icon: "trending",
    desc: "High-converting ad creatives crafted to sell products and grow brands.",
  },
];

export const stats = [
  { value: 520, suffix: "+", label: "Projects Completed", icon: "film" },
  { value: 140, suffix: "+", label: "Happy Clients", icon: "users" },
  { value: 6, suffix: "+", label: "Years Experience", icon: "clock" },
  { value: 900, suffix: "+", label: "Videos Edited", icon: "video" },
];

export const portfolioCategories = [
  "All",
  "Reels",
  "YouTube",
  "Commercials",
  "Motion Graphics",
];

export const portfolioItems = [
  { id: 1, title: "Neon Nights", category: "Reels", client: "Lifestyle Brand", image: pic("neonnights", 800, 600) },
  { id: 2, title: "The Founder's Story", category: "YouTube", client: "Tech Startup", image: pic("founderstory", 800, 600) },
  { id: 3, title: "Aurora Skincare", category: "Commercials", client: "Beauty Co.", image: pic("auroraskincare", 800, 600) },
  { id: 4, title: "Kinetic Type", category: "Motion Graphics", client: "Music Label", image: pic("kinetictype", 800, 600) },
  { id: 5, title: "Street Food Diaries", category: "Reels", client: "Food Creator", image: pic("streetfood", 800, 600) },
  { id: 6, title: "SaaS Explainer", category: "YouTube", client: "B2B Software", image: pic("saasexplainer", 800, 600) },
  { id: 7, title: "Drive Electric", category: "Commercials", client: "Auto Brand", image: pic("driveelectric", 800, 600) },
  { id: 8, title: "Logo Sting Pack", category: "Motion Graphics", client: "Agency", image: pic("logosting", 800, 600) },
  { id: 9, title: "Travel Montage", category: "Reels", client: "Travel Vlogger", image: pic("travelmontage", 800, 600) },
];

export const testimonials = [
  {
    name: "Harman",
    role: "Founder, Digital Marketing Agency",
    // avatar: "https://i.pravatar.cc/200?img=12",
    rating: 5,
    quote:
      "Gokul turned our raw event footage into a cinematic story that doubled our engagement. A true professional who just gets pacing and emotion.",
  },
  {
    name: "Anmol",
    role: "Marketing Lead,Bhatinda",
    // avatar: "https://i.pravatar.cc/200?img=45",
    rating: 5,
    quote:
      "The ad edits he delivered outperformed every creative we'd run before. Clean, punchy and on-brand. Our ROAS thanks him.",
  },
  // {
  //   name: "Rohan Verma",
  //   role: "YouTuber, 1.2M Subs",
  //   avatar: "https://i.pravatar.cc/200?img=33",
  //   rating: 5,
  //   quote:
  //     "My retention graphs have never looked better. The hooks, b-roll and rhythm are next level. Easily the best editor I've worked with.",
  // },
  // {
  //   name: "Mia Chen",
  //   role: "Creative Director, Nova",
  //   avatar: "https://i.pravatar.cc/200?img=20",
  //   rating: 5,
  //   quote:
  //     "Reliable, fast and ridiculously talented. The colour grade alone made our product look ten times more premium. Highly recommend.",
  // },
  // {
  //   name: "Daniel Okafor",
  //   role: "Brand Owner, FitFuel",
  //   avatar: "https://i.pravatar.cc/200?img=68",
  //   rating: 5,
  //   quote:
  //     "From reels to commercials, every single delivery exceeded expectations. Gokul is now our go-to editor for everything video.",
  // },
];
