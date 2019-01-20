"use strict";
/****************************************************
Plugin Module : MSU main module
Last modified: 08/05/2018
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

        // AccountType
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.accounttype.id), msu_res.langData.accounttype.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.accounttype.id), msu_res.langData.accounttype.desc);

        // Source
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.source.id), msu_res.langData.source.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.source.id), msu_res.langData.source.desc);

        // ParentCompany
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.parentcompany.id), msu_res.langData.parentcompany.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.parentcompany.id), msu_res.langData.parentcompany.desc);

        // AccountManager
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.accountmanager.id), msu_res.langData.accountmanager.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.accountmanager.id), msu_res.langData.accountmanager.desc);

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

        // UBO1FirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1firstname.id), msu_res.langData.ubo1firstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1firstname.id), msu_res.langData.ubo1firstname.desc);

        // UBO1LastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1lastname.id), msu_res.langData.ubo1lastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1lastname.id), msu_res.langData.ubo1lastname.desc);

        // UBO1DOB
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1dob.id), msu_res.langData.ubo1dob.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1dob.id), msu_res.langData.ubo1dob.desc);

        // UBO1Address1
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1address1.id), msu_res.langData.ubo1address1.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1address1.id), msu_res.langData.ubo1address1.desc);

        // UBO1Address2
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1address2.id), msu_res.langData.ubo1address2.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1address2.id), msu_res.langData.ubo1address2.desc);

        // UBO1Zip
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1zip.id), msu_res.langData.ubo1zip.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1zip.id), msu_res.langData.ubo1zip.desc);

        // UBO1City
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1city.id), msu_res.langData.ubo1city.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1city.id), msu_res.langData.ubo1city.desc);

        // UBO1Country
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1country.id), msu_res.langData.ubo1country.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1country.id), msu_res.langData.ubo1country.desc);

        // UBO1Phone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1phone.id), msu_res.langData.ubo1phone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1phone.id), msu_res.langData.ubo1phone.desc);

        // UBO1PassportID
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1passportid.id), msu_res.langData.ubo1passportid.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1passportid.id), msu_res.langData.ubo1passportid.desc);

          // UBO1SSN
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo1ssn.id), msu_res.langData.ubo1ssn.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo1ssn.id), msu_res.langData.ubo1ssn.desc);

        // UBO2FirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2firstname.id), msu_res.langData.ubo2firstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2firstname.id), msu_res.langData.ubo2firstname.desc);

        // UBO2LastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2lastname.id), msu_res.langData.ubo2lastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2lastname.id), msu_res.langData.ubo2lastname.desc);

        // UBO2DOB
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2dob.id), msu_res.langData.ubo2dob.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2dob.id), msu_res.langData.ubo2dob.desc);

        // UBO2Address1
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2address1.id), msu_res.langData.ubo2address1.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2address1.id), msu_res.langData.ubo2address1.desc);

        // UBO2Address2
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2address2.id), msu_res.langData.ubo2address2.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2address2.id), msu_res.langData.ubo2address2.desc);

        // UBO2Zip
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2zip.id), msu_res.langData.ubo2zip.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2zip.id), msu_res.langData.ubo2zip.desc);

        // UBO2City
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2city.id), msu_res.langData.ubo2city.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2city.id), msu_res.langData.ubo2city.desc);

        // UBO2Country
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2country.id), msu_res.langData.ubo2country.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2country.id), msu_res.langData.ubo2country.desc);

        // UBO2Phone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2phone.id), msu_res.langData.ubo2phone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2phone.id), msu_res.langData.ubo2phone.desc);

        // UBO2PassportID
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2passportid.id), msu_res.langData.ubo2passportid.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2passportid.id), msu_res.langData.ubo2passportid.desc);

          // UBO2SSN
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo2ssn.id), msu_res.langData.ubo2ssn.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo2ssn.id), msu_res.langData.ubo2ssn.desc);

        // UBO3FirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3firstname.id), msu_res.langData.ubo3firstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3firstname.id), msu_res.langData.ubo3firstname.desc);

        // UBO3LastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3lastname.id), msu_res.langData.ubo3lastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3lastname.id), msu_res.langData.ubo3lastname.desc);

        // UBO3DOB
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3dob.id), msu_res.langData.ubo3dob.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3dob.id), msu_res.langData.ubo3dob.desc);

        // UBO3Address1
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3address1.id), msu_res.langData.ubo3address1.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3address1.id), msu_res.langData.ubo3address1.desc);

        // UBO3Address2
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3address2.id), msu_res.langData.ubo3address2.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3address2.id), msu_res.langData.ubo3address2.desc);

        // UBO3Zip
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3zip.id), msu_res.langData.ubo3zip.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3zip.id), msu_res.langData.ubo3zip.desc);

        // UBO3City
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3city.id), msu_res.langData.ubo3city.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3city.id), msu_res.langData.ubo3city.desc);

        // UBO3Country
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3country.id), msu_res.langData.ubo3country.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3country.id), msu_res.langData.ubo3country.desc);

        // UBO3Phone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3phone.id), msu_res.langData.ubo3phone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3phone.id), msu_res.langData.ubo3phone.desc);

        // UBO3PassportID
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3passportid.id), msu_res.langData.ubo3passportid.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3passportid.id), msu_res.langData.ubo3passportid.desc);

          // UBO3SSN
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo3ssn.id), msu_res.langData.ubo3ssn.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo3ssn.id), msu_res.langData.ubo3ssn.desc);

        // UBO4FirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4firstname.id), msu_res.langData.ubo4firstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4firstname.id), msu_res.langData.ubo4firstname.desc);

        // UBO4LastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4lastname.id), msu_res.langData.ubo4lastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4lastname.id), msu_res.langData.ubo4lastname.desc);

        // UBO4DOB
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4dob.id), msu_res.langData.ubo4dob.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4dob.id), msu_res.langData.ubo4dob.desc);

        // UBO4Address1
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4address1.id), msu_res.langData.ubo4address1.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4address1.id), msu_res.langData.ubo4address1.desc);

        // UBO4Address2
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4address2.id), msu_res.langData.ubo4address2.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4address2.id), msu_res.langData.ubo4address2.desc);

        // UBO4Zip
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4zip.id), msu_res.langData.ubo4zip.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4zip.id), msu_res.langData.ubo4zip.desc);

        // UBO4City
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4city.id), msu_res.langData.ubo4city.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4city.id), msu_res.langData.ubo4city.desc);

        // UBO4Country
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4country.id), msu_res.langData.ubo4country.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4country.id), msu_res.langData.ubo4country.desc);

        // UBO4Phone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4phone.id), msu_res.langData.ubo4phone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4phone.id), msu_res.langData.ubo4phone.desc);

        // UBO4PassportID
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4passportid.id), msu_res.langData.ubo4passportid.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4passportid.id), msu_res.langData.ubo4passportid.desc);

          // UBO4SSN
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ubo4ssn.id), msu_res.langData.ubo4ssn.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ubo4ssn.id), msu_res.langData.ubo4ssn.desc);
  
          // M1NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1numberoftransactions.id), msu_res.langData.m1numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1numberoftransactions.id), msu_res.langData.m1numberoftransactions.desc);
  
          // M1TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1transactionvolume.id), msu_res.langData.m1transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1transactionvolume.id), msu_res.langData.m1transactionvolume.desc);
  
          // M1NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1numberofchargeback.id), msu_res.langData.m1numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1numberofchargeback.id), msu_res.langData.m1numberofchargeback.desc);
  
          // M1ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1chargebackvolume.id), msu_res.langData.m1chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1chargebackvolume.id), msu_res.langData.m1chargebackvolume.desc);
  
          // M1NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1numberofrefunds.id), msu_res.langData.m1numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1numberofrefunds.id), msu_res.langData.m1numberofrefunds.desc);
  
          // M1RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m1refundvolume.id), msu_res.langData.m1refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m1refundvolume.id), msu_res.langData.m1refundvolume.desc);

          // M2NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2numberoftransactions.id), msu_res.langData.m2numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2numberoftransactions.id), msu_res.langData.m2numberoftransactions.desc);
  
          // M2TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2transactionvolume.id), msu_res.langData.m2transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2transactionvolume.id), msu_res.langData.m2transactionvolume.desc);
  
          // M2NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2numberofchargeback.id), msu_res.langData.m2numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2numberofchargeback.id), msu_res.langData.m2numberofchargeback.desc);
  
          // M2ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2chargebackvolume.id), msu_res.langData.m2chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2chargebackvolume.id), msu_res.langData.m2chargebackvolume.desc);
  
          // M2NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2numberofrefunds.id), msu_res.langData.m2numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2numberofrefunds.id), msu_res.langData.m2numberofrefunds.desc);
  
          // M2RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m2refundvolume.id), msu_res.langData.m2refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m2refundvolume.id), msu_res.langData.m2refundvolume.desc);

          // M3NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3numberoftransactions.id), msu_res.langData.m3numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3numberoftransactions.id), msu_res.langData.m3numberoftransactions.desc);
  
          // M3TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3transactionvolume.id), msu_res.langData.m3transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3transactionvolume.id), msu_res.langData.m3transactionvolume.desc);
  
          // M3NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3numberofchargeback.id), msu_res.langData.m3numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3numberofchargeback.id), msu_res.langData.m3numberofchargeback.desc);
  
          // M3ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3chargebackvolume.id), msu_res.langData.m3chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3chargebackvolume.id), msu_res.langData.m3chargebackvolume.desc);
  
          // M3NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3numberofrefunds.id), msu_res.langData.m3numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3numberofrefunds.id), msu_res.langData.m3numberofrefunds.desc);
  
          // M3RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m3refundvolume.id), msu_res.langData.m3refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m3refundvolume.id), msu_res.langData.m3refundvolume.desc);

          // M4NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4numberoftransactions.id), msu_res.langData.m4numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4numberoftransactions.id), msu_res.langData.m4numberoftransactions.desc);
  
          // M4TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4transactionvolume.id), msu_res.langData.m4transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4transactionvolume.id), msu_res.langData.m4transactionvolume.desc);
  
          // M4NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4numberofchargeback.id), msu_res.langData.m4numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4numberofchargeback.id), msu_res.langData.m4numberofchargeback.desc);
  
          // M4ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4chargebackvolume.id), msu_res.langData.m4chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4chargebackvolume.id), msu_res.langData.m4chargebackvolume.desc);
  
          // M4NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4numberofrefunds.id), msu_res.langData.m4numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4numberofrefunds.id), msu_res.langData.m4numberofrefunds.desc);
  
          // M4RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m4refundvolume.id), msu_res.langData.m4refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m4refundvolume.id), msu_res.langData.m4refundvolume.desc);

          // M5NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5numberoftransactions.id), msu_res.langData.m5numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5numberoftransactions.id), msu_res.langData.m5numberoftransactions.desc);
  
          // M5TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5transactionvolume.id), msu_res.langData.m5transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5transactionvolume.id), msu_res.langData.m5transactionvolume.desc);
  
          // M5NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5numberofchargeback.id), msu_res.langData.m5numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5numberofchargeback.id), msu_res.langData.m5numberofchargeback.desc);
  
          // M5ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5chargebackvolume.id), msu_res.langData.m5chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5chargebackvolume.id), msu_res.langData.m5chargebackvolume.desc);
  
          // M5NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5numberofrefunds.id), msu_res.langData.m5numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5numberofrefunds.id), msu_res.langData.m5numberofrefunds.desc);
  
          // M5RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m5refundvolume.id), msu_res.langData.m5refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m5refundvolume.id), msu_res.langData.m5refundvolume.desc);

          // M6NumberOfTransactions
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6numberoftransactions.id), msu_res.langData.m6numberoftransactions.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6numberoftransactions.id), msu_res.langData.m6numberoftransactions.desc);
  
          // M6TransactionVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6transactionvolume.id), msu_res.langData.m6transactionvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6transactionvolume.id), msu_res.langData.m6transactionvolume.desc);
  
          // M6NumberOfChargeBack
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6numberofchargeback.id), msu_res.langData.m6numberofchargeback.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6numberofchargeback.id), msu_res.langData.m6numberofchargeback.desc);
  
          // M6ChargebackVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6chargebackvolume.id), msu_res.langData.m6chargebackvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6chargebackvolume.id), msu_res.langData.m6chargebackvolume.desc);
  
          // M6NumberOfRefunds
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6numberofrefunds.id), msu_res.langData.m6numberofrefunds.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6numberofrefunds.id), msu_res.langData.m6numberofrefunds.desc);
  
          // M6RefundVolume
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.m6refundvolume.id), msu_res.langData.m6refundvolume.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.m6refundvolume.id), msu_res.langData.m6refundvolume.desc);

  
          // CurrentPreviousProvider
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.currentpreviousprovider.id), msu_res.langData.currentpreviousprovider.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.currentpreviousprovider.id), msu_res.langData.currentpreviousprovider.desc);
  
          // CurrentPreviousAcquirer
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.currentpreviousacquirer.id), msu_res.langData.currentpreviousacquirer.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.currentpreviousacquirer.id), msu_res.langData.currentpreviousacquirer.desc);
  
          // ReasonsForLeavingAcquirer
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.reasonsforleavingacquirer.id), msu_res.langData.reasonsforleavingacquirer.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.reasonsforleavingacquirer.id), msu_res.langData.reasonsforleavingacquirer.desc);
  
          // OOTDomestic
          msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ootdomestic.id), msu_res.langData.ootdomestic.title);
          msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ootdomestic.id), msu_res.langData.ootdomestic.desc);

            // OOTEurope
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ooteurope.id), msu_res.langData.ooteurope.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ooteurope.id), msu_res.langData.ooteurope.desc);

        // OOTUSA
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ootusa.id), msu_res.langData.ootusa.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ootusa.id), msu_res.langData.ootusa.desc);

        // OOTAsia
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ootasia.id), msu_res.langData.ootasia.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ootasia.id), msu_res.langData.ootasia.desc);

        // OOTROW
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.ootrow.id), msu_res.langData.ootrow.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.ootrow.id), msu_res.langData.ootrow.desc);

        // TechFirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.techfirstname.id), msu_res.langData.techfirstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.techfirstname.id), msu_res.langData.techfirstname.desc);

        // TechLastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.techlastname.id), msu_res.langData.techlastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.techlastname.id), msu_res.langData.techlastname.desc);

        // TechEmail
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.techemail.id), msu_res.langData.techemail.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.techemail.id), msu_res.langData.techemail.desc);

        // TechPhone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.techphone.id), msu_res.langData.techphone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.techphone.id), msu_res.langData.techphone.desc);

        // FinanceFirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.financefirstname.id), msu_res.langData.financefirstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.financefirstname.id), msu_res.langData.financefirstname.desc);

        // FinanceLastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.financelastname.id), msu_res.langData.financelastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.financelastname.id), msu_res.langData.financelastname.desc);

        // FinanceEmail
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.financeemail.id), msu_res.langData.financeemail.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.financeemail.id), msu_res.langData.financeemail.desc);

        // FinancePhone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.financephone.id), msu_res.langData.financephone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.financephone.id), msu_res.langData.financephone.desc);

        // RiskFirstName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.riskfirstname.id), msu_res.langData.riskfirstname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.riskfirstname.id), msu_res.langData.riskfirstname.desc);

        // RiskLastName
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.risklastname.id), msu_res.langData.risklastname.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.risklastname.id), msu_res.langData.risklastname.desc);

        // RiskEmail
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.riskemail.id), msu_res.langData.riskemail.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.riskemail.id), msu_res.langData.riskemail.desc);

        // RiskPhone
        msu_utils.setContent(msu_utils.inputTitle(msu_res.data.riskphone.id), msu_res.langData.riskphone.title);
        msu_utils.setContent(msu_utils.inputDesc(msu_res.data.riskphone.id), msu_res.langData.riskphone.desc);

      
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

        console.log(JSON.stringify(msu_res.postModel));

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
			
			// Check for AccountType
            if ($("#" + msu_utils.inputId(msu_res.data.accounttype.id))) {
                var accounttypeRaw = $("#" + msu_utils.inputId(msu_res.data.accounttype.id)).val();
                if (msu_res.data.accounttype.validate) {
                    if (!accounttypeRaw) {
                        msu_res.valSum.push(msu_res.langData.accounttype.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.AccountType = accounttypeRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.AccountType = accounttypeRaw;
                }
            }
            
            // Check for ParentCompany
            if ($("#" + msu_utils.inputId(msu_res.data.parentcompany.id))) {
                var parentcompanyRaw = $("#" + msu_utils.inputId(msu_res.data.parentcompany.id)).val();
                if (msu_res.data.parentcompany.validate) {
                    if (!parentcompanyRaw) {
                        msu_res.valSum.push(msu_res.langData.parentcompany.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.ParentCompany = parentcompanyRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.ParentCompany = parentcompanyRaw;
                }
            }

            // Check for AccountManager
            if ($("#" + msu_utils.inputId(msu_res.data.accountmanager.id))) {
                var accountmanagerRaw = $("#" + msu_utils.inputId(msu_res.data.accountmanager.id)).val();
                if (msu_res.data.accountmanager.validate) {
                    if (!accountmanagerRaw) {
                        msu_res.valSum.push(msu_res.langData.accountmanager.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.AccountManager = accountmanagerRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.AccountManager = accountmanagerRaw;
                }
            }

            // Check for Source.
            if ($("#" + msu_utils.inputId(msu_res.data.source.id))) {
                var sourceRaw = $("#" + msu_utils.inputId(msu_res.data.source.id)).val();
                if (msu_res.data.source.validate) {
                    if (!sourceRaw) {
                        msu_res.valSum.push(msu_res.langData.source.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.Source = sourceRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.Source = sourceRaw;
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

            // Check for M1NumberOfTransactions.
            if ($("#" + msu_utils.inputId(msu_res.data.m1numberoftransactions.id))) {
                var m1numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m1numberoftransactions.id)).val();
                var m1numberoftransactionsRawMumber = parseFloat(m1numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m1numberoftransactions.validate) {
                    if (!m1numberoftransactionsRaw || !msu_utils.isValidNumeric(m1numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M1NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M1NumberOfTransactions = m1numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m1numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M1NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M1NumberOfTransactions = m1numberoftransactionsRawNumber;
                }
            }

             // Check for M2NumberOfTransactions.
             if ($("#" + msu_utils.inputId(msu_res.data.m2numberoftransactions.id))) {
                var m2numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m2numberoftransactions.id)).val();
                var m2numberoftransactionsRawNumber = parseFloat(m2numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m2numberoftransactions.validate) {
                    if (!m2numberoftransactionsRaw || !msu_utils.isValidNumeric(m2numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M2NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M2NumberOfTransactions = m2numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m2numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M2NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M2NumberOfTransactions = m2numberoftransactionsRawNumber;
                }
            }

            // Check for M3NumberOfTransactions.
            if ($("#" + msu_utils.inputId(msu_res.data.m3numberoftransactions.id))) {
                var m3numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m3numberoftransactions.id)).val();
                var m3numberoftransactionsRawNumber = parseFloat(m3numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m3numberoftransactions.validate) {
                    if (!m3numberoftransactionsRaw || !msu_utils.isValidNumeric(m3numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M3NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M3NumberOfTransactions = m3numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m3numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M3NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M3NumberOfTransactions = m3numberoftransactionsRawNumber;
                }
            }

            // Check for M4NumberOfTransactions.
            if ($("#" + msu_utils.inputId(msu_res.data.m4numberoftransactions.id))) {
                var m4numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m4numberoftransactions.id)).val();
                var m4numberoftransactionsRawNumber = parseFloat(m4numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m4numberoftransactions.validate) {
                    if (!m4numberoftransactionsRaw || !msu_utils.isValidNumeric(m4numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M4NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M4NumberOfTransactions = m4numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m4numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M4NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M4NumberOfTransactions = m4numberoftransactionsRawNumber;
                }
            }

            // Check for M5NumberOfTransactions.
            if ($("#" + msu_utils.inputId(msu_res.data.m5numberoftransactions.id))) {
                var m5numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m5numberoftransactions.id)).val();
                var m5numberoftransactionsRawNumber = parseFloat(m5numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m5numberoftransactions.validate) {
                    if (!m5numberoftransactionsRaw || !msu_utils.isValidNumeric(m5numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M5NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M5NumberOfTransactions = m5numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m5numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M5NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M5NumberOfTransactions = m5numberoftransactionsRawNumber;
                }
            }

            // Check for M6NumberOfTransactions.
            if ($("#" + msu_utils.inputId(msu_res.data.m6numberoftransactions.id))) {
                var m6numberoftransactionsRaw = $("#" + msu_utils.inputId(msu_res.data.m6numberoftransactions.id)).val();
                var m6numberoftransactionsRawNumber = parseFloat(m6numberoftransactionsRaw).toFixed(2);
                if (msu_res.data.m6numberoftransactions.validate) {
                    if (!m6numberoftransactionsRaw || !msu_utils.isValidNumeric(m6numberoftransactionsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6numberoftransactions.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6numberoftransactionsRawNumber))
                            msu_res.postModel.RegistrationData.M6NumberOfTransactions = 0;
                        else
                            msu_res.postModel.RegistrationData.M6NumberOfTransactions = m6numberoftransactionsRawNumber;
                    }
                }
                else {
                    if (isNaN(m6numberoftransactionsRawNumber))
                        msu_res.postModel.RegistrationData.M6NumberOfTransactions = 0;
                    else
                        msu_res.postModel.RegistrationData.M6NumberOfTransactions = m6numberoftransactionsRawNumber;
                }
            }

            // Check for M1TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m1transactionvolume.id))) {
                var m1transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m1transactionvolume.id)).val();
                var m1transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m1transactionvolume.validate) {
                    if (!m1transactionvolumeRaw || !msu_utils.isValidNumeric(m1transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M1TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M1TransactionVolume = m1transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m1transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M1TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M1TransactionVolume = m1transactionvolumeRawNumber;
                }
            }

            // Check for M2TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m2transactionvolume.id))) {
                var m2transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m2transactionvolume.id)).val();
                var m2transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m2transactionvolume.validate) {
                    if (!m2transactionvolumeRaw || !msu_utils.isValidNumeric(m2transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M2TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M2TransactionVolume = m2transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m2transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M2TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M2TransactionVolume = m2transactionvolumeRawNumber;
                }
            }

            // Check for M3TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m3transactionvolume.id))) {
                var m3transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m3transactionvolume.id)).val();
                var m3transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m3transactionvolume.validate) {
                    if (!m3transactionvolumeRaw || !msu_utils.isValidNumeric(m3transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M3TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M3TransactionVolume = m3transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m3transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M3TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M3TransactionVolume = m3transactionvolumeRawNumber;
                }
            }

            // Check for M4TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m4transactionvolume.id))) {
                var m4transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m4transactionvolume.id)).val();
                var m4transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m4transactionvolume.validate) {
                    if (!m4transactionvolumeRaw || !msu_utils.isValidNumeric(m4transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M4TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M4TransactionVolume = m4transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m4transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M4TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M4TransactionVolume = m4transactionvolumeRawNumber;
                }
            }

            // Check for M5TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m5transactionvolume.id))) {
                var m5transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m5transactionvolume.id)).val();
                var m5transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m5transactionvolume.validate) {
                    if (!m5transactionvolumeRaw || !msu_utils.isValidNumeric(m5transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M5TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M5TransactionVolume = m5transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m5transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M5TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M5TransactionVolume = m5transactionvolumeRawNumber;
                }
            }

            // Check for M6TransactionVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m6transactionvolume.id))) {
                var m6transactionvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m6transactionvolume.id)).val();
                var m6transactionvolumeRawNumber = parseFloat(raw).toFixed(2);
                if (msu_res.data.m6transactionvolume.validate) {
                    if (!m6transactionvolumeRaw || !msu_utils.isValidNumeric(m6transactionvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6transactionvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6transactionvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M6TransactionVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M6TransactionVolume = m6transactionvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m6transactionvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M6TransactionVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M6TransactionVolume = m6transactionvolumeRawNumber;
                }
            }

            // Check for M1NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m1numberofchargeback.id))) {
                var m1numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m1numberofchargeback.id)).val();
                var m1numberofchargebackRawNumber = parseFloat(m1numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m1numberofchargeback.validate) {
                    if (!m1numberofchargebackRaw || !msu_utils.isValidNumeric(m1numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M1NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M1NumberOfChargeBack = m1numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m1numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M1NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M1NumberOfChargeBack = m1numberofchargebackRawNumber;
                }
            }

            // Check for M2NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m2numberofchargeback.id))) {
                var m2numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m2numberofchargeback.id)).val();
                var m2numberofchargebackRawNumber = parseFloat(m2numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m2numberofchargeback.validate) {
                    if (!m2numberofchargebackRaw || !msu_utils.isValidNumeric(m2numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M2NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M2NumberOfChargeBack = m2numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m2numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M2NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M2NumberOfChargeBack = m2numberofchargebackRawNumber;
                }
            }

            // Check for M3NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m3numberofchargeback.id))) {
                var m3numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m3numberofchargeback.id)).val();
                var m3numberofchargebackRawNumber = parseFloat(m3numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m3numberofchargeback.validate) {
                    if (!m3numberofchargebackRaw || !msu_utils.isValidNumeric(m3numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M3NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M3NumberOfChargeBack = m3numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m3numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M3NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M3NumberOfChargeBack = m3numberofchargebackRawNumber;
                }
            }

            // Check for M4NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m4numberofchargeback.id))) {
                var m4numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m4numberofchargeback.id)).val();
                var m4numberofchargebackRawNumber = parseFloat(m4numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m4numberofchargeback.validate) {
                    if (!m4numberofchargebackRaw || !msu_utils.isValidNumeric(m4numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M4NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M4NumberOfChargeBack = m4numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m4numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M4NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M4NumberOfChargeBack = m4numberofchargebackRawNumber;
                }
            }

            // Check for M5NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m5numberofchargeback.id))) {
                var m5numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m5numberofchargeback.id)).val();
                var m5numberofchargebackRawNumber = parseFloat(m5numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m5numberofchargeback.validate) {
                    if (!m5numberofchargebackRaw || !msu_utils.isValidNumeric(m5numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M5NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M5NumberOfChargeBack = m5numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m5numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M5NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M5NumberOfChargeBack = m5numberofchargebackRawNumber;
                }
            }

            // Check for M6NumberOfChargeBack.
            if ($("#" + msu_utils.inputId(msu_res.data.m6numberofchargeback.id))) {
                var m6numberofchargebackRaw = $("#" + msu_utils.inputId(msu_res.data.m6numberofchargeback.id)).val();
                var m6numberofchargebackRawNumber = parseFloat(m6numberofchargebackRaw).toFixed(2);
                if (msu_res.data.m6numberofchargeback.validate) {
                    if (!m6numberofchargebackRaw || !msu_utils.isValidNumeric(m6numberofchargebackRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6numberofchargeback.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6numberofchargebackRawNumber))
                            msu_res.postModel.RegistrationData.M6NumberOfChargeBack = 0;
                        else
                            msu_res.postModel.RegistrationData.M6NumberOfChargeBack = m6numberofchargebackRawNumber;
                    }
                }
                else {
                    if (isNaN(m6numberofchargebackRawNumber))
                        msu_res.postModel.RegistrationData.M6NumberOfChargeBack = 0;
                    else
                        msu_res.postModel.RegistrationData.M6NumberOfChargeBack = m6numberofchargebackRawNumber;
                }
            }
            
             // Check for M1ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m1chargebackvolume.id))) {
                var m1chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m1chargebackvolume.id)).val();
                var m1chargebackvolumeRawNumber = parseFloat(m1chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m1chargebackvolume.validate) {
                    if (!m1chargebackvolumeRaw || !msu_utils.isValidNumeric(m1chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M1ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M1ChargebackVolume = m1chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m1chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M1ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M1ChargebackVolume = m1chargebackvolumeRawNumber;
                }
            }

             // Check for M2ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m2chargebackvolume.id))) {
                var m2chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m2chargebackvolume.id)).val();
                var m2chargebackvolumeRawNumber = parseFloat(m2chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m2chargebackvolume.validate) {
                    if (!m2chargebackvolumeRaw || !msu_utils.isValidNumeric(m2chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M2ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M2ChargebackVolume = m2chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m2chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M2ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M2ChargebackVolume = m2chargebackvolumeRawNumber;
                }
            }

             // Check for M3ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m3chargebackvolume.id))) {
                var m3chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m3chargebackvolume.id)).val();
                var m3chargebackvolumeRawNumber = parseFloat(m3chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m3chargebackvolume.validate) {
                    if (!m3chargebackvolumeRaw || !msu_utils.isValidNumeric(m3chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M3ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M3ChargebackVolume = m3chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m3chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M3ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M3ChargebackVolume = m3chargebackvolumeRawNumber;
                }
            }

             // Check for M4ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m4chargebackvolume.id))) {
                var m4chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m4chargebackvolume.id)).val();
                var m4chargebackvolumeRawNumber = parseFloat(m4chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m4chargebackvolume.validate) {
                    if (!m4chargebackvolumeRaw || !msu_utils.isValidNumeric(m4chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M4ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M4ChargebackVolume = m4chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m4chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M4ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M4ChargebackVolume = m4chargebackvolumeRawNumber;
                }
            }

             // Check for M5ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m5chargebackvolume.id))) {
                var m5chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m5chargebackvolume.id)).val();
                var m5chargebackvolumeRawNumber = parseFloat(m5chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m5chargebackvolume.validate) {
                    if (!m5chargebackvolumeRaw || !msu_utils.isValidNumeric(m5chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M5ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M5ChargebackVolume = m5chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m5chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M5ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M5ChargebackVolume = m5chargebackvolumeRawNumber;
                }
            }

             // Check for M6ChargebackVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m6chargebackvolume.id))) {
                var m6chargebackvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m6chargebackvolume.id)).val();
                var m6chargebackvolumeRawNumber = parseFloat(m6chargebackvolumeRaw).toFixed(2);
                if (msu_res.data.m6chargebackvolume.validate) {
                    if (!m6chargebackvolumeRaw || !msu_utils.isValidNumeric(m6chargebackvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6chargebackvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6chargebackvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M6ChargebackVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M6ChargebackVolume = m6chargebackvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m6chargebackvolumeRaw))
                        msu_res.postModel.RegistrationData.M6ChargebackVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M6ChargebackVolume = m6chargebackvolumeRawNumber;
                }
            }

             // Check for M1NumberOfRefunds.
             if ($("#" + msu_utils.inputId(msu_res.data.m1numberofrefunds.id))) {
                var m1numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m1numberofrefunds.id)).val();
                var m1numberofrefundsRawNumber = parseFloat(m1numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m1numberofrefunds.validate) {
                    if (!m1numberofrefundsRaw || !msu_utils.isValidNumeric(m1numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M1NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M1NumberOfRefunds = m1numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m1numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M1NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M1NumberOfRefunds = m1numberofrefundsRawNumber;
                }
            }

            // Check for M2NumberOfRefunds.
            if ($("#" + msu_utils.inputId(msu_res.data.m2numberofrefunds.id))) {
                var m2numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m2numberofrefunds.id)).val();
                var m2numberofrefundsRawNumber = parseFloat(m2numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m2numberofrefunds.validate) {
                    if (!m2numberofrefundsRaw || !msu_utils.isValidNumeric(m2numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M2NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M2NumberOfRefunds = m2numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m2numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M2NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M2NumberOfRefunds = m2numberofrefundsRawNumber;
                }
            }

            // Check for M3NumberOfRefunds.
            if ($("#" + msu_utils.inputId(msu_res.data.m3numberofrefunds.id))) {
                var m3numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m3numberofrefunds.id)).val();
                var m3numberofrefundsRawNumber = parseFloat(m3numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m3numberofrefunds.validate) {
                    if (!m3numberofrefundsRaw || !msu_utils.isValidNumeric(m3numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M3NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M3NumberOfRefunds = m3numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m3numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M3NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M3NumberOfRefunds = m3numberofrefundsRawNumber;
                }
            }

            // Check for M4NumberOfRefunds.
            if ($("#" + msu_utils.inputId(msu_res.data.m4numberofrefunds.id))) {
                var m4numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m4numberofrefunds.id)).val();
                var m4numberofrefundsRawNumber = parseFloat(m4numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m4numberofrefunds.validate) {
                    if (!m4numberofrefundsRaw || !msu_utils.isValidNumeric(m4numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M4NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M4NumberOfRefunds = m4numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m4numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M4NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M4NumberOfRefunds = m4numberofrefundsRawNumber;
                }
            }

            // Check for M5NumberOfRefunds.
            if ($("#" + msu_utils.inputId(msu_res.data.m5numberofrefunds.id))) {
                var m5numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m5numberofrefunds.id)).val();
                var m5numberofrefundsRawNumber = parseFloat(m5numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m5numberofrefunds.validate) {
                    if (!m5numberofrefundsRaw || !msu_utils.isValidNumeric(m5numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M5NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M5NumberOfRefunds = m5numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m5numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M5NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M5NumberOfRefunds = m5numberofrefundsRawNumber;
                }
            }

            // Check for M6NumberOfRefunds.
            if ($("#" + msu_utils.inputId(msu_res.data.m6numberofrefunds.id))) {
                var m6numberofrefundsRaw = $("#" + msu_utils.inputId(msu_res.data.m6numberofrefunds.id)).val();
                var m6numberofrefundsRawNumber = parseFloat(m6numberofrefundsRaw).toFixed(2);
                if (msu_res.data.m6numberofrefunds.validate) {
                    if (!m6numberofrefundsRaw || !msu_utils.isValidNumeric(m6numberofrefundsRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6numberofrefunds.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6numberofrefundsRawNumber))
                            msu_res.postModel.RegistrationData.M6NumberOfRefunds = 0;
                        else
                            msu_res.postModel.RegistrationData.M6NumberOfRefunds = m6numberofrefundsRawNumber;
                    }
                }
                else {
                    if (isNaN(m6numberofrefundsRawNumber))
                        msu_res.postModel.RegistrationData.M6NumberOfRefunds = 0;
                    else
                        msu_res.postModel.RegistrationData.M6NumberOfRefunds = m6numberofrefundsRawNumber;
                }
            }
            
            // Check for M1RefundVolume.
            if ($("#" + msu_utils.inputId(msu_res.data.m1refundvolume.id))) {
                var m1refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m1refundvolume.id)).val();
                var m1refundvolumeRawNumber = parseFloat(m1refundvolumeRaw).toFixed(2);
                if (msu_res.data.m1refundvolume.validate) {
                    if (!m1refundvolumeRaw || !msu_utils.isValidNumeric(m1refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m1refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m1refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M1RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M1RefundVolume = m1refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m1refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M1RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M1RefundVolume = m1refundvolumeRawNumber;
                }
            }

             // Check for M2RefundVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m2refundvolume.id))) {
                var m2refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m2refundvolume.id)).val();
                var m2refundvolumeRawNumber = parseFloat(m2refundvolumeRaw).toFixed(2);
                if (msu_res.data.m2refundvolume.validate) {
                    if (!m2refundvolumeRaw || !msu_utils.isValidNumeric(m2refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m2refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m2refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M2RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M2RefundVolume = m2refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m2refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M2RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M2RefundVolume = m2refundvolumeRawNumber;
                }
            }

             // Check for M3RefundVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m3refundvolume.id))) {
                var m3refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m3refundvolume.id)).val();
                var m3refundvolumeRawNumber = parseFloat(m3refundvolumeRaw).toFixed(2);
                if (msu_res.data.m3refundvolume.validate) {
                    if (!m3refundvolumeRaw || !msu_utils.isValidNumeric(m3refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m3refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m3refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M3RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M3RefundVolume = m3refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m3refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M3RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M3RefundVolume = m3refundvolumeRawNumber;
                }
            }

             // Check for M4RefundVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m4refundvolume.id))) {
                var m4refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m4refundvolume.id)).val();
                var m4refundvolumeRawNumber = parseFloat(m4refundvolumeRaw).toFixed(2);
                if (msu_res.data.m4refundvolume.validate) {
                    if (!m4refundvolumeRaw || !msu_utils.isValidNumeric(m4refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m4refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m4refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M4RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M4RefundVolume = m4refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m4refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M4RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M4RefundVolume = m4refundvolumeRawNumber;
                }
            }

             // Check for M5RefundVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m5refundvolume.id))) {
                var m5refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m5refundvolume.id)).val();
                var m5refundvolumeRawNumber = parseFloat(m5refundvolumeRaw).toFixed(2);
                if (msu_res.data.m5refundvolume.validate) {
                    if (!m5refundvolumeRaw || !msu_utils.isValidNumeric(m5refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m5refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m5refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M5RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M5RefundVolume = m5refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m5refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M5RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M5RefundVolume = m5refundvolumeRawNumber;
                }
            }

             // Check for M6RefundVolume.
             if ($("#" + msu_utils.inputId(msu_res.data.m6refundvolume.id))) {
                var m6refundvolumeRaw = $("#" + msu_utils.inputId(msu_res.data.m6refundvolume.id)).val();
                var m6refundvolumeRawNumber = parseFloat(m6refundvolumeRaw).toFixed(2);
                if (msu_res.data.m6refundvolume.validate) {
                    if (!m6refundvolumeRaw || !msu_utils.isValidNumeric(m6refundvolumeRaw)) {
                        msu_res.valSum.push(msu_res.langData.m6refundvolume.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(m6refundvolumeRawNumber))
                            msu_res.postModel.RegistrationData.M6RefundVolume = 0;
                        else
                            msu_res.postModel.RegistrationData.M6RefundVolume = m6refundvolumeRawNumber;
                    }
                }
                else {
                    if (isNaN(m6refundvolumeRawNumber))
                        msu_res.postModel.RegistrationData.M6RefundVolume = 0;
                    else
                        msu_res.postModel.RegistrationData.M6RefundVolume = m6refundvolumeRawNumber;
                }
            }

            // Check for OOTDomestic.
            if ($("#" + msu_utils.inputId(msu_res.data.ootdomestic.id))) {
                var ootdomesticRaw = $("#" + msu_utils.inputId(msu_res.data.ootdomestic.id)).val();
                var ootdomesticRawNumber = parseFloat(ootdomesticRaw).toFixed(2);
                if (msu_res.data.ootdomestic.validate) {
                    if (!ootdomesticRaw || !msu_utils.isValidNumeric(ootdomesticRaw)) {
                        msu_res.valSum.push(msu_res.langData.ootdomestic.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(ootdomesticRawNumber))
                            msu_res.postModel.RegistrationData.OOTDomestic = 0;
                        else
                            msu_res.postModel.RegistrationData.OOTDomestic = ootdomesticRawNumber;
                    }
                }
                else {
                    if (isNaN(ootdomesticRawNumber))
                        msu_res.postModel.RegistrationData.OOTDomestic = 0;
                    else
                        msu_res.postModel.RegistrationData.OOTDomestic = ootdomesticRawwNumber;
                }
            }

            // Check for OOTEurope.
            if ($("#" + msu_utils.inputId(msu_res.data.ooteurope.id))) {
                var ooteuropeRaw = $("#" + msu_utils.inputId(msu_res.data.ooteurope.id)).val();
                var ooteuropeRawNumber = parseFloat(ooteuropeRaw).toFixed(2);
                if (msu_res.data.ooteurope.validate) {
                    if (!ooteuropeRaw || !msu_utils.isValidNumeric(ooteuropeRaw)) {
                        msu_res.valSum.push(msu_res.langData.ooteurope.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(ooteuropeRawNumber))
                            msu_res.postModel.RegistrationData.OOTEurope = 0;
                        else
                            msu_res.postModel.RegistrationData.OOTEurope = ooteuropeRawNumber;
                    }
                }
                else {
                    if (isNaN(ooteuropeRawNumber))
                        msu_res.postModel.RegistrationData.OOTEurope = 0;
                    else
                        msu_res.postModel.RegistrationData.OOTEurope = ooteuropeRawNumber;
                }
            }

            // Check for OOTUSA.
            if ($("#" + msu_utils.inputId(msu_res.data.ootusa.id))) {
                var ootusaRaw = $("#" + msu_utils.inputId(msu_res.data.ootusa.id)).val();
                var ootusaRawNumber = parseFloat(ootusaRaw).toFixed(2);
                if (msu_res.data.ootusa.validate) {
                    if (!ootusaRaw || !msu_utils.isValidNumeric(ootusaRaw)) {
                        msu_res.valSum.push(msu_res.langData.ootusa.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(ootusaRawNumber))
                            msu_res.postModel.RegistrationData.OOTUSA = 0;
                        else
                            msu_res.postModel.RegistrationData.OOTUSA = ootusaRawNumber;
                    }
                }
                else {
                    if (isNaN(ootusaRawNumber))
                        msu_res.postModel.RegistrationData.OOTUSA = 0;
                    else
                        msu_res.postModel.RegistrationData.OOTUSA = ootusaRawNumber;
                }
            }

            // Check for OOTAsia.
            if ($("#" + msu_utils.inputId(msu_res.data.ootasia.id))) {
                var ootasiaRaw = $("#" + msu_utils.inputId(msu_res.data.ootasia.id)).val();
                var ootasiaRawNumber = parseFloat(ootasiaRaw).toFixed(2);
                if (msu_res.data.ootasia.validate) {
                    if (!ootasiaRaw || !msu_utils.isValidNumeric(ootasiaRaw)) {
                        msu_res.valSum.push(msu_res.langData.ootasia.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(ootasiaRawNumber))
                            msu_res.postModel.RegistrationData.OOTAsia = 0;
                        else
                            msu_res.postModel.RegistrationData.OOTAsia = ootasiaRawNumber;
                    }
                }
                else {
                    if (isNaN(ootasiaRawNumber))
                        msu_res.postModel.RegistrationData.OOTAsia = 0;
                    else
                        msu_res.postModel.RegistrationData.OOTAsia = ootasiaRawNumber;
                }
            }

            // Check for OOTROW.
            if ($("#" + msu_utils.inputId(msu_res.data.ootrow.id))) {
                var ootrowRaw = $("#" + msu_utils.inputId(msu_res.data.ootrow.id)).val();
                var ootrowRawNumber = parseFloat(ootrowRaw).toFixed(2);
                if (msu_res.data.ootrow.validate) {
                    if (!ootrowRaw || !msu_utils.isValidNumeric(ootrowRaw)) {
                        msu_res.valSum.push(msu_res.langData.ootrow.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(ootrowRawNumber))
                            msu_res.postModel.RegistrationData.OOTROW = 0;
                        else
                            msu_res.postModel.RegistrationData.OOTROW = ootrowRawNumber;
                    }
                }
                else {
                    if (isNaN(ootrowRawNumber))
                        msu_res.postModel.RegistrationData.OOTROW = 0;
                    else
                        msu_res.postModel.RegistrationData.OOTROW = ootrowRawNumber;
                }
            }
            // Check for TechFirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.techfirstname.id))) {
                var techfirstnameRaw = $("#" + msu_utils.inputId(msu_res.data.techfirstname.id)).val();
                if (msu_res.data.techfirstname.validate) {
                    if (!techfirstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.techfirstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.TechFirstName = techfirstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.TechFirstName = techfirstnameRaw;
                }
            }
            // Check for TechLastName.
            if ($("#" + msu_utils.inputId(msu_res.data.techlastname.id))) {
                var techlastnameRaw = $("#" + msu_utils.inputId(msu_res.data.techlastname.id)).val();
                if (msu_res.data.techlastname.validate) {
                    if (!techlastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.techlastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.TechLastName = techlastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.TechLastName = techlastnameRaw;
                }
            }
            // Check for TechEmail.
            if ($("#" + msu_utils.inputId(msu_res.data.techemail.id))) {
                var techemailRaw = $("#" + msu_utils.inputId(msu_res.data.techemail.id)).val();
                if (msu_res.data.techemail.validate) {
                    if (!techemailRaw) {
                        msu_res.valSum.push(msu_res.langData.techemail.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.TechEmail = techemailRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.TechEmail = techemailRaw;
                }
            }

            // Check for TechPhone.
            if ($("#" + msu_utils.inputId(msu_res.data.techphone.id))) {
                var techphoneRaw = $("#" + msu_utils.inputId(msu_res.data.techphoneRaw.id)).val();
                var techphoneRawNumber = parseFloat(techphoneRaw).toFixed(2);
                if (msu_res.data.techphone.validate) {
                    if (!techphoneRaw || !msu_utils.isValidNumeric(techphoneRaw)) {
                        msu_res.valSum.push(msu_res.langData.techphone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(techphoneRawNumber))
                            msu_res.postModel.RegistrationData.TechPhone = 0;
                        else
                            msu_res.postModel.RegistrationData.TechPhone = techphoneRawNumber;
                    }
                }
                else {
                    if (isNaN(techphoneRawNumber))
                        msu_res.postModel.RegistrationData.TechPhone = 0;
                    else
                        msu_res.postModel.RegistrationData.TechPhone = techphoneRawNumber;
                }
            }

            // Check for FinanceFirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.financefirstname.id))) {
                var financefirstnameRaw = $("#" + msu_utils.inputId(msu_res.data.financefirstname.id)).val();
                if (msu_res.data.financefirstname.validate) {
                    if (!financefirstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.financefirstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.FinanceFirstName = financefirstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.FinanceFirstName = financefirstnameRaw;
                }
            }
            // Check for FinanceLastName.
            if ($("#" + msu_utils.inputId(msu_res.data.financelastname.id))) {
                var financelastnameRaw = $("#" + msu_utils.inputId(msu_res.data.financelastname.id)).val();
                if (msu_res.data.financelastname.validate) {
                    if (!financelastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.financelastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.FinanceLastName = financelastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.FinanceLastName = financelastnameRaw;
                }
            }
            // Check for FinanceEmail.
            if ($("#" + msu_utils.inputId(msu_res.data.financeemail.id))) {
                var financeemailRaw = $("#" + msu_utils.inputId(msu_res.data.financeemail.id)).val();
                if (msu_res.data.financeemail.validate) {
                    if (!financeemailRaw) {
                        msu_res.valSum.push(msu_res.langData.financeemail.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.FinanceEmail = financeemailRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.FinanceEmail = financeemailRaw;
                }
            }


            // Check for FinancePhone.
            if ($("#" + msu_utils.inputId(msu_res.data.financephone.id))) {
                var financephoneRaw = $("#" + msu_utils.inputId(msu_res.data.financephoneRaw.id)).val();
                var financephoneRawNumber = parseFloat(financephoneRaw).toFixed(2);
                if (msu_res.data.financephone.validate) {
                    if (!financephoneRaw || !msu_utils.isValidNumeric(financephoneRaw)) {
                        msu_res.valSum.push(msu_res.langData.financephone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(financephoneRawNumber))
                            msu_res.postModel.RegistrationData.FinancePhone = 0;
                        else
                            msu_res.postModel.RegistrationData.FinancePhone = financephoneRawNumber;
                    }
                }
                else {
                    if (isNaN(financephoneRawNumber))
                        msu_res.postModel.RegistrationData.FinancePhone = 0;
                    else
                        msu_res.postModel.RegistrationData.FinancePhone = financephoneRawNumber;
                }
            }

             // Check for RiskFirstName.
             if ($("#" + msu_utils.inputId(msu_res.data.riskfirstname.id))) {
                var riskfirstnameRaw = $("#" + msu_utils.inputId(msu_res.data.riskfirstname.id)).val();
                if (msu_res.data.riskfirstname.validate) {
                    if (!riskfirstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.riskfirstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.RiskFirstName = riskfirstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.RiskFirstName = riskfirstnameRaw;
                }
            }
            // Check for RiskLastName.
            if ($("#" + msu_utils.inputId(msu_res.data.risklastname.id))) {
                var risklastnameRaw = $("#" + msu_utils.inputId(msu_res.data.risklastname.id)).val();
                if (msu_res.data.risklastname.validate) {
                    if (!risklastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.risklastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.RiskLastName = risklastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.RiskLastName = risklastnameRaw;
                }
            }
            // Check for RiskEmail.
            if ($("#" + msu_utils.inputId(msu_res.data.riskemail.id))) {
                var riskemailRaw = $("#" + msu_utils.inputId(msu_res.data.riskemail.id)).val();
                if (msu_res.data.riskemail.validate) {
                    if (!riskemailRaw) {
                        msu_res.valSum.push(msu_res.langData.riskemail.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.RiskEmail = riskemailRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.RiskEmail = riskemailRaw;
                }
            }

            // Check for RiskPhone.
            if ($("#" + msu_utils.inputId(msu_res.data.riskphone.id))) {
                var riskphoneRaw = $("#" + msu_utils.inputId(msu_res.data.riskphoneRaw.id)).val();
                var riskphoneRawNumber = parseFloat(riskphoneRaw).toFixed(2);
                if (msu_res.data.riskphone.validate) {
                    if (!riskphoneRaw || !msu_utils.isValidNumeric(riskphoneRaw)) {
                        msu_res.valSum.push(msu_res.langData.riskphone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        if (isNaN(riskphoneRawNumber))
                            msu_res.postModel.RegistrationData.RiskPhone = 0;
                        else
                            msu_res.postModel.RegistrationData.RiskPhone = riskphoneRawNumber;
                    }
                }
                else {
                    if (isNaN(riskphoneRawNumber))
                        msu_res.postModel.RegistrationData.RiskPhone = 0;
                    else
                        msu_res.postModel.RegistrationData.RiskPhone = riskphoneRawNumber;
                }
            }

              // Check for CurrentPreviousProvider.
              if ($("#" + msu_utils.inputId(msu_res.data.currentpreviousprovider.id))) {
                var currentpreviousproviderRaw = $("#" + msu_utils.inputId(msu_res.data.currentpreviousprovider.id)).val();
                if (msu_res.data.currentpreviousprovider.validate) {
                    if (!currentpreviousproviderRaw) {
                        msu_res.valSum.push(msu_res.langData.currentpreviousprovider.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.CurrentPreviousProvider = currentpreviousproviderRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.CurrentPreviousProvider = currentpreviousproviderRaw;
                }
            }

              // Check for CurrentPreviousAcquirer.
              if ($("#" + msu_utils.inputId(msu_res.data.currentpreviousacquirer.id))) {
                var currentpreviousacquirerRaw = $("#" + msu_utils.inputId(msu_res.data.currentpreviousacquirer.id)).val();
                if (msu_res.data.currentpreviousacquirer.validate) {
                    if (!currentpreviousacquirerRaw) {
                        msu_res.valSum.push(msu_res.langData.currentpreviousacquirer.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.CurrentPreviousAcquirer = currentpreviousacquirerRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.CurrentPreviousAcquirer = currentpreviousacquirerRaw;
                }
            }

            // Check for ReasonsForLeavingAcquirer.
            if ($("#" + msu_utils.inputId(msu_res.data.reasonsforleavingacquirer.id))) {
                var reasonsforleavingacquirerRaw = $("#" + msu_utils.inputId(msu_res.data.reasonsforleavingacquirer.id)).val();
                if (msu_res.data.reasonsforleavingacquirer.validate) {
                    if (!reasonsforleavingacquirerRaw) {
                        msu_res.valSum.push(msu_res.langData.reasonsforleavingacquirer.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.ReasonsForLeavingAcquirer = reasonsforleavingacquirerRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.ReasonsForLeavingAcquirer = reasonsforleavingacquirerRaw;
                }
            }

            // Check for UBO1FirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo1firstname.id))) {
                var ubo1firstnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1firstname.id)).val();
                if (msu_res.data.ubo1firstname.validate) {
                    if (!ubo1firstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1firstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1FirstName = ubo1firstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1FirstName = ubo1firstnameRaw;
                }
            }
            
            // Check for UBO1LastName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo1lastname.id))) {
                var ubo1lastnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1lastname.id)).val();
                if (msu_res.data.ubo1lastname.validate) {
                    if (!ubo1lastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1lastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1LastName = ubo1lastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1LastName = ubo1lastnameRaw;
                }
            }

            // Check for UBO1DOB.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo1dob.id))) {
                var ubo1dobRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1dob.id)).val();
                if (msu_res.data.ubo1dob.validate) {
                    if (!ubo1dobRaw || !msu_utils.isValidDate(ubo1dobRaw)) {
                        msu_res.valSum.push(msu_res.langData.ubo1dob.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo1dobRaw) + ")/";
                    }
                }
                else {
                    if (ubo1dobRaw)
                        msu_res.postModel.RegistrationData.UBO1DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo1dobRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.UBO1DOB = null;
                }
            }

            // Check for UBO1Address1.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo1address1.id))) {
                var ubo1address1Raw = $("#" + msu_utils.inputId(msu_res.data.ubo1address1.id)).val();
                if (msu_res.data.ubo1address1.validate) {
                    if (!ubo1address1Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo1address1.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1Address1 = ubo1address1Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1Address1 = ubo1address1Raw;
                }
            }

             // Check for UBO1Address2.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1address2.id))) {
                var ubo1address2Raw = $("#" + msu_utils.inputId(msu_res.data.ubo1address2.id)).val();
                if (msu_res.data.ubo1address2.validate) {
                    if (!ubo1address2Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo1address2.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1Address2 = ubo1address2Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1Address2 = ubo1address2Raw;
                }
            }

             // Check for UBO1Zip.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1zip.id))) {
                var ubo1zipRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1zip.id)).val();
                if (msu_res.data.ubo1zip.validate) {
                    if (!ubo1zipRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1zip.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1Zip = ubo1zipRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1Zip = ubo1zipRaw;
                }
            }

            // Check for UBO1City.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo1city.id))) {
                var ubo1cityRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1city.id)).val();
                if (msu_res.data.ubo1city.validate) {
                    if (!ubo1cityRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1city.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1City = ubo1cityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1City = ubo1cityRaw;
                }
            }

             // Check for UBO1Country.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1country.id))) {
                var ubo1countryRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1country.id)).val();
                if (msu_res.data.ubo1country.validate) {
                    if (!ubo1countryRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1country.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1Country = ubo1countryRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1Country = ubo1countryRaw;
                }
            }

             // Check for UBO1Phone.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1phone.id))) {
                var ubo1phoneRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1phone.id)).val();
                if (msu_res.data.ubo1phone.validate) {
                    if (!ubo1phoneRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1phone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1Phone = ubo1phoneRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1Phone = ubo1phoneRaw;
                }
            }

             // Check for UBO1PassportID.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1passportid.id))) {
                var ubo1passportidRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1passportid.id)).val();
                if (msu_res.data.ubo1passportid.validate) {
                    if (!ubo1passportidRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1passportid.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1PassportID = ubo1passportidRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1PassportID = ubo1passportidRaw;
                }
            }

             // Check for UBO1SSN.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo1ssn.id))) {
                var ubo1ssnRaw = $("#" + msu_utils.inputId(msu_res.data.ubo1ssn.id)).val();
                if (msu_res.data.ubo1ssn.validate) {
                    if (!ubo1ssnRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo1ssn.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO1SSN = ubo1ssnRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO1SSN = ubo1ssnRaw;
                }
            }

            // Check for UBO2FirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo2firstname.id))) {
                var ubo2firstnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2firstname.id)).val();
                if (msu_res.data.ubo2firstname.validate) {
                    if (!ubo2firstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2firstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2FirstName = ubo2firstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2FirstName = ubo2firstnameRaw;
                }
            }
            
            // Check for UBO2LastName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo2lastname.id))) {
                var ubo2lastnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2lastname.id)).val();
                if (msu_res.data.ubo2lastname.validate) {
                    if (!ubo2lastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2lastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2LastName = ubo2lastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2LastName = ubo2lastnameRaw;
                }
            }

            // Check for UBO2DOB.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo2dob.id))) {
                var ubo2dobRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2dob.id)).val();
                if (msu_res.data.ubo2dob.validate) {
                    if (!ubo2dobRaw || !msu_utils.isValidDate(ubo2dobRaw)) {
                        msu_res.valSum.push(msu_res.langData.ubo2dob.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo2dobRaw) + ")/";
                    }
                }
                else {
                    if (ubo2dobRaw)
                        msu_res.postModel.RegistrationData.UBO2DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo2dobRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.UBO2DOB = null;
                }
            }

            // Check for UBO2Address2.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo2address2.id))) {
                var ubo2address2Raw = $("#" + msu_utils.inputId(msu_res.data.ubo2address2.id)).val();
                if (msu_res.data.ubo2address2.validate) {
                    if (!ubo2address2Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo2address2.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2Address2 = ubo2address2Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2Address2 = ubo2address2Raw;
                }
            }

             // Check for UBO2Address2.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2address2.id))) {
                var ubo2address2Raw = $("#" + msu_utils.inputId(msu_res.data.ubo2address2.id)).val();
                if (msu_res.data.ubo2address2.validate) {
                    if (!ubo2address2Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo2address2.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2Address2 = ubo2address2Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2Address2 = ubo2address2Raw;
                }
            }

             // Check for UBO2Zip.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2zip.id))) {
                var ubo2zipRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2zip.id)).val();
                if (msu_res.data.ubo2zip.validate) {
                    if (!ubo2zipRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2zip.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2Zip = ubo2zipRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2Zip = ubo2zipRaw;
                }
            }

            // Check for UBO2City.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo2city.id))) {
                var ubo2cityRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2city.id)).val();
                if (msu_res.data.ubo2city.validate) {
                    if (!ubo2cityRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2city.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2City = ubo2cityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2City = ubo2cityRaw;
                }
            }

             // Check for UBO2Country.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2country.id))) {
                var ubo2countryRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2country.id)).val();
                if (msu_res.data.ubo2country.validate) {
                    if (!ubo2countryRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2country.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2Country = ubo2countryRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2Country = ubo2countryRaw;
                }
            }

             // Check for UBO2Phone.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2phone.id))) {
                var ubo2phoneRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2phone.id)).val();
                if (msu_res.data.ubo2phone.validate) {
                    if (!ubo2phoneRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2phone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2Phone = ubo2phoneRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2Phone = ubo2phoneRaw;
                }
            }

             // Check for UBO2PassportID.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2passportid.id))) {
                var ubo2passportidRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2passportid.id)).val();
                if (msu_res.data.ubo2passportid.validate) {
                    if (!ubo2passportidRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2passportid.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2PassportID = ubo2passportidRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2PassportID = ubo2passportidRaw;
                }
            }

             // Check for UBO2SSN.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo2ssn.id))) {
                var ubo2ssnRaw = $("#" + msu_utils.inputId(msu_res.data.ubo2ssn.id)).val();
                if (msu_res.data.ubo2ssn.validate) {
                    if (!ubo2ssnRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo2ssn.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO2SSN = ubo2ssnRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO2SSN = ubo2ssnRaw;
                }
            }

            // Check for UBO3FirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo3firstname.id))) {
                var ubo3firstnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3firstname.id)).val();
                if (msu_res.data.ubo3firstname.validate) {
                    if (!ubo3firstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3firstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3FirstName = ubo3firstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3FirstName = ubo3firstnameRaw;
                }
            }
            
            // Check for UBO3LastName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo3lastname.id))) {
                var ubo3lastnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3lastname.id)).val();
                if (msu_res.data.ubo3lastname.validate) {
                    if (!ubo3lastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3lastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3LastName = ubo3lastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3LastName = ubo3lastnameRaw;
                }
            }

            // Check for UBO3DOB.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo3dob.id))) {
                var ubo3dobRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3dob.id)).val();
                if (msu_res.data.ubo3dob.validate) {
                    if (!ubo3dobRaw || !msu_utils.isValidDate(ubo3dobRaw)) {
                        msu_res.valSum.push(msu_res.langData.ubo3dob.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo3dobRaw) + ")/";
                    }
                }
                else {
                    if (ubo3dobRaw)
                        msu_res.postModel.RegistrationData.UBO3DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo3dobRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.UBO3DOB = null;
                }
            }

            // Check for UBO3Address3.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo3address3.id))) {
                var ubo3address3Raw = $("#" + msu_utils.inputId(msu_res.data.ubo3address3.id)).val();
                if (msu_res.data.ubo3address3.validate) {
                    if (!ubo3address3Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo3address3.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3Address3 = ubo3address3Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3Address3 = ubo3address3Raw;
                }
            }

             // Check for UBO3Address2.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3address2.id))) {
                var ubo3address2Raw = $("#" + msu_utils.inputId(msu_res.data.ubo3address2.id)).val();
                if (msu_res.data.ubo3address2.validate) {
                    if (!ubo3address2Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo3address2.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3Address2 = ubo3address2Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3Address2 = ubo3address2Raw;
                }
            }

             // Check for UBO3Zip.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3zip.id))) {
                var ubo3zipRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3zip.id)).val();
                if (msu_res.data.ubo3zip.validate) {
                    if (!ubo3zipRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3zip.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3Zip = ubo3zipRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3Zip = ubo3zipRaw;
                }
            }

            // Check for UBO3City.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo3city.id))) {
                var ubo3cityRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3city.id)).val();
                if (msu_res.data.ubo3city.validate) {
                    if (!ubo3cityRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3city.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3City = ubo3cityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3City = ubo3cityRaw;
                }
            }

             // Check for UBO3Country.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3country.id))) {
                var ubo3countryRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3country.id)).val();
                if (msu_res.data.ubo3country.validate) {
                    if (!ubo3countryRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3country.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3Country = ubo3countryRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3Country = ubo3countryRaw;
                }
            }

             // Check for UBO3Phone.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3phone.id))) {
                var ubo3phoneRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3phone.id)).val();
                if (msu_res.data.ubo3phone.validate) {
                    if (!ubo3phoneRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3phone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3Phone = ubo3phoneRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3Phone = ubo3phoneRaw;
                }
            }

             // Check for UBO3PassportID.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3passportid.id))) {
                var ubo3passportidRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3passportid.id)).val();
                if (msu_res.data.ubo3passportid.validate) {
                    if (!ubo3passportidRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3passportid.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3PassportID = ubo3passportidRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3PassportID = ubo3passportidRaw;
                }
            }

             // Check for UBO3SSN.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo3ssn.id))) {
                var ubo3ssnRaw = $("#" + msu_utils.inputId(msu_res.data.ubo3ssn.id)).val();
                if (msu_res.data.ubo3ssn.validate) {
                    if (!ubo3ssnRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo3ssn.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO3SSN = ubo3ssnRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO3SSN = ubo3ssnRaw;
                }
            }

            // Check for UBO4FirstName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo4firstname.id))) {
                var ubo4firstnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4firstname.id)).val();
                if (msu_res.data.ubo4firstname.validate) {
                    if (!ubo4firstnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4firstname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4FirstName = ubo4firstnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4FirstName = ubo4firstnameRaw;
                }
            }
            
            // Check for UBO4LastName.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo4lastname.id))) {
                var ubo4lastnameRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4lastname.id)).val();
                if (msu_res.data.ubo4lastname.validate) {
                    if (!ubo4lastnameRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4lastname.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4LastName = ubo4lastnameRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4LastName = ubo4lastnameRaw;
                }
            }

            // Check for UBO4DOB.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo4dob.id))) {
                var ubo4dobRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4dob.id)).val();
                if (msu_res.data.ubo4dob.validate) {
                    if (!ubo4dobRaw || !msu_utils.isValidDate(ubo4dobRaw)) {
                        msu_res.valSum.push(msu_res.langData.ubo4dob.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo4dobRaw) + ")/";
                    }
                }
                else {
                    if (ubo4dobRaw)
                        msu_res.postModel.RegistrationData.UBO4DOB = "/Date(" + msu_utils.getDotNetDateTime(ubo4dobRaw) + ")/";
                    else
                        msu_res.postModel.RegistrationData.UBO4DOB = null;
                }
            }

            // Check for UBO4Address4.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo4address4.id))) {
                var ubo4address4Raw = $("#" + msu_utils.inputId(msu_res.data.ubo4address4.id)).val();
                if (msu_res.data.ubo4address4.validate) {
                    if (!ubo4address4Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo4address4.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4Address4 = ubo4address4Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4Address4 = ubo4address4Raw;
                }
            }

             // Check for UBO4Address2.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4address2.id))) {
                var ubo4address2Raw = $("#" + msu_utils.inputId(msu_res.data.ubo4address2.id)).val();
                if (msu_res.data.ubo4address2.validate) {
                    if (!ubo4address2Raw) {
                        msu_res.valSum.push(msu_res.langData.ubo4address2.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4Address2 = ubo4address2Raw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4Address2 = ubo4address2Raw;
                }
            }

             // Check for UBO4Zip.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4zip.id))) {
                var ubo4zipRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4zip.id)).val();
                if (msu_res.data.ubo4zip.validate) {
                    if (!ubo4zipRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4zip.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4Zip = ubo4zipRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4Zip = ubo4zipRaw;
                }
            }

            // Check for UBO4City.
            if ($("#" + msu_utils.inputId(msu_res.data.ubo4city.id))) {
                var ubo4cityRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4city.id)).val();
                if (msu_res.data.ubo4city.validate) {
                    if (!ubo4cityRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4city.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4City = ubo4cityRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4City = ubo4cityRaw;
                }
            }

             // Check for UBO4Country.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4country.id))) {
                var ubo4countryRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4country.id)).val();
                if (msu_res.data.ubo4country.validate) {
                    if (!ubo4countryRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4country.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4Country = ubo4countryRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4Country = ubo4countryRaw;
                }
            }

             // Check for UBO4Phone.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4phone.id))) {
                var ubo4phoneRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4phone.id)).val();
                if (msu_res.data.ubo4phone.validate) {
                    if (!ubo4phoneRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4phone.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4Phone = ubo4phoneRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4Phone = ubo4phoneRaw;
                }
            }

             // Check for UBO4PassportID.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4passportid.id))) {
                var ubo4passportidRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4passportid.id)).val();
                if (msu_res.data.ubo4passportid.validate) {
                    if (!ubo4passportidRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4passportid.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4PassportID = ubo4passportidRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4PassportID = ubo4passportidRaw;
                }
            }

             // Check for UBO4SSN.
             if ($("#" + msu_utils.inputId(msu_res.data.ubo4ssn.id))) {
                var ubo4ssnRaw = $("#" + msu_utils.inputId(msu_res.data.ubo4ssn.id)).val();
                if (msu_res.data.ubo4ssn.validate) {
                    if (!ubo4ssnRaw) {
                        msu_res.valSum.push(msu_res.langData.ubo4ssn.val);
                        msu_res.conf.isValFail = true;
                    }
                    else {
                        msu_res.postModel.RegistrationData.UBO4SSN = ubo4ssnRaw;
                    }
                }
                else {
                    msu_res.postModel.RegistrationData.UBO4SSN = ubo4ssnRaw;
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
            Source: "",
            AccountType: "",
            ParentCompany: "",
            AccountManager: "",
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
            PercentDeliveryOver30: 0, // (int)
            UBO1FirstName: "",
            UBO1LastName: "",
            UBO1DOB: new Date(),
            UBO1Address1: "",
            UBO1Address2: "",
            UBO1Zip: "",
            UBO1City: "",
            UBO1Country: "",
            UBO1Phone: "",
            UBO1PassportID: "",
            UBO1SSN: "",
            UBO2FirstName: "",
            UBO2LastName: "",
            UBO2DOB: new Date(),
            UBO2Address1: "",
            UBO2Address2: "",
            UBO2Zip: "",
            UBO2City: "",
            UBO2Country: "",
            UBO2Phone: "",
            UBO2PassportID: "",
            UBO2SSN: "",
            UBO3FirstName: "",
            UBO3LastName: "",
            UBO3DOB: new Date(),
            UBO3Address1: "",
            UBO3Address2: "",
            UBO3Zip: "",
            UBO3City: "",
            UBO3Country: "",
            UBO3Phone: "",
            UBO3PassportID: "",
            UBO3SSN: "",
            UBO4FirstName: "",
            UBO4LastName: "",
            UBO4DOB: new Date(),
            UBO4Address1: "",
            UBO4Address2: "",
            UBO4Zip: "",
            UBO4City: "",
            UBO4Country: "",
            UBO4Phone: "",
            UBO4PassportID: "",
            UBO4SSN: "",
            M1NumberOfTransactions: 0,
            M1TransactionVolume: 0,
            M1NumberOfChargeBack: 0,
            M1ChargebackVolume: 0,
            M1NumberOfRefunds: 0,
            M1RefundVolume: 0,
            M2NumberOfTransactions: 0,
            M2TransactionVolume: 0,
            M2NumberOfChargeBack: 0,
            M2ChargebackVolume: 0,
            M2NumberOfRefunds: 0,
            M2RefundVolume: 0,
            M3NumberOfTransactions: 0,
            M3TransactionVolume: 0,
            M3NumberOfChargeBack: 0,
            M3ChargebackVolume: 0,
            M3NumberOfRefunds: 0,
            M3RefundVolume: 0,
            M4NumberOfTransactions: 0,
            M4TransactionVolume: 0,
            M4NumberOfChargeBack: 0,
            M4ChargebackVolume: 0,
            M4NumberOfRefunds: 0,
            M4RefundVolume: 0,
            M5NumberOfTransactions: 0,
            M5TransactionVolume: 0,
            M5NumberOfChargeBack: 0,
            M5ChargebackVolume: 0,
            M5NumberOfRefunds: 0,
            M5RefundVolume: 0,
            M6NumberOfTransactions: 0,
            M6TransactionVolume: 0,
            M6NumberOfChargeBack: 0,
            M6ChargebackVolume: 0,
            M6NumberOfRefunds: 0,
            M6RefundVolume: 0,
            CurrentPreviousProvider: "",
            CurrentPreviousAcquirer: "",
            ReasonsForLeavingAcquirer: "",
            OOTDomestic: 0,
            OOTEurope: 0,
            OOTUSA: 0,
            OOTAsia: 0,
            OOTROW: 0,
            TechFirstName: "",
            TechLastName: "",
            TechEmail: "",
            TechPhone: 0,
            FinanceFirstName: "",
            FinanceLastName: "",
            FinanceEmail: "",
            FinancePhone: 0,
            RiskFirstName: "",
            RiskLastName: "",
            RiskEmail: "",
            RiskPhone: 0,
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
            postModel.RegistrationData.Source = "";
            postModel.RegistrationData.AccountType = -1;
            postModel.RegistrationData.ParentCompany = -1; 
            postModel.RegistrationData.AccountManager = ""; 
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
            postModel.RegistrationData.UBO1FirstName = "";
            postModel.RegistrationData.UBO1LastName = "";
            postModel.RegistrationData.UBO1DOB = new Date();
            postModel.RegistrationData.UBO1Address1 = "";
            postModel.RegistrationData.UBO1Address2 = "";
            postModel.RegistrationData.UBO1Zip = "";
            postModel.RegistrationData.UBO1City = "";
            postModel.RegistrationData.UBO1Country = "";
            postModel.RegistrationData.UBO1Phone = "";
            postModel.RegistrationData.UBO1PassportID = "";
            postModel.RegistrationData.UBO1SSN = "";
            postModel.RegistrationData.UBO2FirstName = "";
            postModel.RegistrationData.UBO2LastName = "";
            postModel.RegistrationData.UBO2DOB = new Date();
            postModel.RegistrationData.UBO2Address1 = "";
            postModel.RegistrationData.UBO2Address2 = "";
            postModel.RegistrationData.UBO2Zip = "";
            postModel.RegistrationData.UBO2City = "";
            postModel.RegistrationData.UBO2Country = "";
            postModel.RegistrationData.UBO2Phone = "";
            postModel.RegistrationData.UBO2PassportID = "";
            postModel.RegistrationData.UBO2SSN = "";
            postModel.RegistrationData.UBO3FirstName = "";
            postModel.RegistrationData.UBO3LastName = "";
            postModel.RegistrationData.UBO3DOB = new Date();
            postModel.RegistrationData.UBO3Address1 = "";
            postModel.RegistrationData.UBO3Address2 = "";
            postModel.RegistrationData.UBO3Zip = "";
            postModel.RegistrationData.UBO3City = "";
            postModel.RegistrationData.UBO3Country = "";
            postModel.RegistrationData.UBO3Phone = "";
            postModel.RegistrationData.UBO3PassportID = "";
            postModel.RegistrationData.UBO3SSN = "";
            postModel.RegistrationData.UBO4FirstName = "";
            postModel.RegistrationData.UBO4LastName = "";
            postModel.RegistrationData.UBO4DOB = new Date();
            postModel.RegistrationData.UBO4Address1 = "";
            postModel.RegistrationData.UBO4Address2 = "";
            postModel.RegistrationData.UBO4Zip = "";
            postModel.RegistrationData.UBO4City = "";
            postModel.RegistrationData.UBO4Country = "";
            postModel.RegistrationData.UBO4Phone = "";
            postModel.RegistrationData.UBO4PassportID = "";
            postModel.RegistrationData.UBO4SSN = "";
            postModel.RegistrationData.M1NumberOfTransactions = 0;
            postModel.RegistrationData.M1TransactionVolume = 0;
            postModel.RegistrationData.M1NumberOfChargeBack = 0;
            postModel.RegistrationData.M1ChargebackVolume = 0;
            postModel.RegistrationData.M1NumberOfRefunds = 0;
            postModel.RegistrationData.M1RefundVolume = 0;
            postModel.RegistrationData.M2NumberOfTransactions = 0;
            postModel.RegistrationData.M2TransactionVolume = 0;
            postModel.RegistrationData.M2NumberOfChargeBack = 0;
            postModel.RegistrationData.M2ChargebackVolume = 0;
            postModel.RegistrationData.M2NumberOfRefunds = 0;
            postModel.RegistrationData.M2RefundVolume = 0;
            postModel.RegistrationData.M3NumberOfTransactions = 0;
            postModel.RegistrationData.M3TransactionVolume = 0;
            postModel.RegistrationData.M3NumberOfChargeBack = 0;
            postModel.RegistrationData.M3ChargebackVolume = 0;
            postModel.RegistrationData.M3NumberOfRefunds = 0;
            postModel.RegistrationData.M3RefundVolume = 0;
            postModel.RegistrationData.M4NumberOfTransactions = 0;
            postModel.RegistrationData.M4TransactionVolume = 0;
            postModel.RegistrationData.M4NumberOfChargeBack = 0;
            postModel.RegistrationData.M4ChargebackVolume = 0;
            postModel.RegistrationData.M4NumberOfRefunds = 0;
            postModel.RegistrationData.M4RefundVolume = 0;
            postModel.RegistrationData.M5NumberOfTransactions = 0;
            postModel.RegistrationData.M5TransactionVolume = 0;
            postModel.RegistrationData.M5NumberOfChargeBack = 0;
            postModel.RegistrationData.M5ChargebackVolume = 0;
            postModel.RegistrationData.M5NumberOfRefunds = 0;
            postModel.RegistrationData.M5RefundVolume = 0;
            postModel.RegistrationData.M6NumberOfTransactions = 0;
            postModel.RegistrationData.M6TransactionVolume = 0;
            postModel.RegistrationData.M6NumberOfChargeBack = 0;
            postModel.RegistrationData.M6ChargebackVolume = 0;
            postModel.RegistrationData.M6NumberOfRefunds = 0;
            postModel.RegistrationData.M6RefundVolume = 0;
            postModel.RegistrationData.CurrentPreviousProvider = "";
            postModel.RegistrationData.CurrentPreviousAcquirer = "";
            postModel.RegistrationData.ReasonsForLeavingAcquirer = "";
            postModel.RegistrationData.OOTDomestic = 0;
            postModel.RegistrationData.OOTEurope = 0;
            postModel.RegistrationData.OOTUSA = 0;
            postModel.RegistrationData.OOTAsia = 0;
            postModel.RegistrationData.OOTROW = 0;
            postModel.RegistrationData.TechFirstName = "";
            postModel.RegistrationData.TechLastName = "";
            postModel.RegistrationData.TechEmail = "";
            postModel.RegistrationData.TechPhone = 0;
            postModel.RegistrationData.FinanceFirstName = "";
            postModel.RegistrationData.FinanceLastName = "";
            postModel.RegistrationData.FinanceEmail = "";
            postModel.RegistrationData.FinancePhone = 0;
            postModel.RegistrationData.RiskFirstName = "";
            postModel.RegistrationData.RiskLastName = "";
            postModel.RegistrationData.RiskEmail = "";
            postModel.RegistrationData.RiskPhone = 0;
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