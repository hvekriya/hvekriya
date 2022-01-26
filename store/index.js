import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projects Portfolio",
  projectsDescription: "Some of the projects I have successfully completed",
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Technology changes daily shapes what is possible in my life, and also gets me excited! I enjoy the challenge of researching and solving problems using the latest technology. I am very passionate about design and front-end development, quick to grasp new ideas and concepts and to develop innovative and creative solutions to problems. Able to work well on own initiative and can demonstrate the high levels of motivation required to meet the tightest of deadlines. Even under significant pressure, I have a strong ability to perform effectively.",
    },
    {
      id: uuidv4(),
      bio: "During my spare time I like to learn new skills and develop my existing skills. I also help local businesses with their online presence by creating websites or designing graphics.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
});

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
