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
                        FMEA Risk Score : <span style="color: #00A99D">{{device.fmeaRiskScore}}</span> / 975
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
        <vs-row vs-w="12">
            <vs-col vs-type="flex" vs-lg="3" vs-sm="12" vs-xs="12" >
                <vs-card class="subuser-main-card">
                    <div slot="header">
                        <h4 class="text-center">
                            <i style="color: #00A99D" class="material-icons">diversity_3</i>
                            Sub-users
                        </h4>
                        <router-link to="/superuser/subusers" class="view-all-text">View all</router-link>
                    </div>
                    <div class="subuser-cards">
                        <vs-card v-for="(subUser, index) in subUsers.slice(0,3)" :key="index" class="subuser-card" actionable>
                            <div>
                                <p>Name : {{subUser.userName}}</p>
                                <p>Role : {{subUser.role}}</p>
                                <p>Code : {{subUser.code}}</p>
                            </div>
                        </vs-card>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-lg="9" vs-sm="12" vs-xs="12" >
                <vs-card class="editslog-main-card">
                    <div slot="header">
                        <h4 class="text-center">
                            <i style="color: #00A99D" class="material-icons">edit</i>
                            Edits Log
                        </h4>
                    </div>
                    <div class="editslog-cards">
                      <vs-card class="editslog-card">
                            <div>
                                <vs-card class="">
                                    <div slot="header">
                                        <h5 style="color: #00FA9A">
                                            Added
                                        </h5>
                                    </div>
                                    <div v-for="(createLog, index) in createLogs" :key="index">
                                        <p >
                                            {{createLog.subUserUserName}} <span style="color: #00FA9A">{{createLog.action}}</span> {{createLog.deviceName}} <span style="color: #00A99D">{{format_date(createLog.actionDate)}}</span>
                                        </p>
                                        <hr>
                                    </div>
                                </vs-card> 
                            </div>
                        </vs-card>                      
                        <vs-card class="editslog-card">
                            <div>
                                <vs-card class="">
                                    <div slot="header">
                                        <h5 style="color: #C0C0C0">
                                            Edited
                                        </h5>
                                    </div>
                                    <div v-for="(editedLog, index) in editedLogs" :key="index">
                                        <p >
                                            {{editedLog.subUserUserName}} <span style="color: #C0C0C0">{{editedLog.action}}</span> {{editedLog.deviceName}} <span style="color: #00A99D">{{format_date(editedLog.actionDate)}}</span>
                                        </p>
                                        <hr>
                                    </div>
                                </vs-card> 
                            </div>
                        </vs-card>
                        <vs-card class="editslog-card">
                            <div>
                                <vs-card class="">
                                    <div slot="header">
                                        <h5 style="color: #DC143C">
                                            Deleted
                                        </h5>
                                    </div>
                                    <div v-for="(archivedLog, index) in archivedLogs" :key="index">
                                        <p >
                                            {{archivedLog.subUserUserName}} <span style="color: #DC143C">{{archivedLog.action}}</span> {{archivedLog.deviceName}} <span style="color: #00A99D">{{format_date(archivedLog.actionDate)}}</span>
                                        </p>
                                        <hr>
                                    </div>
                                </vs-card> 
                            </div>
                        </vs-card>
                    </div>
                </vs-card>
            </vs-col>
        </vs-row>
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
                highRishDevicesNumber: 0,
                highRiskDevices: [],
                subUsers: [],
                createLogs: [],
                editedLogs: [],
                archivedLogs: [],
            }
        },
        
        methods: {
            callDataAPIs(){
                this.smallCardDevicesAPI('/superuser/smalldevices')
                this.getSubUsersAPI('/superuser/subusers')
                this.getEditsLogsAPI('/superuser/editslog')
            },

            smallCardDevicesAPI(APIEndPoint){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.get(this.$websiteLink + APIEndPoint, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    this.highRiskDevices = response.data;
                    
                    // sort by FMEA risk score descending (highest score first)
                    this.highRiskDevices.sort((a, b) => b.fmeaRiskScore - a.fmeaRiskScore)
                    
                    this.highRiskDevices.forEach(potentialyRiskyDevice => {
                        if (potentialyRiskyDevice.fmeaRiskScore > 600 || potentialyRiskyDevice.securityRiskScore > 75) {
                            this.highRishDevicesNumber++
                        }
                    });
                })
                .catch(error => {
                    this.catchAPIError(error)
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
            },

            getSubUsersAPI(APIEndPoint){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.get(this.$websiteLink + APIEndPoint, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    this.subUsers = response.data;
                })
                .catch(error => {
                    this.catchAPIError(error)
                })
                .finally(() => {
                    this.$vs.loading.close()
                })
            },            
            getEditsLogsAPI(APIEndPoint){
                this.$vs.loading({
                    color: this.primaryColor
                })
                axios.get(this.$websiteLink + APIEndPoint, {
                    headers:{
                        'Authorization': localStorage.getItem(this.$superuserToken)
                    }
                })
                .then(response => {
                    // sort by date descending (newest (biggest) date first)
                    response.data.sort((a, b) => new Date(b.actionDate) - new Date(a.actionDate))

                    response.data.forEach(element => {
                        if (element.action == "Created") {
                            this.createLogs.push(element);
                        }
                        else if(element.action == "Edited"){
                            this.editedLogs.push(element);
                        }
                        else if(element.action == "Archived"){
                            this.archivedLogs.push(element);
                        }
                    });
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
                // return moment(String(value)).format('MMMM Do YYYY')
                return moment(String(value)).fromNow()
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

    .high-risk-main-card{
        position: relative;
        border: none;
        background-color: rgb(236, 236, 236);
    }
    .high-risk-small-cards{
        display: flex;
        overflow-x: auto;
        padding: 0 1rem 0 1rem;
    }
    .high-risk-small-card{
        min-width: 16rem;
        margin: .5rem;
    }
    .device-model{
        font-weight: 400;
        font-size: 1.2rem;
        padding-left: 5rem;
    }
    .horizontal-rule{
        margin-left: 25%;
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
        color: var(--primarycolor);
    }
    .subuser-main-card{
        background-color: rgb(236, 236, 236);
        margin-top: 1rem;
        margin-right: 1rem;
        position: relative;
    }
    .editslog-main-card{
        background-color: rgb(236, 236, 236);
        margin-top: 1rem;
        height: 25rem;
    }
    .editslog-cards{
        display: flex;
        overflow-x: auto;
        padding: 0 1rem 0 1rem;
    }
    .subuser-cards{
        height: 20rem;
        overflow-x: auto;
    }
    .subuser-card{
        width: 80%;
        margin-left: 10%;
    }
    .editslog-card{
        overflow-y: auto;
        height: 20rem;
        min-width: 15rem;
        margin: .5rem;
    }
</style>