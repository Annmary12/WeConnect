const user = {
  firstname: 'Annmary',
  lastname: 'Agunanna',
  email: 'ihuomaamaka@yahoo.com',
  incorrectEmail: 'ihuomaamaka@yahoo',
  wrongEmail: 'annmary@gmail.com',
  password: 'secret123',
  confirmPassword: 'secret123',
  editFirstName: 'Amaka',
  editLastName: 'Agu'
};

const business = {
  name: 'We_next',
  description: ' wenext is a telecommunication company that deals with nokia phones',
  address: ' no 21 haruna street, abuja',
  location: 'Abuja',
  category: 'IT',
  website: 'www.wenext.com',
  phoneNumber: '0908726461',
  name2: 'We_nexty',
  description2: ' wenexty is a business that deals with both Programminng and networking'
};

const review = {
  context: 'this business is a good one',
  rating: 3
};

module.exports = {
  'User should not Signup with incorrect email address': (browser) => {
    browser
      .url('http://localhost:8200/signUp')
      .waitForElementVisible('body', 5000)
      .setValue('input[name=firstname]', user.firstname)
      .setValue('input[name=lastname]', user.lastname)
      .setValue('input[name=email]', user.incorrectEmail)
      .setValue('input[name=password]', user.password)
      .setValue('input[name=confirmPassword]', user.confirmPassword)
      .waitForElementVisible('#signUp', 5000)
      .click('button#signUp')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Provide a valid a Email Address')
      .pause(2000);
  },
  'User should Signup': (browser) => {
    browser
      .url('http://localhost:8200/signUp')
      .waitForElementVisible('body', 5000)
      .setValue('input[name=firstname]', user.firstname)
      .setValue('input[name=lastname]', user.lastname)
      .setValue('input[name=email]', user.email)
      .setValue('input[name=password]', user.password)
      .setValue('input[name=confirmPassword]', user.confirmPassword)
      .waitForElementVisible('#signUp', 5000)
      .click('button#signUp')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully Signed In')
      .assert.urlEquals('http://localhost:8200/profile')
      .pause(2000);
  },
  'User can logout': (browser) => {
    browser
      .url('http://localhost:8200/profile')
      .waitForElementVisible('body', 5000)
      .click('button#logout')
      .assert.urlEquals('http://localhost:8200/')
      .pause(2000);
  },
  'User should not signin with incorrect email': (browser) => {
    browser
      .url('http://localhost:8200/login')
      .waitForElementVisible('body', 5000)
      .assert.visible('div')
      .setValue('input[name=email]', user.wrongEmail)
      .setValue('input[name=password]', user.password)
      .waitForElementVisible('#login', 5000)
      .click('button#login')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Incorrect Email Address')
      .pause(2000);
  },
  'User should signin with correct details': (browser) => {
    browser
      .url('http://localhost:8200/login')
      .waitForElementVisible('body', 5000)
      .assert.visible('div')
      .setValue('input[name=email]', user.email)
      .setValue('input[name=password]', user.password)
      .waitForElementVisible('#login', 5000)
      .click('button#login')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully Signed In')
      .pause(2000);
  },
  'Users should be able to update profile': (browser) => {
    browser
      .url('http://localhost:8200/updateProfile')
      .waitForElementVisible('body', 5000)
      .clearValue('input[name=firstname]')
      .pause(1000)
      .setValue('input[name=firstname]', user.editFirstName)
      .pause(1000)
      .clearValue('input[name=lastname]')
      .pause(1000)
      .setValue('input[name=lastname]', user.editFirstName)
      .pause(1000)
      .click('button#updateProfile')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully Updated')
      .assert.urlEquals('http://localhost:8200/profile')
      .pause(2000);
  },
  'Users should be able to create a business': (browser) => {
    browser
      .url('http://localhost:8200/createBusiness')
      .waitForElementVisible('body', 5000)
      .setValue('input[name=name]', business.name)
      .setValue('textarea[name=description]', business.description)
      .setValue('input[name=address]', business.address)
      .setValue('input[name=phoneNumber]', business.phoneNumber)
      .setValue('select[name=location]', business.location)
      .pause(3000)
      .setValue('select[name=category]', business.category)
      .pause(3000)
      .setValue('input[name=website]', business.website)
      .waitForElementVisible('#createBusiness', 5000)
      .click('button#createBusiness')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully Created a business')
      .assert.urlEquals('http://localhost:8200/profile')
      .pause(2000);
  },
  'Users should be able to update a business': (browser) => {
    browser
      .url('http://localhost:8200/editBusiness/1')
      .waitForElementVisible('body', 5000)
      .clearValue('input[name=name]')
      .pause(2000)
      .setValue('input[name=name]', business.name2)
      .pause(2000)
      .clearValue('textarea[name=description]')
      .pause(2000)
      .setValue('textarea[name=description]', business.description2)
      .pause(2000)
      .setValue('input[name=address]', business.address)
      .setValue('input[name=phoneNumber]', business.phoneNumber)
      .setValue('select[name=location]', business.location)
      .pause(3000)
      .setValue('select[name=category]', business.category)
      .pause(3000)
      .setValue('input[name=website]', business.website)
      .waitForElementVisible('#updateBusiness', 5000)
      .click('button#updateBusiness')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully Updated')
      .assert.urlEquals('http://localhost:8200/profile')
      .pause(6000);
  },
  'User can not review his/her own buiness': (browser) => {
    browser
      .url('http://localhost:8200/businessProfile/1')
      .waitForElementVisible('body', 5000)
      .setValue('textarea[name=context]', review.context)
      .waitForElementVisible('#submitReview', 5000)
      .click('button#submitReview')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'You can not review yourself')
      .assert.urlEquals('http://localhost:8200/businessProfile/1')
      .pause(6000);
  },

  'User can see business Page': (browser) => {
    browser
      .url('http://localhost:8200/business')
      .waitForElementVisible('body', 5000)
      .pause(5000);
  },

  'User can delete a business': (browser) => {
    browser
      .url('http://localhost:8200/businessProfile/1')
      .waitForElementVisible('body', 5000)
      .click('button#deleteBusiness')
      .waitForElementVisible('#toast-container', 5000)
      .assert.containsText('#toast-container', 'Successfully deleted')
      .assert.urlEquals('http://localhost:8200/business')
      .pause(5000)
      .end();
  }

};
