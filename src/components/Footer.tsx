import Image from "next/image";

function Footer() {
  return (
    <section className="flex flex-col items-center max-w-[500px] mx-auto text-center gap-4">
      <div>
        <p className="text-xl font-bold text-dark">Resteferme</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla
        </p>
      </div>

      <div className="py-4">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer">Coaching</li>
          <li className="cursor-pointer">Training</li>
          <li className="cursor-pointer">Workshops</li>
        </ul>
      </div>

      <div className="flex flex-row gap-8">
        <Image src="/twitter.png" alt="coaching" width={24} height={24} />
        <Image src="/instagram.png" alt="coaching" width={20} height={20} />
        <Image src="/linkedin.png" alt="coaching" width={20} height={20} />
      </div>

      <div className="my-12">
        <p className="text-sm font-normal text-gray-400">
          © {new Date().getFullYear()} Resteferme | All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
