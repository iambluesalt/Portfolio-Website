import { useState } from "react";
import { FaDice } from "react-icons/fa";

const FACTS: string[] = [
    "Honey never spoils — archaeologists have found 3,000-year-old honey in Egyptian tombs that's still edible.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren't.",
    "The Eiffel Tower can grow taller in summer due to thermal expansion of the iron.",
    "There are more possible chess games than atoms in the observable universe.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus.",
    "The shortest war in history lasted 38 minutes (Anglo-Zanzibar War, 1896).",
    "Sharks existed before trees.",
    "Sloths can hold their breath longer than dolphins can.",
    "The unicorn is Scotland's national animal.",
    "Hot water can freeze faster than cold water under certain conditions — the Mpemba effect.",
    "There's a species of jellyfish that is biologically immortal.",
    "Scotland has over 600 words for snow.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A single strand of spaghetti is called a 'spaghetto'.",
    "Cows have best friends and get stressed when separated.",
    "The Great Wall of China is not visible from space with the naked eye.",
    "Butterflies taste with their feet.",
    "A bolt of lightning is hotter than the surface of the sun.",
    "The longest recorded flight of a chicken is 13 seconds.",
    "There are more stars in the universe than grains of sand on all of Earth's beaches.",
    "Polar bears have black skin under their white fur.",
    "The dot over a lowercase 'i' or 'j' is called a tittle.",
    "A single cloud can weigh more than a million pounds.",
    "Humans share about 60% of their DNA with bananas.",
    "The Mona Lisa has no eyebrows.",
    "Venus is the only planet that rotates clockwise.",
    "A group of crows is called a 'murder'.",
    "It rains diamonds on Saturn and Jupiter.",
    "The first oranges weren't orange — they were green.",
    "Wearing headphones for an hour can increase the bacteria in your ear by 700 times.",
    "The Twitter bird has a name: Larry.",
    "Some cats are allergic to humans.",
    "A shrimp's heart is in its head.",
    "The world's oldest known recipe is for beer.",
    "Rats laugh when tickled — a high-pitched sound humans can't hear.",
    "The moon has moonquakes.",
    "An octopus can taste with its entire body.",
    "The Statue of Liberty's official title is 'Liberty Enlightening the World'.",
    "Some turtles can breathe through their butts.",
    "The first computer virus was created in 1983 and was called Elk Cloner.",
    "Bubble wrap was originally invented as wallpaper.",
    "There's a basketball court on the top floor of the US Supreme Court, nicknamed 'the highest court in the land'.",
    "Peanuts aren't nuts — they're legumes.",
    "The heart of a blue whale is roughly the size of a small car.",
    "The 'save' icon is a floppy disk most people under 25 have never used.",
    "Koalas have fingerprints so similar to humans they've confused crime scenes.",
    "The Eiffel Tower was originally meant to be a temporary structure.",
    "A jiffy is an actual unit of time — 1/100th of a second.",
    "Cleopatra lived closer in time to the moon landing than to the building of the Great Pyramid.",
    "Space smells like seared steak, according to astronauts.",
    "The inventor of the Pringles can is buried in one.",
    "A crocodile can't stick its tongue out.",
    "Coca-Cola would be green if food coloring wasn't added.",
    "The longest word in English without a vowel is 'rhythms'.",
    "Elephants are one of the few animals that can recognize themselves in a mirror.",
    "There's enough gold in Earth's core to coat the entire surface 1.5 feet deep.",
    "Some metals are so reactive they explode on contact with water.",
    "A day on Mercury lasts longer than its year.",
    "The dot pattern on dice always sums to 7 on opposite sides.",
    "Starfish don't have brains.",
    "Nintendo was founded in 1889 as a playing card company.",
    "The average person walks the equivalent of five times around the world in a lifetime.",
    "There's a town in Norway called Hell that freezes over every winter.",
    "Almonds are members of the peach family.",
    "The human nose can detect over a trillion distinct scents.",
    "A hummingbird's heart beats up to 1,260 times per minute.",
    "Antarctica is the world's largest desert.",
    "The word 'set' has the most different meanings of any English word.",
    "Snails can sleep for up to three years.",
    "The Amazon rainforest produces about 20% of the world's oxygen.",
    "A group of pandas is called an 'embarrassment'.",
    "Tigers have striped skin, not just striped fur.",
    "It's impossible to hum while holding your nose closed.",
    "The first alarm clock could only ring at 4 a.m.",
    "The world's quietest room is so silent people start hearing their own organs.",
    "A single bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "Kangaroos can't walk backwards.",
    "The inventor of the Segway died by riding one off a cliff.",
    "There are more possible iterations of a shuffled deck of cards than atoms on Earth.",
    "Dolphins have names for each other — signature whistles.",
    "The Great Barrier Reef is the largest living structure on Earth.",
    "You can't fold a piece of paper in half more than 7 times (usually).",
    "The average cumulus cloud weighs about 1.1 million pounds.",
    "A snail can sleep for three years straight.",
    "The Pyramids of Giza once had smooth, shiny white limestone casings.",
    "Owls don't have eyeballs — they have eye tubes.",
    "The shortest commercial flight in the world lasts under 2 minutes.",
    "Bananas are naturally slightly radioactive due to potassium content.",
    "Termite queens can live for up to 50 years.",
    "The human body contains enough carbon to fill about 9,000 pencils.",
    "Iceland has no mosquitoes.",
    "Venus is the hottest planet in the solar system, not Mercury.",
    "Baby carrots are just regular carrots cut down and shaped.",
    "There's an opera house that was built entirely out of ice in Sweden.",
    "The inventor of Vaseline reportedly ate a spoonful of it every morning.",
    "A crocodile's bite force is over 3,700 psi.",
    "The word 'nerd' first appeared in a Dr. Seuss book.",
];

function pickRandomIndex(exclude: number): number {
    if (FACTS.length <= 1) return 0;
    let index = Math.floor(Math.random() * FACTS.length);
    while (index === exclude) {
        index = Math.floor(Math.random() * FACTS.length);
    }
    return index;
}

export default function RandomFacts() {
    const [index, setIndex] = useState(() => Math.floor(Math.random() * FACTS.length));
    const [spinning, setSpinning] = useState(false);

    const reroll = () => {
        setSpinning(true);
        setIndex(prev => pickRandomIndex(prev));
        setTimeout(() => setSpinning(false), 300);
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-md ring-1 ring-black/5 dark:ring-white/5 text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-3">
                Random fact #{index + 1} / {FACTS.length}
            </p>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed min-h-[3.5em] flex items-center justify-center">
                {FACTS[index]}
            </p>
            <button
                type="button"
                onClick={reroll}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400/60 dark:hover:border-emerald-500/50 transition-colors"
            >
                <FaDice className={spinning ? "animate-spin" : ""} />
                Another one
            </button>
        </div>
    );
}
