const initControllers = function () {
    const submitButton = document.getElementById("input-submit");
    submitButton.addEventListener("click", submitEvent);
};

const submitEvent = function () {
    const formData = new Object();
    formData[entry1] = document.getElementById("input-name").value;
    formData[entry2] = document.getElementById("input-email").value;
    formData[entry3] = document.getElementById("input-subject").value;
    formData[entry4] = document.getElementById("input-message").value;
    postToGoogleDb(formData);
};

initControllers();