function formValidation()
{
  var uemail = document.registration.email;
  var passid = document.registration.passid;
    if(ValidateEmail(uemail))
    {
      if(passid_validation(passid,7,20))
      {
      }
    }
  return false;
}


function ValidateEmail(uemail)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function passid_validation(passid,mx,my)
{
  var passid_len = passid.value.length;
  if (passid_len == 0 ||passid_len >= my || passid_len < mx)
  {
    alert("Password length should be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}

function handleRequest(req, res) {

    // Check for authentication
    var auth = req.headers.authorization;
    if(auth) {
        var b = new Buffer(auth.split(' ')[1], 'base64'),
            s = b.toString(),
            credentials = s.split(':'),
            username = credentials[0],
            password = credentials[1];

        // TODO: check username/password pair, and if valid allow access to resource
        console.log(username, password)
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end("Welcome " + username + "!");
        return;
    }

    // If no authentication was provided, serve a 401 error and request Basic Authentication
    res.writeHead(401, {'WWW-Authenticate': 'Basic'});
    res.end()
}
new require(‘http’).Server(handleRequest).listen(3000);
