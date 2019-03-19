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
        name: "wp-use",
        label: "What do you use WordPress for?",
        answer: undefined,
        options: [
          {
            label: "Personal projects",
            value: "personal"
          },
          {
            label: "Professional projects",
            value: "professional"
          },
          {
            label: "Both",
            value: "both"
          },
          {
            label: "I don’t use WP",
            value: "nothing"
          }
        ]
      },
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
            value: "basic-intermediate"
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate-advanced"
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
            value: "basic-intermediate"
          },
          {
            label: "Intermediate knowledge",
            value: "intermediate-advanced"
          },
          {
            label: "React ninja!",
            value: "expert"
          }
        ]
      },
      {
        name: "wp-theme-js",
        label:
          "Have you ever developed a WordPress theme in React, Vue or Angular?",
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
        name: "frontity-use",
        label: "What would you use Frontity for?",
        answer: undefined,
        options: [
          {
            label: "Hobby project",
            value: "hobby"
          },
          {
            label: "Personal for-profit project ",
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
        name: "frontity-improve",
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
            value: "wp-web-app"
          },
          {
            label: "I just want to test :)",
            value: "just-for-fun"
          }
        ]
      },
      {
        name: "frontity-where",
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
