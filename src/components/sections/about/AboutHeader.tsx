import { aboutIntro } from "../../../config/about";

const AboutHeader = () => {
  return (
    <div className="max-w-2xl">
      <p
        className="
                 text-sm
                 font-semibold
                 uppercase
                 tracking-[0.2em]
                 text-theme-primary
               "
      >
        About Me
      </p>

      <h2
        className="
                 mt-3
                 text-3xl
                 font-bold
                 tracking-tight
                 text-theme-foreground
                 sm:text-4xl
               "
      >
        {aboutIntro.title}
      </h2>

      <p
        className="
                 mt-4
                 text-base
                 leading-7
                 text-theme-muted
               "
      >
        {aboutIntro.description}
      </p>
    </div>
  );
};

export default AboutHeader;
