const formId = "1FAIpQLSfc-uVQjXvO-sxLKCPBcZWLbUej5OoJaU2J8-uqE2zUDfWdEw";
const entry1 = "entry.914000916"; //name
const entry2 = "entry.1316269509"; //email
const entry3 = "entry.1657666492"; //subject
const entry4 = "entry.2063421954"; //message

const getPath = (formId) =>
    `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDb = function (data) {
    const path = getPath(formId);
    const url = getUrl(path, data);
    sendRequest("POST", url).then(responseEvent);
};

const getUrl = function (path, params) {
    const url = new URL(path);
    for (let key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url;
};

const initRequest = function (verb, url) {
    const init = new Object();
    init.method = verb;
    init.mode = "no-cors";
    return new Request(url, init);
};

const sendRequest = async function (verb, url) {
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
};

const responseEvent = (response) => alert("Success!");