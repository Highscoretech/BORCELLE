<script>
    import Navbar from "$lib/navbar.svelte";
    import SideBar from "$lib/sideBar.svelte";
</script>

<div class="app">
    <div id="side-bar">
        <SideBar />
    </div>

    <div id="menu">
        <button class="menu">
            <img src='https://www.linkpicture.com/q/menu_2.svg' alt="" />
          </button>
    </div>

    <div id="right-bar">
        <header>
            <Navbar />
        </header>
        <main>
            <slot></slot>
        </main>
    
        <footer>
            footer
        </footer>
    </div>
</div>

<style>
    header{
        position: relative;
        width: 100%;
        height: 4rem;
    }
    .app{
        display: flex;
        transition: 0.4s ease-in;
    }
    #side-bar{
        width: 240px;
        height: 100vh;
        background: var(--background-color);
    }
    #menu{
        display: block;
        position: relative;
    }
    .menu{
        border: none;
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 0.9375rem;
        background-color: rgb(26, 28, 32);
        box-shadow: transparent 0px 2px 4px 0px;
        z-index: 203;
        position: fixed;
        cursor: pointer;
        top: 16px;
        left: 224px;
        transition: left 0.2s linear 0s;
    }
    .menu:hover{
        background-color: rgb(46, 49, 56);
    }
    .menu img{
        width: 0.625rem;
        height: 0.625rem;
    }
</style>