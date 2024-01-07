import Image from "next/image";
import ArrowRightIcon from "@/ui/icons/ArrowRightIcon";

function Philosophy() {
  return (
    <section className="flex flex-col sm:flex-row py-10 pb-32 lg:py-20 sm:justify-between text-center sm:text-left">
      <div>
        <Image src="/philosophy.png" width={510} height={1000} alt="hero" />
      </div>

      <div className="max-h-[500px] flex flex-col justify-between">
        <div className="mt-8">
          <h2 className="font-bold text-dark text-5xl pb-6">Philosophy</h2>
          <p className="text-3xl max-w-[500px] pt-2">
            We believe that scalability, efficiency and resilience of businesses
            powered by software lies in the{" "}
            <span className="text-primary underline-offset-8 underline">
              mature systems
            </span>{" "}
            that teams craft
          </p>
        </div>
        <div>
          <button
            className="rounded-full text-center bg-none mx-auto py-3 text-xl whitespace-nowrap cursor-pointer m inline-flex items-center gap-4 mt-16"
            type="button"
          >
            {"Learn more"}
            <div className="flex items-center px-1 py-2 transition-all duration-300 border-b-2 cursor-pointer stroke-dark text-dark  border-b-transparent">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
