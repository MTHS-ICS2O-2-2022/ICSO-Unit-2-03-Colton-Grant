// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const streetname = document.getElementById("street-name").value
  const addressnumber = parseInt(document.getElementById("number-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "your address is: " + streetname + ", " + addressnumber+ "."
}