var filename = url.split('/')[url.split('/').length - 1];
        var data = await fetch(url).then(res => res.blob());
        console.log(data)
        var upload = await fetch("https://api.product.ai/v1/queues/139331/upload", {
         body: JSON.stringify ((
           {
           "data": {
            "contract_id" : "39eegq4",
             "type" : "expense",
             "amount" : 50,
             "description" : "Bonus 1",
             "file" : data,
             
           }}
           )),
           headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFnZSI6ImRldiIsInRpbWVzdGFtcCI6MTY1MzU2NDgwNzM0NCwiYWRtaW4iOnRydWUsImRlZWwiOiJtYXJjaW8uY2FydmFsaG9AZGVlbC5jb20iLCJpZCI6NDU1NTM5LCJleHAiOjE2NTM2NTEyMDd9.QPQ5xh36VVeBNmXYjy4l_2yEynuRMFKpMHQAKsnjXK0',
            "Content-Disposition": "attachment; filename="+filename,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST"
        });
        console.log(upload)
