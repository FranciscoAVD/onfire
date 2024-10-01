import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/on-fire-logo-2.jpg"
export default function Logo({ className }: {
    className?: string;
}) {

    return (
        <Link href="/" className="flex items-center">
            <Image src={logo} alt="" className={className} />
            <span className="">
                <span className="text-xl font-black text-amber-500 uppercase ">On Fire</span>
                <br />
                <span className="uppercase tracking-widest text-white/70">Dance Studio</span>
            </span>
        </Link>
    )
}