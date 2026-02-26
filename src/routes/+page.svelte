<script lang="ts">
    let videos = [
        {
            id: "1",
            title: "Video 1 Placeholder",
            description: "Description for video 1",
        },
        {
            id: "2",
            title: "Video 2 Placeholder",
            description: "Description for video 2",
        },
        {
            id: "3",
            title: "Video 3 Placeholder",
            description: "Description for video 3",
        },
    ];
</script>

<svelte:head>
    <title>Kotcyn - Dynamic Content Creator</title>
    <meta
        name="description"
        content="Welcome to Kotcyn. Exploring technology, coding, and creative solutions."
    />
</svelte:head>

<header
    class="w-full relative z-10 p-6 md:p-8 flex items-center justify-between"
>
    <div class="flex items-center gap-3 group cursor-pointer">
        <div
            class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300"
        >
            <span class="font-bold text-lg text-white">K</span>
        </div>
        <span
            class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
        >
            Kotcyn
        </span>
    </div>

    <nav class="hidden md:flex gap-8">
        <a
            href="#about"
            class="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >About</a
        >
        <a
            href="#videos"
            class="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >Videos</a
        >
        <a
            href="#contact"
            class="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >Contact</a
        >
    </nav>

    <button class="md:hidden text-slate-300 hover:text-white">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><line x1="4" x2="20" y1="12" y2="12" /><line
                x1="4"
                x2="20"
                y1="6"
                y2="6"
            /><line x1="4" x2="20" y1="18" y2="18" /></svg
        >
    </button>
</header>

<main class="flex-grow flex flex-col items-center w-full">
    <!-- Hero Section -->
    <section
        class="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden"
    >
        <!-- Background Glow Effects -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"
        ></div>

        <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-sm font-medium text-brand-400 mb-8 backdrop-blur-sm shadow-sm ring-1 ring-white/5"
        >
            <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"
            ></span>
            New Content Weekly
        </div>

        <h1
            class="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight mb-6"
        >
            Elevate Your <br />
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300"
                >Digital Experience</span
            >
        </h1>

        <p
            class="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
            Welcome to Kotcyn. Documenting the journey of building software,
            exploring new tech, and creating digital experiences that inspire.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
                href="#videos"
                class="px-8 py-4 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
                Watch Latest Videos
            </a>
            <a
                href="#about"
                class="px-8 py-4 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all text-center"
            >
                Learn More
            </a>
        </div>
    </section>

    <!-- Videos Section -->
    <section
        id="videos"
        class="w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-800/50"
    >
        <div class="flex flex-col items-center text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Videos
            </h2>
            <p class="text-slate-400 max-w-2xl">
                Dive into the latest tutorials, deep dives, and projects. Catch
                up on all things engineering and design.
            </p>
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
            {#each videos as video (video.id)}
                <div
                    class="group relative flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors shadow-sm"
                >
                    <!-- Video Thumbnail Placeholder (16:9) -->
                    <div
                        class="relative w-full aspect-video bg-slate-800 overflow-hidden group-hover:bg-slate-700 transition-colors"
                    >
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            <div
                                class="w-16 h-16 rounded-full bg-slate-900/50 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300 border border-white/10 text-white/80 group-hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="none"
                                    ><polygon
                                        points="5 3 19 12 5 21 5 3"
                                    /></svg
                                >
                            </div>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col gap-3">
                        <div class="flex items-center gap-2">
                            <span
                                class="text-xs font-semibold uppercase tracking-wider text-brand-400"
                                >Development</span
                            >
                            <span class="text-slate-500 text-xs">•</span>
                            <span class="text-slate-500 text-xs">Just now</span>
                        </div>
                        <h3
                            class="text-xl font-bold text-white group-hover:text-brand-300 transition-colors"
                        >
                            {video.title}
                        </h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            {video.description} This is a placeholder for the actual
                            video content. Ready to be embedded with a YouTube iframe.
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>

<footer class="w-full border-t border-slate-800/50 py-12 mt-auto">
    <div
        class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
    >
        <div class="flex items-center gap-3">
            <div
                class="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-cyan-400 flex items-center justify-center"
            >
                <span class="font-bold text-xs text-white">K</span>
            </div>
            <span class="text-lg font-semibold text-slate-300">Kotcyn</span>
        </div>

        <p class="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Kotcyn. All rights reserved.
        </p>

        <div class="flex items-center gap-4">
            <a
                href="#"
                class="text-slate-500 hover:text-white transition-colors"
            >
                <span class="sr-only">Twitter</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    ><path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    /></svg
                >
            </a>
            <a
                href="#"
                class="text-slate-500 hover:text-white transition-colors"
            >
                <span class="sr-only">GitHub</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    ><path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                >
            </a>
            <a
                href="#"
                class="text-slate-500 hover:text-white transition-colors"
            >
                <span class="sr-only">YouTube</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    ><path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    /></svg
                >
            </a>
        </div>
    </div>
</footer>
