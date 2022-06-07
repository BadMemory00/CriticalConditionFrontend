<template>
    <vs-row vs-w="12" vs-type="flex" vs-justify="center" vs-align="center">
            <div id="card1">
                <div class="title">
                    <h4>Hospital information</h4>
                </div>       
                <div id="card2">
                    <ul class="StepProgress">
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="Hospital Name" class="inputx input-label" placeholder="Hospital Name" v-model="superuser.hospitalName"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="E-mail" class="inputx input-label" placeholder="E-mail" v-model="superuser.email"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="Phone Number" class="inputx input-label" placeholder="Phone Number" v-model="superuser.phoneNumber"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="Speciality" class="inputx input-label" placeholder="Hospital Speciality" v-model="superuser.hospitalSpeciality"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="Country" class="inputx input-label" placeholder="Hospital Country" v-model="superuser.hospitalCountry"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="State" class="inputx input-label" placeholder="Hospital State" v-model="superuser.hospitalState"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="City" class="inputx input-label" placeholder="Hospital City" v-model="superuser.hospitalCity"/>
                        </li>
                        <li class="StepProgress-item is-done">
                            <vs-input disabled size="small" label="Street" class="inputx input-label" placeholder="Hospital Street" v-model="superuser.hospitalStreet"/>
                        </li>
                    </ul>
                </div>
            </div>
    </vs-row>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                primaryColor: "#00A99D",
                superuser: [],
                APIsEndPoints: {
                    getSuperuser: "/superuser/get",
                }
            }
        },
        
        methods: {
            callDataAPIs(){
                this.getSubsersAPI(this.APIsEndPoints.getSuperuser)
            },
            getSubsersAPI(APIEndPoint){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.get(this.$websiteLink + APIEndPoint, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    this.superuser = response.data;
                    }
                )
                .catch(error => {
                    this.catchAPIError(error)
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
            },
            catchAPIError(error){
                if (error.response.status == 401) {
                    localStorage.setItem(this.$isSuperuserAuthorized, '');
                    localStorage.setItem(this.$superuserToken, '');
                    this.$vs.notify({title:'ERROR',text:'Your Session Expired, Please Login Again',color:'danger'})
                    this.$router.go('/login');
                }
                else{
                    this.$vs.notify({title:'ERROR',text:'an Error Occured, Please Refresh Your Page',color:'danger'})
                    console.log(error);
                }
            },
        },
        
        beforeMount(){
            this.callDataAPIs();
        },
    }
</script>

<style>
    :root{
      --primarycolor: #00A99D;
    }
    #card1{
        width: 26rem;
        height: 44rem;
        margin-right: .5rem;
        border-radius: 10px;
        background-color: rgb(236, 236, 236);
    }
    .title{
        text-align: center;
        margin: 1rem;
    }
    #card2{
        margin-left:10%;
        width: 80%;
        height: 39rem;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
    }
    .input-label{
        width: 80%;
        color: var(--primarycolor);
    }

    .StepProgress {
        position: relative;
        padding-left: 3rem;
        list-style: none;
    }
    .StepProgress-item {
        position: relative;
    }
    .StepProgress-item:not(:last-child) {
        padding-bottom: 1.5rem;
    }
    .StepProgress-item::before {
        content: '';
        position: absolute;
        top: .5rem;
        left: -1.5rem;
        height: 100%;
    }
    .StepProgress-item::after {
        content: '';
        position: absolute;
        top: .5rem;
        left: -1.85rem;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    .StepProgress-item.is-done::before {
        border-left: 2px solid var(--primarycolor);
    }
    .StepProgress-item.is-done::after {
        font-size: 10px;
        color: #FFF;
        text-align: center;
        border: 2px solid var(--primarycolor);
        background-color: var(--primarycolor);
    }
</style>