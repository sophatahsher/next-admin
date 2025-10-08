import Image from "next/image";
import LogoImage from "../public/xodo-logo.png";

export function SiteLogo() {
  return (
    <div className="flex items-center">
      <div className="relative w-16 h-8">
        <Image
          src={LogoImage}
          alt="Site Logo"
          fill
          className="object-contain"
        />
      </div>
      {/* <span className="ml-2 text-lg font-semibold">Site Name</span> */}
    </div>
  )
}
