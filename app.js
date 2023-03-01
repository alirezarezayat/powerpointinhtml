const CLIENT_ID = "Glj8Q~ITjVMAovZph6DckyMcDBg-Ctoc2-HBPbrx";
const CLIENT_SECRET = "ce01c927-4d7f-44a4-a7a0-65de7579e067";

var viewer = new window.Office.WebViewer({
  appContext: {
    clientId: CLIENT_ID,
    redirectUrl: "https://alirezarezayat.github.io/powerpointinhtml",
    authChallenge: function (authInfo, cb) {
      cb(null, "Bearer " + CLIENT_SECRET);
    },
  },
  container: document.getElementById("powerpoint-container"),
  presentation: {
    url: "./test.pptx",
  },
});
