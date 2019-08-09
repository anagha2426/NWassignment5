module.exports={


    'Register page verification': function(browser){

        var register = browser.page.PageObjectRegister();
        register.navigate()

        var sectionregister = register.section.registerinput;
        sectionregister.validateForm();
        sectionregister.end();
    },

    'Succesful Registertion': ''+function(browser){
        var register = browser.page.PageObjectRegister();
        register.navigate()
        var sectionregister = register.section.registerinput
        .fillRegisterForm('Anagha','anagha','anaghadeo26@gmail.com')
        .end();
    },
    'unsuccessful registeration' : ''+function(browser){
        var register = browser.page.PageObjectRegister();
        register.navigate()
        var sectionregister = register.section.registerinput()
        .verifyunsuccesfulregister('anagha','','')
        .end();
        
    },
    'verify the heading' : ''+function(browser){


        var register = browser.page.PageObjectRegister();
        register.navigate()
        var sectionregister = register.section.registerinput()
        .verifyTheheading()
        .end();
    },

    




}
