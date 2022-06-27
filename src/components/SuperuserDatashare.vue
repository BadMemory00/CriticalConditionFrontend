<template>
    <div class="main-content">
        <vs-card class="data-share-welcome-card">
            <div class="text-center">
                <h3 style="color: #00A99D">
                    Welcome to our data-share program!
                </h3>
            </div>
            <div class="text-center">
                <h6>
                    Data-share program allows you to view other hospitals data and in exchange
                    other hospitals will be able to view yours. In case of privacy concerns. You can
                    exclude up to 10% of the number of devices you share.
                    You will remain anonymous.
                </h6>
            </div>
            <div class="join-data-share-button">
                <vs-button icon="cloud_sync" :color="primaryColor" type="filled">Join Data-Shara Program Now</vs-button>
            </div>
        </vs-card>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                primaryColor: "#00A99D",
            }
        },

        computed: {
        },
        
        methods: {
        },
        
        beforeMount(){
        },
    }
</script>

<style scoped>
    :root{
        --primarycolor: #00A99D;
    }

    .main-content{
        display: flex;
        height: 80%;
        justify-content: center;
        align-items: center;
        position: fixed;
    }
    .data-share-welcome-card{
        width: 92%;
        background-color: #00a99e1e;
        color: black;
        border-radius: 20px;
        box-shadow: 0px 0px 2px var(--primarycolor);
    }
    .join-data-share-button{
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: 20px;
    }
    .join-data-share-button button{
        border-radius: 10px;
    }

</style>
