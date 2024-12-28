function validEmail(str) {
  //your JS code here.
  if(str.includes('@')) return false;

	const arr = str.split('@');
	arr.forEach((curr) => {
		if(curr.includes('@')) return false;
	})

	const localPart = arr[0];
	const domainPart = arr[1];

	//checking localpart
	if(!localPart || localPart.includes('.') ) return false;

	//checking domain
	const domainArr = domainPart.spit('.');

	 
  if (domainParts.length < 2) return false;
	
	for(let part of domainArr){
		if(!part) return false;
	}


	const tld = domainArr[domainArr.length - 1];
	if(tld.length < 2 || tld > 3) return false

	
	return true;
}

// Do not change the code below.
const str = prompts("Enter an email address.");
alert(validEmail(str));
