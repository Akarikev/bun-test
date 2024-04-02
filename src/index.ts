import fetchUser from "./github";
(async () => {
  try {
    const userData = await fetchUser("Akarikev");
    const preTag = document.querySelector("pre");

    //check if  theres a pre element
    if (preTag) {
      preTag.innerHTML = JSON.stringify(userData, null, 2);
    } else {
      console.error("pre element not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
})();
