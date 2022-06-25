<template>
  <div class="full-page">
    <div class="left-up-side">
      <div class="devices-main-card">
        <div v-if="isOperator" @click="addDeviceModalActive=true" class="add-device-plus-sign">
          <i class="material-icons">
            add
          </i>
        </div>
        <div class="search-input">
          <vs-input icon="search" type="search" placeholder="Search.." :color="primaryColor" v-model="searchQuery"/>
        </div>
        <p class="click-on-device-text">Click on a device to view its data!</p>
        <div class="devices-card">
          <vs-card class="device-card" actionable v-for="(device, index) in devicesSearchResults" :key="index">
            <div @click="callOpenSingleDeviceAPI(device.id)" >
              <h5 class="text-center">
                {{device.name}}
              </h5>
              <h6 class="text-center device-model">
                {{device.model}}
              </h6>
              <hr style="width: 40%; margin: 0 0 0 30%; color: #00A99D; border: .1rem solid #00A99D; border-radius: 10px;">
              <p style="margin-bottom: .5rem">Area: <span style="color: #00A99D">{{device.area}}</span></p>
              <p style="margin-bottom: .5rem">No. of Failures: <span style="color: #00A99D">{{device.numberOfFailures}}</span> time</p>
              <p style="margin-bottom: .5rem">Down Time: <span style="color: #00A99D">{{device.downTime}}</span> days</p>
            </div>
          </vs-card>
        </div>
      </div>
    </div>
    <div class="right-down-side">
      <div v-if="openSingleDevice" class="device-main-card">
        <div class="device-main-card-drobdown">
          <vs-dropdown vs-custom-content vs-trigger-click>
            <vs-icon style="font-size: 35px" color="#00A99D" icon="more_vert"></vs-icon>

            <vs-dropdown-menu class="drobdown-menu">
              <div class="drobdown-buttons">
                <vs-button @click="quickEditModalOpen(singleDecive)" color="#CCCCCC" type="border">Quick Edit</vs-button>
                <hr>
                <vs-button  color="#C0C0C0" type="border">Edit</vs-button>
                <vs-button  color="warning" type="border">Archive</vs-button>
              </div>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <h2 class="text-center">
          {{singleDecive.name}}
        </h2>
        <h4 class="text-center device-model">
          {{singleDecive.model}}
        </h4>
        <hr style="width: 30%; margin: 0 0 0 35%; color: #00A99D; border: .1rem solid #00A99D; border-radius: 10px;">
        <div class="info-card">
          <div class="legend">
            <p>General Info</p>
          </div>
          <vs-input disabled class="input-item" size="small" label="Brand" placeholder="Disabled" v-model="singleDecive.brand"/>
          <vs-input disabled class="input-item" size="small" label="Type of Service" placeholder="Disabled" v-model="singleDecive.typeOfService"/>
          <vs-input disabled class="input-item" size="small" label="Prchasing Data" placeholder="Disabled" v-model="singleDecive.purchaseDate" icon="calendar_today"/>
        </div>
        <div class="info-card">
          <div class="legend">
            <p>Probability Info</p>
          </div>
          <vs-input disabled class="input-item" size="small" label="No. of Working Days" placeholder="Disabled" v-model="singleDecive.numberOfWorkingDays"/>
          <vs-input disabled class="input-item" size="small" label="No. of Failures" placeholder="Disabled" v-model="singleDecive.numberOfFailures"/>
          <vs-input disabled class="input-item" size="small" label="Down Time" placeholder="Disabled" v-model="singleDecive.downTime"/>
        </div>
        <div class="info-card">
          <div class="legend">
            <p>Severity Info</p>
          </div>
          <vs-input disabled class="input-item" size="small" label="Safety" placeholder="Disabled" v-model="singleDecive.safety"/>
          <vs-input disabled class="input-item" size="small" label="Function" placeholder="Disabled" v-model="singleDecive.function"/>
          <vs-input disabled class="input-item" size="small" label="Area" placeholder="Disabled" v-model="singleDecive.area"/>
          <vs-input disabled class="input-item" size="small" label="Service Cost" placeholder="Disabled" v-model="singleDecive.serviceCost" icon="attach_money"/>
          <vs-input disabled class="input-item" size="small" label="Operational Cost" placeholder="Disabled" v-model="singleDecive.operationCost" icon="attach_money"/>
          <vs-input disabled class="input-item" size="small" label="Prchasing Cost" placeholder="Disabled" v-model="singleDecive.purchasingCost" icon="attach_money"/>
        </div>
        <div class="info-card">
          <div class="legend">
            <p>Detection Info</p>
          </div>
          <vs-input disabled class="input-item" size="small" label="Detection" placeholder="Disabled" v-model="singleDecive.detection"/>
        </div>
        <div class="info-card">
          <div class="legend">
            <p>Risk Info</p>
          </div>
          <div class="input-item">
            FMEA Risk Score : <span style="color: #00A99D">{{singleDecive.fmeaRiskScore}}</span> / 975
            <vs-progress v-if="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore <= 25" :percent="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="success">%</vs-progress>
            <vs-progress v-if="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore <= 70 && singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore > 25" :percent="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="warning">primary</vs-progress>
            <vs-progress v-if="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore > 70" :percent="singleDecive.fmeaRiskScore*100/maximumFMEARiskSccore" height="10" color="danger">primary</vs-progress>
          </div>                       
          <div class="input-item" v-if="singleDecive.isIoT">
            Security Risk Score : <span style="color: #00A99D">{{singleDecive.securityRiskScore}}</span>
            <vs-progress :percent="singleDecive.securityRiskScore" height="8" color="primary">primary</vs-progress>
          </div>
        </div>
      </div>
    </div>

    <!-- Add, Quick Edit, Edit, Archive MODALS -->
    <vs-prompt
      :color="primaryColor"
      title='Add Device'
      @accept="acceptDeviceCreate"
      @close="closeDeviceCreate"
      accept-text="Create"
      button-accept="line"
      :active.sync="addDeviceModalActive">
          <h4 class="text-center">Add New Device</h4>
          <div class="info-card">
            <div class="legend">
              <p>General Info</p>
            </div>
            <vs-input class="input-item" :color="primaryColor" type="text" label="Name" placeholder="Write here.." v-model="newDevice.name"/>
            <vs-input class="input-item" :color="primaryColor" type="text" label="Model" placeholder="Write here.." v-model="newDevice.model"/>
            <vs-input class="input-item" :color="primaryColor" type="text" label="Brand" placeholder="Write here.." v-model="newDevice.brand"/>
            <vs-input class="input-item" :color="primaryColor" type="text" label="Type of Service" placeholder="Write here.." v-model="newDevice.typeOfService"/>
            <vs-input class="input-item" :color="primaryColor" type="date" label="Prchasing Data" v-model="newDevice.purchaseDate" icon="calendar_today"/>
          </div>
          <div class="info-card">
            <div class="legend">
              <p>Probability Info</p>
            </div>
            <vs-input class="input-item" :color="primaryColor" type="number" min=0 label="No. of Working Days (Yearly)" placeholder="Write here.." v-model="newDevice.numberOfWorkingDays"/>
            <vs-input class="input-item" :color="primaryColor" type="number" label="No. of Failures (Last Year)" placeholder="Write here.." v-model="newDevice.numberOfFailures"/>
            <vs-input class="input-item" :color="primaryColor" type="number" label="Down Time (Last Year)" placeholder="Write here.." v-model="newDevice.downTime"/>
          </div>
          <div class="info-card">
            <div class="legend">
              <p>Severity Info</p>
            </div>
            <vs-select class="input-item" :color="primaryColor" autocomplete label="Safety" v-model="newDevice.safety">
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in SafeyValues" />
            </vs-select>
            <vs-select class="input-item" :color="primaryColor" autocomplete label="Function" v-model="newDevice.function">
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in FunctionValues" />
            </vs-select>
            <vs-select class="input-item" :color="primaryColor" autocomplete label="Area" v-model="newDevice.area">
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in AreaValues" />
            </vs-select>
            <vs-input class="input-item" :color="primaryColor" type="number" label="Service Cost" placeholder="Write here.." v-model="newDevice.serviceCost" icon="attach_money"/>
            <vs-input class="input-item" :color="primaryColor" type="number" label="Operational Cost" placeholder="Write here.." v-model="newDevice.operationCost" icon="attach_money"/>
            <vs-input class="input-item" :color="primaryColor" type="number" label="Prchasing Cost" placeholder="Write here.." v-model="newDevice.purchasingCost" icon="attach_money"/>
          </div>
          <div class="info-card">
            <div class="legend">
              <p>Detection Info</p>
            </div>
            <vs-select class="input-item" :color="primaryColor" autocomplete label="Detection" v-model="newDevice.detection">
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in DetectionValues" />
            </vs-select>
          </div>
     </vs-prompt>

    <vs-prompt
      color="#CCCCCC"
      title='Quick Edit'
      @accept="acceptDeviceQuickEdit"
      @close="closeDeviceQuickEdit"
      accept-text="Update"
      button-accept="line"
      :active.sync="quickEditModelActive">
      <div class="quick-edit-form">
        <vs-input class="input-item" :color="primaryColor" type="number" label="No. of Failures (Last Year)" placeholder="" v-model="quickEditDevice.numberOfFailures"/>
        <vs-input class="input-item" :color="primaryColor" type="number" label="Down Time (Last Year)" placeholder="" v-model="quickEditDevice.downTime"/>
      </div>
          
    </vs-prompt>


    <!-- -------------------------------- -->
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment'

  export default {
    data() {
        return {
          primaryColor: "#00A99D",
          
          APIEndPoints: {
            getAllDevices: '/subuser/viewdevices',
            isOperator: '/subuser/isoperator',
            getsingleDevice: '/subuser/viewdevices/',
            addDevice: '/subuser/device/add',
            quickEditDevice: '/subuser/device/quickedit',
          },

          maximumFMEARiskSccore: 975,
          searchQuery: '',
          devices: [],
          isOperator: false,
          
          openSingleDevice: false,
          singleDecive: {
            "id": "",
            "name": "",
            "brand": "",
            "model": "",
            "typeOfService": "",
            "purchaseDate": "",
            "numberOfWorkingDays": 0,
            "numberOfFailures": 0,
            "downTime": 0,
            "safety": "",
            "function": "",
            "area": "",
            "serviceCost": 0,
            "operationCost": 0,
            "purchasingCost": 0,
            "detection": "",
            "fmeaRiskScore": 0,
            "isIoT": false,
            "securityRiskScore": null
          },

          // Add, Quick Edit, Edit, Archive DEVICES VARIABLES/OBJECTS
          SafeyValues:[
            {text:'Catastrophic',value:'Catastrophic'},
            {text:'Critical',value:'Critical'},
            {text:'Serious',value:'Serious'},
            {text:'Minor',value:'Minor'},
            {text:'Negligible',value:'Negligible'},
          ],
          FunctionValues:[
            {text:'Life Support',value:'LifeSupport'},
            {text:'Diagnostic',value:'Diagnostic'},
            {text:'Therapy Analysis',value:'TherapyAnalysis'},
            {text:'Monitoring',value:'Monitoring'},
            {text:'Micekkes',value:'Micekkes'},
          ],
          AreaValues:[
            {text:'OR',value:'OR'},
            {text:'Emergency ICU',value:'EmergencyICU'},
            {text:'Radiology Labs',value:'RadiologyLabs'},
            {text:'Internal Units',value:'InternalUnits'},
            {text:'Other',value:'Other'},
          ],
          DetectionValues:[
            {text:'No Chance',value:'NoChance'},
            {text:'Low Chance',value:'LowChance'},
            {text:'Moderate Chance',value:'ModerateChance'},
            {text:'High Chance',value:'HighChance'},
            {text:'Easy to Detect',value:'EasyToDetect'},
          ],
          addDeviceModalActive: false,
          newDevice: {
            "name": "",
            "brand": "",
            "model": "",
            "typeOfService": "",
            "purchaseDate": "",
            "numberOfWorkingDays": null,
            "numberOfFailures": null,
            "downTime": null,
            "safety": "",
            "function": "",
            "area": "",
            "serviceCost": null,
            "operationCost": null,
            "purchasingCost": null,
            "detection": "",
          },
          quickEditModelActive: false,
          quickEditDevice: {
            "deviceId": null,
            "numberOfFailures": null,
            "downTime": null,
          },
          // ----------------------------------
        }
    },
    computed: {
        devicesSearchResults(){
            return this.devices.filter(device => device.name.toUpperCase().match(this.searchQuery.toUpperCase()))
        }
    },
    
    methods: {
      callDataAPIs(){
          this.DevicesAPI(this.APIEndPoints.getAllDevices)
          this.checkIfOperator(this.APIEndPoints.isOperator)
      },

      DevicesAPI(APIEndPoint){
          this.$vs.loading({
              color: this.primaryColor
          })
          axios.get(this.$websiteLink + APIEndPoint, {
              headers:{
                  'Authorization': localStorage.getItem(this.$subuserToken)
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
      checkIfOperator(APIEndPoint){
          axios.get(this.$websiteLink + APIEndPoint, {
              headers:{
                  'Authorization': localStorage.getItem(this.$subuserToken)
              }
          })
          .then(response => {
              this.isOperator = response.data;
          })
          .catch(error => {
              this.catchAPIError(error)
          })
      },
      callOpenSingleDeviceAPI(deviceId){
        this.$vs.loading({
          color: this.primaryColor
        })
        axios.get(this.$websiteLink + this.APIEndPoints.getsingleDevice + deviceId, {
            headers:{
                'Authorization': localStorage.getItem(this.$subuserToken)
            }
        })
        .then(response => {
          this.openSingleDevice = true
          this.singleDecive = response.data;
        })
        .catch(error => {
          this.catchAPIError(error)
        })
        .finally(() => {
          this.$vs.loading.close()
        })
      },

      // Add, Quick Edit, Edit, Archive FUNCTIONS
      acceptDeviceCreate(){
        this.postRequest(this.APIEndPoints.addDevice, this.newDevice, 'Device Created Successfully');
        this.newDevice = ''
      },
      closeDeviceCreate(){
          this.$vs.notify({
              color:'danger',
              title:'you did not add any device',
              text:'you can always change your mind!'
          })
      },

      quickEditModalOpen(device){
        this.quickEditModelActive = true

        this.quickEditDevice.deviceId = device.id
        this.quickEditDevice.numberOfFailures = device.numberOfFailures
        this.quickEditDevice.downTime = device.downTime
      },
      acceptDeviceQuickEdit(){
        this.postRequest(this.APIEndPoints.quickEditDevice, this.quickEditDevice, 'Device Edited Successfully');

        this.openSingleDevice = false
        setTimeout(() => this.callOpenSingleDeviceAPI(this.quickEditDevice.deviceId), 1000);
      },
      closeDeviceQuickEdit(){
          this.$vs.notify({
              color:'danger',
              title:'you did not edit the device',
              text:'you can always change your mind!'
          })
      },

      postRequest(endPoint, body, title){
        this.$vs.loading({
            color: this.primaryColor
        })
        axios.post(this.$websiteLink + endPoint, body, {
            headers:{
                'Authorization': localStorage.getItem(this.$subuserToken)
            }
        })
        .then(response => {
          if (response.status == 201 || response.status == 200) {
              this.$vs.notify({
                color: this.primaryColor,
                title: title,
                // text:''
              })

              // call the Original API again to repapulate the lists
              this.DevicesAPI(this.APIEndPoints.getAllDevices);
            }
          }
        )
        .catch(error => {
            this.catchAPIError(error)
        })
        .finally(() => {
            this.$vs.loading.close()
        })
      },
      // ----------------------------------

      catchAPIError(error){
          if (error.response.status == 401) {
              localStorage.setItem(this.$isSubuserAuthorized, '');
              localStorage.setItem(this.$subuserToken, '');
              this.$vs.notify({title:'ERROR',text:'Your Session Expired, Please Login Again',color:'danger'})
              setTimeout(() => this.$router.go('/login'), 2500);
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

  .full-page{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .left-up-side{
    flex: 1 1 300px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .right-down-side{
    flex: 1 1 500px;
  }
  .devices-main-card{
    position: relative;
    background-color: #f7f9f8;
    border-radius: 10px;
    padding: .5rem;
    margin: 1rem;
    box-shadow: 0 1px 5px #888888;
  }
  .add-device-plus-sign{
    position: absolute;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: var(--primarycolor);
    top: -1.25rem;
    left: 45%;
    cursor: pointer;
  }
  .add-device-plus-sign i{
    color: white;
    font-size: 2.2rem;
    margin: 10% 10% 10% 10%;
  }
  .search-input{
    display: flex;
    justify-content: flex-end;
  }
  .search-input >>> i{
    color: var(--primarycolor);
  }
  .search-input .vs-component{
    margin-top: 1.2rem;
  }
  .click-on-device-text{
    padding-left: 2.5rem; 
    font-weight: 500;
  }
  .devices-card{
    display: flex;
    flex-wrap: wrap;
    height: 45vh;
    overflow-y: auto;
  }
  .device-card{
    height: 10rem;
    margin: .5rem;
    flex: 1 1 250px;
    box-shadow: 3px 3px 8px #888888;
  }
  .device-model{
    margin-left: 45%;
  }
  .device-main-card{
    position: relative;
    background-color: #f7f9f8;
    border-radius: 10px;
    padding: .5rem;
    margin: 1rem;
    box-shadow: 0 1px 5px #888888;
  }
  .info-card{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem 1rem 1rem 1rem;
    padding: .5rem 0 1rem 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 8px #888888;
  }
  .input-item{
    color: var(--primarycolor);
    flex: 1 1 200px;
    padding: 0 1rem;
  }
  .input-item >>> i{
    color: var(--primarycolor);
    font-size: 20px;
    top: 20%;
  }
  .legend{
    position: absolute;
    top: -1.1rem;
    left: 3rem;
    font-weight: 500;
    text-shadow: 0px 0px 8px #b4b4b4;
  }
  .device-main-card-drobdown{
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
  .drobdown-menu{
    width: 8rem; 
  }
  .drobdown-buttons{
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .drobdown-buttons hr{
    width: 50%;
    margin: .5rem 0 .5rem 25%;
    color: var(--primarycolor);
    border: 1px solid var(--primarycolor);
  }
  .con-vs-dialog{
    z-index: 50000;
    align-items: flex-start;
    overflow-y: auto;
  }
  .con-vs-dialog >>> .vs-dialog{
    max-width: 100%;
    width: auto;
    margin-top: 3rem;
  }
  .quick-edit-form{
    display: flex;
  }

  @media only screen and (max-width: 815px) {
    .left-up-side{
      justify-content: flex-start;
      height: 22rem;
      overflow-y: auto;
    }
    .devices-main-card{
      margin: 2rem .3rem 0 .3rem;
    }
    .search-input{
      justify-content: center;
    }
    .search-input .vs-con-input-label{
      width: 80%;
    }
    .click-on-device-text{
      padding-left: 0; 
      text-align: center;
    }
    .devices-card{
      flex-direction: column;
      height: 11.8rem;
    }
    .device-card{
      height: 9rem;
      width: 12rem;
    }
    .device-model{
      margin-left: 0;
    }
    .device-main-card{
      margin: 0 .3rem;
    }
    .input-item{
      padding: 0 2rem;
    }
    .con-vs-dialog >>> .vs-dialog{
      margin-top: 5rem;
    }
  }
</style>
