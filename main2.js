
let cartItemsArray = [
  {
    id: 2,
    name: "ulugbek",
    email:`ulugbek@gmail.com`,
    mobile:32323232,
    depertment:`noneda`
  },
];



let fullname = document.querySelector("#fullname")
let email = document.querySelector("#email")
let telnum = document.querySelector("#telnum")

let submitbtn = document.querySelector("#submitbtn")
let windowfulname = document.querySelector("#windowfulname")
let windowemailad = document.querySelector("#windowemailad")
let windowdepartm = document.querySelector("#windowdepartm")
let optoon = document.querySelectorAll(".optoon")
let list = document.querySelector("#list")
let select = document.querySelector("#select")

let modaladdForm = document.querySelector("#modaladdForm")

let details = document.querySelector("#details")
let btndetails = document.querySelectorAll(".btndetails")
let detailssummari = document.querySelector("#detailssummari")
let editCreate = document.querySelector("#editCreate")

let a = ""
btndetails.forEach(item => {
  item.addEventListener("click",(w) => {
    a = w.target.textContent
    details.removeAttribute("open");
  })
})

submitbtn.addEventListener("click", (e) => {
  e.preventDefault()
  let li = document.createElement("li")
  li.className = "item-list"
  li.innerHTML = `<p class="item__texts itemname" id="windowfulname">${fullname.value}</p>
  <p class="item__texts" id="windowemailad">${email.value}</p>
  <p class="item__texts" id="windowNumber">${telnum.value}</p>
  <p class="item__texts" id="windowdepartm">${a}</p>
  <div>
    <button id="editel" class="button1" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class='bx bx-edit-alt'></i></button>
    <button id="deleteel" class="button2 deleteel"><i class='bx bx-x'></i></button>
  </div>`
  list.appendChild(li)
  
//=========================== SEARCH PART =============================

    let searchinput = document.querySelector("#searching")
    let items = document.querySelectorAll(".item-list")
    
    searchinput.addEventListener("keyup", (e) => {
      e.preventDefault()
      let textlarim  = e.target.value.toLowerCase()
    
      Array.from(items).forEach((item) => {
       let aniqla =  item.firstElementChild.textContent
       if (aniqla.toLowerCase().indexOf(textlarim) == -1) {
        item.style.display = "none"
       }
       else {
        item.style.display = "flex"
       }
      })
    })
// ==================================================== END OF SEARCH PART =============================================


  let elDelete= document.querySelectorAll(".deleteel")
  elDelete.forEach(el => {
    el.addEventListener("click",(r) => {
      list.removeChild(r.target.parentElement.parentElement.parentElement)
    })
  })




// edit part
let editbtnn = document.querySelectorAll(".button1div")
editbtnn.forEach(el => {
  el.addEventListener("click", (ed) => {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Employee Form</h5>
          <button type="button" class="btn-close closebtn2" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="modall" id="modaladdForm1">
            <div class="modal-inputs">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="fullname1" placeholder="Full Name">
                <label for="floatingPassword">Full Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email1" placeholder="Email">
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="telnum1" placeholder="Mobile">
                <label for="floatingInput">Mobile</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput1" placeholder="City">
                <label for="floatingInput">City</label>
              </div>
            </div>

            <div class="modal-infos">
              <span>Gender</span>
              <div class="d-flex mt-1">
                <div class="form-check me-4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                   Male
                  </label>
                </div>
                <div class="form-check me-4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                  <label class="form-check-label" for="flexRadioDefault2">
                   Female
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault3">
                    Other
                  </label>
                </div>
              </div>

              <details class="details" id="details2">
                <summary class="summary" id="detailssummari">Details</summary>
                 <div class="details-select">
                  <p class="btndetails">None</p>
                  <p class="btndetails">Development</p>
                  <p class="btndetails">Marketing</p>
                  <p class="btndetails">Accaurding</p>
                  <p class="btndetails">HR</p>
                 </div>
              </details>

              <div class="form-check form-check2 mb-3">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Permanent Employee
                </label>
              </div>
              <button class="submitbtn submitbtn1" type="submit" id="submitbtn1" data-bs-dismiss="modal" aria-label="Close">submit</button>
            </div>
          </form>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
    `
    let submitbtn1 = document.querySelectorAll(".submitbtn1")
    submitbtn1.forEach(item => {
      console.log(item);
      item.addEventListener("click",(c) => {
        c.preventDefault()
        p1.textContent = fullname1.value
        p2.textContent = email1.value
        p3.textContent = telnum1.value
      })
    })

    editCreate.appendChild(div)
    let fullname1 = document.querySelector("#fullname1")
    let email1 = document.querySelector("#email1")
    let telnum1 = document.querySelector("#telnum1")
    fullname1.value = fullname.value
    email1.value = email.value
    telnum1.value = telnum.value
    console.log(`${a}`);
  })
})
})  


//========================== ADD INPUT POSITIONS ==========================

email.addEventListener("keyup",(e) => {
  e.preventDefault()
  console.log("hi");
  email.classList.add("borderred")

  if (email.value.match(/[@]/) != null) {
    email.classList.remove("borderred")
  }
  // if (telnum.value.length)
  
})
telnum.addEventListener("keyup",(e) => {
  e.preventDefault()
  telnum.classList.add("borderred")
  if (telnum.value.length > 8) {
    telnum.classList.remove("borderred")
  }
})
fullname.addEventListener("keyup",(e) => {
  e.preventDefault()
  if (fullname.value == "") {
    fullname.classList.add("borderred")
  }
  else if (fullname.value != "") {
    fullname.classList.remove("borderred")
  }
})




















