import { GoHeartFill } from "react-icons/go";

export default function Footer() {
    return (
        <footer className="uppercase flex justify-center items-center mb-4 font-semibold gap-2 md:text-xs text-[11px]">
            <div>Crafted with Care, Built with passion</div>
            <span><GoHeartFill className="size-4 md:size-6 fill-red-500" /></span> 
            <div>Bluesalt</div>
        </footer>
    )
}