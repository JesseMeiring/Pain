function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
	
	/*console.log(process.env.API_KEY);
	
	const res = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=I%20cant%20stand%20this.`);
	try {
		const data = await res.json();
		console.log(data);
	} catch(err) {
		console.error("error: ",err);
	}
	
	fetch('https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=I%20cant%20stand%20this.', {
		method: 'POST'
	})
	.then(res => res.json())
	.then(function(res)	{
		console.log(res);
	})*/
	
	/* var options = {
		'method': 'POST',
		'hostname': 'api.meaningcloud.com',
		'path': '/sentiment-2.1?key=${apiKey}&lang=en&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.',
		'headers': {
		},
		'maxRedirects': 20
	};

	var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();*/
}

export { handleSubmit }
