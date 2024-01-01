import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-1 py-10 mt-8 pb-32 justify-between">
      <div>
        <h1 className="font-bold text-dark text-8xl">Resteferme</h1>
        <p className="text-5xl max-w-[500px] pt-2">
          We coach software development teams to adopt{" "}
          <span className="text-primary">mature</span> and{" "}
          <span className="text-primary">world-class</span> engineering
          practices.
        </p>

        <div className="pt-20">
          <button
            className="shadow-xl rounded-full text-center bg-primary mx-auto py-3 px-4 whitespace-nowrap cursor-pointer text-white font-normal hover:bg-primary/80 m inline-flex items-center gap-8"
            type="button"
          >
            {"Let's get you started"}
            <Image
              src="arrow-right.svg"
              alt="an icon of a right arrow indicating the next step"
              width={40}
              height={12}
            />
          </button>
        </div>
      </div>
      <div>
        <Image src="/hero.png" width={510} height={1000} alt="hero" />
      </div>
    </section>
  );
}

export default Hero;
