<script lang="ts">
    import '../css/core.css';

    import logo from '$lib/assets/Logo.svg'; 
    import github from '$lib/assets/icons/github-large.svg';
    import discord from '$lib/assets/icons/discord-large.svg';
</script>

<style lang="css">
    .nav-links {
        color: #092327;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    .nav-links:hover {
        text-decoration: underline;
    }

</style>

<nav class="flex flex-row">
    <div class="heading flex flex-row">
        <img alt="logo" src={logo} class="p-2" />
        <a href="/" class="p-1">Castify</a>
    </div>
    <div class="p-4 relative left-[18rem] text-[22px]">
        <a href="/about" class="mr-12 nav-links">Roadmap</a>
        <a href="/blog" class="mr-12 nav-links">Blog</a>
        <a href="/careers" class="mr-12 nav-links">Careers</a>
        <a href="/docs" class="mr-12 nav-links">Docs</a>
    </div>
    <div class="fixed right-4 top-1 flex flex-row">
        <a href="https://github.com/Novalla-Inc/Castify">
            <img alt='github' src={github} class="p-2" />
        </a>
        <a href="https://discord.gg/SBvRczppwd">
            <img alt='discord' src={discord} class='p-2' />
        </a>
    </div>
</nav>

<slot></slot>