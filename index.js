var proxy = require('express-http-proxy')
var app = require('express')()
var jq = require('node-jq')
console.log('hello')
app.use('/', proxy(process.env.TARGET, {
	userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
		return new Promise(function(resolve, reject) {
			console.log(proxyResData.toString('utf-8'))
			jq.run(process.env.EXPRESSION, proxyResData.toString('utf-8'), { input: 'string' }).then(function(response) {
				resolve(response)
			})
		})
	} 
}))

app.listen(3000, function() {
	console.log('Listening on 3000')
})


