<template >
    <nav class="navbar">
        <div class="logo">
            <a href="/"><img src="../assets/LandingLogo.png" height="55rem"  /></a>
        </div>
        <a v-on:click="toggleNav" href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="links">
            <ul>
                <li><router-link to="/subuser">Sub Users</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link class="sign-up-button" to="/signup">Sign Up</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>


export default {
    name:'NavBar',
    methods:{
        toggleNav(){
            const toggleButton = document.getElementsByClassName('toggle-button')[0]
            const navbarLinks = document.getElementsByClassName('links')[0]
            const navbar = document.getElementsByClassName('navbar')[0]

            toggleButton.addEventListener('click', () =>{
                navbarLinks.classList.toggle('active');
                navbar.classList.toggle('active');
            })
        }
    },
}
</script>

<style>
    :root{
        --primarycolor: #00A99D;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .logo{
        font-size: 1.5rem;
        margin: .5rem;
    }
    .links ul{
        margin: 0;
        padding: 0;
        display: flex;
    }
    .links li{
        list-style: none;
        transition: background-color 0.6s ease;
        transition: border-radius 0.3s ease;
    }
    .links li a{
        text-decoration: none;
        color: var(--primarycolor);
        padding: 1rem;
        margin-left: 5px;
        display: block;
        transition: color .5s ease;
    }
    .links li:hover{
        background-color: var(--primarycolor);
        border: 2px var(--primarycolor);
        border-radius: 10px;
    }
    .links li a:hover{
        color:white
    }
    .toggle-button{
        position: absolute;
        top: 1.7rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }
    .bar{
        height: 3px;
        width: 100%;
        background-color: var(--primarycolor);
        border-radius: 10px;
    }
    .sign-up-button{
        color: white !important;
        border-radius: 10px;
        background-color: var(--primarycolor);
        transition: color 5s ease;
        transition: background-color 5s ease;
        transition: border 5s ease;
    }
    .sign-up-button:hover{
        color: var(--primarycolor) !important;
        background-color: white;
        border: 2px solid var(--primarycolor);
    }
    @media (max-width: 550px) {
        .toggle-button{
            display: flex;
        }
        .links{
            display: none;
            width: 100%;
        }
        .navbar{
            flex-direction: column;
            align-content: flex-start;
        }
        .links ul{
            width: 100%;
            flex-direction: column;
        }
        .links li{
            text-align: center;
        }
        .links li a{
            padding: .5rem 1rem;
        }
        .navbar.active{
            border-bottom: 5px solid var(--primarycolor);
            margin-bottom: 2rem;
        }
        .links.active{
            display: flex;
        }
    }
</style>