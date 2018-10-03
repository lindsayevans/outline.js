export default {
    'Local server': browser => {
        browser
            .url('http://localhost:8080/')
            .waitForElementVisible('body', 1000)
            .assert.title('outline.js')
            .end()
    }
}
