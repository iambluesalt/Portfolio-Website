import { IoIosAlert } from "react-icons/io";

export default function ContactComponent() {
    return (
        <div className="md:mx-6 mx-3 my-7 cursor-default">
            {/* Divider with Title */}
            <div className="flex items-center gap-2 md:gap-4 my-4 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center">
                    <h1 className="text-lg md:text-2xl font-semibold">No Contact Form? Tragic.</h1>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>

            {/* Content Card */}
            <div className="flex items-center gap-4 p-4 dark:bg-zinc-900 rounded-xl shadow-sm shadow-zinc-500 dark:shadow-none border dark:border-zinc-900 dark:hover:border-zinc-500 duration-150">
                {/* Leftmost Alert Icon */}
                <IoIosAlert className="hidden md:block text-red-500 text-3xl md:text-7xl flex-shrink-0" />

                {/* Text Content */}
                <p className="text-sm md:text-base leading-relaxed">
                    <span className="text-red-500 font-semibold">Too lazy</span> to set up a contact form.
                    First, I&apos;d have to deal with backend nightmares, API keys, spam filters, and email servers
                    that ghost harder than my ex. Then, I’d have to pay for some
                    <span className="text-yellow-500 font-semibold"> overpriced third-party service </span>
                    just so bots can flood my inbox with ‘business opportunities.’ Yeah, no.
                    <span className="text-green-500 font-semibold"> Just DM me like a normal human.</span>
                    But if you insist on being all professional about it, fine—here’s my email:
                    <a href="mailto:adi.pandagle@gmail.com" className="text-blue-500 font-semibold hover:underline ml-1">
                        adi.pandagle@gmail.com
                    </a>.
                </p>
            </div>
        </div>
    )
}