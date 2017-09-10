"use strict";
/****************************************************
Plugin Module : MSU main module
Last modified: 07/03/2017
Author: Josh Daniel
*****************************************************/
var msu_app = function () {

    function fetchData(dataUrl, lang) {
        if (!dataUrl)
            dataUrl = msu_res.conf.defaultDataUrl;

        $.getJSON(dataUrl, function (incomingData) {
            if (!incomingData)
                msu_res.conf.isFail = true;

            msu_res.data = incomingData;
            if (msu_res.conf.isFail) {
                console.log("Epic fail: Unable to fetch data JSON");
                return;
            }

            loadData(lang);
            if (msu_res.conf.isFail) {
                return;
            }

            setData();
        });
    }

    function loadData(lang) {
        if (!lang)
            lang = msu_res.conf.defaultLang;

        msu_utils.selectByLang(lang);
        if (!msu_res.langData) {
            msu_res.conf.isFail = true;
            console.log("Epic fail: input lang not found in data JSON");
            return;
        }
    }

    function setData() {
        // First name
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.fname.id), msu_res.langData.fname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.fname.id), msu_res.langData.fname.desc);

        // Last name
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.lname.id), msu_res.langData.lname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.lname.id), msu_res.langData.lname.desc);

        // Email
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.email.id), msu_res.langData.email.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.email.id), msu_res.langData.email.desc);

        // Phone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.phone.id), msu_res.langData.phone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.phone.id), msu_res.langData.phone.desc);

        // Fax
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.fax.id), msu_res.langData.fax.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.fax.id), msu_res.langData.fax.desc);

        // Address
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.address.id), msu_res.langData.address.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.address.id), msu_res.langData.address.desc);

        // City
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.city.id), msu_res.langData.city.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.city.id), msu_res.langData.city.desc);

        // State
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.state.id), msu_res.langData.state.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.state.id), msu_res.langData.state.desc);

        // Zipcode
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.zipcode.id), msu_res.langData.zipcode.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.zipcode.id), msu_res.langData.zipcode.desc);

        // Legal business name 
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.legalbusinessname.id), msu_res.langData.legalbusinessname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.legalbusinessname.id), msu_res.langData.legalbusinessname.desc);

        // Legal business number
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.legalbusinessnumber.id), msu_res.langData.legalbusinessnumber.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.legalbusinessnumber.id), msu_res.langData.legalbusinessnumber.desc);

        // Business description
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.businessdesc.id), msu_res.langData.businessdesc.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.businessdesc.id), msu_res.langData.businessdesc.desc);

        // Business start date
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.businessstartdate.id), msu_res.langData.businessstartdate.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.businessstartdate.id), msu_res.langData.businessstartdate.desc);

        // DBA name
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.dbaname.id), msu_res.langData.dbaname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.dbaname.id), msu_res.langData.dbaname.desc);

        // Owner DOB
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ownerdob.id), msu_res.langData.ownerdob.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ownerdob.id), msu_res.langData.ownerdob.desc);

        // Owner SSN
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ownerssn.id), msu_res.langData.ownerssn.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ownerssn.id), msu_res.langData.ownerssn.desc);

        // Website URL
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.websiteurl.id), msu_res.langData.websiteurl.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.websiteurl.id), msu_res.langData.websiteurl.desc);

        // State of incorporation
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.stateofincorporation.id), msu_res.langData.stateofincorporation.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.stateofincorporation.id), msu_res.langData.stateofincorporation.desc);

        // Type of business
        if ($("#" + msu_utils.inputId(msu_res.data.typeofbusiness.id))) {
            var typeOfBusinessOptions = '';
            typeOfBusinessOptions += '<option value="0">--Select--</option>';
            for (var counter2 = 0; counter2 < msu_res.langData.tobopts.length; counter2++) {
                typeOfBusinessOptions += '<option value="' + msu_res.langData.tobopts[counter2].id + '">' + msu_res.langData.tobopts[counter2].title + '</option>';
            }
            $("#" + msu_utils.inputId(msu_res.data.typeofbusiness.id)).append(typeOfBusinessOptions);
        }

        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.typeofbusiness.id), msu_res.langData.typeofbusiness.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.typeofbusiness.id), msu_res.langData.typeofbusiness.desc);

        // Business industry
        if ($("#" + msu_utils.inputId(msu_res.data.businessindustry.id))) {
            var businessIndustryOptions = '';
            businessIndustryOptions += '<option value="0">--Select--</option>';
            for (var counter2 = 0; counter2 < msu_res.langData.indopts.length; counter2++) {
                businessIndustryOptions += '<option value="' + msu_res.langData.indopts[counter2].id + '">' + msu_res.langData.indopts[counter2].title + '</option>';
            }
            $("#" + msu_utils.inputId(msu_res.data.businessindustry.id)).append(businessIndustryOptions);
        }

        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.businessindustry.id), msu_res.langData.businessindustry.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.businessindustry.id), msu_res.langData.businessindustry.desc);

        // Phisical address
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.paddress.id), msu_res.langData.paddress.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.paddress.id), msu_res.langData.paddress.desc);

        // Phisical city
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.pcity.id), msu_res.langData.pcity.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.pcity.id), msu_res.langData.pcity.desc);

        // Phisical state
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.pstate.id), msu_res.langData.pstate.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.pstate.id), msu_res.langData.pstate.desc);

        // Phisical zipcode
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.pzipcode.id), msu_res.langData.pzipcode.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.pzipcode.id), msu_res.langData.pzipcode.desc);

        // Bank account number
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.bankaccnumber.id), msu_res.langData.bankaccnumber.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.bankaccnumber.id), msu_res.langData.bankaccnumber.desc);

        // Bank routing number
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.bankroutingnumber.id), msu_res.langData.bankroutingnumber.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.bankroutingnumber.id), msu_res.langData.bankroutingnumber.desc);

        // Cancelled cheque image
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.canceledchequeimage.id), msu_res.langData.canceledchequeimage.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.canceledchequeimage.id), msu_res.langData.canceledchequeimage.desc);

        // Anticipated monthly volume
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.anticipatedmonthlyvolume.id), msu_res.langData.anticipatedmonthlyvolume.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.anticipatedmonthlyvolume.id), msu_res.langData.anticipatedmonthlyvolume.desc);

        // Anticipated average transaction amount
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.anticipatedavgtransamount.id), msu_res.langData.anticipatedavgtransamount.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.anticipatedavgtransamount.id), msu_res.langData.anticipatedavgtransamount.desc);

        // Anticipated largest transaction amount
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.anticipatedlargesttransamount.id), msu_res.langData.anticipatedlargesttransamount.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.anticipatedlargesttransamount.id), msu_res.langData.anticipatedlargesttransamount.desc);

        // Percent delivery 0 to 7
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.percentdelivery0to7.id), msu_res.langData.percentdelivery0to7.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.percentdelivery0to7.id), msu_res.langData.percentdelivery0to7.desc);

        // Percent delivery 8 to 14
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.percentdelivery8to14.id), msu_res.langData.percentdelivery8to14.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.percentdelivery8to14.id), msu_res.langData.percentdelivery8to14.desc);

        // Percent delivery 15 to 30
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.percentdelivery15to20.id), msu_res.langData.percentdelivery15to20.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.percentdelivery15to20.id), msu_res.langData.percentdelivery15to20.desc);

        // Percent delivery over 30
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.percentdeliveryover30.id), msu_res.langData.percentdeliveryover30.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.percentdeliveryover30.id), msu_res.langData.percentdeliveryover30.desc);
    }

    function submitInternal() {
        // console.log(JSON.stringify(msu_res.postModel));

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://webservices." + msu_res.data.signupurl + msu_res.data.postendpoint,
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify(msu_res.postModel)
        }

        //console.log(JSON.stringify(msu_res.postModel));

        $.ajax(settings)
            .done(function (response) {
                if (msu_res.conf.submitOkHandler)
                    msu_res.conf.submitOkHandler(response);
                console.log(response);
            })
            .fail(function (jqXHR, exception) {
                if (msu_res.conf.submitFailHandler)
                    msu_res.conf.submitFailHandler(jqXHR, exception);

                console.log("jqXHR");
                console.log(jqXHR);

                console.log("Exception");
                console.log(exception);
            });
    }

    return {
        // Init plugin
        init: function (dataUrl, lang) {
            // Check for jQuery or return early.
            if (typeof jQuery === 'undefined') {
                msu_res.conf.isFail = true;
                console.log("Epic fail: jQuery is required to use this plugin");
                return;
            }

            // TODO: Check for bootstrap loaded, may be?
            // Fetch data to get started or return early.
            fetchData(dataUrl, lang);
        },
        // Validate data.
        validate: function () {
            if (msu_res.conf.isFail)
                return;

            msu_res.isValFail = false;
            msu_res.valSum = [];
            msu_res.flushModel();
            // Check for first name.
            if ($("#" + msu_utils.inputId(msu_res.data.fname.id))) {
                var firstNameRaw = $("#" + msu_utils.inputId(msu_res.data.fname.id)).val();
                if (msu_res.data.fname.validate) {
                    if (!firstNameRaw) {
                        msu_res.valSum.push(msu_res.langData.fname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.FirstName = firstNameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.FirstName = firstNameRaw;
                }
            }

            // Check for last name.
            if ($("#" + msu_utils.inputId(msu_res.data.lname.id))) {
                var lastNameRaw = $("#" + msu_utils.inputId(msu_res.data.lname.id)).val();
                if (msu_res.data.lname.validate) {
                    if (!lastNameRaw) {
                        msu_res.valSum.push(msu_res.langData.lname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.LastName = lastNameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.LastName = lastNameRaw;
                }
            }

            // Check for email.
            if ($("#" + msu_utils.inputId(msu_res.data.email.id))) {
                var emailRaw = $("#" + msu_utils.inputId(msu_res.data.email.id)).val();
                if (msu_res.data.email.validate) {
                    if (!emailRaw || !msu_utils.isValidEmail(emailRaw)) {
                        msu_res.valSum.push(msu_res.langData.email.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Email = emailRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Email = emailRaw;
                }
            }

            // Check for phone number.
            if ($("#" + msu_utils.inputId(msu_res.data.phone.id))) {
                var phoneRaw = $("#" + msu_utils.inputId(msu_res.data.phone.id)).val();
                if (msu_res.data.phone.validate) {
                    if (!phoneRaw) {
                        msu_res.valSum.push(msu_res.langData.phone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Phone = phoneRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Phone = phoneRaw;
                }
            }

            // Check for fax number.
            if ($("#" + msu_utils.inputId(msu_res.data.fax.id))) {
                var faxRaw = $("#" + msu_utils.inputId(msu_res.data.fax.id)).val();
                if (msu_res.data.fax.validate) {
                    if (!faxRaw) {
                        msu_res.valSum.push(msu_res.langData.fax.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Fax = faxRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Fax = faxRaw;
                }
            }

            // Check for Address.
            if ($("#" + msu_utils.inputId(msu_res.data.address.id))) {
                var addressRaw = $("#" + msu_utils.inputId(msu_res.data.address.id)).val();
                if (msu_res.data.address.validate) {
                    if (!addressRaw) {
                        msu_res.valSum.push(msu_res.langData.address.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Address = addressRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Address = addressRaw;
                }
            }

            // Check for City.
            if ($("#" + msu_utils.inputId(msu_res.data.city.id))) {
                var cityRaw = $("#" + msu_utils.inputId(msu_res.data.city.id)).val();
                if (msu_res.data.city.validate) {

                    if (!cityRaw) {
                        msu_res.valSum.push(msu_res.langData.city.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.City = cityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.City = cityRaw;
                }
            }

            // Check for State.
            if ($("#" + msu_utils.inputId(msu_res.data.state.id))) {
                var stateRaw = $("#" + msu_utils.inputId(msu_res.data.state.id)).val();
                if (msu_res.data.state.validate) {
                    if (!stateRaw) {
                        msu_res.valSum.push(msu_res.langData.state.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.State = stateRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.State = stateRaw;
                }
            }

            // Check for zipcode.
            if ($("#" + msu_utils.inputId(msu_res.data.zipcode.id))) {
                var zipcodeRaw = $("#" + msu_utils.inputId(msu_res.data.zipcode.id)).val();
                if (msu_res.data.zipcode.validate) {
                    if (!zipcodeRaw) {
                        msu_res.valSum.push(msu_res.langData.zipcode.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Zipcode = zipcodeRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Zipcode = zipcodeRaw;
                }
            }

            // Check for legalbusinessname.
            if ($("#" + msu_utils.inputId(msu_res.data.legalbusinessname.id))) {
                var legalbusinessnameRaw = $("#" + msu_utils.inputId(msu_res.data.legalbusinessname.id)).val();
                if (msu_res.data.legalbusinessname.validate) {
                    if (!legalbusinessnameRaw) {
                        msu_res.valSum.push(msu_res.langData.legalbusinessname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.LegalBusinessName = legalbusinessnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.LegalBusinessName = legalbusinessnameRaw;
                }
            }

            // Check for legalbusinessnumber.
            if ($("#" + msu_utils.inputId(msu_res.data.legalbusinessnumber.id))) {
                var legalbusinessnumberRaw = $("#" + msu_utils.inputId(msu_res.data.legalbusinessnumber.id)).val();
                if (msu_res.data.legalbusinessnumber.validate) {
                    if (!legalbusinessnumberRaw) {
                        msu_res.valSum.push(msu_res.langData.legalbusinessnumber.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.LegalBusinessNumber = legalbusinessnumberRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.LegalBusinessNumber = legalbusinessnumberRaw;
                }
            }

            // Check for businessdesc.
            if ($("#" + msu_utils.inputId(msu_res.data.businessdesc.id))) {
                var businessdescRaw = $("#" + msu_utils.inputId(msu_res.data.businessdesc.id)).val();
                if (msu_res.data.businessdesc.validate) {
                    if (!businessdescRaw) {
                        msu_res.valSum.push(msu_res.langData.businessdesc.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.BusinessDescription = businessdescRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.BusinessDescription = businessdescRaw;
                }
            }

            // Check for businessstartdate.
            if ($("#" + msu_utils.inputId(msu_res.data.businessstartdate.id))) {
                var businessstartdateRaw = $("#" + msu_utils.inputId(msu_res.data.businessstartdate.id)).val();
                if (msu_res.data.businessstartdate.validate) {
                    if (!businessstartdateRaw || !msu_utils.isValidDate(businessstartdateRaw)) {
                        msu_res.valSum.push(msu_res.langData.businessstartdate.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.BusinessStartDate = "/Date(" + msu_utils.getDotNetDateTime(businessstartdateRaw) + ")/";
                    }
                }
                else {
                    if (businessstartdateRaw)
                        msu_res.postModel.RegistrationData.BusinessStartDate = "/Date(" + msu_utils.getDotNetDateTime(businessstartdateRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.BusinessStartDate = null;
                }
            }

            // Check for dbaname.
            if ($("#" + msu_utils.inputId(msu_res.data.dbaname.id))) {
                var dbanameRaw = $("#" + msu_utils.inputId(msu_res.data.dbaname.id)).val();
                if (msu_res.data.dbaname.validate) {
                    if (!dbanameRaw) {
                        msu_res.valSum.push(msu_res.langData.dbaname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.DbaName = dbanameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.DbaName = dbanameRaw;
                }
            }

            // Check for ownerdob.
            if ($("#" + msu_utils.inputId(msu_res.data.ownerdob.id))) {
                var ownerdobRaw = $("#" + msu_utils.inputId(msu_res.data.ownerdob.id)).val();
                if (msu_res.data.ownerdob.validate) {
                    if (!ownerdobRaw || !msu_utils.isValidDate(ownerdobRaw)) {
                        msu_res.valSum.push(msu_res.langData.ownerdob.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.OwnerDob = "/Date(" + msu_utils.getDotNetDateTime(ownerdobRaw) + ")/";
                    }
                }
                else {
                    if (ownerdobRaw)
                        msu_res.postModel.RegistrationData.OwnerDob = "/Date(" + msu_utils.getDotNetDateTime(ownerdobRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.OwnerDob = null;
                }
            }

            // Check for ownerssn.
            if ($("#" + msu_utils.inputId(msu_res.data.ownerssn.id))) {
                var ownerssnRaw = $("#" + msu_utils.inputId(msu_res.data.ownerssn.id)).val();
                if (msu_res.data.ownerssn.validate) {
                    if (!ownerssnRaw) {
                        msu_res.valSum.push(msu_res.langData.ownerssn.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.OwnerSsn = ownerssnRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.OwnerSsn = ownerssnRaw;
                }
            }

            // Check for websiteurl.
            if ($("#" + msu_utils.inputId(msu_res.data.websiteurl.id))) {
                var websiteurlRaw = $("#" + msu_utils.inputId(msu_res.data.websiteurl.id)).val();
                if (msu_res.data.websiteurl.validate) {
                    if (!websiteurlRaw) {
                        msu_res.valSum.push(msu_res.langData.websiteurl.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Url = websiteurlRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Url = websiteurlRaw;
                }
            }

            // Check for stateofincorporation.
            if ($("#" + msu_utils.inputId(msu_res.data.stateofincorporation.id))) {
                var stateofincorporationRaw = $("#" + msu_utils.inputId(msu_res.data.stateofincorporation.id)).val();
                if (msu_res.data.stateofincorporation.validate) {
                    if (!stateofincorporationRaw) {
                        msu_res.valSum.push(msu_res.langData.stateofincorporation.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.StateOfIncorporation = stateofincorporationRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.StateOfIncorporation = stateofincorporationRaw;
                }
            }

            // Check for typeofbusiness.
            if ($("#" + msu_utils.inputId(msu_res.data.typeofbusiness.id))) {
                var typeofbusinessRaw = $("#" + msu_utils.inputId(msu_res.data.typeofbusiness.id)).val();
                if (msu_res.data.typeofbusiness.validate) {
                    if (!typeofbusinessRaw && !msu_utils.isValidInt(typeofbusinessRaw)) {
                        msu_res.valSum.push(msu_res.langData.typeofbusiness.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.TypeOfBusiness = typeofbusinessRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.TypeOfBusiness = typeofbusinessRaw;
                }
            }

            // Check for businessindustry.
            if ($("#" + msu_utils.inputId(msu_res.data.businessindustry.id))) {
                var businessindustryRaw = $("#" + msu_utils.inputId(msu_res.data.businessindustry.id)).val();
                if (msu_res.data.businessindustry.validate) {
                    if (!businessindustryRaw || !msu_utils.isValidInt(businessindustryRaw)) {
                        msu_res.valSum.push(msu_res.langData.businessindustry.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Industry = businessindustryRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Industry = businessindustryRaw;
                }
            }

            // Check for paddress.
            if ($("#" + msu_utils.inputId(msu_res.data.paddress.id))) {
                var paddressRaw = $("#" + msu_utils.inputId(msu_res.data.paddress.id)).val();
                if (msu_res.data.paddress.validate) {
                    if (!paddressRaw) {
                        msu_res.valSum.push(msu_res.langData.paddress.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.PhisicalAddress = paddressRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.PhisicalAddress = paddressRaw;
                }
            }

            // Check for pcity.
            if ($("#" + msu_utils.inputId(msu_res.data.pcity.id))) {
                var pcityRaw = $("#" + msu_utils.inputId(msu_res.data.pcity.id)).val();
                if (msu_res.data.pcity.validate) {
                    if (!pcityRaw) {
                        msu_res.valSum.push(msu_res.langData.pcity.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.PhisicalCity = pcityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.PhisicalCity = pcityRaw;
                }
            }

            // Check for pstate.
            if ($("#" + msu_utils.inputId(msu_res.data.pstate.id))) {
                var pstateRaw = $("#" + msu_utils.inputId(msu_res.data.pstate.id)).val();
                if (msu_res.data.pstate.validate) {
                    if (!pstateRaw) {
                        msu_res.valSum.push(msu_res.langData.pstate.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.PhisicalState = pstateRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.PhisicalState = pstateRaw;
                }
            }

            // Check for pzipcode.
            if ($("#" + msu_utils.inputId(msu_res.data.pzipcode.id))) {
                var pzipcodeRaw = $("#" + msu_utils.inputId(msu_res.data.pzipcode.id)).val();
                if (msu_res.data.pzipcode.validate) {
                    if (!pzipcodeRaw) {
                        msu_res.valSum.push(msu_res.langData.pzipcode.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.PhisicalZip = pzipcodeRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.PhisicalZip = pzipcodeRaw;
                }
            }

            // Check for bankaccnumber.
            if ($("#" + msu_utils.inputId(msu_res.data.bankaccnumber.id))) {
                var bankaccnumberRaw = $("#" + msu_utils.inputId(msu_res.data.bankaccnumber.id)).val();
                if (msu_res.data.bankaccnumber.validate) {
                    if (!bankaccnumberRaw) {
                        msu_res.valSum.push(msu_res.langData.bankaccnumber.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.BankAccountNumber = bankaccnumberRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.BankAccountNumber = bankaccnumberRaw;
                }
            }

            // Check for bankroutingnumber.
            if ($("#" + msu_utils.inputId(msu_res.data.bankroutingnumber.id))) {
                var bankroutingnumberRaw = $("#" + msu_utils.inputId(msu_res.data.bankroutingnumber.id)).val();
                if (msu_res.data.bankroutingnumber.validate) {
                    if (!bankroutingnumberRaw) {
                        msu_res.valSum.push(msu_res.langData.bankroutingnumber.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.BankRoutingNumber = bankroutingnumberRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.BankRoutingNumber = bankroutingnumberRaw;
                }
            }

            // Check for canceledchequeimage.
            if ($("#" + msu_utils.inputId(msu_res.data.canceledchequeimage.id))) {
                var canceledchequeimageRaw = $("#" + msu_utils.inputId(msu_res.data.canceledchequeimage.id)).val();
                if (msu_res.data.canceledchequeimage.validate) {
                    if (!canceledchequeimageRaw || !msu_utils.isValidUpload($("#" + msu_utils.inputId(msu_res.data.canceledchequeimage.id))[0])) {
                        msu_res.valSum.push(msu_res.langData.canceledchequeimage.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.isLoadFile = true;
                    }
                }
                else {
                    msu_res.isLoadFile = true;
                }
            }

            // Check for anticipatedmonthlyvolume.
            if ($("#" + msu_utils.inputId(msu_res.data.anticipatedmonthlyvolume.id))) {
                var anticipatedmonthlyvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.anticipatedmonthlyvolume.id)).val();
                var anticipatedmonthlyvolumeRawNumber = parseFloat(anticipatedmonthlyvolumeRaw).toFixed(2);
                if (msu_res.data.anticipatedmonthlyvolume.validate) {
                    if (!anticipatedmonthlyvolumeRaw || !msu_utils.isValidNumeric(anticipatedmonthlyvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.anticipatedmonthlyvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(anticipatedmonthlyvolumeRawNumber))
                            msu_res.postModel.RegistrationData.AnticipatedMonthlyVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.AnticipatedMonthlyVolume = anticipatedmonthlyvolumeRaw;
                    }
                }
                else {
                    if (isNaN(anticipatedmonthlyvolumeRawNumber))
                        msu_res.postModel.RegistrationData.AnticipatedMonthlyVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.AnticipatedMonthlyVolume = anticipatedmonthlyvolumeRaw;
                }
            }

            // Check for anticipatedavgtransamount.
            if ($("#" + msu_utils.inputId(msu_res.data.anticipatedavgtransamount.id))) {
                var anticipatedavgtransamountRaw = $("#" + msu_utils.inputId(msu_res.data.anticipatedavgtransamount.id)).val();
                var anticipatedavgtransamountRawNumber = parseFloat(anticipatedavgtransamountRaw).toFixed(2);
                if (msu_res.data.anticipatedavgtransamount.validate) {
                    if (!anticipatedavgtransamountRaw || !msu_utils.isValidNumeric(anticipatedavgtransamountRaw)) {
                        msu_res.valSum.push(msu_res.langData.anticipatedavgtransamount.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(anticipatedavgtransamountRawNumber))
                            msu_res.postModel.RegistrationData.AnticipatedAverageTransactionAmount = 0;
                        else
                            msu_res.postModel.RegistrationData.AnticipatedAverageTransactionAmount = anticipatedavgtransamountRawNumber;
                    }
                }
                else {
                    if (isNaN(anticipatedavgtransamountRawNumber))
                        msu_res.postModel.RegistrationData.AnticipatedAverageTransactionAmount = 0;
                    else
                        msu_res.postModel.RegistrationData.AnticipatedAverageTransactionAmount = anticipatedavgtransamountRawNumber;
                }
            }

            // Check for anticipatedlargesttransamount.
            if ($("#" + msu_utils.inputId(msu_res.data.anticipatedlargesttransamount.id))) {
                var anticipatedlargesttransamountRaw = $("#" + msu_utils.inputId(msu_res.data.anticipatedlargesttransamount.id)).val();
                var anticipatedlargesttransamountRawNumber = parseFloat(anticipatedlargesttransamountRaw).toFixed(2);
                if (msu_res.data.anticipatedlargesttransamount.validate) {
                    if (!anticipatedlargesttransamountRaw || !msu_utils.isValidNumeric(anticipatedlargesttransamountRaw)) {
                        msu_res.valSum.push(msu_res.langData.anticipatedlargesttransamount.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(anticipatedlargesttransamountRawNumber))
                            msu_res.postModel.RegistrationData.AnticipatedLargestTransactionAmount = 0;
                        else
                            msu_res.postModel.RegistrationData.AnticipatedLargestTransactionAmount = anticipatedlargesttransamountRawNumber;
                    }
                }
                else {
                    if (isNaN(anticipatedlargesttransamountRawNumber))
                        msu_res.postModel.RegistrationData.AnticipatedLargestTransactionAmount = 0;
                    else
                        msu_res.postModel.RegistrationData.AnticipatedLargestTransactionAmount = anticipatedlargesttransamountRawNumber;
                }
            }

            // Check for percentdelivery0to7.
            if ($("#" + msu_utils.inputId(msu_res.data.percentdelivery0to7.id))) {
                var percentdelivery0to7Raw = $("#" + msu_utils.inputId(msu_res.data.percentdelivery0to7.id)).val();
                var percentdelivery0to7RawNumber = parseFloat(percentdelivery0to7Raw).toFixed(2);
                if (msu_res.data.percentdelivery0to7.validate) {
                    if (!percentdelivery0to7Raw || !msu_utils.isValidInt(percentdelivery0to7Raw)) {
                        msu_res.valSum.push(msu_res.langData.percentdelivery0to7.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(percentdelivery0to7RawNumber))
                            msu_res.postModel.RegistrationData.PercentDelivery0to7 = 0;
                        else
                            msu_res.postModel.RegistrationData.PercentDelivery0to7 = percentdelivery0to7RawNumber;
                    }
                }
                else {
                    if (isNaN(percentdelivery0to7RawNumber))
                        msu_res.postModel.RegistrationData.PercentDelivery0to7 = 0;
                    else
                        msu_res.postModel.RegistrationData.PercentDelivery0to7 = percentdelivery0to7RawNumber;
                }
            }

            // Check for percentdelivery8to14.
            if ($("#" + msu_utils.inputId(msu_res.data.percentdelivery8to14.id))) {
                var percentdelivery8to14Raw = $("#" + msu_utils.inputId(msu_res.data.percentdelivery8to14.id)).val();
                var percentdelivery8to14RawNumber = parseFloat(percentdelivery8to14Raw).toFixed(2);
                if (msu_res.data.percentdelivery8to14.validate) {
                    if (!percentdelivery8to14Raw || !msu_utils.isValidInt(percentdelivery8to14Raw)) {
                        msu_res.valSum.push(msu_res.langData.percentdelivery8to14.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(percentdelivery8to14RawNumber))
                            msu_res.postModel.RegistrationData.PercentDelivery8to14 = 0;
                        else
                            msu_res.postModel.RegistrationData.PercentDelivery8to14 = percentdelivery8to14RawNumber;
                    }
                }
                else {
                    if (isNaN(percentdelivery8to14RawNumber))
                        msu_res.postModel.RegistrationData.PercentDelivery8to14 = 0;
                    else
                        msu_res.postModel.RegistrationData.PercentDelivery8to14 = percentdelivery8to14RawNumber;
                }
            }

            // Check for percentdelivery15to20.
            if ($("#" + msu_utils.inputId(msu_res.data.percentdelivery15to20.id))) {
                var percentdelivery15to20Raw = $("#" + msu_utils.inputId(msu_res.data.percentdelivery15to20.id)).val();
                var percentdelivery15to20RawNumber = parseFloat(percentdelivery15to20Raw).toFixed(2);
                if (msu_res.data.percentdelivery15to20.validate) {
                    if (!percentdelivery15to20Raw || !msu_utils.isValidInt(percentdelivery15to20Raw)) {
                        msu_res.valSum.push(msu_res.langData.percentdelivery15to20.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(percentdelivery15to20RawNumber))
                            msu_res.postModel.RegistrationData.PercentDelivery15to30 = 0;
                        else
                            msu_res.postModel.RegistrationData.PercentDelivery15to30 = percentdelivery15to20RawNumber;
                    }
                }
                else {
                    if (isNaN(percentdelivery15to20RawNumber))
                        msu_res.postModel.RegistrationData.PercentDelivery15to30 = 0;
                    else
                        msu_res.postModel.RegistrationData.PercentDelivery15to30 = percentdelivery15to20RawNumber;
                }
            }

            // Check for percentdeliveryover30.
            if ($("#" + msu_utils.inputId(msu_res.data.percentdeliveryover30.id))) {
                var percentdeliveryover30Raw = $("#" + msu_utils.inputId(msu_res.data.percentdeliveryover30.id)).val();
                var percentdeliveryover30RawNumber = parseFloat(percentdeliveryover30Raw).toFixed(2);
                if (msu_res.data.percentdeliveryover30.validate) {
                    if (!percentdeliveryover30Raw || !msu_utils.isValidInt(percentdeliveryover30Raw)) {
                        msu_res.valSum.push(msu_res.langData.percentdeliveryover30.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(percentdelivery15to20RawNumber))
                            msu_res.postModel.RegistrationData.PercentDeliveryOver30 = 0;
                        else
                            msu_res.postModel.RegistrationData.PercentDeliveryOver30 = percentdeliveryover30RawNumber;
                    }
                }
                else {
                    if (isNaN(percentdelivery15to20RawNumber))
                        msu_res.postModel.RegistrationData.PercentDeliveryOver30 = 0;
                    else
                        msu_res.postModel.RegistrationData.PercentDeliveryOver30 = percentdeliveryover30RawNumber;
                }
            }

            if (msu_res.conf.isValFail) {
                return msu_res.valSum;
            }

            return null;
        },
        // Submit data.
        submit: function (onSubmitOk, onSubmitFail) {
            if (msu_res.conf.isValFail)
                return;
            msu_res.conf.submitOkHandler = onSubmitOk;
            msu_res.conf.submitFailHandler = onSubmitFail;
            if (msu_res.isLoadFile) {
                var cciElement = $("#" + msu_utils.inputId(msu_res.data.canceledchequeimage.id))[0];
                var cciFiles = cciElement.files;
                var cciFile = cciFiles[0];
                if (cciFiles && cciFile) {
                    var cciReader = new FileReader();
                    cciReader.onload = function (cciReaderEvt) {
                        var cciBinaryString = cciReaderEvt.target.result;
                        var cciBinaryStringData = btoa(cciBinaryString);
                        if (cciBinaryStringData)
                            msu_res.postModel.RegistrationData.CanceledCheckImage = cciBinaryStringData;

                        submitInternal();
                    };

                    cciReader.readAsBinaryString(cciFile);
                }
                else {
                    submitInternal();
                }
            }
            else {
                submitInternal();
            }
        }
    };
}();

/****************************************************
Plugin Module : Resource / configuration
Last modified: 07/03/2017
Author: Coriunder - Jaspalsinh Chauhan 
*****************************************************/
var msu_res = function () {
    var conf = {
        isFail: false,
        isValFail: false,
        isLoadFile: false,
        defaultLang: "en",
        defaultDataUrl: "msu.json",
        submitOkHandler: null,
        submitFailHandler: null
    };

    var postModel = {
        RegistrationData: {
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Fax: "",
            Address: "",
            City: "",
            State: "",
            Zipcode: "",
            LegalBusinessName: "",
            LegalBusinessNumber: "",
            BusinessDescription: "",
            BusinessStartDate: new Date(),
            DbaName: "",
            OwnerDob: new Date(),
            OwnerSsn: "",
            Url: "",
            StateOfIncorporation: "",
            TypeOfBusiness: 0, // (int)
            Industry: 0, // (int)
            PhisicalAddress: "",
            PhisicalCity: "",
            PhisicalState: "",
            PhisicalZip: "",
            BankAccountNumber: "",
            BankRoutingNumber: "",
            CanceledCheckImage: "", // (base64Binary)
            AnticipatedMonthlyVolume: 0, // (decimal)
            AnticipatedAverageTransactionAmount: 0, // (decimal)
            AnticipatedLargestTransactionAmount: 0, // (decimal)
            PercentDelivery0to7: 0, // (int)
            PercentDelivery8to14: 0, // (int)
            PercentDelivery15to30: 0, // (int)
            PercentDeliveryOver30: 0 // (int)
        }
    };

    var data = null;
    var valSum = null;
    var langData = null;

    return {
        conf: conf,
        data: data,
        valSum: valSum,
        langData: langData,
        postModel: postModel,
        flushModel: function () {
            postModel.RegistrationData.FirstName = "";
            postModel.RegistrationData.LastName = "";
            postModel.RegistrationData.Email = "";
            postModel.RegistrationData.Phone = "";
            postModel.RegistrationData.Fax = "";
            postModel.RegistrationData.Address = "";
            postModel.RegistrationData.City = "";
            postModel.RegistrationData.State = "";
            postModel.RegistrationData.Zipcode = "";
            postModel.RegistrationData.LegalBusinessName = "";
            postModel.RegistrationData.LegalBusinessNumber = "";
            postModel.RegistrationData.BusinessDescription = "";
            postModel.RegistrationData.BusinessStartDate = new Date();
            postModel.RegistrationData.DbaName = "";
            postModel.RegistrationData.OwnerDob = new Date();
            postModel.RegistrationData.OwnerSsn = "";
            postModel.RegistrationData.Url = "";
            postModel.RegistrationData.StateOfIncorporation = "";
            postModel.RegistrationData.TypeOfBusiness = 0;
            postModel.RegistrationData.Industry = 0;
            postModel.RegistrationData.PhisicalAddress = "";
            postModel.RegistrationData.PhisicalCity = "";
            postModel.RegistrationData.PhisicalState = "";
            postModel.RegistrationData.PhisicalZip = "";
            postModel.RegistrationData.BankAccountNumber = "";
            postModel.RegistrationData.BankRoutingNumber = "";
            postModel.RegistrationData.CanceledCheckImage = "";
            postModel.RegistrationData.AnticipatedMonthlyVolume = 0;
            postModel.RegistrationData.AnticipatedAverageTransactionAmount = 0;
            postModel.RegistrationData.AnticipatedLargestTransactionAmount = 0;
            postModel.RegistrationData.PercentDelivery0to7 = 0;
            postModel.RegistrationData.PercentDelivery8to14 = 0;
            postModel.RegistrationData.PercentDelivery15to30 = 0;
            postModel.RegistrationData.PercentDeliveryOver30 = 0;
        }
    };
}();

/****************************************************
Plugin Module : Utility functions
Last modified: 07/03/2017
Author: Coriunder - Jaspalsinh Chauhan 
*****************************************************/
var msu_utils = function () {
    return {
        getDotNetDateTime: function (inputDateTime) {
            var targetDateTime = new Date(inputDateTime);
            return targetDateTime.getTime();
        },
        inputId: function (inputid) {
            return msu_res.data.inputprefix + "_" + inputid + "_" + msu_res.data.inputidpart;
        },
        inputTitle: function (inputid) {
            return msu_res.data.inputprefix + "_" + inputid + "_" + msu_res.data.inputtitlepart;
        },
        inputDesc: function (inputid) {
            return msu_res.data.inputprefix + "_" + inputid + "_" + msu_res.data.inputdescpart;
        },
        inputVal: function (inputid) {
            return msu_res.data.inputprefix + "_" + inputid + "_" + msu_res.data.inputvalpart;
        },
        selectByLang: function (lang) {
            $.each(msu_res.data.assets, function (index, value) {
                if (value.lang === lang)
                    msu_res.langData = value;
            });
        },
        setContent: function (id, content) {
            var element = $("#" + id);
            if (!content || !element)
                return;
            element.html(content);
        },
        isValidEmail: function (email) {
            var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
            return pattern.test(email);
        },
        isValidInt: function (input) {
            return !isNaN(input) &&
                parseInt(Number(input)) == input &&
                !isNaN(parseInt(input, 10));
        },
        isValidNumeric: function (input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        },
        isValidDate: function (input) {
            if (Object.prototype.toString.call(input) === "[object Date]") {
                if (isNaN(input.getTime())) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        },
        isValidUpload: function (input) {
            if (input && input.files && input.files[0] && input.files[0].size) {
                if (input.files[0].size > 7340032) {
                    return false;
                }
                else
                    return true;
            }
            else
                return false;
        },
        buildValItem: function (input) {
            return "<li>" + input + "</li>";
        }
    }
}();

//$.ajax({
//    async: true,
//    crossDomain: true,
//    type: "POST",
//    dataType: "json",
//    url: "https://" + msu_res.data.signupurl + msu_res.data.postendpoint,
//    contentType: "application/json",
//    data: JSON.stringify(msu_res.postModel),
//    success: function (data) {
//        msu_res.flushModel();
//        if (msu_res.conf.okHandler)
//            msu_res.conf.okHandler();
//        //alert('data: ' + data);
//    },
//    error: function (ajXhr, ajStatus, ajError) {
//        msu_res.flushModel();
//        if (msu_res.conf.failHandler)
//            msu_res.conf.failHandler();
//        console.log("XHR: ");
//        console.log(ajXhr);
//        console.log("Status: ");
//        console.log(ajStatus);
//        console.log("Error: ");
//        console.log(ajError);
//    }
//});