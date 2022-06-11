<template>
    <footer class="row mt-4 font-size">
        <div class="col-md-5">
            <p class="fw-bold ">CriticalCondition</p>
            <p class="fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <p class="fw-light">© 2022 CriticalCondition Inc. All rights reserved</p>
        </div>
        <!-- <div class="col-1"></div> -->
        <div class="col-md-2 mx-4">
            <p class="fw-bold mb-3">Navigation</p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Home</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Product</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Discover</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Platform</a></p>
        </div>
        <div class="col-md-2">
            <p class="fw-bold mb-3">Legal</p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Terms</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Privacy</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Coockies</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">Copyright</a></p>
        </div>
        <div class="col-md-2">
            <p class="fw-bold mb-3">Contact Us</p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">25531-15-13</a></p>
            <p class="fw-light mb-3"><a href="#" class="link-footer">critical@gmail.com</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name:'LandingFooter',
}
</script>

<style scoped>
    .font-size{
        font-size: .7rem;
    }
    .list{
        list-style: none;
    }
    .link-footer{
        text-decoration: none;
        color: black;
    }
    .link-footer:hover{
        color: black;
    }
</style>