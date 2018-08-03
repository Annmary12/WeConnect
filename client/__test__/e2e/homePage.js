module.exports = {
  'Home Page': (browser) => {
    browser
      .url('http://localhost:8200')
      .waitForElementVisible('body', 5000)
      .assert.visible('h1')
      .assert.containsText('h1', 'We-Connect')
      .pause(2000);
    browser.end();
  }
};
