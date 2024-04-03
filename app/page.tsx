"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddr = "85aK246APJpCsbFFczVePJAMGRnas5Pf";
  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddr)
      .then(() => {
        setCopied(true);
        toast.success("Contract address copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".zoom-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 600); // Adjust the delay as needed
    });
  }, []);
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="flex flex-col relative z-20">
        <div className="flex gap-4 mt-0 pr-5 w-full justify-end">
          <Link
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="zoom-in"
            target="noblank"
            rel="referrer"
          >
            <Image src="/telegram.png" alt="telegram" width={90} height={90} />
          </Link>
          <Link
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="zoom-in"
            target="noblank"
            rel="referrer"
          >
            <Image src="/dextools.png" alt="dextools" width={90} height={90} />
          </Link>
          <Link
            href="https://t.me/+0Gs7OKSzarc4N2Q0"
            className="zoom-in"
            target="noblank"
            rel="referrer"
          >
            <Image
              src="/dexscreener.png"
              alt="dexscreener"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <div className="flex w-full justify-center ml-5 lg:ml-0">
          <div className="relative flex zoom-in w-[450px]">
            <Image
              src="/Contract Address.png"
              alt="Contract Address"
              width={450}
              height={450}
            />
            <p className="absolute top-1/2 text-md lg:text-lg left-1/2 -translate-x-1/2 truncate w-[220px] md:w-[260px] lg:w-full text-center">
              {contractAddr}
            </p>
          </div>

          <div
            className="Copy-button zoom-in"
            style={{
              animationDelay: "2.5s",
            }}
          >
            <button onClick={handleCopy}>
              <Image
                src="/COPY.png"
                alt="COPY"
                width={150}
                height={150}
                className="mt-[80px] -ml-10 z-10 relative"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-[600px] h-[330px] lg:w-full lg:h-full">
        <Image src="/bg.jpg" unoptimized fill objectFit="cover" alt="" />
      </div>
    </main>
  );
}
