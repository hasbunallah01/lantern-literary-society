/**
 * Homepage content — edit this file to change homepage copy,
 * stats, steps and testimonials without touching components.
 */

export const hero = {
  eyebrow: "Read. Discuss. Discover. Connect.",
  title: "Where Authors Are Heard and Readers Connect",
  description:
    "The Lantern Literary Society is a book committee and reading community bringing authors and readers together through live conversation.",
  primaryCta: { label: "Join Our Community", href: "/contact" },
  secondaryCta: { label: "View Us Live", href: "https://youtube.com/@thebookcrew" },
  image: "",
  imageAlt: "",
} as const;

export const stats = [
  { value: 2500, suffix: "+", label: "Authors Featured" },
  { value: 50000, suffix: "+", label: "Readers Engaged" },
  { value: 300, suffix: "+", label: "Live Interviews" },
  { value: 100, suffix: "+", label: "Countries" },
] as const;

export const communityAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
] as const;

export const whyBookCrew = {
  title: "Why The Lantern",
  image:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Books arranged on a sunlit desk beside a plant",
  items: [
    {
      icon: "heart",
      title: "Our Mission",
      description:
        "To elevate authors' voices and create meaningful connections through live conversations.",
    },
    {
      icon: "target",
      title: "Our Purpose",
      description:
        "To inspire, engage, and build a supportive community where stories create real impact.",
    },
    {
      icon: "users",
      title: "Our Introduction",
      description:
        "We are a media platform dedicated to authors, readers, and the power of storytelling.",
    },
  ],
} as const;

export const whatWeDo = [
  {
    icon: "mic",
    title: "Live Author Spotlight",
    description: "We feature authors in live, engaging interviews.",
  },
  {
    icon: "clapperboard",
    title: "Visual Storytelling",
    description: "We create beautiful visuals that bring stories to life.",
  },
  {
    icon: "megaphone",
    title: "Author Promotion",
    description: "We help authors reach more readers.",
  },
  {
    icon: "handshake",
    title: "Community Engagement",
    description: "We build meaningful connections.",
  },
  {
    icon: "newspaper",
    title: "Media Features",
    description: "We highlight authors across platforms.",
  },
] as const;

export interface Spotlight {
  authorName: string;
  authorTitle: string;
  authorPhoto: string;
  /** Contact Author button target — social profile, email (mailto:), etc. */
  contactUrl: string;
  banner: string;
  bannerAlt: string;
  bookTitle: string;
  bookCover: string;
  tagline: string;
  genres: string[];
  /** Short 2–3 sentence homepage summary. */
  description: string;
  publishedDate: string;
  language: string;
  pages: string;
  /** "#" renders the button disabled until the page exists. */
  learnMoreUrl: string;
  buyUrl: string;
  /** Full profile (/spotlights) — entries without these show homepage-only. */
  fullDescription?: string[];
  bookQuote?: string[];
  aboutAuthor?: string[];
}

/** Featured Spotlight carousel + full profiles. One object per author. */
export const spotlights: Spotlight[] = [
  {
    authorName: "Jarrah White",
    authorTitle: "Author \u2022 Filmmaker \u2022 Astrophysicist \u2022 Geologist",
    authorPhoto: "/images/jarrah-white-avatar.jpg",
    contactUrl: "mailto:Jarrahw@gmail.com",
    banner: "/images/jarrah-white-banner.jpg",
    bannerAlt:
      "Featured author interview panel for Jarrah White and his spy thriller Trojan SMERSH",
    bookTitle: "Trojan SMERSH",
    bookCover: "/images/jarrah-white-cover.jpg",
    tagline: "What if there was something far more sinister planned for January 6?",
    genres: [
      "Spy Thriller",
      "Alternative History",
      "Political Thriller",
      "Military Fiction",
    ],
    description:
      "A gripping alternative-history spy thriller where rogue agent Sid Tanner uncovers a deadly conspiracy surrounding January 6, 2021. Combining espionage, political intrigue, military space missions, and international conflict, Trojan SMERSH delivers an intense story filled with danger, betrayal, and impossible choices.",
    publishedDate: "July 13, 2026",
    language: "English",
    pages: "752 pages",
    learnMoreUrl:
      "https://www.amazon.com/s/ref=dp_byline_sr_book_1?ie=UTF8&field-author=Jarrah+White&text=Jarrah+White&sort=relevancerank&search-alias=books",
    buyUrl: "https://a.co/d/03ihaK4U",
    fullDescription: [
      "Trojan SMERSH is an ambitious alternative-history thriller that blends espionage, geopolitics, military science, and speculative history into one high-stakes adventure.",
      "The novel follows rogue Australian intelligence agent and former US Space Force astronaut Sid Tanner after an attempt on his life places him at the center of an international conspiracy involving the Trump administration and the infamous Russian death squad SMERSH.",
      "Hunted by both allies and enemies, Tanner must infiltrate the January 6 Capitol riot to uncover a plot that threatens global security before his own past catches up with him.",
      "Rich with political suspense, action, and historical imagination, the novel explores loyalty, betrayal, sacrifice, and the consequences of hidden agendas while delivering a fast-paced cinematic experience.",
    ],
    aboutAuthor: [
      "Jarrah White is an Australian author, filmmaker, astrophysicist, and geologist whose passion for storytelling began during childhood, creating handmade picture books before he could even write.",
      "Inspired by authors such as Ian Fleming and Michael Crichton, along with real historical events and classic adventure stories, Jarrah spent nearly twenty-four years developing the world of Sid Tanner before publishing his debut novel.",
      "He holds qualifications in Screen & Media from the Sydney Institute of TAFE NSW and earned a Bachelor of Science with a major in Geology and a minor in Astronomy & Astrophysics from Macquarie University. Beyond writing, he has appeared in Australian television productions including Fat Pizza and Darradong Local Council.",
      "Trojan SMERSH is the first installment in an ongoing Sid Tanner thriller series and fulfills a promise he made to his late step-grandfather, whose encouragement inspired the project from the very beginning.",
    ],
  },
  {
    authorName: "Rose Rossner",
    authorTitle: "USA Today Bestselling Children's Author",
    authorPhoto: "/images/rose-rossner-avatar.jpg",
    contactUrl: "https://x.com/rose_rossner",
    banner: "/images/rose-rossner-banner.jpg",
    bannerAlt:
      "Thanks a Latte for Being My Teacher — book displayed with teacher-appreciation gifts on a chalkboard background",
    bookTitle: "Thanks a Latte for Being My Teacher!",
    bookCover: "/images/rose-rossner-cover.jpg",
    tagline: "Because the best teachers deserve a latte love!",
    genres: ["Children's Book", "Picture Book"],
    description:
      "A punderfully heartwarming picture book of appreciation from the USA Today bestselling series that brought you I Love You Like No Otter! Filled with playful rhymes and adorable illustrations, it's the perfect way to thank the teachers, mentors, and coaches who make learning awesome — for Teacher Appreciation Week, the last day of school, or any day worth a thank-you.",
    publishedDate: "March 4, 2025",
    language: "English",
    pages: "40 pages",
    learnMoreUrl: "https://www.amazon.com/Rose-Rossner/e/B091CBJJGY/ref=aufs_dp_fta_an_dsk",
    buyUrl: "https://a.co/d/0hxIvted",
    fullDescription: [
      "Espresso your thanks for a tea-riffic teacher with this punderfully heartwarming picture book of appreciation from the USA Today bestselling series that brought you I Love You Like No Otter!",
      "Celebrate a special teacher, mentor, or coach who helped you suc-seed this year and makes learning awesome to the core with this charming picture book of gratitude and love. Filled with punny rhymes of thanks and adorable illustrations of essential educator staples, this erase-istible story is the perfect gift to share on the last day of school with the one who teaches you a latte at daycare, preschool, kindergarten, grade school, and beyond and bakes each day filled with fun!",
      "The book celebrates teachers, mentors, and educators through playful rhymes, colorful illustrations, and heartfelt appreciation. It makes an ideal gift for Teacher Appreciation Week, the end of the school year, graduation, moving-up day, or any occasion to thank an inspiring educator.",
    ],
    bookQuote: [
      "Teacher, thank you a hole lot",
      "For everything you do.",
      "You're special and tea-riffic",
      "In all you say and brew!",
    ],
    aboutAuthor: [
      "Rose Rossner is a USA Today bestselling children's book author known for playful, pun-filled board books and picture books celebrating love, gratitude, and life's sweetest moments.",
      "Since her debut, I Love You Like No Otter (2020), she has published more than one hundred titles, including I Love You More, Babysaur, The ABCs of Love, and Thanks a Latte for Being My Teacher! She lives with her son and her husky named Dino.",
    ],
  },
  {
    authorName: "Reza Aslan",
    authorTitle: "#1 Bestselling Author, Scholar of Religions & Public Intellectual",
    authorPhoto: "/images/reza-aslan-avatar.jpg",
    contactUrl: "https://rezaaslan.com",
    banner: "/images/reza-aslan-banner.jpg",
    bannerAlt:
      "Featured author panel for Reza Aslan and No god but God: The Origins, Evolution, and Future of Islam",
    bookTitle: "No god but God: The Origins, Evolution, and Future of Islam",
    bookCover: "/images/reza-aslan-cover.jpg",
    tagline: "A landmark exploration of Islam's rich history and enduring impact.",
    genres: ["Religion", "History", "Islamic Studies", "Nonfiction"],
    description:
      "A modern classic on the history of Islam, now in its acclaimed twentieth-anniversary edition. Reza Aslan traces the faith from its origins in Mecca and Medina to its global present, challenging misconceptions with a nuanced, deeply human portrait rooted in justice, equality, and compassion. Essential reading for a better understanding of one of the world's great religions.",
    publishedDate: "August 30, 2011",
    language: "English",
    pages: "464 pages",
    learnMoreUrl:
      "https://www.amazon.com/Reza-Aslan/e/B001JONKIK/ref=dp_byline_cont_book_1",
    buyUrl: "https://www.amazon.com/dp/0812982444",
    fullDescription: [
      "No god but God is the acclaimed twentieth-anniversary edition of Reza Aslan's groundbreaking introduction to Islam. Combining historical scholarship with accessible storytelling, the book explores the origins of Islam, the life and teachings of the Prophet Muhammad, and the development of one of the world's major religions.",
      "Tracing Islam from its beginnings in Mecca and Medina through centuries of political, cultural, and theological evolution, Aslan examines how the faith's message of justice, equality, and compassion has been interpreted across different eras and societies.",
      "This revised edition also addresses modern issues including the politicization of religion, the rise of extremist ideologies, Islamophobia, and the ongoing relationship between tradition and modernity. Thoroughly researched yet approachable for general readers, the book offers an insightful and balanced understanding of Islam's past, present, and future.",
    ],
    aboutAuthor: [
      "Reza Aslan is an internationally acclaimed writer, scholar of religions, television host, and public intellectual. He is the #1 New York Times bestselling author of Zealot: The Life and Times of Jesus of Nazareth, as well as No god but God, God: A Human History, and An American Martyr in Persia.",
      "Born in Tehran and raised in the United States, Aslan hosted the CNN documentary series Believer and served as an executive producer on HBO's The Leftovers. A professor of creative writing whose work bridges history, spirituality, and contemporary issues, he inspires readers to see beyond stereotypes and engage with the world with empathy and understanding.",
    ],
  },
  {
    authorName: "Alison James",
    authorTitle: "Bestselling Psychological Thriller Author",
    authorPhoto: "/images/alison-james-avatar.jpg",
    contactUrl: "mailto:alison.jsmes.pen@gmail.com",
    banner: "/images/alison-james-banner.jpg",
    bannerAlt:
      "Featured live interview panel for Alison James and her psychological thriller The Good Neighbour",
    bookTitle:
      "The Good Neighbour: A Totally Gripping and Addictive Psychological Thriller with a Heart-Pounding Twist",
    bookCover: "/images/alison-james-cover.jpg",
    tagline: "Will her new home turn into a nightmare?",
    genres: ["Psychological Thriller"],
    description:
      "Moving into a quiet apartment was supposed to be a fresh start — but every neighbour has secrets, and trust becomes increasingly dangerous. A fast-paced psychological thriller packed with suspense, unexpected twists, and emotional tension that keeps readers guessing until the final page.",
    publishedDate: "August 30, 2011",
    language: "English",
    pages: "321 pages",
    learnMoreUrl:
      "https://www.amazon.com/Alison-James/e/B0787VZPXT/ref=aufs_dp_fta_an_dsk",
    buyUrl: "https://a.co/d/0drOOcqw",
    fullDescription: [
      "Moving into a quiet apartment was supposed to be a fresh start. But every neighbour has secrets, every encounter raises new questions, and trust becomes increasingly dangerous.",
      "As hidden truths begin to surface, the line between victim and suspect blurs, leading to a shocking finale.",
      "This fast-paced psychological thriller is packed with suspense, unexpected twists, and emotional tension that keeps readers guessing until the final page.",
    ],
    aboutAuthor: [
      "Alison James is a bestselling psychological thriller author known for crafting suspenseful novels filled with gripping twists, unreliable characters, and emotional tension.",
      "Her stories explore guilt, deception, hidden identities, and the dark secrets people keep behind seemingly ordinary lives. She has built a loyal readership among fans of psychological suspense through her page-turning storytelling and unpredictable endings.",
    ],
  },
  {
    authorName: "Amara Osei",
    authorTitle: "Award-Winning Novelist",
    authorPhoto:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    contactUrl: "mailto:amara.osei@example.com",
    banner:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=1400&q=80",
    bannerAlt: "Amara Osei reading in a warmly lit studio",
    bookTitle: "The Salt of Distant Seas",
    bookCover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    tagline: "Every tide carries a story home.",
    genres: ["Literary Fiction", "Family Saga"],
    description:
      "Spanning three generations and two continents, a luminous novel about the women of one fishing family and the ocean that both separates and binds them.",
    publishedDate: "February 3, 2025",
    language: "English",
    pages: "412 pages",
    learnMoreUrl: "#",
    buyUrl: "https://www.amazon.com/",
  },
  {
    authorName: "Janice Kenyatta",
    authorTitle: "Author \u2022 Educator \u2022 Storyteller",
    authorPhoto: "/images/janice-kenyatta-avatar.jpg",
    contactUrl: "https://janicekenyatta.com",
    banner: "/images/janice-kenyatta-banner.jpg",
    bannerAlt:
      "Featured author panel for Janice Kenyatta and her children's picture book Just As It Is!",
    bookTitle: "Just As It Is!",
    bookCover: "/images/janice-kenyatta-cover.jpg",
    tagline:
      "A story of self-love, acceptance, and the beauty of embracing who you are.",
    genres: ["Children's Book", "Children's Picture Book"],
    description:
      "Just As It Is! is a heartwarming children's picture book about a young African American girl whose parents teach her to love and appreciate her natural features, including her hair, while also learning to appreciate differences in people from different ethnic and cultural backgrounds. The central themes are self-love, self-acceptance, confidence, diversity, and appreciating others.",
    publishedDate: "February 6, 2025",
    language: "English",
    pages: "42 pages",
    learnMoreUrl: "https://www.amazon.com/stores/author/B0BJC9Z9P1",
    buyUrl:
      "https://www.amazon.com/Just-As-Janice-Kenyatta/dp/B0DWQRMLV5",
    fullDescription: [
      "Just As It Is! is a heartwarming children's picture book about a young African American girl whose parents teach her to love and appreciate her natural features, including her hair, just as it is.",
      "The story gently introduces young readers to the importance of self-love, self-acceptance, and confidence, while also celebrating the differences in people from different ethnic and cultural backgrounds. Through warm, joyful storytelling and engaging illustrations, the book helps parents and educators start meaningful conversations about identity, kindness, and respect.",
      "Written for ages 3 to 10, Just As It Is! is an ideal read-aloud for home, classroom, and library. It also pairs with the Abena Doll, inspired by the book's main character, offering young readers a tangible reminder that their worth is inherent and unwavering.",
      "The central themes of the book — self-love, self-acceptance, confidence, diversity, and appreciating others — make it a valuable addition to any child's library and a meaningful gift for the young readers in your life.",
    ],
    aboutAuthor: [
      "Janice Kenyatta is a retired educator and school administrator with more than 40 years of experience in education, including service as a Supervisor of Career and Technical Education.",
      "She holds B.A. and M.A. degrees in Business Education and has spent her career championing young people, mentorship, and equitable learning. Born and raised in Newark, New Jersey, Janice brings a lifetime of community-rooted storytelling to her work as an author.",
      "Janice is also the co-author of Black Folk's Hair, Revisited: Secrets, Shame, and Liberation, a book that explores the sociological and historical reasons many Black women began straightening their hair. She wrote Just As It Is! as a natural extension of that work — building a foundation of self-love and self-acceptance from an early age.",
      "She is also associated with the Abena Doll, inspired by the main character in Just As It Is!, which serves as a tangible reminder to young girls and women of color that their worth is inherent and unwavering. Just As It Is! is her children's debut.",
    ],
  },
];

export const howItWorks = [
  {
    step: "01",
    icon: "user-plus",
    title: "Submit Author Kit",
    description: "Tell us about you and your book.",
  },
  {
    step: "02",
    icon: "clipboard-check",
    title: "Review",
    description: "Our team reviews your submission.",
  },
  {
    step: "03",
    icon: "badge-check",
    title: "Approval",
    description: "You'll receive confirmation.",
  },
  {
    step: "04",
    icon: "radio",
    title: "Live Author Spotlight",
    description: "Go live and share your story.",
  },
] as const;

export const whyAuthorsChooseUs = [
  {
    icon: "shield-check",
    title: "Authentic",
    description: "Real conversations that build trust.",
  },
  {
    icon: "book-open",
    title: "Engaged Readers",
    description: "Connect with a vibrant and supportive audience.",
  },
  {
    icon: "trending-up",
    title: "Professional Exposure",
    description: "High-quality promotion across platforms.",
  },
  {
    icon: "sparkles",
    title: "Creative Storytelling",
    description: "Visual storytelling that makes your story unique.",
  },
  {
    icon: "globe",
    title: "Global Community",
    description: "Join a worldwide network of authors and readers.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The Lantern Literary Society helped me reach thousands of new readers. The interview was such a beautiful experience!",
    name: "Claire Bennett",
    role: "Bestselling Author",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The team is professional, kind, and truly cares about authors. Highly recommended!",
    name: "James Whitaker",
    role: "Thriller Author",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "An amazing platform that gives your story the attention it deserves.",
    name: "Sophie Lane",
    role: "Romance Author",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "From the first call to the live conversation, everything felt effortless and beautifully produced.",
    name: "Miguel Alvarez",
    role: "Historical Fiction Author",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "My readers finally got to hear the story behind the story. The response was overwhelming.",
    name: "Priya Nair",
    role: "Literary Fiction Author",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const faqImage = {
  src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80",
  alt: "Books and a plant on a wooden desk",
} as const;

export const ctaBanner = {
  title: "Share Your Story. Inspire the World.",
  description:
    "Join The Lantern Literary Society and connect with readers through the power of live conversation.",
  primaryCta: { label: "Submit Your Story", href: "https://form.jotform.com/261917650330050" },
  secondaryCta: { label: "Learn More", href: "/about" },
  image:
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Open book with reading glasses and coffee",
} as const;

export const newsletter = {
  title: "Stay Inspired",
  description:
    "Subscribe to our newsletter for updates on live interviews, featured authors, and community stories.",
} as const;
