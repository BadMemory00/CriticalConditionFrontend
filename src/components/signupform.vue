<template>
    <vs-row vs-w=12>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg=4 vs-sm=12>
            <img src="../assets/SignupPhoto.png" class="image"/>
        </vs-col>
        <vs-col vs-lg=8 vs-sm=12>
            <div>
                <div class="text-center">
                    <p class="hospital-details-text">Write your Hosptail's details</p>
                </div>
                <vs-row vs-w=12>
                    <vs-col vs-lg=6 vs-sm=6 vs-xs=12>
                        <div class="form-left-side">
                            <vs-input class="form-content" label="Hospital name" placeholder="write here..." v-model="superUser.HospitalName" color="#00A99D"/>
                            <vs-input class="form-content" label="Email" placeholder="write here..." v-model="superUser.Email" color="#00A99D"/>
                            <vs-input class="form-content" type="password" label="Password" placeholder="write here..." v-model="superUser.Password" color="#00A99D"/>

                            <vs-select class="form-content" autocomplete label="Hospital Specialty" v-model="superUser.HospitalSpeciality" color="#00A99D">
                                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in hospitalSpecialities" />
                            </vs-select>

                            <vs-input class="form-content" type="number" label="Phone Number" placeholder="write here..." v-model="superUser.PhoneNumber" color="#00A99D"/>
                        </div>
                    </vs-col>
                    <vs-col vs-lg=6 vs-sm=6 vs-xs=12>
                        <div class="form-right-side address-fieldset">
                            <p class="legend">Address</p>
                            <vs-input class="form-content" label="Country" placeholder="write here..." v-model="superUser.HospitalCountry" color="#00A99D"/>
                            <vs-input class="form-content" label="State" placeholder="write here..." v-model="superUser.HospitalState" color="#00A99D"/>
                            <vs-input class="form-content" label="city" placeholder="write here..." v-model="superUser.HospitalCity" color="#00A99D"/>
                            <vs-input class="form-content" label="Street" placeholder="write here..." v-model="superUser.HospitalStreet" color="#00A99D"/>
                        </div>
                    </vs-col>     
                </vs-row>
                <div class="text-center">
                    <div class="">
                        <vs-button class="signup-button" @click="signUp" color="#00A99D">Create Account</vs-button>
                        <!-- <button class=""  > Sign Up</button><br> -->
                    </div>
                    <p class="member-text">Already a member? <router-link to="/login" style="color: #00a89c; font-weight: 700;">Login</router-link></p>
                </div>
            </div>
        </vs-col>
    </vs-row>
</template>


<script>
    import axios from 'axios';

    export default {
        components:{
            
        },
        data(){
			return {
                colorLoading:'#00A99D',
                loading : false,
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
			signUp:function(){
                this.$vs.loading({color:this.colorLoading})
				axios.post(this.$websiteLink + '/superuser/register',this.superUser)
                    .then((response) => {
                        if(response.status == 201){
                            this.$vs.notify({title:'Success',text:'Email created successfully, moving you to login page....',color:'success'})
                            this.wasLoginSuccessful = true;
                            this.$router.push('/login');
                        }
                    })
                    .catch((error) => {
                        this.$vs.notify({title:'ERROR',text:'data is incorrect',color:'danger'})
                        console.log("error occured")
                        console.log(error.response.data.errors)
                    })
                    .finally(() =>{
                        this.$vs.loading.close()
                    })
			}
        }
    }
</script>


<style scoped>
    p{
        font-family: 'Segoe UI', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    }
    .image{
        width: 100%;
        height: 100%;
    }
    .hospital-details-text{
        font-size: 2rem;
        font-weight: 700;
    
    }
    .form-content{
        padding: 0 1.6rem 0 1.6rem;
        width: 100%;
    }
    .form-left-side{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form-right-side{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 85%;
        margin-left: 7.5%;
    }
    .address-fieldset{
        border: .02em solid rgb(192, 192, 192);
        border-radius: .6em;
        padding: 1rem 0 1rem 0;	
        position: relative;
        margin-top: 1.7rem;
    }
    .legend{
        font-size: 1.2em;
        font-weight: 400;
        position: absolute;
        top: -.9em;
        left: 2rem;
        background-color: white;
        color: #00a89c;
    }
    .signup-button{
        width:35%;
        border-radius: 10px;
        margin-top: 2rem;
    }
    .member-text{
        margin-top: 1rem;
    }
</style>