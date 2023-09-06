// 1. Select all elements
const form = document.querySelector("#proverb-form")
const list = document.querySelector("#newest-proverb")
const input = document.querySelector("#proverb-input")

// 2. When I submit the form add a new element
form.addEventListener("submit", (event) => {
  //2.1 Prevent the default behaviour of a form
  event.preventDefault()

  // 1. Create a new item
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("newest-proverb")

  // 2. Add that item to the list
  list.appendChild(item)

  // 3. Clear input
  input.value = ""

  // 4. Setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    item.remove()
  })
})
