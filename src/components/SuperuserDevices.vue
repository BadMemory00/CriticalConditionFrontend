<template>
      <div class="card" id="parent">
            <div class="searchbar">
                <input type="search" name="search" placeholder="Search here..." />   
                <button type="button" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
            </div>   
            <div class="row">
                
                    <div class="card col-md-4" id="child">
                        <h5 name="device_name">Device name</h5>
                        <p style="margin-left: 120px; font-weight:bold;">___ model</p>

                        <span>Type of the service:    Empty          </span>
                        <span>Utilization Rate:       Limited        </span>
                        <span>Unavailability:         high           </span>
                        <span>Safety:                 serious        </span>
                        <span>Importance:             4              </span>
                        <span>Financial score:        1              </span>
                        <span>Detection:            easy to detect   </span>
                        <span>Age factor:             5              </span>
                        <span>Entry data:           22/3/200         </span>
                        <hr/>
                        <span>RBN Score</span>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 50% ; border-radius:40px ;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <span style="margin-left:10%">250/1000</span>
                            </div>
                        </div>
                            
                    </div>
                    <div class="card col-md-4" id="child">
                        
                    </div>

                    <div class="card col-md-4" id="child">
                         
                    </div>

                    <div class="card col-md-4" id="child">
                         
                    </div>
                     
                    
                        
            </div>

        </div>
</template>
<style>
#parent{
    margin-left: 170px;
     height: 600px;
    border-radius: 20px;
    background-color: rgb(242, 242, 242);
    border-style: none;
    padding-left: 80px;
    padding-right: 80px;
     
     

}

</style>
