<template>
<div class="">
    <div class="row m-3">
        <div class="first-half col-lg-8 col-md-8 col-sm-12">
            <p class="display-6 heading-txt">Risk and cyber security analysis for medical devices</p>
            <p class="fw-light content-txt mb-5">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            <a href="#" class="content-btn">Mange Your Devices</a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <FirstLandingPhotoIcon />
        </div>
    </div>
  
    
    <div class="row m-3">
        <div class="col-md-6">
            <div class=" box">
                <h2 class=" fw-bold">Lorem Ipsum</h2>
                <p class=" txt-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                <a href="#" class="link-card">learn more →</a>
            </div>
        </div>
        <div class="col-md-6">
            <div class=" box">
                <h2 class=" fw-bold">Lorem Ipsum</h2>
                <p class=" txt-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                <a href="#" class="link-card">learn more →</a>
            </div>
        </div>
    </div>

    <div class="row m-3">
        <div class="col-md-6">
            <p class="display-5 mb-4">Lorem Ipsum</p>
            <p class="txt-card pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            <a href="#" class="content2-btn">Learn More</a>
        </div>
        <div class="col-md-6">
            <template>
                <SecondLandingPhotoIcon />
            </template>
            <!-- <img src="../assets/photo_2022-03-11_16-17-50.jpg" class="img-fluid" alt=""> -->
        </div>
    </div>

    <div class="row m-3">
        <div class="col-md-6">
            <ThirdLandingPhotoIcon />
            <!-- <img src="../assets/photo_2022-03-11_16-17-50.jpg" class="img-fluid" alt=""> -->
        </div>
        <div class="col-md-6">
            <p class="display-5 mb-4">Lorem Ipsum</p>
            <p class="txt-card pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            <a href="#" class="content2-btn">Learn More</a>
        </div>
    </div>

</div>    
</template>

<script>
    import FirstLandingPhotoIcon from './icons/IconFirstLandingPhoto.vue'
    import SecondLandingPhotoIcon from './icons/IconSecondLandingPhoto.vue'
    import ThirdLandingPhotoIcon from './icons/IconThirdLandingPhoto.vue'
    export default {
        name:'LandingContent',
        components:{
            FirstLandingPhotoIcon,
            SecondLandingPhotoIcon,
            ThirdLandingPhotoIcon
        }
    }
</script>

<style>

.first-half{
    margin-bottom: 3rem;
}
.content-txt{
    font-size: .8rem;
}
.content-btn{
    color: white;
    padding: 20px 35px;
    border: 1px solid #00A99D;
    background-color: #00A99D;
    text-decoration: none;
    border-radius: 35px;
    font-size: .7rem;
    margin: 5rem;
}
.content-btn:hover{
    color: white;
}
.txt-card{
    font-size: .8rem;
    font-weight: 600;
}
.link-card{
    color: #00A99D;
    font-weight: 600;
    font-size: .8rem;
    text-decoration: none;
}
.link-card:hover{
    color: #00A99D;
}
.box{
    margin: 50px;
    padding: 100px 50px;
    border-top: 1px solid rgba(0, 0, 0, .3);
    border-left: 1px solid rgba(0, 0, 0, .3);
    color: black;
    box-shadow: -5px -5px 15px 10px rgba(0, 0, 0, .3);
    border-radius: 40px;
    transition: 1s;
}
.box:hover{
    transform: scale(1.1);
}
.content2-btn{
    text-decoration: none;
    color: white;
    background-color: #00A99D;
    border: 1px solid #00A99D;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: .8rem;
}
.content2-btn:hover{
    color: white;
}
</style>