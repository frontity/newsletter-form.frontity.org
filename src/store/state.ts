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
            label: "Both of them",
            value: "both"
          },
          {
            label: "I don’t usually use WordPress",
            value: "nothing"
          }
        ]
      },
      {
        name: "wp-level",
        label: "What level of expertise do you have in WordPress?",
        answer: undefined,
        options: [
          {
            label: "I don’t have any idea about WordPress",
            value: "none"
          },
          {
            label: "I have basic / intermediate knowledge",
            value: "basic-intermediate"
          },
          {
            label: "I have intermediate / advanced knowledge",
            value: "intermediate-advanced"
          },
          {
            label: "I am a WordPress ninja!",
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
            label: "Yes, I have!",
            value: "yes"
          },
          {
            label: "No, I've never done that",
            value: "no"
          }
        ]
      },
      {
        name: "frontity-use",
        label: "What would you like to use Frontity for?",
        answer: undefined,
        options: [
          {
            label:
              "For a hobby / non-profit project, I love learning new technologies",
            value: "hobby"
          },
          {
            label: "For my personal for-profit project ",
            value: "personal"
          },
          {
            label: "I’m a freelance and build sites for others",
            value: "freelance"
          },
          {
            label: "It can be useful for the development agency I work for",
            value: "dev-agency"
          },
          {
            label: "It can be useful for the company I work for",
            value: "company"
          }
        ]
      },
      {
        name: "frontity-improve",
        label: "What are you looking to improve with Frontity?",
        answer: undefined,
        options: [
          {
            label: "Site’s performance / load time",
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
            label:
              "I am interested in building a web app with React and WordPress",
            value: "wp-web-app"
          },
          {
            label:
              "Nothing in particular, I just want to test it and have fun!",
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
            label: "In a new project or blog",
            value: "new-project"
          },
          {
            label: "In an existing project or blog",
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
