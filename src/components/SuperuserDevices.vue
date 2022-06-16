<template>
    <div>
        <vs-card class="main-card">
            <div slot="header">
                <vs-row vs-justify="flex-end">
                    <vs-input class="search-bar" icon="search" icon-after placeholder="search..." color="#00A99D" v-model="searchQuery"/>
                </vs-row>   
            </div>
            <div class="device-cards">
                <vs-card v-for="(device, index) in devicesSearchResults" :key="index" class="device-card">
                        <vs-dropdown v-if="isAcrchived" class="drob-down" vs-custom-content vs-trigger-click :color="primaryColor" >
                            <vs-icon :color="primaryColor" icon="more_vert"></vs-icon>
                            <vs-dropdown-menu>
                                <p class="text-center" style="font-size: .8rem;">
                                    Archived By : <span style="color: #00A99D">{{device.lastEditBy}}</span>
                                </p>
                                <div class="delete-unarchive">
                                    <vs-button @click="openConfirmDelete(device.name, device.id, index)" class="delete-button" color="danger" type="line">Delete</vs-button>
                                    <vs-button @click="openConfirmUnarchive(device.name, device.id, index)" class="unarchive-button" color="warning" type="line">Unarchive</vs-button>
                                </div>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                        <h4 class="text-center">
                            <i v-if="device.isIoT" style="color: #00A99D" class="material-icons">
                                connected_tv
                            </i>
                            {{device.name}}
                            <p class="device-model">{{device.model}}</p>
                        </h4>
                        <hr class="horizontal-rule" />
                        <p>Type of Service : <span class="device-data"> {{device.typeOfService}} </span></p>
                        <p>Utilization Rate : <span class="device-data"> {{device.utilizationRate}} </span></p>
                        <p>Unavailability : <span class="device-data"> {{device.unavailability}} </span></p>
                        <p>Safety : <span class="device-data"> {{device.safety}} </span></p>
                        <p>importance : <span class="device-data"> {{device.importance}} </span></p>
                        <p>Financial Score : <span class="device-data"> {{device.financialScore}} </span></p>
                        <p>Detection : <span class="device-data"> {{device.detection}} </span></p>
                        <p>Age Factor : <span class="device-data"> {{device.ageFactor}} </span></p>
                        <p>Entry Date : <span class="device-data"> {{format_date(device.addedAt)}} </span></p>
                        <p v-if="isAcrchived">Archived Date : <span class="device-data"> {{format_date(device.lastEditDate)}} </span></p>
                        <p>
                            FMEA Risk Score : <span style="color: #00A99D">{{device.fmeaRiskScore}}</span> / 975
                            <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore <= 25" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="success">%</vs-progress>
                            <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore <= 70 && device.fmeaRiskScore*100/maximumFMEARiskSccore > 25" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="warning">primary</vs-progress>
                            <vs-progress v-if="device.fmeaRiskScore*100/maximumFMEARiskSccore > 70" :percent="device.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="danger">primary</vs-progress>
                        </p>                       
                        <p v-if="device.isIoT">
                            Security Risk Score : <span style="color: #00A99D">{{device.securityRiskScore}}</span>
                            <vs-progress :percent="device.securityRiskScore" height="8" color="primary">primary</vs-progress>
                        </p>
                </vs-card>
            </div>
        </vs-card>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment'

    export default {
        data() {
            return {
                primaryColor: "#00A99D",
                maximumFMEARiskSccore: 975,
                devices: [],
                searchQuery:'',
                unarchiveOrDeleteDevice: {
                    deviceId : ''
                },
                deviceId: '',
                deviceIndex: -1,
            }
        },
        props: {
            isAcrchived: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            devicesSearchResults(){
                return this.devices.filter(device => device.name.toUpperCase().match(this.searchQuery.toUpperCase()))
            }
        },
        
        methods: {
            callDataAPIs(){
                this.DevicesAPI('/superuser/devices?IsArchived='+this.isAcrchived)
            },

            DevicesAPI(APIEndPoint){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.get(this.$websiteLink + APIEndPoint, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    this.devices = response.data;
                })
                .catch(error => {
                    this.catchAPIError(error)
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
            },
            openConfirmUnarchive(deviceName, deviceId, deviceIndex){
                this.$vs.dialog({
                    type:'confirm',
                    color: 'warning',
                    title: 'Unarchive Device',
                    text: 'Are you sure you want to Unarchive ' + deviceName,
                    accept: this.unarchive,
                })

                this.unarchiveOrDeleteDevice.deviceId = deviceId
                this.deviceIndex = deviceIndex
            },
            unarchive(){
                this.callUnarchiveOrDeleteDeviceAPI(
                        '/superuser/devices/unarchive',
                        'Device Unarchived Successfully',
                        'You can find this devics in the Devices tab',
                        this.primaryColor
                    )
            },
            openConfirmDelete(deviceName, deviceId, deviceIndex){
                this.$vs.dialog({
                    type:'confirm',
                    color: 'danger',
                    title: 'Delete Device',
                    text: 'Are you sure you want to Delete ' + '"' + deviceName + '"' + " you can't undo that action after pressing accept",
                    accept: this.delete,
                })

                this.unarchiveOrDeleteDevice.deviceId = deviceId
                this.deviceIndex = deviceIndex
            },
            delete(){
                this.callUnarchiveOrDeleteDeviceAPI(
                        '/superuser/devices/delete',
                        'Device Deleted Successfully',
                        'This Device Can not be Recovered',
                        this.primaryColor
                    )
            },
            callUnarchiveOrDeleteDeviceAPI(endPoint, title, text, color){
                this.$vs.loading({
                    color: this.primaryColor
                });

                axios.post(this.$websiteLink + endPoint, this.unarchiveOrDeleteDevice, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    if (response.status == 200) {
                        this.$vs.notify({title: title, text: text, color: color})

                        // remove devide from devies list
                        if (this.deviceIndex > -1) {
                            this.devices.splice(this.deviceIndex, 1)
                        }
                    }
                })
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
                    this.$vs.notify({title:'ERROR',text:'an Error Occured, Please Try Again',color:'danger'})
                    console.log(error);
                }
            },

            format_date(value){
                return moment(String(value)).format('MMMM Do YYYY')
                // return moment(String(value)).fromNow()
            },
        },
        
        beforeMount(){
            this.callDataAPIs();
        },
    }
</script>

<style scoped>
    :root{
        --primarycolor: #00A99D;
    }
    .search-bar i{
        color: var(--primarycolor);
    }
    .main-card{
        background-color: rgb(236, 236, 236);
    }
    .drob-down{
        position: absolute;
        right: .5rem;
        top: .7rem;
    }
    .device-cards{
        display: flex;
        overflow-x: auto;
        padding: 0 1rem 0 1rem;
    }
    .device-card{
        position: relative;
        min-width: 16rem;
        margin: .5rem;
    }
    .device-model{
        font-weight: 400;
        font-size: 1.2rem;
    }
    .horizontal-rule{
        margin-left: 25%;
        width: 50%;
        border: 1px solid var(--primarycolor);
    }
    .device-data{
        color: var(--primarycolor);
    }
    .delete-unarchive{
        display: flex; 
        justify-content: center;
    }
    .delete-button{
        margin: 0 .5rem .5rem 0.5rem;
        border-radius: 10px;
    }
    .unarchive-button{
        margin: 0 .5rem .5rem .5rem;
        border-radius: 10px;
    }
</style>
