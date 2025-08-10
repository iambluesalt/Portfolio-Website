import { IoIosAlert } from "react-icons/io";

export default function ContactComponent() {
    return (
    <div className="relative flex items-start gap-6 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 p-6 md:p-8 shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            <IoIosAlert className="hidden md:block text-rose-500 text-6xl flex-shrink-0" />
            <p className="text-sm md:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                <span className="text-rose-400 font-semibold">Too lazy</span> to set up a contact form. First, I&apos;d have to deal with backend nightmares, API keys, spam filters, and email servers that ghost harder than my ex. Then I’d have to pay for some{" "}
                <span className="text-amber-400 font-semibold">overpriced third-party service</span> just so bots can flood my inbox with “business opportunities.” Yeah, no.{" "}
                <span className="text-emerald-400 font-semibold">Just DM me like a normal human.</span> But if you insist on being professional about it, here’s my email:
                <a href="mailto:adi.pandagle@gmail.com" className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline ml-1">adi.pandagle@gmail.com</a>.
            </p>
        </div>
    )
}