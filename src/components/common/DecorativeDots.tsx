export default function DecorativeDots() {
  return (
    <>
      <span className="absolute left-6 top-6 h-2 w-2 rounded-full bg-theme-primary" />
      <span className="absolute right-8 top-10 h-2 w-2 rounded-full bg-theme-secondary" />
      <span className="absolute bottom-8 left-10 h-2 w-2 rounded-full bg-theme-accent" />
    </>
  );
}
