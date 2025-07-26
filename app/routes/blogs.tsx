import Transition from "~/components/transition";

export default function Blogs() {
  return (
    <Transition>
      <div className="mx-3 md:mx-6 min-h-screen flex items-center justify-center">
        {/* Mobile: Show WIP */}
        <div className="block lg:hidden text-3xl font-bold text-center text-gray-500">
          🚧 WIP 🚧
        </div>

        {/* Desktop: Show GIFs */}
        <div className="hidden lg:flex flex-row items-center space-x-4">
          <img
            src="/bee-minecraft.gif"
            alt="Aaditya Pandagle"
            className="rounded-md object-fill scale-x-[-1] h-[215px]"
          />
          <img
            src="/minecraft.gif"
            alt="Aaditya Pandagle"
            className="rounded-md object-cover"
          />
          <img
            src="/bee-minecraft.gif"
            alt="Aaditya Pandagle"
            className="rounded-md object-fill h-[170px]"
          />
        </div>
      </div>
    </Transition>
  );
}
