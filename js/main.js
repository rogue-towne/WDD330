const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
      label: "Week 2",
      url: "week2/index.html"
    }
  ]

  const weekList = document.querySelector(".week-list")
  links.forEach((item) => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.setAttribute('href', item.url) 
    a.innerHTML = item.label
    li.appendChild(a)
    weekList.appendChild(li)
})