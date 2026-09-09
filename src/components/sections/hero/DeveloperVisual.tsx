import DecorativeDots from "../../common/DecorativeDots";

const DeveloperVisual = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* Outer glow */}
        <div
          aria-hidden="true"
          className="
                absolute
                inset-0
                rounded-[2rem]
                bg-theme-primary/10
                blur-2xl
              "
        />

        {/* Main card */}
        <div
          className="
                relative
                flex
                h-[320px]
                w-[280px]
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                border-theme-border
                bg-theme-card
                shadow-2xl
                sm:h-[380px]
                sm:w-[340px]
              "
        >
          {/* Grid */}
          <div
            aria-hidden="true"
            className="
                  absolute
                  inset-0
                  opacity-30
                  [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
          />

          {/* Developer icon / placeholder */}
          <div className="relative text-center">
            <div
              className="
                    mx-auto
                    h-28
                    w-28
                    overflow-hidden
                    rounded-full
                    border
                    border-theme-primary/30
                    bg-theme-primary/10
                    shadow-lg
                    shadow-theme-primary/10
                  "
            >
              <img
                src="/profile/profile.png"
                alt="Rezoan Miya"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 text-sm font-semibold text-theme-foreground">
              Full Stack Developer
            </p>

            <p className="mt-2 text-xs text-theme-muted">
              Building ideas into scalable applications.
            </p>
          </div>

          {/* Decorative dots */}
          <DecorativeDots />
        </div>
      </div>
    </div>
  );
};

export default DeveloperVisual;
