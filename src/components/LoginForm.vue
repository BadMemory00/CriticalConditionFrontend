<template>
<div>
    <vs-row vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12">
            <img src="../assets/loginphoto.jpg" class="image">
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12">
            <div class="whole-form">
                <div class="text-center upper-text">
                    <p class="login-text">Login</p>
                    <p class="get-started-text">Let's Get Started</p>
                    <hr />
                </div>
                <div>
                    <vs-tabs color="#00A99D" class="tabs">
                        <vs-tab label="Super-user">
                            <div class="super-user-form">
                                <vs-input class="form-content" icon="mail" icon-no-border label="Email" placeholder="write here..." color="#00A99D" v-model="SuperUser.Email"/>
                                <vs-input class="form-content" icon="lock" icon-no-border type="password" label="Password" placeholder="write here..." color="#00A99D" v-model="SuperUser.Password"/>
                                <vs-button class="button" color="#00A99D" type="filled" @click="SuperUserLogin">Login</vs-button>
                                <p class="text-center sign-up">Don't Have an Account? <router-link to="/signup" style="color: #00a89c; font-weight: 700;">Sign-up</router-link></p>
                            </div>
                        </vs-tab>
                        <vs-tab label="Sub-user" >
                            <div>
                                <vs-input class="form-content" icon-no-border="true" label="Code" placeholder="write here..." color="#00A99D" v-model="SubUser.Code"/>
                                <vs-button class="button" color="#00A99D" type="filled" @click="SubUserLogin">Login</vs-button>
                            </div>
                        </vs-tab>
                    </vs-tabs>
                </div>
            </div>
        </vs-col>
    </vs-row>
</div>
</template>

<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                primaryColor: "#00A99D",
                SuperUser: {
                    Email : "",
                    Password : ""
                },
                SubUser: {
                    Code : ""
                }
            }
        },
        methods: {
            SuperUserLogin(){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.post(this.$websiteLink + "/superuser/login", this.SuperUser)
                .then(response => {
                    this.$vs.notify({title:'Success',text:'login was successfull, moving you to super-user page....',color:'success'})
                    if(response.status == 200){
                        localStorage.setItem(this.$isSuperuserAuthorized, 'true');
                        localStorage.setItem(this.$superuserToken, 'Bearer '+ response.data);
                        this.$router.push('/superuser/home');
                    }
                })
                .catch( () => {
                    localStorage.setItem(this.$isSuperuserAuthorized, '');
                    localStorage.setItem(this.$superuserToken, '');
                    this.$vs.notify({title:'ERROR',text:'data is incorrect',color:'danger'})
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
            },
            SubUserLogin(){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.post(this.$websiteLink + "/subuser/login", this.SubUser)
                    .then(response => {
                        this.$vs.notify({title:'Success',text:'login was successfull, moving you to sub-user page....',color:'success'})
                        if(response.status == 200){
                            this.$router.push('/subuser/home');
                        }
                        console.log(response.status)
                    })
                    .catch(error => {
                        this.$vs.notify({title:'ERROR',text:'data is incorrect',color:'danger'})
                        console.log(error.data)
                    })
                    .finally(() => {
                        this.$vs.loading.close()
                    })
            },
        },
    }
</script>

<style>
    :root{
        --primarycolor: #00A99D;
    }

    .image{
        width: 100%;
        height: 100%;
        background-repeat:no-repeat;
    }
    .tabs ul{
        justify-content: space-around;
    }
    .whole-form{
        width: 70%;
        height: 100%;
    }
    .upper-text{
        margin-bottom: 3rem;
    }
    .upper-text hr{
        position: relative;
        left: 32%;
        width: 40%;
    }
    .login-text{
        font-size: 2rem;
        font-weight: bold;
    }
    .get-started-text{
        font-size: 1rem;
    }
    .sign-up{
        margin-top: 1rem;
    }
    .form-content{
        width: 100%;
        padding: .3rem .6rem .3rem .6rem
    }
    .button{
        width: 40%;
        left: 30%;
        margin-top: 2rem;
        border-radius: 10px;
    }
</style>