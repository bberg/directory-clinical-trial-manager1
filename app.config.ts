import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Clinical Trial Management Tools",
    logo: "/logo.png",
    // iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Clinical Trial Management Directory",
    description: "Directory of Clinical Trial Management Systems and Software",
    url: "https://trialmanagers.com",
    favicon: {
      image: "",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Search {0} Listings",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Entry not found.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: false,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: false,
      showOnSide: false,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
{"name": "Regulatory Compliance", "color": "gray"},
  {"name": "Clinical Trial Management", "color": "gray"},
  {"name": "Clinical Operations Efficiency", "color": "gray"},
  {"name": "Clinical Trial Start-up and Activation", "color": "gray"},
  {"name": "Pre-screening Questionnaires", "color": "gray"},
  {"name": "Quality Assurance in Data Entry", "color": "gray"},
  {"name": "Data Operations", "color": "gray"},
  {"name": "Regulatory Documentation Solution", "color": "gray"},
  {"name": "Patient Recruitment Services", "color": "gray"},
  {"name": "Clinical Trial Management Systems", "color": "gray"},
  {"name": "CRO Services", "color": "gray"},
  {"name": "Site Management and Monitoring", "color": "gray"},
  {"name": "Electronic Data Capture", "color": "gray"},
  {"name": "EDC Data Management", "color": "gray"},
  {"name": "ePRO Integration", "color": "gray"},
  {"name": "Clinical Randomization Technology", "color": "gray"},
  {"name": "Biopharmaceutical Development Services", "color": "gray"},
  {"name": "Real-time Data Analysis", "color": "gray"}
],
    tagPages: {
      title: "Available {0} items:",
      description:
        "View all items in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Add your listing",
      link: "https://Directory.com",
      brandText: "Directory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        { name: "Info", to: "/blog" },
        // { name: "Advertise", to: "/advertise" },
        // {
        //   name: "Analytics",
        //   to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
        //   target: "_blank",
        // },
      ],
    },
    actionButton: {
      text: "Add a Listing",
      href:  "/submit",
    },
  },
  footer: {
    description: "Directory for discovering suitable clinical trial management systems and software for administrators seeking effective management tools.",
    // socials: {
    //   github: {
    //     link: "",
    //     icon: "tabler:brand-github",
    //   },
    //   facebook: {
    //     link: "",
    //     icon: "tabler:brand-facebook",
    //   },
    //   instagram: {
    //     link: "",
    //     icon: "tabler:brand-instagram",
    //   },
    //   x: {
    //     link: "https://x.com/mark_bruderer",
    //     icon: "tabler:brand-twitter",
    //   },
    //   youtube: {
    //     link: "https://www.youtube.com/@mark_hacks",
    //     icon: "tabler:brand-youtube",
    //   },
    // },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
