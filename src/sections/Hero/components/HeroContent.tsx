export const HeroContent = () => {
  return (
    <div className="text-lg items-start box-border caret-transparent h-full leading-7 w-full mt-5 font-et_book">
      <p className="box-border caret-transparent">
        Hi, my name is Nat and I'm a third year CS student at Northeastern University.
        I'm interested in financial technology, infrastructure, and building software for the physical world.
        Previously, I spent my summer at Amazon where I developed a Java service validating 10M+ transactions/month at Amazon's account receivables API entrypoint.{" "}
      </p>
      <p className="box-border caret-transparent mt-4">
        Feel free to reach me at{" "}
        <a
          href="mailto:nnwetzel@icloud.com"
          className="box-border caret-transparent underline"
        >
          nnwetzel@icloud.com
        </a>
        .
      </p>
    </div>
  );
};
