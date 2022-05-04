<template>
 <div class="page">
        <div >
            <SignupPhotoIcon class="image" />
        </div>
    <div class="">
        <div class="">
            <div>
                <h2>Write your Hosptail's details</h2>
            </div>          
            <div class="">
                <div class="">
                        <label for="hospital_name">Hospital name </label><br>
                                <input v-model="superUser.HospitalName" type="text" name="hostital_name" id="hospital_name"   /><br>
                        <label for="email" >Email</label><br>
                            <input v-model="superUser.Email" type="email" id="email" name="email"   /><br>
                        <label for="password" >Password</label><br>
                            <input v-model="superUser.Password" type="password" id="password" name="password" /><br>
                        <label for="hospital_pecialty">Hospital Specialty</label><br>
                            <select v-model="superUser.HospitalSpeciality" class="select" id="hospital_pecialty" name="hospital_pecialty">
                                    <option value="Cancer treatment centers">Cancer treatment centers</option>                                        
                                    <option value="Trauma centers">Trauma centers</option>                                        
                                    <option value="Psychiatric hospitals">Psychiatric hospitals</option>                                        
                                    <option value="Oncology hospitals">Oncology hospitals</option>                                        
                                    <option value="Cardiac hospitals">Cardiac hospitals</option>                                        
                                    <option value="Children's hospitals">Children's hospitals</option>                                        
                                    <option value="Women's hospitals">Women's hospitals</option>                                        
                            </select><br>
                        <label for="phone number" >Phone number</label><br>
                            <input v-model="superUser.PhoneNumber" type="number" id="phone_number" name="phone_number">
                </div>
                <div class="">
                        <fieldset class="">
                            <p class="">Address</p>
                                <label for="country">Country</label><br>
                                    <input v-model="superUser.HospitalCountry" type="text" name="country" id="country"   /><br>
                                <label for="state" >State</label><br>
                                    <input v-model="superUser.HospitalState" type="text" id="state" name="state"   /><br>
                                <label for="city">city</label><br>
                                    <input v-model="superUser.HospitalCity" type="text" id="city" name="city"   /><br>
                                <label for="street" >Street</label><br>
                                    <input v-model="superUser.HospitalStreet" type="text" id="street" name="street"  >
                        </fieldset>
                </div>     
                        <!----footer ----->
                <div class="">
                    <div>
                    <button class="" @click.prevent="signUp" > Sign Up</button><br>
                    <h5 class="">Already a member?<router-link to="/login" style="color: #00a89c ">Login</router-link></h5>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
    import SignupPhotoIcon from './icons/IconSignupPhoto.vue'
    import axios from 'axios';

    export default {
        components:{
            SignupPhotoIcon,
        },
        data(){
			return {
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
				
			}
		},
        methods:{
			signUp:function(){
				axios.post('https://criticalconditionbackend.azurewebsites.net/superuser/register',this.superUser)
                .then((data) => {
					console.log(data.data);
                })
			}
        }
    }
</script>


<style >
    .page{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    .image{
        height: 100%;
        width: 100%;
    }
    .select-selected:after{
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
</style>