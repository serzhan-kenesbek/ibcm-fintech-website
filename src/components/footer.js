import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-screen-lg mx-auto px-4 flex justify-center items-center">
        <a
          href="https://instagram.com/fintech_ibcm?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/insta.jpeg"
            alt="Instagram"
            className="mr-4"
            width={40}
            height={40}
          />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={38}
            height={38}
          />
        </a>
      </div>
      <div className="max-w-screen-lg mx-auto px-4 text-center mt-4">
        <p className="text-darkBlue">© 2023 FinTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
