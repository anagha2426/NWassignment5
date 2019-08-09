var registercommands = {

 validateForm: function(){
     return this.waitForElementVisible('body',1000)
     .verify.visible('@username')
     .verify.visible('@password')
     .verify.visible('@email')
     
     //.verify.elementNotPresent('@error')
 },

fillRegisterForm:function(user,pass,emailid){

    return this.waitForElementVisible('body',1000)
    .setValue('@username',user)
    .setValue('@password',pass)
    .setValue('@email',emailid)
    .click('@submit')
    .pause(2000)
   // .getTitle('title')
    .assert.title('Register Success')
    
},

verifyunsuccesfulregister:function(user,pass,emailid){
    return this.waitForElementVisible('body',1000)
    .setValue('@username',user)
    .setValue('@password',pass)
    .setValue('@email',emailid)
    .click('@submit')
    .pause(2000)
    .assert.containsText('@error','User name or password is Invalid')
},

verifyTheheading:function(){
    return this.waitForElementVisible('body',1000)
    .assert.containsText('@h3','Input user data to register.')
}






};


module.exports={
    
    url: function(){

        return this.api.launchUrl;
    },

    

    
        
sections:{
    
        registerinput:{
            commands :[registercommands],
selector: '#registerfrm',

        elements:{


            username:{
                selector: 'input[name=user_name]'
            },


            password:{
                selector: 'input[name=password]'
            },

            email:{
                selector: 'input[name=email]'
            },

            submit:{
                selector: 'input[type=submit]'
            },

            h3:{
                selector:'h3'
            },

            error:{
                selector: '#error'
            }

        }
    }
    }
        }
    
    

        

    






