<template>
<div class="">
    <div style="padding: 1rem" class="row m-3">
        <div class="first-half col-lg-8 col-md-8 col-sm-12">
            <p class="display-6 heading-txt">Risk and cyber security analysis for medical devices</p>
            <p class="fw-light content-txt mb-5">Take control and take your devices health into your own hands!</p>
            <a href="#/signup" class="content-btn">Mange Your Devices</a>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <FirstLandingPhotoIcon />
        </div>
    </div>
  
    
    <div style="padding: 1rem" class="row m-3">
        <div class="col-md-6">
            <div class=" box">
                <h3 style="color: #00a99ec2" class="fw-bold">Take Control</h3>
                <p class=" txt-card">
                    With Critical Condition you have full control of your devices, you can even control your own view as simple and easy as clicking a button!
                    with only one click you can scan for and add devices, 
                    you also are able to edit, archive, AND delete unwanted devices.
                </p>
                <a href="#" class="link-card">learn more →</a>
            </div>
        </div>
        <div class="col-md-6">
            <div class=" box">
                <h2 style="color: #00a99ec2" class=" fw-bold">Future Proof</h2>
                <p class=" txt-card">
                    In Critical Condition we are not only intersted in assigning a risk score for the device at the moment the device hits our database,
                    we make sure that the score is kept up-to-date with weekly auto-calculation of the FMEA risk score and on-demand re-calculation for security score.
                </p>
                <a href="#" class="link-card">learn more →</a>
            </div>
        </div>
    </div>

    <div style="padding: 1rem" class="row m-3">
        <div style="padding: 1rem 2rem" class="col-md-7">
            <h2 style="color: #00a99ec2" class="mb-3">No Time? No Problem</h2>
            <p class="txt-card pb-4">
                Did your hospital just went throught a big expansion and made it that much harder to track and monitor all of your sensitive devices? 
                well.. you are in luck! Critical Condition just made that easy for you, in fact it's so easy you can just press one button and see all you 
                connected devices in one place, along with risk scores that give you very important feedback for the health of your device. 
            </p>
            <a href="#" class="content2-btn">Learn More</a>
        </div>
        <div class="col-md-5">
            <template>
                <SecondLandingPhotoIcon />
            </template>
            <!-- <img src="../assets/photo_2022-03-11_16-17-50.jpg" class="img-fluid" alt=""> -->
        </div>
    </div>

    <div style="padding: 1rem" class="row m-3">
        <div class="col-md-5" style="">
            <ThirdLandingPhotoIcon />
            <!-- <img src="../assets/photo_2022-03-11_16-17-50.jpg" class="img-fluid" alt=""> -->
        </div>
        <div style="padding: 1rem 2rem" class="col-md-7">
            <h2 style="color: #00a99ec2" class="mb-3">Latest Tech and Best Recommendations</h2>
            <p class="txt-card pb-4">
                Critical Conition yealds state-of-the-are, bleeding-edge technologies that, combined with our revolutionary recommendations system, 
                you can rest assured that no matter the type or quantity of your devices, you are always being served with the best the current tech has to offer
            </p>
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

<style scoped>

.first-half{
    margin-bottom: 3rem;
}
.heading-txt{
    font-size: 3em;
    color: #00a99ec2;
    font-weight: 400;
}
.content-txt{
    font-size: 1.3em;
}
.content-btn{
    color: white;
    padding: 20px 35px;
    border: 1px solid #00A99D;
    background-color: #00A99D;
    text-decoration: none;
    border-radius: 35px;
    font-size: 1em;
    font-weight: 500;
    /* margin: 5rem; */
}
.txt-card{
    font-size: 1em;
    font-weight: 500;
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
    margin: 1rem 2rem;
    padding: 2rem 2rem;
    border-top: 1px solid rgba(0, 0, 0, .3);
    border-left: 1px solid rgba(0, 0, 0, .3);
    color: black;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    border-radius: 40px;
    transition: 1s;
}
.box:hover{
    /* transform: scale(1.1); */
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