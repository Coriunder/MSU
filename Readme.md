Introduction to MSU 

MSU means Merchant Sign Up - this is a little project we created to help our clients onboard merchant into their backend system, the JS is simple - create a form and connect it to the fields allowed in the service. 

The tool allows you to decide which fields are mandatory or not in the JSON file.

Mobile versions of this project will be published soon. 

## CSS
You will need to add the following references to the head of your page

```
<!-- MSU Core CSS -->
    <link href="msu/msu.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.min.css">
<!-- End of MSU Core CSS -->   
    
```
##JSON FILE
The JSON file is the configuration file for this service - first configure the domain where your service is running - no need to configure the subdomain "webservices" since this is a fixed subdomain - just enter the domain, for example for a domain  www.coriunder.com enter only coriunder.com.

bellow the URL section you can determine which fields are required for the validation on your site, bare in mind it is connected to our service and we require the following things : 

- Business name - legalbusinessname
- First and Last names - fname lname
- Website url - websiteurl
- Cancel check image - canceledchequeimage - you dont have to send it the service just need to appear in your page in order for it to work.


## JS
MSU is based on a simple JS that connects between your site to the merchant registration webservice.
there is no need to change anything in the JS to make the little function work - the only changes required are in the JSON as mentioned above.

```
<!-- MSU core JavaScript library -->
    <script src="msu/msu.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#msu_businessstartdate_id").datepicker();
            $("#msu_ownerdob_id").datepicker();
            msu_app.init("msu/msu.json", "en");
        });

        var onSubmitOk = function (response) {
            alert("Thank you for your submission - we will review it shortly and will get back to you with further information");
        };

        var onSubmitFail = function (jqXHR, exception) {
            alert("Hey - it seems to be an issue with your submission - send us a note at josh@coriunder.com and we will take care of it.");
        };

        function onSubmit() {
            var result = msu_app.validate();
            if (result && result.length > 0) {
                var valSumHtml = "";
                for (var counter = 0; counter < result.length; counter++) {
                    valSumHtml = valSumHtml + msu_utils.buildValItem(result[counter]);
                }

                $("#valsum-list").html(valSumHtml);
                $('#validationsummary').modal("show");
                return;
            }
            else {
                msu_app.submit(onSubmitOk, onSubmitFail);
            }
        }
    </script>
```

##Changelog

19.11.2017 - Added Source/Account Manager/Account type/Parent company - use it to send additional fields to filter better your leads.

## Sample of html 

This is an example of a form that includes the minimum fields for a lead signup - you can start from this form and add any field that you like from the JSON file.

```
<section id="signup" class="section">
        <div class="container">
          <header class="section-header text-center">
          <h3><strong>Get started with our service</strong></h3>
          <hr>
          </header>
        
          <div class="row gap-y container">
            
            <div class="col-12 col-md-6">
               <div class="form-group ">
                    <span id="msu_fname_title"></span>
                    <input type="text" class="form-control form-control-lg"  id="msu_fname_id" >
                  </div>

                  <div class="form-group ">
                    <span id="msu_lname_title"></span>
                    <input type="text" class="form-control form-control-lg"  id="msu_lname_id">
                  </div>

                  <div class="form-group ">
                    <span id="msu_email_title"></span>
                    <input type="text" class="form-control form-control-lg"  id="msu_email_id">
                  </div>

                  <div class="form-group ">
                    <span id="msu_phone_title"></span>
                    <input type="text" class="form-control form-control-lg"  id="msu_phone_id">
                  </div>
            </div>


            <div class="col-12 col-md-6">
              <div class=" form-group ">
                      <span id="msu_legalbusinessname_title"></span>
                      <input type="text" class="form-control form-control-lg"  id="msu_legalbusinessname_id">
                    </div>

                    <div class="form-group">
                      <span id="msu_businessdesc_title"></span>
                      <textarea type="text" rows="4" class="form-control form-control-lg"  id="msu_businessdesc_id"></textarea>
                    </div>

                    <div class="form-group">
                      <span id="msu_websiteurl_title"></span>
                      <input type="text" class="form-control form-control-lg"  id="msu_websiteurl_id">
                    </div>

                    <div class="form-group" style="display:none">
                      <span id="msu_canceledchequeimage_title"></span>
                      <input type="file"   id="msu_canceledchequeimage_id" name="msu_canceledchequeimage_id">
                    </div>
            </div>
            <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <div class=" ">
                <input class="btn btn-block btn-lg btn-success" type="button" value="Request a demo" onclick="return onSubmit()">
              </div>
          
              <div class="">
                 <p style="text-align: center; font-size: 10px;margin-bottom: 20px;">
                 By clicking submit you are agreeing to the terms and conditions of our service and allowing the compliance department to conduct their checks using the information provided.
                <br />
                 <br />
                  Your email address will be used for future correspondence regarding our services.
                  </p>
                   </div>
            </div>
            
          </div>
        </div>
      </section>
```



## Modal dialog
This is an example of the validation popup modal you can add to your screen - design it to fit your site's design

```  
    <!--modal validation-->
    <div class="modal fade" id="validationsummary" tabindex="-1" role="dialog" aria-labelledby="valheaderlabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="valheaderlabel">Validation summary</h4>
                    </div>
                    <div class="modal-body">
                        <ul id="valsum-list"></ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end modal-->
```

## Webconfig
Be sure to include the following reference to your webconfig for the MSU JS to work

```
<staticContent>
      <remove fileExtension=".json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
</staticContent>
```
