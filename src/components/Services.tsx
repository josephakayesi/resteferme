import Image from "next/image";

function Services() {
  return (
    <section className="flex flex-col py-10 pb-32 lg:py-20 justify-between">
      <h2 className="font-bold text-dark text-6xl pb-20">Services</h2>
      <div className="flex flex-row gap-20">
        <div>
          <Image src="/coaching.png" alt="coaching" width={100} height={100} />
          <div className="pt-10">
            <h3 className="font-medium text-dark text-3xl pb-2">Coaching</h3>
            <p className="text-xl pt-2">
              We coach small-sized teams to adopt battle-tested techniques in
              software engineering
            </p>
          </div>
        </div>
        <div>
          <Image src="/training.png" alt="coaching" width={100} height={100} />
          <div className="pt-10">
            <h3 className="font-medium text-dark text-3xl pb-2">Training</h3>
            <p className="text-xl pt-2">
              We offer training to individuals who want to level up their
              engineering skills
            </p>
          </div>
        </div>
        <div>
          <Image src="/workshops.png" alt="coaching" width={100} height={100} />
          <div className="pt-10">
            <h3 className="font-medium text-dark text-3xl pb-2">Workshops</h3>
            <p className="text-xl pt-2">
              We run custom-tailored workshops for large companies that wish to
              adopt agile practices for innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
