export const HeroContent = () => {
  return (
    <div className="text-lg items-start box-border caret-transparent h-full leading-7 w-full mt-5 font-et_book">
      <p className="box-border caret-transparent">
        Hi, I'm Nat. I'm currently working at Zoox. Currently reading{" "}
        <em>The Count of Monte Cristo</em>.
      </p>
      <p className="box-border caret-transparent mt-4">
        Feel free to reach me at{" "}
        <a
          href="mailto:wetzel.na@northeastern.edu"
          className="box-border caret-transparent underline"
        >
          wetzel.na@northeastern.edu
        </a>
        .
      </p>
    </div>
  );
};
