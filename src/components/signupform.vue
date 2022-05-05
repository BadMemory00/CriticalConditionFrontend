<template>
 <div class="row og-row">
    <div class="col-sm-12 col-lg-4">
        <SignupPhotoIcon class="image" />
    </div>
    <div class="col-sm-12 col-lg-8">
        <div class="text-center">
            <p class="hospital-details-text">Write your Hosptail's details</p>
        </div>
        <div class="full-form row ">
            <div class="col-sm-12 col-lg-6">
                    <vs-input label="Hospital name" placeholder="write here..." v-model="superUser.HospitalName" color="#00A99D"/>
                    <vs-input label="Email" placeholder="write here..." v-model="superUser.Email" color="#00A99D"/>
                    <vs-input type="password" label="Password" placeholder="write here..." v-model="superUser.Password" color="#00A99D"/>

                    <vs-select class="" autocomplete label="Hospital Specialty" v-model="superUser.HospitalSpeciality" color="#00A99D">
                        <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in hospitalSpecialities" />
                    </vs-select>

                    <vs-input type="number" label="Phone Number" placeholder="write here..." v-model="superUser.PhoneNumber" color="#00A99D"/>
            </div>
            <div class="col-sm-12 col-lg-6">
                    <fieldset class="address-fieldset">
                        <p class="legend">Address:</p>
                        <vs-input label="Country" placeholder="write here..." v-model="superUser.HospitalCountry" color="#00A99D"/>
                        <vs-input label="State" placeholder="write here..." v-model="superUser.HospitalState" color="#00A99D"/>
                        <vs-input label="city" placeholder="write here..." v-model="superUser.HospitalCity" color="#00A99D"/>
                        <vs-input label="Street" placeholder="write here..." v-model="superUser.HospitalStreet" color="#00A99D"/>
                    </fieldset>
            </div>     
                    <!----footer ----->
        </div>
        <div class="text-center">
            <div class="">
                <vs-button class="signup-button" @click.prevent="signUp" @click="openLoadingColor" color="#00A99D">Sign Up</vs-button>
                <!-- <button class=""  > Sign Up</button><br> -->
            </div>
            <p class="member-text">Already a member?<router-link to="/login" style="color: #00a89c ">Login</router-link></p>
        </div>
    </div>
</div>

</template>


<script>
    import SignupPhotoIcon from './icons/IconSignupPhoto.vue'
    import axios from 'axios';

    import Vue from 'vue'
    import Vuesax from 'vuesax'
    import 'vuesax/dist/vuesax.css' //Vuesax styles
    import 'material-icons/iconfont/material-icons.css';

    Vue.use(Vuesax, {
    // options here
    })

    export default {
        components:{
            SignupPhotoIcon,
        },
        data(){
			return {
                colorLoading:'#00A99D',
                wasLoginSuccessful:false,
				superUser:{
                    Email : "",
                    Password : "",
                    PhoneNumber : "",
                    HospitalName : "",
                    HospitalSpeciality : "",
                    HospitalCountry : "",
                    HospitalState : "",
                    HospitalCity : "",
                    HospitalStreet : ""
				},
				hospitalSpecialities:[
                    {text:"Cancer treatment centers",value:"Cancer treatment centers"},
                    {text:"Trauma centers",value:"Trauma centers"},
                    {text:"Psychiatric hospitals",value:"Psychiatric hospitals"},
                    {text:"Oncology hospitals",value:"Oncology hospitals"},
                    {text:"Cardiac hospitals",value:"Cardiac hospitals"},
                    {text:"Children's hospitals",value:"Children's hospitals"},
                    {text:"Women's hospitals",value:"Women's hospitals"},
                ],
			}
		},
        methods:{
            openLoadingColor(){
                this.$vs.loading({color:this.colorLoading})
                setTimeout( ()=> {
                    this.$vs.loading.close()
                }, 2500);
            },
			signUp:function(){
				axios.post('https://criticalconditionbackend.azurewebsites.net/superuser/register',this.superUser)
                .then((response) => {
					if(response.status == 201){
                        this.wasLoginSuccessful = true;
                        this.$router.push('/login');
                    }
                })
                .catch((error) => {
                    console.log("error occured")
                    console.log(error.response.data.errors)
                })
			}
        }
    }
</script>


<style >
    p{
        font-family: 'Segoe UI', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    }
    .hospital-details-text{
        font-size: 2rem;
        font-weight: 700;
    }
    .full-form label{
        font-size: 1em;
        font-weight: 600;
    }
    .full-form{
        margin-left: 5%;
    }
    .signup-button{
        width:50%;
        border-radius: 25px;
        margin-top: 1rem;
    }
    .member-text{
        margin-top: 1rem;
    }
    .address-fieldset{
        border: .02em solid grey;
        border-radius: .6em;
        padding:16px;	
        position: relative;
        margin-top: 1em;
    }
    .legend{
        font-size: 1.2em;
        font-weight: 400;
        position: absolute;
        top: -.9em;
        background-color: white;
    }
    @media (max-width: 550px) {
        .full-form{
            margin-left: 25%;
        }
    }
</style>