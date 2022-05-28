<template>
    <div>
        <vs-card class="high-risk-main-card">
            <div slot="header">
                <h4 class="text-center">
                    <i style="color: #00A99D" class="material-icons"> 
                        electric_bolt
                    </i>
                    High Risk Devices 
                </h4>
                <p v-if="highRishDevicesNumber != 0" style="color: red">You have {{highRishDevicesNumber}} device/s with very high risk</p>
                <router-link to="/superuser/devices" class="view-all-text">View all</router-link>
            </div>
            <div class="high-risk-small-cards">
                <vs-card v-for="(device, index) in highRiskDevices.slice(0,4)" :key="index" class="high-risk-small-card" actionable>
                        <h4 class="text-center">
                            <i v-if="device.isIoT" style="color: #00A99D" class="material-icons">
                                connected_tv
                            </i>
                            {{device.name}}
                            <p class="device-model">{{device.model}}</p>
                        </h4>
                        <hr class="horizontal-rule" />
                    <p>Number of Failures : <span class="number-of-failures"> {{device.numberOfFailures}} </span> times</p>
                    <p>
                        FMEA Risk Score : 
                        <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore <= 25" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="success">%</vs-progress>
                        <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore <= 70 && device.fmeaRiskScore*100/maximumFMEARiskSccore > 25" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="warning">primary</vs-progress>
                        <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore > 70" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="danger">primary</vs-progress>
                    </p>                       
                     <p v-if="device.isIoT">
                        Security Risk Score : 
                        <vs-progress :percent="device.securityRiskScore*100/maximumFMEARiskSccore" height="8" color="primary">primary</vs-progress>
                    </p>
                </vs-card>
            </div>
        </vs-card>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                highRishDevicesNumber: 0,
                highRiskDevices: null,
                maximumFMEARiskSccore: 975,
            }
        },
        methods: {
            callDataAPIs(){
                this.callHighRiskDevicesAPI()
            },
            callHighRiskDevicesAPI(){
                axios.get(this.$websiteLink + '/superuser/smalldevices', {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    this.highRiskDevices = response.data;
                    this.highRiskDevices.sort((a, b) => b.fmeaRiskScore - a.fmeaRiskScore)
                    this.highRiskDevices.forEach(potentialyRiskyDevice => {
                        if (potentialyRiskyDevice.fmeaRiskScore > 600 || potentialyRiskyDevice.securityRiskScore > 75) {
                            this.highRishDevicesNumber++
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        
        beforeMount(){
            this.callDataAPIs()
        },
    }
</script>

<style>
    :root{
        --primarycolor: #00A99D;
    }

    .high-risk-main-card{
        position: relative;
        border: none;
        background-color: rgb(236, 236, 236);
    }
    .high-risk-small-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 0 1rem 0 1rem;
    }
    .high-risk-small-card{
        width: 18rem
    }
    .device-model{
        font-weight: 400;
        font-size: 1.2rem;
        padding-left: 5rem;
    }
    .horizontal-rule{
        margin-left: 25%;
        padding-left: 25%;
        width: 50%;
        border: 1px solid var(--primarycolor);
    }
    .view-all-text{
        text-decoration: none;
        color: var(--primarycolor);
        position: absolute;
        right: .7rem;
        top: 35px;
    }
    .number-of-failures{
        /* background-color: rgb(255, 205, 205); */
        color: var(--primarycolor);
    }
</style>