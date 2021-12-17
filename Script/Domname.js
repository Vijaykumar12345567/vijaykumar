var y = document.getElementsByClassName("greet");
function display2(classname,number)
{
	
for(let i=0;i<y.length;i++)
{
	
	for(let j=0;j<number;j++)
	{
			console.log(document.getElementsByClassName(classname)[i].innerHTML);
	}
}
}