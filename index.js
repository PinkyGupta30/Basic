// Write your code below:
const list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++)
{
    console.log(list);
    console.log(list.length);
    list[i].style.backgroundColor = "green";
}