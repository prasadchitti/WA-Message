function openwa()
{
	var num = document.getElementById("num").value;
	if (isNaN(num) || num.length < 10)
	 {
        alert("Enter a VALID Phone number");
        }// submitOK = "false";
	else
	  {
	    location.href = "https://api.whatsapp.com/send?phone="+num;
	   }
};