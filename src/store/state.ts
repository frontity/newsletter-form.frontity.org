const state: {
  newsletter: {
    email: string;
    role: string;
  };
  afterNewsletter: {
    name: string;
    questions: {
      name: string;
      label: string;
      answer?: string;
      options: {
        label: string;
        value: string;
      }[];
    }[];
  };
  sending: {
    newsletter: boolean;
    afterNewsletter: boolean;
  };
  sent: {
    newsletter: boolean;
    afterNewsletter: boolean;
  };
} = {
  newsletter: {
    email: "",
    role: ""
  },
  afterNewsletter: {
    name: "",
    questions: [
      {
        name: "wp-level",
        label: "Level of expertise in WordPress:",
        answer: undefined,
        options: [
          {
            label: "No idea",
            value: "none"
          },
          {
            label: "Basic knowledge",
            value: "basic"
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate"
          },
          {
            label: "WP ninja!",
            value: "expert"
          }
        ]
      },
      {
        name: "react-level",
        label: "Level of expertise in React:",
        answer: undefined,
        options: [
          {
            label: "React what?",
            value: "none"
          },
          {
            label: "Basic knowledge",
            value: "basic"
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate"
          },
          {
            label: "React ninja!",
            value: "expert"
          }
        ]
      },
      {
        name: "wp-theme-built-with-js",
        label: "Have you built a WP theme in React, Vue or Angular?",
        answer: undefined,
        options: [
          {
            label: "Yes",
            value: "yes"
          },
          {
            label: "No",
            value: "no"
          }
        ]
      },
      {
        name: "use-frontity-for",
        label: "What would you use Frontity for?",
        answer: undefined,
        options: [
          {
            label: "Hobby project",
            value: "hobby"
          },
          {
            label: "Personal for-profit project",
            value: "personal"
          },
          {
            label: "Freelance projects",
            value: "freelance"
          },
          {
            label: "Development agency projects",
            value: "dev-agency"
          },
          {
            label: "My company’s projects",
            value: "company"
          }
        ]
      },
      {
        name: "website-type",
        label: "On what type of website?",
        answer: undefined,
        options: [
          {
            label: "Blog or news site",
            value: "blog-news"
          },
          {
            label: "eCommerce",
            value: "ecommerce"
          },
          {
            label: "Corporate",
            value: "corporate"
          },
          {
            label: "Classifieds",
            value: "classifieds"
          },
          {
            label: "Other",
            value: "other"
          }
        ]
      },
      {
        name: "looking-to-improve",
        label: "What are you looking to improve?",
        answer: undefined,
        options: [
          {
            label: "Performance",
            value: "performance"
          },
          {
            label: "UX / UI",
            value: "ux-ui"
          },

          {
            label: "SEO",
            value: "seo"
          },
          {
            label: "PWA",
            value: "pwa"
          },
          {
            label: "I just want to test 😊",
            value: "just-for-fun"
          }
        ]
      },
      {
        name: "where-to-use-frontity",
        label: "Where would you like to use Frontity?",
        answer: undefined,
        options: [
          {
            label: "A new project ",
            value: "new-project"
          },
          {
            label: "An existing project",
            value: "existing-project"
          }
        ]
      }
    ]
  },
  sending: {
    newsletter: false,
    afterNewsletter: false
  },
  sent: {
    newsletter: false,
    afterNewsletter: false
  }
};

export default state;
